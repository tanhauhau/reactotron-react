# reactotron-react
### Universal [Reactotron](https://github.com/infinitered/reactotron) import for [react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) and [react-js](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-js.md)

If you are writing universal app for both web and native, and wonder whether to import `reactotron-react-native` or `reactotron-react-js`, import `reactotron-react` then.
Under the hood, `reactotron-react` uses module import and file extensions to selectively import `reactotron-react-native` or `reactotron-react-js` based on the platform you are running on.

## Getting started
```bash
npm install --save-dev reactotron-react
# or yarn
yarn add reactotron-react
```

## Usage
```js
// instead of
import Reactotron from 'reactotron-react-js'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!

// or

import Reactotron from 'reactotron-react-native'

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

// do

import Reactotron from 'reactotron-react'
Reactotron
  .configure()
  .useReactNative() // this will have no effect on react-js for web
  .connect()

```

## Read more

* To know more about Reactotron, see [here](https://github.com/infinitered/reactotron)
* To install Reactotron, see [Installation guide](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)


## Recommend
Watch this amazing talk leland richardson about writing universal react app for  Android, iOS, web and more platforms.

[![thumbnail](https://i.ytimg.com/an_webp/8qCociUB6aQ/mqdefault_6s.webp?du=3000&sqp=COzA4ssF&rs=AOn4CLC-xdJT_lr6HTBni_sSrdLl8EHU3A)](https://www.youtube.com/watch?v=JaRtmgaNZos)
