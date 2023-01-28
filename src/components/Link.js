import * as React from 'react';

export function Link(props) {
  const preventClick = (ev) => {
    ev.preventDefault()
  }

  return (
    <a href="##" className={props.className} onClick={preventClick}>
      {props.children}
    </a>
  );
}
