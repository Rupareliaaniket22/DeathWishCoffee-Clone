import React, { useState } from 'react'
import ReactSelect from 'react-select'

function Options({ options, type }) {
  const ImageOption = ({ data, ...props }) => (
    <div className="flex w-full items-center border-b-2 border-[#5B5957] p-2">
      <img
        src={
          type === 'size'
            ? '/data/baglogo.svg'
            : data.label === 'ground'
              ? '/data/ground.svg'
              : '/data/wholebean.svg'
        }
        alt="Bag Logo"
        style={{ width: '20px' }}
      />
      <span className="ml-3 text-xl text-white">{data.label}</span>
    </div>
  )
  const defaultOption = {
    value: options[0],
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={type === 'size' ? '/data/baglogo.svg' : '/data/ground.svg'}
          alt="Bag Logo"
          style={{ width: '20px', marginRight: '2px' }}
        />
        <span className="text-xl text-white">{options[0].label}</span>
      </div>
    ),
  }

  const [selectedOption, setSelectedOption] = useState(defaultOption)

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'black',
      width: '100%',
      borderColor: '#5B5957',
      boxShadow: 'none',
      padding: '10px',
      '&:hover': {
        borderColor: '#5B5957',
      },
      '&:focus': {
        outline: 'none',
        borderColor: 'white',
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'black',
      color: 'white',
      width: '100%',
      '&:hover': {
        backgroundColor: 'black',
      },
    }),

    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'black',
    }),
  }

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  return (
    <ReactSelect
      options={options}
      value={selectedOption}
      onChange={handleChange}
      styles={customStyles}
      className="w-4/5 p-1 text-base font-light"
      components={{ Option: ImageOption }}
    />
  )
}

export default Options
