import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function RatingItem({nb}) {
  const [value, setValue] = React.useState(0);
  React.useEffect(()=> {
    setValue(nb);
  },[nb])
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Rating
        name="simple-controlled"
        value={value}
        readOnly
        size="small"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     
    </Box>
  );
}