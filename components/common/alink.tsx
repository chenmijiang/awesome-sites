import Link from 'next/link';

interface AlinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

const Alink = ({ href, children, className }: AlinkProps) => {
  if (isExternal(href)) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        referrerPolicy="no-referrer">
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={className}>
        {children}
      </Link>
    );
  }
};

export default Alink;
