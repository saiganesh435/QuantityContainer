import React from 'react'

const LabelPrice = ({label,price}) => {
  return (
    <div style={{display:'flex', gap:30}}>
      <p>{label}</p>
        <p>{price}</p>
        </div>
  )
}

export default LabelPrice