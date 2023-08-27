interface IconProps {
  className?: string;
  name: string;
  [key: string]: any;
}

const importAll = (requireContext: any) => requireContext.keys().forEach(requireContext);
try {
  // @ts-ignore
  importAll(require.context('.', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

function Icon({ className, name, ...props }: IconProps) {
  return (
    <svg
      className={className ? className : 'icon'}
      {...props}>
      <use xlinkHref={'#' + name} />
    </svg>
  );
}

export default Icon;
