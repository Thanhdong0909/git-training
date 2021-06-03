import { FormControl, InputLabel, NativeSelect, Select } from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';
import React from 'react';

const CountrySelector = ({value, handleOnChange, countries }) => {
  return (
    <FormControl>
      <InputLabel htmlFor='contry-selector' shrink>
        Quốc gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'country',
          id: 'country-selector'
        }}
      >
        {
          countries.map((country) => (
            <option value={country.ISO2.toLowerCase()} key={country.ISO2}>
              {country.Country}
            </option>
          ))
        }
      </NativeSelect>
    </FormControl>
  )
}

export default CountrySelector;