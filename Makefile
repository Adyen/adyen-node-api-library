generator:=typescript-node
openapi-generator-version:=5.4.0
openapi-generator-url:=https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/$(openapi-generator-version)/openapi-generator-cli-$(openapi-generator-version).jar
openapi-generator-jar:=build/openapi-generator-cli.jar
openapi-generator-cli:=java -jar $(openapi-generator-jar)

services:=acsWebhooks balanceControl balancePlatform binLookup checkout configurationWebhooks dataProtection disputes legalEntityManagement management managementWebhooks payment payout recurring reportWebhooks storedValue terminalManagement transfers transferWebhooks transactionWebhooks

# Generate models (for each service)
models: $(services)

balanceControl: spec=BalanceControlService-v1
balancePlatform: spec=BalancePlatformService-v2
binLookup: spec=BinLookupService-v54
checkout: spec=CheckoutService-v71
dataProtection: spec=DataProtectionService-v1
disputes: spec=DisputeService-v30
storedValue: spec=StoredValueService-v46
terminalManagement: spec=TfmAPIService-v1
payment: spec=PaymentService-v68
recurring: spec=RecurringService-v68
payout: spec=PayoutService-v68
management: spec=ManagementService-v3
legalEntityManagement: spec=LegalEntityService-v3
platformsAccount: spec=AccountService-v6
platformsFund: spec=FundService-v6
platformsNotificationConfiguration: spec=NotificationConfigurationService-v6
platformsHostedOnboardingPage: spec=HopService-v6
transfers: spec=TransferService-v4
# BalanceWebhooks
acsWebhooks: spec=BalancePlatformAcsNotification-v1
configurationWebhooks: spec=BalancePlatformConfigurationNotification-v1
reportWebhooks: spec=BalancePlatformReportNotification-v1
transferWebhooks: spec=BalancePlatformTransferNotification-v4
transactionWebhooks: spec=BalancePlatformTransactionNotification-v4
# ManagementWebhooks
managementWebhooks: spec=ManagementNotificationService-v3

$(services): build/spec $(openapi-generator-jar)  
	rm -rf src/typings/$@ build/model
	$(openapi-generator-cli) generate \
		-i build/spec/json/$(spec).json \
		-g $(generator) \
		-t templates/typescript \
		-o build \
		--skip-validate-spec \
		--global-property models,supportingFiles \
		--additional-properties=serviceName=$@ \
		--additional-properties=modelPropertyNaming=original
	mv build/model src/typings/$@

# Service + Models automation
services:=balancePlatform checkout management legalEntityManagement payout transfers
singleFileServices:=balanceControl dataProtection payment recurring binLookup storedValue terminalManagement disputes

services: $(services) $(singleFileServices)

$(services): build/spec $(openapi-generator-jar)
	rm -rf build/model src/typings/$@ src/services/$@
	$(openapi-generator-cli) generate \
		-i build/spec/json/$(spec).json \
		-g $(generator) \
		-t templates/typescript \
		-o build \
		-c templates/config.yaml \
		--skip-validate-spec \
		--api-package $@ \
		--api-name-suffix Service \
		--global-property models,apis,supportingFiles \
		--additional-properties=modelPropertyNaming=original \
		--additional-properties=serviceName=$@
	mkdir -p src/services/$@
	mv build/$@/*Api.ts src/services/$@
	mv build/index.ts src/services/$@
	mv -f build/model src/typings/$@
	npx eslint --fix ./src/services/$@/*.ts

$(singleFileServices): build/spec $(openapi-generator-jar)
	rm -rf src/typings/$@ build/model src/services/$@
	jq -e 'del(.paths[][].tags)' build/spec/json/$(spec).json > build/spec/json/$(spec).tmp
	mv build/spec/json/$(spec).tmp build/spec/json/$(spec).json 
	$(openapi-generator-cli) generate \
		-i build/spec/json/$(spec).json \
		-g $(generator) \
		-o build \
		-c templates/config.yaml \
		--skip-validate-spec \
		--api-package $@ \
		--api-name-suffix Service \
		--global-property models,apis,supportingFiles \
		--additional-properties=modelPropertyNaming=original \
		--additional-properties=serviceName=$@
	mv build/$@/*Root.ts src/services/$@Api.ts
	mv -f build/model src/typings/$@
	npx eslint --fix ./src/services/$@Api.ts

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
