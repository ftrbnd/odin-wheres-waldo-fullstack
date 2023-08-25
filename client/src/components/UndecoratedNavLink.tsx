import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
  to: string;
  state?: object;
  children?: ReactNode;
}

const UndecoratedNavLink: FC<LinkProps> = (props) => {
  return (
    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={props.to} state={props.state}>
      {props.children}
    </Link>
  );
};

export default UndecoratedNavLink;
