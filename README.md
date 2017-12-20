# React Redux Webpack Starter Template
By default *Hash history* is active if you want to use *Catch all* metod, just change *HashRouter* with *BrowserRouter* in the *"src/index.js"*.
More about this problem and possible solutions you can read [here](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually).

Images, fonts... put in *"dist/assets/"* directory. <br />
Redux example you can find on the *Fruit* page. <br />
You can access "*process.env.NODE_ENV*" from the React. <br />
I use this example as starter template in my React projects.

Features:
* Redux *(v3)*
* React Router *(v4)*
* ES6 *(Babel)*
* Webpack *(v2)* + Webpack dev server
* SASS + CSS

## Installation
* Clone the repository `git clone https://github.com/steve-232/react-redux-webpack-starter-template`
* Run `npm install`

## Usage
Run
* `npm run dev` for developing
* `npm run stagging` for beta version - *( One JavaScript and one CSS file will be created. Code won't be minified. All comments and "console" based functions won't be removed from those files. Files will be located in the "dist" folder )*
* `npm run prod` for final version - *( Entire code will be minified in one JavaScript and one CSS file. All comments and "console" based functions will be removed from those files. Files will be located in the "dist" folder )*

For Windows OS use
* `npm run dev:win`
* `npm run stagging:win`
* `npm run prod:win`

## License
[MIT license](http://www.opensource.org/licenses/MIT)
