import React from 'react';
import { Grid, CardContent, Typography, Card} from '@material-ui/core';

import HighLightCard from './view/HighLightCard';

const HighLight = ({data}) => {
  let result = [];
  if(data.length > 0) {
     result = [
      {
        title: "số ca nhiễm",
        count: data && data[data.length - 1].Confirmed,
        type: "confirmed",
      },
      {
        title: "số ca khỏi",
        count: data && data[data.length - 1].Recovered,
        type: "recovered",
      },
      {
        title: "số tử vong",
        count: data && data[data.length - 1].Deaths,
        type: "death",
      }
    ]
  }
  return (
    <Grid container spacing={3}>
      {
        result.length > 0 && result.map((item) =>
          <HighLightCard data={item} key={item.count}/>
        )
      }
    </Grid>

  )
}

export default HighLight;