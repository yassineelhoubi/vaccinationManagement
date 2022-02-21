
import TextField from '@mui/material/TextField';
import { Stack } from "@mui/material";
import { AgeProps } from "../interfaces"

const Age: React.FC<AgeProps> = ({ setValue }) => {

    return (
        <Stack component="form" noValidate spacing={3}>
            <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2010-01-01"
                onChange={(e) => setValue(e.target.value)}
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Stack>
    )
}

export { Age }