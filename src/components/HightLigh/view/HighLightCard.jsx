import React from 'react';
import { CardContent, Grid, Typography, Card} from '@material-ui/core';

import CountUp from 'react-countup';

export default function HighLightCard ({data}) {
  return (
    <Grid item sm={4} xs={12}>
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">{data.title}</Typography>
          <Typography component="span" variant="body2">
            <CountUp end={data.count} duration={2} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}