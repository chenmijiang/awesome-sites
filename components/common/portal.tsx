import { createPortal } from 'react-dom';

type PortalProps = {
  dom?: HTMLElement;
  children: React.ReactNode;
};

const Portal = ({ dom = document.body, children }: PortalProps) => {
  return createPortal(<>{children}</>, dom);
};

export default Portal;
