
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel, Stack } from "@mui/material";
import { AgeProps } from "../interfaces"

const Age: React.FC<AgeProps> = ({ setAge }) => {

    return (
        <>
            <FormControl>

                <FormLabel className="text-wider mb-6">What is your birth date ?</FormLabel>
                <Stack component="form" noValidate spacing={3}>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2010-01-01"
                        onChange={(e) => setAge(e.target.value)}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Stack>
            </FormControl>
        </>
    )
}

export { Age }