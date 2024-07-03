import React, { useState } from 'react'

function CheckBoxAndLabel() {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="mt-2 flex gap-3">
      <input
        type="checkbox"
        id="emailCheckbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        className="p-3"
      />
      <label htmlFor="emailCheckbox">Email me with news and offers</label>
    </div>
  )
}

export default CheckBoxAndLabel
