import React from 'react'

const Button = ({ label, onClick, type='button', style }) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 ${style}`}
    >
        {label}
    </button>
  )
}

export default Button