import React from 'react'

const Select = () => {
  return (
    <div className="nice-select open">
      <span className="current">Open house</span>
      <ul className="list">
        <li data-value="Property Status" className="option">Property Status</li>
        <li data-value="Open house" className="option selected focus">Open house</li>
        <li data-value="Rent" className="option">Rent</li>
        <li data-value="Sale" className="option">Sale</li>
        <li data-value="Sold" className="option">Sold</li>
        </ul>
      </div>
  )
}

export default Select