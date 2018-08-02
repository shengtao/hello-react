# hello-react

A modern build pipeline typically consists of:

- A package manager, such as `Yarn` or `npm`. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
- A bundler, such as `webpack` or `Browserify`. It lets you write modular code and bundle it together into small packages to optimize load time.
- A compiler such as `Babel`. It lets you write modern JavaScript code that still works in older browsers.

This project select npm + webpack + babel.

## Install dependencies

+ Install react & react-dom

    ```
    npm install --save react react-dom
    ```

+ Enable ES6 and JSX

    ```
    npm install --save-dev babel-core babel-preset-react babel-preset-es2015 babel-preset-stage-0
    ```

+ Install webpack & loader

    ```
    npm install --save-dev webpack babel-loader
    ```

## Configures

### Config IDE

If use webstorm, config it for support of ES6 & JSX.

Mac:
```
Preferences > Languages & Frameworks > JavaScript
```

Set 'JavaScript language version' as 'React JSX'.

### Config babel

add and config .babelrc

```
{
    "presets": ["es2015", "react", "stage-0"]
}
```

### Config webpack

add and config webpack.config.dev.js

```
const path = require('path');

module.exports = {
    entry: './app/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
```

- add babel-loader support

## Run

```
npm start
```

## Add redux

```
npm install --save react-redux
```
