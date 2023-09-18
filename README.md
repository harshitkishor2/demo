### 1 For Readme.md Editor
https://pandao.github.io/editor.md/en.html

### 2 Initiate project
Create project and folder structure then update package.json file with necessory  scripts

### 3 - Add Custom Fonts And Vector Icons
```javascript
yarn add react-native-vector-icons
yarn add -D @types/react-native-vector-icons
```
Check here for react native vector icon installation guide
https://github.com/oblador/react-native-vector-icons#installation

Check here for custom fonts installation
https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4

Add this file in root directory  -` react-native.config.js`


    module.exports = {
        project: {
            ios: {},
            android: {}, // grouped into "project"
        },
        assets: ["./src/assets/fonts/"], // stays the same
        dependencies: {
            'react-native-vector-icons': {
                platforms: {
                    ios: null,
                },
            },
        },
    };
	
then run `npx react-native-asset` for linking custom fonts.



### 4 Add Fast Image for custom image component 
```javascript
yarn add react-native-fast-image
```
**Article** - https://medium.com/@Bigscal-Technologies/how-to-load-images-quickly-with-react-native-faster-image-f7856cb5ebcd


### 5 Some Useful dependencies-

```javascript
yarn add react-native-animatable @react-native-async-storage/async-storage axios moment moment-timezone lodash
```

```javascript
yarn add -D @types/lodash
```

### 6 SVG installation

    yarn add react-native-svg
    yarn add -D react-native-svg-transformer

`Update metro.config.js`
````javascript
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
````

If you are using TypeScript, you need to add this to your declarations.d.ts file (create one if you don't have one already):
```javascript
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

### 7 Optimized Lottie Component

    yarn add lottie-react-native
	
then run pod install --repo-update if any error with ios
Use Custom Component For better performance created under component folder.


