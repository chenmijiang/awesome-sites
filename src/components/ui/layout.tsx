import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

const Layout = (props: {
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
  return (
    <div
      className="main px-2 md:ml-[100px] ml-0 relative">
      {props.children}
    </div>
  )
}

export default Layout
