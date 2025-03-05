import React from 'react';
import './button.css';

export default function Button({children, href, onClick, ...props}) {
  return (
    <button
      href={href}
      className="custom-button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
