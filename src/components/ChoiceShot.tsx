import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';

const ChoiceShot:React.FC = () => {
    return (
        <FormControl>
            <FormLabel  className="text-wider mb-6">Choice Your Shot</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="1st" control={<Radio />} label="1st" />
                <FormControlLabel value="2nd" control={<Radio />} label="2nd" />
                <FormControlLabel value="3rd" control={<Radio />} label="3rd" />
            </RadioGroup>
        </FormControl>
    )
}

export { ChoiceShot }