import React, {useEffect, useState} from 'react';
import moment from 'moment';
import '@fontsource/roboto';

import CountrySelector from './components/CountrySelector';
import HighLight from './components/HightLigh';
import Summary from './components/Summary';
import {getCountries, getCountryDetail} from './apis/countryAPi';
import { sortBy } from 'lodash';
import 'moment/locale/vi';
import { Container, Typography } from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState('');
  const [reportToday, setReportToday] = useState([]);

  useEffect(() => {
    getCountries().then((res)=>{
      const countries = sortBy(res.data, 'Country');
      setCountries(countries);
      setCountrySelected('vn');
    })
  }, []);

  useEffect(() => {
    if (countrySelected) {
      const {Slug} = countries.find((country) => country.ISO2.toLowerCase() === countrySelected)
      getCountryDetail(Slug).then((res) => {
        res.data.pop();
        setReportToday(res.data);
      })
    }
  }, [countrySelected, countries])

  const handleChangeContry = (e) => {
    setCountrySelected(e.target.value);
  }

  return (
    <Container>
      <Typography variant='h2' component='h2'>
        Số liệu Covid 19
      </Typography>
      <Typography>
        {moment().format('LLL')}
      </Typography>
      <CountrySelector countries={countries} handleOnChange={handleChangeContry} value={countrySelected}/>
      <HighLight data={reportToday}/>
      <Summary data={reportToday} countrySelected={countrySelected}/>
    </Container>
  );
}

export default App;
