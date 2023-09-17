import { useWindowDimensions } from 'react-native'

type DeviceOrientation = 'portrait' | 'landscape'

const useOrientation = (): DeviceOrientation => {
    const { width, height } = useWindowDimensions()

    if (width >= height) {
        return 'landscape'
    }
    return 'portrait'
}

export default useOrientation


// const orientation = useOrientation()
// console.log('orientation is:', orientation)