import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('male');

  const handleChange = (event) => {
    setValue(event.target.value);
  };    

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="value" control={<Radio />} label="Cash on Delivery" />
      </RadioGroup>
    </FormControl>
  );
}
