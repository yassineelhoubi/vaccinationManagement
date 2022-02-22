import { FormHelperText, FormLabel, OutlinedInput, TextareaAutosize } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
const DiseaseOrTreatments = () => {
    const [diseaseOrTreatments, setDiseaseOrTreatments] = useState<boolean>(false)
    return (

        <FormControl className="">
            <FormLabel className="text-wider mb-3">Do you suffer from any Diseases Or Treatments?</FormLabel>
            <RadioGroup
                onChange={(e) => setDiseaseOrTreatments(JSON.parse(e.target.value))}
                className="flex justify-center"
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value={false} checked={!diseaseOrTreatments} control={<Radio />} label="No" />
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
            </RadioGroup>
            {diseaseOrTreatments && <OutlinedInput placeholder="Describe your situation" />}
        </FormControl>

    )
}

export { DiseaseOrTreatments }