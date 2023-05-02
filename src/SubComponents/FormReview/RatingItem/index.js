import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
export default function RatingItem({handleChangeRating,ratingValue}) {
  
  
  return (
    
      <Box sx={{ display: 'flex',justifyContent: 'center',alignContent: 'center'}} >
      <Rating
        name="simple-controlled"
        value={ratingValue}
        size="small"
        onChange={(event, newValue) => {
          handleChangeRating(newValue);
        }}
      />
      </Box>
     
   
  );
}