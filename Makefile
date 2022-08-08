.PHONY: dev build run

dev:
	(cd api; cargo run -p blog) & (cd svelte; yarn dev)

build:
	mkdir dist
	(cd api; cargo build -p blog -r && mv target/release/blog ../dist) & (cd svelte; yarn build)

run: build
	(cd dist; ./blog) & (cd svelte; yarn serve)

test:
	(cd api; cargo test -p blog) & (cd svelte; yarn test)
