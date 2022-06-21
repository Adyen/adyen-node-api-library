generator=typescript-node

clean:
	rm -rf build/*

# Extract templates (copy them for modifications)
.PHONY: templates
templates:
	docker run --rm -v ${PWD}:/local -w /local openapitools/openapi-generator-cli author template -g ${generator} -o build/templates/typescript

build/spec:
	mkdir -p build/spec

# Fetch spec files (git clone/submodule?)
build/spec/CheckoutService-v69.json: build/spec
	wget https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CheckoutService-v69.json -O build/spec/CheckoutService-v69.json
	sed -i 's/"openapi" : "3.[0-9].[0-9]"/"openapi" : "3.0.0"/' build/spec/CheckoutService-v69.json

models: build/spec/CheckoutService-v69.json
	docker run --rm \
		-v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i /local/build/spec/CheckoutService-v69.json \
		-g ${generator} \
		-t /local/templates/typescript \
		-o /local/build
	
# Propose changes
pr:
	diff build/model src/typings/checkout