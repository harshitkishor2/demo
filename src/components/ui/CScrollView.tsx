import { DeviceInfo } from "@app/helper";
import React, { ReactNode, useRef, useState } from "react";
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import CIcon, { IconType } from "./CIcon";

interface CScrollViewProps extends ScrollViewProps {
    children?: ReactNode | ReactNode[]
}

const CScrollView = ({
    children,
    ...props
}: CScrollViewProps) => {
    const [isScrollable, setIsScrollable] = useState(false)
    const [isMove2TopEnable, setIsMove2TopEnable] = useState(false)

    const scrollRef = useRef<any>(null)

    const onMove2TopClick = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }
    return (
        <>
            <ScrollView
                onScroll={(evnt) => {
                    if (evnt.nativeEvent.contentOffset.y > 1000) {
                        setIsMove2TopEnable(true)
                    } else {
                        setIsMove2TopEnable(false)
                    }
                }}
                scrollEventThrottle={0.1}
                ref={scrollRef}
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
            {isMove2TopEnable ? <Animatable.View
                animation='bounce'
                direction="normal"
                iterationCount={'infinite'}
                easing={"ease"}
            >
                <CIcon
                    onPress={() => {
                        onMove2TopClick()
                    }}
                    style={{
                        flex: 1,
                        position: "absolute",
                        zIndex: 10,
                        bottom: 10,
                        right: 0
                    }}
                    name="arrow-circle-up"
                    type={IconType.MaterialIcons}
                    size={40}
                    color="black"
                />
            </Animatable.View> : null}

        </>
    );
};

export default CScrollView;

const styles = StyleSheet.create({});
