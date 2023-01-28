import * as React from 'react';

export function Link(props) {
  const handleClick = (ev) => {
    if (props.href == null) ev.preventDefault();
    if (props.onClick != null) props.onClick(ev);
  };

  return (
    <a {...props} href={`#${props.href ?? Math.random()}`} onClick={handleClick}>
      {props.children}
    </a>
  );
}
