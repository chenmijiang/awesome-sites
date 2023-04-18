import ReactMarkdown from 'react-markdown'
import { Icon } from '@iconify-icon/react'

type Props = {
  content: string
  className: string
  [key: string]: any
}

const MdContentDoc = ({ content, className, ...props }: Props) => {
  return (
    <div
      className={className}
      {...props}>
      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2
              id={props.children.toString()}
              className="flex items-center gap-1"
              {...props}>
              <Icon
                icon="ph:link"
                width={26}
                height={26}
              />
              {props.children}
            </h2>
          ),
          a: ({ node, ...props }) => (
            <a
              target="_blank"
              {...props}></a>
          )
        }}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MdContentDoc
