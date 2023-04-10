import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

type Props = {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  [key: string]: any
}

const ScrollPanel = ({ className, style, children, ...props }: Props) => {
  return (
    <div className={className}>
      <SimpleBar
        style={style}
        {...props}>
        {children}
      </SimpleBar>
    </div>
  )
}

export default ScrollPanel
