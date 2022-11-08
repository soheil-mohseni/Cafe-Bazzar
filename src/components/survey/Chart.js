import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function Chart(props) {
  return (
    <Box sx={{ maxWidth: '500px' }}>
		<p style={{display: "inline-block",paddingLeft: '0px', marginTop:'0px' , float: 'left'}}> {props.number} <StarIcon sx={{fontSize: '15px'}}/></p>
      <BorderLinearProgress variant="determinate" sx={{ maxWidth: '466px', top: "5px" }} value={90.5} />
    </Box>
  );
}

export default Chart;
