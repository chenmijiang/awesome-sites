import ReactDom from "react-dom";

type Props = {
  children: React.ReactNode;
  root?: HTMLElement;
};

const Portal = (props: Props) => {
  return ReactDom.createPortal(props.children, props.root ?? document.body);
};

export default Portal;
