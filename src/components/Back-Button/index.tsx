import { ArrowLeft } from 'iconsax-react';

import { Link } from './style';

interface CcLinkProps {
  children: React.ReactNode;
  href: string;
  backArrow?: boolean;
}

const CcLink: React.FC<CcLinkProps> = ({ children, href, backArrow }) => {
  return (
    <Link to={href}>
      {backArrow && <ArrowLeft size={20} />}
      {children}
    </Link>
  );
};

export default CcLink;
