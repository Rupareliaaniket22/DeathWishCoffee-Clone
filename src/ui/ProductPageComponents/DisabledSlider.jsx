import React from 'react'
import Slider from '@mui/material/Slider'
import { Box, Typography } from '@mui/material'

export default function DisabledSlider({ index, current, theme }) {
  const current_theme =
    theme === 'themegolden'
      ? '#AC6E39'
      : theme === 'themepurple'
        ? '#7F5DC7'
        : '#E12727'

  return (
    <Box sx={{ width: '100%', mt: '-10px' }}>
      <Typography
        variant="body2"
        color="white"
        sx={{
          mt: '20px',
          fontWeight: '1000',
          fontSize: '15px',
        }}
      >
        {Object.keys(current)[0]}
      </Typography>
      <Slider
        defaultValue={Object.values(current)[0]}
        disabled
        aria-label="Disabled slider"
        sx={{
          color: current_theme,
          height: '4px',
          '& .MuiSlider-track': {
            color: current_theme,
          },
          '& .MuiSlider-thumb': {
            color: current_theme,
            height: '10px',
            width: '10px',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'grey', // Change color to backgroundColor
          },
          '& .Mui-disabled': {
            color: current_theme,
          },
          m: 0,
          p: 0.5,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="body2"
          color="white"
          sx={{ p: 0, fontSize: '13px' }}
        >
          {index === 0 ? 'light' : 'low'}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          sx={{ p: 0, fontSize: '13px' }}
        >
          {index !== 0 && 'medium'}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          sx={{ p: 0, fontSize: '13px' }}
        >
          {index === 0 ? 'dark' : 'high'}
        </Typography>
      </Box>
    </Box>
  )
}
