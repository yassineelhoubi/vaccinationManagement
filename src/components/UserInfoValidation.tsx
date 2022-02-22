import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { FormLabel, TextField } from '@mui/material';

const UserInfoValidation: React.FC = () => {
    return (
        <Box >
            <FormControl sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}>
                <div className="text-center"><FormLabel className="text-wider mb-3">Validate Your Information </FormLabel></div>
                <div>
                    <TextField id="outlined-basic" margin="normal" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" margin="normal" label="Last Name" variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" margin="normal" label="Phone" variant="outlined" />
                    <TextField id="outlined-basic" margin="normal" label="Email" variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" margin="normal" label="City" variant="outlined" />
                    <TextField id="outlined-basic" margin="normal" label="Address" variant="outlined" />
                </div>
            </FormControl>
        </Box>
    )
}

export { UserInfoValidation }