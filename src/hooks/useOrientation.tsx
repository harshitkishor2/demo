import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

type DeviceOrientation = 'PORTRAIT' | 'LANDSCAPE'

// const useOrientation = (): DeviceOrientation => {
//     const { width, height } = useWindowDimensions()

//     if (width >= height) {
//         return 'landscape'
//     }
//     return 'portrait'
// }



const isOrientationPortrait = ({ width, height }: ScaledSize) =>
    height >= width;
const isOrientationLandscape = ({ width, height }: ScaledSize) =>
    width >= height;

const useOrientation = (): DeviceOrientation => {
    const screen = Dimensions.get('screen');
    const initialState = {
        portrait: isOrientationPortrait(screen),
        landscape: isOrientationLandscape(screen),
    };

    const [orientation, setOrientation] = useState(initialState);

    useEffect(() => {
        const onChange = ({ screen }: { screen: ScaledSize }) => {
            setOrientation({
                portrait: isOrientationPortrait(screen),
                landscape: isOrientationLandscape(screen),
            });
        };

        const subscription = Dimensions.addEventListener('change', onChange);

        return () => {
            if (typeof subscription?.remove === 'function') {
                subscription.remove();
            }
        };
    }, []);

    return orientation.portrait ? 'PORTRAIT' : 'LANDSCAPE';
}

export default useOrientation


// const orientation = useOrientation()
// console.log('orientation is:', orientation)