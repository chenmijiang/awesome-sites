import styled from 'styled-components'

type Props = {
  site: {
    name: string
    link?: string
    desc: string
  }
}

const Card = ({ site }: Props) => {
  const name = site.name
  const link = site.link
  const desc = site.desc ? site.desc : '虽然没有描述，但是强烈推荐'
  if (site === undefined) {
    console.log('site is undefined')
  }
  return (
    <CardContainer
      href={link}
      target="_blank"
      className="w-full text-center min-h-[50px] rounded-md bg-white cursor-pointer shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="leading-[50px] text-cus-normal text-[18px] h-[50px] lh-[50px] border-b-[1px] border-solid border-b-[#e9e9e9]">
        <span>{name}</span>
      </div>
      <div className="color-gray-500 text-cus-unactivated text-[14px] p-[15px] text-left">
        <span>{desc}</span>
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.a`
  text-decoration: none;

  /*去除未被访问的a标签的下划线*/
  &:link {
    text-decoration: none;
  }

  /*去除已经被访问过的a标签的下划线*/
  &:visited {
    text-decoration: none;
  }

  /*去除鼠标悬停时的a标签的下划线*/
  &:hover {
    text-decoration: none;
  }

  /*去除正在点击的a标签的下划线（鼠标按下，尚未松开）*/
  &:active {
    text-decoration: none;
  }

  /*去除获得焦点的a标签的下划线（被鼠标点击过）*/
  &:focus {
    text-decoration: none;
  }
`

export default Card
