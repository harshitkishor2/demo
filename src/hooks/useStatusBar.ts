import React from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';

const useStatusBar = () => {
    const scheme = useColorScheme();
    const isDarkMode = scheme === "dark";

    React.useEffect(() => {
        StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor("rgba(0,0,0,0)");
            StatusBar.setTranslucent(true);
        }
    }, [scheme, isDarkMode]);
    return null
}

export default useStatusBar
