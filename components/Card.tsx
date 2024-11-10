import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: Props) => {
  const { title, children } = props;
  return (
    <>
      <div className="leading-[50px] text-cus-normal text-[18px] h-[50px] lh-[50px] border-b-[1px] border-solid border-b-[#e9e9e9]">
        <span>{title}</span>
      </div>
      <div className="color-gray-500 text-cus-unactivated text-[14px] p-[15px] text-left">
        {children}
      </div>
    </>
  );
};

const Card = (props: Props & { link?: string }) => {
  const { link, children } = props;

  if (link) {
    return (
      <CardContainer
        href={link}
        target="_blank"
        className="w-full text-center min-h-[50px] rounded-md bg-white dark:bg-zinc-300 dark:shadow-none cursor-pointer shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
      >
        <Container {...props}>{children}</Container>
      </CardContainer>
    );
  }

  return (
    <div className="w-full text-center min-h-[50px] rounded-md bg-white dark:bg-zinc-300 dark:shadow-none shadow-sm">
      <Container {...props} />
    </div>
  );
};

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
`;

export default Card;
