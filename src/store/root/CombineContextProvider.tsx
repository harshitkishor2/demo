// Combine all context providrs here ten use in App.js


import { PropsWithChildren } from "react"
import { AuthProvider } from "../context/test"

type CombinedReducerType = Array<React.JSXElementConstructor<React.PropsWithChildren<unknown>>>

const CombineContextProvider = ({ children }: PropsWithChildren) => {

    //! Put all context provider here within array.
    const contextProviders: CombinedReducerType = [AuthProvider]
    return (
        <>
            {contextProviders.reduceRight((acc, Tag) => {
                return <Tag>{acc}</Tag>
            }, children)}
        </>
    )
}

export default CombineContextProvider