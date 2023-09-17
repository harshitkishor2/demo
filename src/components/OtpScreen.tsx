

import _ from 'lodash';
import React, { useRef, useState } from 'react';

import { KeyboardAvoidingView, TextInput } from 'react-native';
const OTPScreen = ({
    field = 4,
    size = 50
}) => {

    const [stateArray, setStateArray] = useState(Array(field).fill(null));

    const ref_input: any = [];
    for (let i = 0; i < field; i++) {
        ref_input[i] = useRef();

    }

    const focusNext = (text: string, index: number) => {
        if (index < ref_input.length - 1 && text) {
            ref_input[index + 1].current.focus();
        }
        if (index == ref_input.length - 1) {
            ref_input[index].current.blur();
        }

        // const newArray = [...stateArray];
        // newArray[index] = text;
        // // Set the state to the new array using setStateArray.
        // setStateArray(newArray);


    }
    const focusPrev = (key: any, index: number) => {
        console.log("focusPrev", key)
        if (key === "Backspace" && index !== 0) {
            ref_input[index - 1].current.focus();
        }

    }
    console.log("SetState===", stateArray)
    return (
        <KeyboardAvoidingView style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10
            // elevation: 1
        }}>
            {
                Array(4).fill('*').map((item, index) => {
                    return <TextInput
                        style={{
                            borderWidth: 1,
                            height: size,
                            width: size,
                            borderRadius: 10
                        }}
                        underlineColorAndroid="transparent"
                        placeholder={item}
                        multiline={true}
                        textAlign='center'
                        maxLength={1}
                        keyboardType='number-pad'
                        autoFocus={index == 0 ? true : false}
                        returnKeyType="next"
                        ref={ref_input[index]}
                        onChangeText={text => focusNext(text, index)}
                        onKeyPress={e => focusPrev(e.nativeEvent.key, index)}
                    />
                })
            }
        </KeyboardAvoidingView>
    )
}

export default OTPScreen;