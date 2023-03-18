type Props = {
  category: {
    type: string
    level?: number
  }
}

const CategoryTitle = ({ category }: Props) => {
  return (
    <div
      className="mb-10px"
      style={{ fontSize: category?.level ? '24px' : '30px' }}>
      <div className="i-mdi-file-table-outline text-orange-400" />
      <span className="relative top-3px">{category.type}</span>
    </div>
  )
}

export default CategoryTitle
