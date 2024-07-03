import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DisabledSlider from './DisabledSlider'

export default function AccordionUsage({ name, product, type }) {
  return (
    <div className="mt-3">
      <Accordion
        sx={{
          backgroundColor: 'black',
          color: 'white',
          borderTop: '2px solid #5b5957',
          borderRadius: '0px',
          fontWeight: '500',
          textTransform: 'uppercase',
          '@media (min-width:1068px)': {
            width: '100%',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          {name}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          {type === 'flavour_profile' && product.product_description[type]}
          {type === 'ATTRIBUTES' &&
            product.product_description.ATTRIBUTES &&
            product.product_description.ATTRIBUTES.map((current, index) => (
              <DisabledSlider
                index={index}
                key={index}
                current={current}
                theme={product.theme}
              />
            ))}
          {type === 'details' &&
            product.product_description.details &&
            product.product_description.details.map((current, index) => (
              <ul key={index} className="list-disc text-white">
                <li className="hover:text-white hover:no-underline">
                  {current}
                </li>
              </ul>
            ))}
          {type === 'Size' && (
            <div className=" flex w-full items-center justify-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0271/7209/files/Unisex_Tee_Shirt_Size_Chart_600x600.jpg?v=1705614865"
                alt="Unisex Tee Shirt Size Chart"
              />
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
