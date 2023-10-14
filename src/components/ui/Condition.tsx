import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

type Conditionprops = {
    children: ReactNode | ReactNode[] | undefined
    condition: boolean
}
const Condition = ({
    children,
    condition
}: Conditionprops) => {

    if (condition) {
        return <>
            {children}
        </>
    } else {
        return null
    }
};

export default Condition;

