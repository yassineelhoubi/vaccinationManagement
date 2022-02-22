import { FormLabel, OutlinedInput } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { SideEffectsProps } from '../interfaces';

const SideEffects: React.FC<SideEffectsProps> = ({ sideEffects, setSideEffects }) => {
    return (
        <FormControl className="">
            <FormLabel className="text-wider mb-3">Do you have any side effects after your last shot?</FormLabel>
            <RadioGroup
                onChange={(e) => setSideEffects(JSON.parse(e.target.value))}
                className="flex justify-center"
                row
                value={sideEffects}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value={false} checked={!sideEffects} control={<Radio />} label="No" />
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
            </RadioGroup>
            {sideEffects && <OutlinedInput placeholder="Describe your situation" />}
        </FormControl>
    )
}

export { SideEffects }