import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';
import { ShotProps } from "../interfaces"
const ChoiceShot: React.FC<ShotProps> = ({ setShot, shot }) => {
    return (
        <FormControl className="">
            <FormLabel className="text-wider mb-3">Choice Your Shot</FormLabel>
            <RadioGroup
                onChange={(e) => setShot(Number(e.target.value))}
                className="flex justify-center mb-6"
                value={shot}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="1" control={<Radio />} label="1st" />
                <FormControlLabel value="2" control={<Radio />} label="2nd" />
                <FormControlLabel value="3" control={<Radio />} label="3rd" />
            </RadioGroup>
        </FormControl>
    )
}

export { ChoiceShot }