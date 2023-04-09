import { createContext, useReducer, Dispatch } from 'react'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

interface IStore {
  sideBarShow: boolean
}

interface IAction {
  type: string
  payload?: any
}

type AppContextProps = {
  state: IStore
  dispatch: Dispatch<{
    type: 'toggleSideBarShow'
    payload?: any
  }>
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

const initialState = { sideBarShow: false }

function reducer(state: IStore, action: IAction) {
  switch (action.type) {
    case 'toggleSideBarShow':
      return { ...state, sideBarShow: !state.sideBarShow }
    default:
      throw new Error()
  }
}

export const AppProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>
  )
}

export default AppProvider
