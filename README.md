##### Step:1 Initiate project
Create project and folder structure then update package.json file with necessory  scripts

##### Step:2 - Add Custom Fonts And Vector Icons
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


