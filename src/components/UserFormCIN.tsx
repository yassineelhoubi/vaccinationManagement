
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { FormLabel, TextField } from '@mui/material';
import { CinProps } from '../interfaces';


const UserFormCIN: React.FC<CinProps> = ({ cin, setCin }) => {
    return (
        <Box >
            <FormControl sx={{ width: '25ch' }}>
                <div className="text-center"><FormLabel className="text-wider mb-3">Enter Your CIN </FormLabel></div>
                <TextField id="outlined-basic" margin="normal" label="CIN" onChange={(e) => setCin(e.target.value)} variant="outlined" />
            </FormControl>
        </Box>
    );
}

export { UserFormCIN }