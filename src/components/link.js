import React from 'react';
import Link from 'next/link';

export default (props) => {
  return (
    <Link {...props}>
      <a>{props.children}</a>
    </Link>
  );
};