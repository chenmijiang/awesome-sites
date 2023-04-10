import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import Link from 'next/link'
import { Link as AnchorLink } from 'react-scroll'

type Props = {
  to: string
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
  anchor: boolean
  className?: string
  [key: string]: any
}

// next/link 不需要或冲突的属性
const excludeProps = ['activeClass', 'spy', 'smooth', 'offset', 'duration']

const MixedLink = ({ to, children, anchor, ...props }: Props) => {
  // 锚点跳转
  if (anchor) {
    return (
      <AnchorLink
        to={to}
        {...props}>
        {children}
      </AnchorLink>
    )
  }

  const newProps = {} as { [key: string]: any }
  for (const key in props) {
    if (excludeProps.indexOf(key) === -1) {
      newProps[key] = props[key]
    }
  }

  // 路由跳转
  return (
    <Link
      href={to}
      {...newProps}>
      {children}
    </Link>
  )
}

export default MixedLink
