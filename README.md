### Reproducible code for Cypress issue [8090](https://github.com/cypress-io/cypress/issues/8090).

Using some configuration of typescript combine with Cypress and special project configuration will cause issue 
that will prevent loading of the plugin file throwing the following failure:

```shell script
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/nitzannashi/zattoo/web/projects/common/cypress/plugins/index.js
require() of ES modules is not supported.
require() of /Users/nitzannashi/zattoo/web/projects/common/cypress/plugins/index.js from /Users/nitzannashi/zattoo/web/projects/common/cypress/plugins/index.cjs is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /Users/nitzannashi/zattoo/web/package.json.

    at Module._extensions..js (internal/modules/cjs/loader.js:1216:13)
    at Object.require.extensions.<computed> [as .js] (/Users/nitzannashi/Library/Caches/Cypress/4.7.0/Cypress.app/Contents/Resources/app/packages/server/node_modules/ts-node/src/index.ts:539:12)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at /Users/nitzannashi/zattoo/web/projects/common/cypress/plugins/index.cjs:22:54
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```

### Typescript config
```json
// tsconfig.json
{
    "compilerOptions": {
        "allowJs": true
    }
}
```

### Package Config
```json
// package.json
{
  "type": "module",
  ...
}
```


Created By Nitzan Nashi
