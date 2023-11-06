### 1. For Readme.md Editor
https://pandao.github.io/editor.md/en.html

### 2. Initiate project
Create project and folder structure then update package.json file with necessory  scripts

### 3. - Add Custom Fonts And Vector Icons
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



### 4. Add Fast Image for custom image component 
```javascript
yarn add react-native-fast-image
```
**Article** - https://medium.com/@Bigscal-Technologies/how-to-load-images-quickly-with-react-native-faster-image-f7856cb5ebcd


### 5. Some Useful dependencies-

```javascript
yarn add react-native-animatable @react-native-async-storage/async-storage axios moment moment-timezone lodash react-native-device-info
```

```javascript
yarn add -D @types/lodash
```

### 6. SVG installation

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

### 7. Optimized Lottie Component

    yarn add lottie-react-native
	
then run pod install --repo-update if any error with ios
Use Custom Component For better performance created under component folder.


### 8. React Native Path Aliasing
    yarn add --dev babel-plugin-module-resolver

Update `babel.config.json`
```javascript
 plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          // '@assets': './src/assets',
          // '@components': './src/components',
          "@app": "./src",
        },
      },
    ],
  ],
```
Update `tsconfig.json`

```javascript
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": [
        "src/*"
      ]
    },
  }
```


### 9. Expo integration for using custom expo mudule
    npx install-expo-modules@latest



### 10. Multiple Environment and flavors in React native
Ref -
1. https://dev.to/leon_arantes/react-native-multiple-environments-setup-schemaflavors-3l7p
2. https://github.com/luggit/react-native-config#extra-step-for-android
3. https://www.youtube.com/watch?v=TvBm7UZNyy8&ab_channel=SobanSpeaks 


    yarn add react-native-config
	
Create  4 files on root of project and put then in gitignore->
- .env
- .env.development
- .env.staging
- .env.production

**TypeScript declaration for your .env file ->**

If you want to get autocompletion and typesafety for your .env files. Create a file named **react-native-config.d.ts** in the same directory where you put your type declarations, and add the following contents:
```javascript
declare module 'react-native-config' {
    export interface NativeConfig {
        // default
        APPLICATION_ID?: string;
        BUILD_TYPE?: string;
        DEBUG?: boolean;
        FLAVOR?: string;
        IS_HERMES_ENABLED?: boolean;
        IS_NEW_ARCHITECTURE_ENABLED?: boolean;
        VERSION_CODE?: number
        VERSION_NAME?: string

        // From env
        API_URL?: string;
        ENVIRONMENT?: string;
    }

    export const Config: NativeConfig
    export default Config
}
```


**Android Setup ->**

Add these code lines to **android/app/build.gradle** to apply plugin

```java
    // For react native dotenv
    project.ext.envConfigFiles = [
       prod: ".env.production",
       dev: ".env.development",
       stg: ".env.staging",
    ]
    apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle" 
    
```

Adding Product Flavor inside android section after buildTypes.
```java
 android {    
        // add this block
        flavorDimensions "default"
        productFlavors {
            prod {

            }
            stg {
                applicationIdSuffix ".stg"
            }
            dev {
                applicationIdSuffix ".dev"
            }
        }
       // ---
    ..................
```
	
Also add matchingFallbacks in buildTypes as shown below:

```java
      buildTypes {
            debug {
                signingConfig signingConfigs.debug
                matchingFallbacks = ['debug', 'release'] // <- add this line
            }
        -----
```
```java
defaultConfig {
    ...
    resValue "string", "build_config_package", "YOUR_PACKAGE_NAME_IN_ANDROIDMANIFEST_XML"  // <- add this line
    setProperty("archivesBaseName", "App_Name_" + versionName +"($versionCode)" ) // For changing archive name

}
```
**Android Change App name and App Icon->**

- Just Duplicate the **android/app/main** folder and rename it stg and dev and remove all folders just keep folder contains string.xml.
- To change the app icons, just add it inside the specific mipmap of the build dev, stg or main(prod).

- To change app name, open file and rename-
android/app/src/main/res/values/strings.xml
android/app/src/dev/res/values/strings.xml
android/app/src/stg/res/values/strings.xml

**IOS Setup ->**

  -  Update pod file and add these lines of code

```swift
pod 'react-native-config', :path => '../node_modules/react-native-config'
# For extensions without React dependencies
pod 'react-native-config/Extension', :path => '../node_modules/react-native-config'
  
#Replace myProject with your project name
project 'myProject',
'Debug' => :debug,
'Release' => :release,
'Dev.Debug' => :debug,
'Dev.Release' => :release,
'Stg.Debug' => :debug,
'Stg.Release' => :release
...
...
flipper_config = ENV['NO_FLIPPER'] == "1" ? FlipperConfiguration.disabled : FlipperConfiguration.enabled(['Debug', 'Dev.Debug','Stg.Debug','Release','Dev.Release','Stg.Release'],{'Flipper' => '0.182.0'}) 

```
- Then create new configuration here with the same name inside pod file mentioned -
Project->Info->Cofigurations- Duplicate Debug/Release configurations
- Then change display name from here - 
Target-> Build Settings-> Packaging-> Product Name and Product Bundle Identifier

- Then Update info.plist as->

```swift
<key>CFBundleDisplayName</key>
<string>$(PRODUCT_NAME)</string>
```
- Then, In Xcode, select Product>Scheme>New Scheme. Select the project in dropdown and enter scheme name. And click ok to create the same. Make sure shared option is checked.
- In Xcode, select Product>Scheme>Edit Scheme.
- Create 2 Pre-actions inside Build and Run. To create env file inside ios folder and use the same. Select project in provide build settings drop down.Add below scripts and close.

```swift
# Type a script or drag a script file from your workspace to insert its path.
cp "${PROJECT_DIR}/../.env.staging" "${PROJECT_DIR}/../.env"
echo ".env.staging" > /tmp/envfile
touch "${PROJECT_DIR}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildDotenvConfig.rb"

```


**Update scripts in  package.json ->**

```javascript
    "android:dev": "react-native run-android --mode=devdebug --appIdSuffix 'dev'",
    "android:dev:release": "react-native run-android --mode=devrelease --appIdSuffix 'dev'",
    "android:dev:apk": "cd android && ./gradlew assembleDevRelease && cd ..",
    "android:dev:aab": "cd android && ./gradlew bundleDevRelease && cd ..",
    "android:stg": "react-native run-android --mode=stgdebug --appIdSuffix 'stg'",
    "android:stg:release": "react-native run-android --mode=stgrelease --appIdSuffix 'stg'",
    "android:stg:apk": "cd android && ./gradlew assembleStgRelease && cd ..",
    "android:stg:aab": "cd android && ./gradlew bundleStgRelease && cd ..",
    "android:prod": "react-native run-android --mode=proddebug",
    "android:prod:release": "react-native run-android --mode=prodrelease",
    "android:prod:apk": "cd android && ./gradlew assembleProdRelease && cd ..",
    "android:prod:aab": "cd android && ./gradlew bundleProdRelease && cd ..",
    "ios:dev": "react-native run-ios --mode=Dev.Debug --scheme \"myProject(Dev)\"",
    "ios:stg": "react-native run-ios --mode=Stg.Debug --scheme \"myProject(Stg)\"",
    "ios:prod": "react-native run-ios --mode=Debug --scheme \"myProject\"",
```




### 11. Generating Signed APK

- Generating a signing key
You can generate a private signing key using keytool.

```javascript
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

// For SHA Key
keytool -list -v -keystore ./app/debug.keystore -alias androiddebugkey -storepass android -keypass android

```
This command prompts you for passwords for the keystore and key, and to provide the Distinguished Name fields for your key. It then generates the keystore as a file called my-release-key.keystore. Replace 'my-release-key' with your key name and 'my-key-alias' with your key alias.
- Place the my-release-key.keystore file under the android/app directory in your project folder

- Inside gradle.properties add these lines-
```java
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

- Edit the file android/app/build.gradle in your project folder and add the signing config,
```java
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```


### 12. Redux, Persist, ContextApi with AsyncStorage

```javascript
yarn add @reduxjs/toolkit react-redux redux-logger redux-persist react-native-mmkv
```
```javascript
yarn add -D @types/redux-logger react-native-flipper react-native-mmkv-flipper-plugin
```

- react-native-flipper used for debugging our app with Flipper.
Rest of code you can find inside **store** folder.

### 13.  