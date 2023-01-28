import * as React from 'react';

export function Link(props) {
  const preventClick = (ev) => {
    ev.preventDefault();
  };

  return (
    <a href="##" onClick={preventClick} {...props}>
      {props.children}
    </a>
  );
}
