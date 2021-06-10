>> npx create-lwc-app lwcdev-fullcalender

```
⚡⚡⚡⚡⚡  Lightning Web Components  ⚡⚡⚡⚡⚡
? Do you want to use the simple setup? Yes
? Package name for npm lwcdev-fullcalender
? Select the type of app you want to create Standard web app
? Do you want a basic Express API server? (y/N) N

🎉  Created lwcdev-fullcalender in /Users/jburgers/VscProjects/lwcdev-fullcalender. Checkout the `scripts` section of your `package.json` to get started.
```

`>> npm run build:development`

```
⚡⚡⚡⚡⚡  Lightning Web Components ⚡⚡⚡⚡⚡


⌛  Creating build configuration
📦  Starting build process.
       Build duration: 2.415
🎉  Build successfully created.
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...
```

`>> npm run watch`

```
⚡⚡⚡⚡⚡  Lightning Web Components ⚡⚡⚡⚡⚡


📦  Starting build process.
🌎  Local server listening: http://localhost:3001

(app works)


Installing full-calendar
https://fullcalendar.io/docs/initialize-es6
```

`>> npm install @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list`

```
Debugger listening on ws://127.0.0.1:60784/c9940095-ac0c-4520-8dbc-d10229b529db
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
npm WARN @lwc/jest-preset@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-resolver@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-serializer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-transformer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of @salesforce/eslint-plugin-lightning@^0.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-import@* but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-jest@* but none is installed. You must install peer dependencies yourself.
npm WARN error-overlay-webpack-plugin@0.4.2 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.

+ @fullcalendar/daygrid@5.7.2
+ @fullcalendar/timegrid@5.7.2
+ @fullcalendar/list@5.7.2
+ @fullcalendar/core@5.7.2
added 6 packages from 1 contributor and audited 1530 packages in 7.551s
```

##Adding Webpack supports for fullcalendar package
https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/webpack

##Needed additional packages (DevDependencies) 
https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/webpack/package.json

 ```
 "devDependencies": {
    "css-loader": "^4.3.0",
    "mini-css-extract-plugin": "^1.2.0",
```    

`>> npm install --save-dev css-loader`

```
➜  lwcdev-fullcalendar git:(master) ✗ npm install --save-dev css-loader

Debugger listening on ws://127.0.0.1:63683/65ef5eaa-06bc-478a-a773-8e78d6930d83
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
npm WARN @lwc/jest-preset@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-resolver@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-serializer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-transformer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of @salesforce/eslint-plugin-lightning@^0.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-import@* but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-jest@* but none is installed. You must install peer dependencies yourself.
npm WARN error-overlay-webpack-plugin@0.4.2 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.

+ css-loader@5.2.6
added 8 packages from 4 contributors and audited 1538 packages in 6.708s
```

`>> npm install --save-dev mini-css-extract-plugin`

```
➜  lwcdev-fullcalendar git:(master) ✗ npm install --save-dev mini-css-extract-plugin

Debugger listening on ws://127.0.0.1:64527/71eb715a-576d-4453-8c1e-9775345210b7
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
npm WARN @lwc/jest-preset@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-resolver@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-serializer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-transformer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of @salesforce/eslint-plugin-lightning@^0.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-import@* but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-jest@* but none is installed. You must install peer dependencies yourself.
npm WARN error-overlay-webpack-plugin@0.4.2 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.

+ mini-css-extract-plugin@1.6.0
added 5 packages from 38 contributors and audited 1543 packages in 6.185s
```

##Checking package.json DevDependencies:

    "devDependencies": {
        "css-loader": "^5.2.6",
        "eslint": "^7.28.0",
        "eslint-plugin-inclusive-language": "^2.1.1",
        "husky": "^6.0.0",
        "lwc-services": "^3.1.1",
        "mini-css-extract-plugin": "^1.6.0",
        "prettier": "^2.3.1"
    }


###The sample webpack.config.js:
https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/webpack/webpack.config.js

From that, I extracted following bits. 

```
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1 } }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
}
```

>> Add above to the lwc-services.config.js, it becomes:

```
// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    resources: [{ from: 'src/resources/', to: 'dist/resources/' }],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              { loader: 'css-loader', options: { importLoaders: 1 } }
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'main.css'
        })
      ]
};
```

##>> Adding the boiler plate code to my/app/app.js (https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/webpack/src/main.js)
##>> Adding the <div class='my-full-calendar'></div> to my/app/app.html
##>> Adding the boiler plate css to my/app/main.css (https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/webpack/src/main.css)

`>> npm run build:development`

Error. It's missing @fullcalendar/interaction

`>> npm install @fullcalendar/interaction` 

```
Debugger listening on ws://127.0.0.1:58619/02e424a1-8c84-4176-8f13-2ea9510acb47
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
npm WARN @lwc/jest-preset@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-resolver@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-serializer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @lwc/jest-transformer@11.0.1 requires a peer of jest@^26 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of @salesforce/eslint-plugin-lightning@^0.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-import@* but none is installed. You must install peer dependencies yourself.
npm WARN @salesforce/eslint-config-lwc@2.0.0 requires a peer of eslint-plugin-jest@* but none is installed. You must install peer dependencies yourself.
npm WARN error-overlay-webpack-plugin@0.4.2 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.

+ @fullcalendar/interaction@5.7.2
updated 1 package and audited 1544 packages in 6.515s
```

`>> run build:development`

```
⚡⚡⚡⚡⚡  Lightning Web Components ⚡⚡⚡⚡⚡
⌛  Creating build configuration
📦  Starting build process.
🆘  Module parse failed: Unexpected token (4:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| /* classes attached to <body> */
| 
> .fc-not-allowed,
| .fc-not-allowed .fc-event { /* override events' custom cursors */
|   cursor: not-allowed;
```



