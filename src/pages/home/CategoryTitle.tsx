type Props = {
  category: {
    type: string
    level?: number
  }
}

const CategoryTitle = ({ category }: Props) => {
  return (
    <div
      className="mb-[10px] text-lg font-bold"
      id={category.type}>
      <span className="relative top-[3px]">{category.type}</span>
    </div>
  )
}

export default CategoryTitle
