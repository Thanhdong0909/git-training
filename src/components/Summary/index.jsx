import React, {useEffect, useState} from 'react';
import { Grid } from '@material-ui/core';

import LightChart from '../charts/LightChart';
import HighMaps from '../charts/HighMaps';

const Summary = ({data, countrySelected}) => {
  const [mapsData, setMapsData] = useState({});
  useEffect(() => {
    if(countrySelected) {
      import( `@highcharts/map-collection/countries/${countrySelected}/${countrySelected}-all.geo.json`)
      .then((res)=> setMapsData(res));
    }
  },[countrySelected])
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} sx={12}>
        <LightChart data ={data} />
      </Grid>
      <Grid item sm={6} sx={12}>
        <HighMaps mapData={mapsData}/>
      </Grid>
    </Grid>
  )
}

export default Summary;