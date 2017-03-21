# Brunch with gun

This implements the [gun.js to-do app tutorial](//gun.js.org/think.html) using [brunch](//brunch.io), implementing `jquery` and `gun` into a simple skeleton.

You can remove `jquery` by deleting it as a dependency in `package.json`, and then changing the code in `thoughts.js` to use `.querySelector()`.

For implementation, read the

On the development side it uses `auto-reload-brunch` which provides real-time CSS injections.

When you're in production mode, it uses `uglifyjs-brunch` to minify, and `gzip-brunch` to create copies of your files - in the `brunch-config.coffee` file you can change its options.

## Development

### Getting started
* Install (if you don't have them):
    * [Node.js](//nodejs.org): `brew install node` on OS X
    * [Brunch](//brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch w -s` / `npm start` — watches the project with continuous rebuild
    * `brunch b -p` / `npm build` — builds minified project for production
    * `brunch b -sp — watches / rebuilds minified production project (note: no auto-reload)
