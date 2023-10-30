import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface AnimatedInputProps extends TextInputProps {
    placeholder: string
    multiline?: boolean
    value: string,
    onChangeText?: ((text: string) => void) | undefined;
}

const AnimatedInput = ({ value, onChangeText, placeholder, multiline }: AnimatedInputProps) => {
    const [placeholderWidth, setWidth] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;
    const InputHeight = multiline ? 100 : 50

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -InputHeight / 2],
    });
    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -placeholderWidth / 4],
    });
    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.5],
    });
    const onFocus = () => animate(1);

    const onBlur = () => !value && animate(0);

    const animate = (val: number) => {
        Animated.spring(animation, {
            toValue: val,
            bounciness: 0,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View
            style={StyleSheet.flatten([
                styles.inputContainer,
                { height: InputHeight }
            ])}
        >
            <View style={StyleSheet.flatten([
                styles.placeholderContainer,
                { height: InputHeight, },
            ])}>
                <Animated.Text
                    style={StyleSheet.flatten([
                        styles.placeholder,
                        { transform: [{ translateY }, { translateX }, { scale }] },
                    ])}
                    onTextLayout={e =>
                        !placeholderWidth && setWidth(e.nativeEvent.lines[0]?.width || 0)
                    }
                >
                    {placeholder}
                </Animated.Text>
            </View>
            <TextInput
                style={StyleSheet.flatten([
                    styles.input,
                    multiline && { height: 100, textAlignVertical: 'top' },
                ])}
                // value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChangeText}
                multiline={multiline}
            />
        </View>
    );
}

export default AnimatedInput

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#999',
        justifyContent: "center",
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 16,
    },
    placeholderContainer: {
        position: 'absolute',
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    placeholder: {
        fontSize: 18,
        position: 'absolute',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        color: '#999',
        zIndex: 99
    },
});

/* 
 <AnimatedInput placeholder={'Hello Mr india'} value="jh" />


*/