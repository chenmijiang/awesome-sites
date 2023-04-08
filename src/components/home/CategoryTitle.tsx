import { Icon } from '@iconify-icon/react'
import Link from 'next/link'

type Props = {
  category: {
    type: string
    level?: number
  }
  more: boolean
}

const CategoryTitle = ({ category, more }: Props) => {
  return (
    <div className="flex justify-between items-center mb-[10px]">
      <div
        className="text-lg font-bold flex items-center"
        id={category.type}>
        <Icon
          icon="material-symbols:label"
          width={26}
          height={26}
        />
        <span className="relative ml-1">{category.type}</span>
      </div>
      {more && (
        <span className="mr-3 text-base cursor-pointer font-bold text-red-400">
          <Link href={`/tags/${Buffer.from(category.type, 'utf-8').toString('base64')}`}>更多</Link>
        </span>
      )}
    </div>
  )
}

export default CategoryTitle
