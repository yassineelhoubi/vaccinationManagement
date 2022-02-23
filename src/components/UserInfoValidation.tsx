import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { Container, FormLabel, TextField } from '@mui/material';

const UserInfoValidation: React.FC = () => {
    return (

        <FormControl sx={{
            mx: "auto",
            '& .MuiTextField-root': { m: 1, width: '100%' },
        }}>
            <FormLabel className="text-wider mb-3 lg:flex lg:justify-center hidden">Validate Your Information </FormLabel>
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
                <TextField size="small" id="outlined-basic" margin="normal" label="First Name" variant="outlined" />
                <TextField size="small" id="outlined-basic" margin="normal" label="Last Name" variant="outlined" />
            </div>
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
                <TextField size="small" id="outlined-basic" margin="normal" label="Phone" variant="outlined" />
                <TextField size="small" id="outlined-basic" margin="normal" label="Email" variant="outlined" />
            </div>
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
                <TextField size="small" id="outlined-basic" margin="normal" label="City" variant="outlined" />
                <TextField size="small" id="outlined-basic" margin="normal" label="Address" variant="outlined" />
            </div>

        </FormControl>

    )
}

export { UserInfoValidation }