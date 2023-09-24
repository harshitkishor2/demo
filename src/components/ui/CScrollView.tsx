import { ScrollView, ScrollViewProps, StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useState } from "react";
import { DeviceInfo } from "@app/helper";

interface CScrollViewProps extends ScrollViewProps {
    children?: ReactNode | ReactNode[]
}

const CScrollView = ({
    children,
    ...props
}: CScrollViewProps) => {
    const [isScrollable, setIsScrollable] = useState(false)

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: isScrollable ? 15 : 0
            }}
            style={{
                flex: 1
            }}
            scrollEnabled={isScrollable}
            onContentSizeChange={(width, height) => {
                if (height > DeviceInfo.WindowHeight) {
                    setIsScrollable(true)
                }
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            {
            ...props
            }
        >
            {children}
        </ScrollView>
    );
};

export default CScrollView;

const styles = StyleSheet.create({});
