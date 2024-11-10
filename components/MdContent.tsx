type Props = {
  content: string;
  className: string;
  [key: string]: any;
};

const MdContentDoc = ({ content, className, ...props }: Props) => {
  return (
    <div className={className} {...props}>
      {content}
    </div>
  );
};

export default MdContentDoc;
