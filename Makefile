generator:=typescript-node
openapi-generator-version:=5.4.0
openapi-generator-url:=https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/$(openapi-generator-version)/openapi-generator-cli-$(openapi-generator-version).jar
openapi-generator-jar:=build/openapi-generator-cli.jar
openapi-generator-cli:=java -jar $(openapi-generator-jar)
services:=binlookup checkout storedValue terminalManagement payments recurring payouts management legalEntityManagement balancePlatform platformsAccount platformsFund platformsNotificationConfiguration platformsHostedOnboardingPage transfer

# Generate models (for each service)
models: $(services)

binlookup: spec=BinLookupService-v52
checkout: spec=CheckoutService-v69
storedValue: spec=StoredValueService-v46
terminalManagement: spec=TfmAPIService-v1
payments: spec=PaymentService-v68
recurring: spec=RecurringService-v68
payouts: spec=PayoutService-v68
management: spec=ManagementService-v1
managementapi: spec=ManagementService-v1
managementapi: service=management
legalEntityManagement: spec=LegalEntityService-v2
balancePlatform: spec=BalancePlatformService-v2
platformsAccount: spec=AccountService-v6
platformsFund: spec=FundService-v6
platformsNotificationConfiguration: spec=NotificationConfigurationService-v6
platformsHostedOnboardingPage: spec=HopService-v6
transfer: spec=TransferService-v3

$(services): build/spec $(openapi-generator-jar)  
	rm -rf src/typings/$@ build/model
	$(openapi-generator-cli) generate \
		-i build/spec/json/$(spec).json \
		-g $(generator) \
		-t templates/typescript \
		-o build \
		--global-property models,supportingFiles
	mv build/model src/typings/$@

# Service
managementapi: build/spec $(openapi-generator-jar)  
	$(openapi-generator-cli) generate \
		-i build/spec/json/$(spec).json \
		-g $(generator) \
		-t templates/typescript \
		-o build \
		--api-package $(service) \
		--model-package typings/$(service) \
		--global-property apis \
		--additional-properties=serviceName=$(service)
	cp build/$(service)/* src/services/$(service)
	sed -i.bak '/RestServiceError/d' src/services/$(service)/*
	rm src/services/$(service)/*.bak

# Checkout spec (and patch version)
build/spec:
	git clone https://github.com/Adyen/adyen-openapi.git build/spec
	perl -i -pe's/"openapi" : "3.[0-9].[0-9]"/"openapi" : "3.0.0"/' build/spec/json/*.json

# Extract templates (copy them for modifications)
templates: $(openapi-generator-jar)
	$(openapi-generator-cli) author template -g $(generator) -o build/templates/typescript

# Download the generator
$(openapi-generator-jar):
	wget --quiet -o /dev/null $(openapi-generator-url) -O $(openapi-generator-jar)

# Discard generated artifacts and changed models
clean:
	git checkout src/typings src/services/management
	git clean -f -d src/typings src/services/management

.PHONY: templates models $(services)
