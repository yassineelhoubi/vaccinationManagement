import FormControl from '@mui/material/FormControl';
import { FormLabel, TextField } from '@mui/material';
import { UserInfoProps, UserInfo } from '../interfaces';
import { useEffect } from 'react';

const UserInfoValidation: React.FC<UserInfoProps> = ({ setUserInfo, userInfo }) => {
    
    const newData = { ...userInfo }
    const handleChange = (e: any) => {
        //@ts-ignore
        newData[e.target.id] = e.target.value as UserInfo
        setUserInfo(newData)
    }



    return (


        <FormControl onChange={(e) => handleChange(e)} sx={{
            mx: "auto",
            '& .MuiTextField-root': { m: 1, width: '100%' },
        }}>
            <FormLabel className="text-wider mb-3 lg:flex lg:justify-center hidden">Validate Your Information </FormLabel>
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
                <TextField size="small" value={userInfo.fName} id="fName" margin="normal" label="First Name" variant="outlined" />
                <TextField size="small" value={userInfo.lName} id="lName" margin="normal" label="Last Name" variant="outlined" />
            </div>
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
                <TextField size="small" value={userInfo.nbrPhone} type="number" id="nbrPhone" margin="normal" label="Phone" variant="outlined" />
                <TextField size="small" value={userInfo.email} id="email" margin="normal" label="Email" variant="outlined" />
            </div>
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
                <TextField size="small" value={userInfo.city} id="city" margin="normal" label="City" variant="outlined" />
                <TextField size="small" value={userInfo.address} id="address" margin="normal" label="Address" variant="outlined" />
            </div>

        </FormControl>

    )
}

export { UserInfoValidation }