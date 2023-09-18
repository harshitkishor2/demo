import { useEffect } from 'react'
import { BackHandler } from 'react-native'

const useBackHandler = (handler: () => boolean) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handler)

        return () => BackHandler.removeEventListener('hardwareBackPress', handler)
    }, [handler])
}

export default useBackHandler

/**
 
useBackHandler(() => {
    if (want_to_do_something) {
       Do Something
      return true;
    }
    return false;
  });

 */

