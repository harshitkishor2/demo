### For Readme.md Editor
https://pandao.github.io/editor.md/en.html

###  Initiate project
Create project and folder structure then update package.json file with necessory  scripts

### - Add Custom Fonts And Vector Icons
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



### Add Fast Image for custom image component 
```javascript
yarn add react-native-fast-image
```
**Article** - https://medium.com/@Bigscal-Technologies/how-to-load-images-quickly-with-react-native-faster-image-f7856cb5ebcd


### Some Useful dependencies-

```javascript
yarn add react-native-animatable @react-native-async-storage/async-storage axios moment moment-timezone lodash
```

```javascript
yarn add -D @types/lodash
```
