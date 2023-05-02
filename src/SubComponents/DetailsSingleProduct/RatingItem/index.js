import React,{useEffect,useState} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
export default function RatingItem({ratingValue}) {
  
  const [value, setValue] = useState(0);
  useEffect(()=>{
    setValue(ratingValue);
  },[ratingValue])
  return (
    
      <Box sx={{ display: 'flex',justifyContent: 'center',alignContent: 'center'}} >
      <Rating
        name="simple-controlled"
        value={value}
        size="small"
        readOnly
      />
      </Box>
     
   
  );
}