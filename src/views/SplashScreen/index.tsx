import { SubmitButton } from "@app/components";
import storage from "@app/services/storage";
import { useAppDispatch } from "@app/store";
import { useGetCountriesQuery } from "@app/store/rtk_query/test/testApi";
import { testAction } from "@app/store/slice/test";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        storage.set('@test', 'hejllodddddddd')
    }, []);

    return (
        <View>
            <Text>SplashScreen</Text>
            <SubmitButton onPress={() => dispatch(testAction())} label="Submit" />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({});
