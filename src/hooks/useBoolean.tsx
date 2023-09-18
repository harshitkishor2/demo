import { Dispatch, SetStateAction, useCallback, useState } from 'react'

const useBoolean = (
    defaultValue?: boolean,
) => {
    const [value, setValue] = useState(!!defaultValue)

    const toggle = useCallback(() => setValue(x => !x), [])

    return {
        value, toggle, setValue
    }
}
export default useBoolean


// const {value,setValue,toggle} = useBoolean()

