
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { FormLabel, TextField } from '@mui/material';


const UserFormCIN: React.FC= () => {
    return (
        <Box >
            <FormControl sx={{ width: '25ch' }}>
                <div className="text-center"><FormLabel className="text-wider mb-3">Enter Your CIN </FormLabel></div>
                <TextField id="outlined-basic" margin="normal" label="CIN" variant="outlined" />
            </FormControl>
        </Box>
    );
}

export { UserFormCIN }