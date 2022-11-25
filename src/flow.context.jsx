import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'

// interface Props {
//     children?: ReactNode
//     // any props that come into the component
// }

// type Context = {
//     currentFlow: any | null;
//     setCurrentUser: Dispatch<SetStateAction<Context>>;
//   }

// as the actual value
export const FlowContext = createContext({
    currentFlow: null,
    setCurrentFlow: (val) => null,
})

export const FlowProvider = ({ children }) => {
    const [currentFlow, setCurrentFlow] = useState(null);
    const value = {
        currentFlow,
        setCurrentFlow,
    }
    return <FlowContext.Provider value={value}>{ children}</FlowContext.Provider>
}