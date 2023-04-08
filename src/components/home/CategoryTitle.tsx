import { Icon } from "@iconify-icon/react"

type Props = {
  category: {
    type: string
    level?: number
  }
}

const CategoryTitle = ({ category }: Props) => {
  return (
    <div
      className="mb-[10px] text-lg font-bold flex items-center"
      id={category.type}>
      <Icon icon="material-symbols:label" width={26} height={26}/>
      <span className="relative ml-1">{category.type}</span>
    </div>
  )
}

export default CategoryTitle
