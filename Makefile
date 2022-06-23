generator=typescript-node
openapi-generator-cli=docker run --rm -v ${PWD}:/local -w /local openapitools/openapi-generator-cli:v5.4.0

clean:
	rm -rf build

# Extract templates (copy them for modifications)
.PHONY: templates
templates:
	$(openapi-generator-cli) author template -g ${generator} -o build/templates/typescript

build/spec:
	mkdir -p build/spec

# Fetch spec files (git clone/submodule?)
build/spec/CheckoutService-v69.json: build/spec
	wget https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CheckoutService-v69.json -O build/spec/CheckoutService-v69.json
	sed -i 's/"openapi" : "3.[0-9].[0-9]"/"openapi" : "3.0.0"/' build/spec/CheckoutService-v69.json

models: build/spec/CheckoutService-v69.json
	$(openapi-generator-cli) generate \
		-i build/spec/CheckoutService-v69.json \
		-g ${generator} \
		-t templates/typescript \
		-o build \
		--global-property models,supportingFiles