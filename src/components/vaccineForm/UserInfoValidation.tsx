import FormControl from '@mui/material/FormControl';
import { FormHelperText, FormLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { UserInfoProps, UserInfo, Areas, Cities, Centers } from '../../interfaces';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfoValidation: React.FC<UserInfoProps> = ({ setUserInfo, userInfo, setVaccinLocation }) => {
    
    const newData = { ...userInfo }
    const handleChange = (e: any) => {
        //@ts-ignore
        newData[e.target.id] = e.target.value as UserInfo
        setUserInfo(newData)
    }

    const [area , setArea ] = useState<Areas>({
        id : "",
        region : "",
    });
    const [ city , setCity ] = useState<Cities>({
        id : "",
        ville : "",
        region: ""
    });
    const [ center , setCenter ] = useState({
        name : "",
    });
    
    const [data, setData ] = useState<Areas[]>([])
    const [cities, setCities ] = useState<Cities[]>([])
    const [centers, setCenters ] = useState<Centers>({
        status : false,
        message : [{
            _id: "",
            name: "",
            city: "",
            area: "",
            createdBy: "",
            createdAt: "",
            updatedAt: ""
        }]
    })

    const getCenters = (region : string , city : string ) => {

        let based_url : string = `${process.env.REACT_APP_BASE_URL}api/manager/getAllCenters`

        if (region && city ){
            based_url = `${based_url}?area=${region}&city=${city}`
        }
        axios.get(based_url)
        .then((res) => {
            setCenters(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const getCities = (id : number) => {
        axios.get(`${process.env.REACT_APP_GET_CITIES_BY_AREA_API}/${id}`)
        .then((res) => {
            setCities(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const pickCenter= (event: SelectChangeEvent) => {
        setCenter({name : event.target.value});
        setVaccinLocation({ area : area.region ,city : city.ville ,center : event.target.value});
    }
    
    const pickCity= (event: SelectChangeEvent) => {
        const obj = cities.filter( (element) => { return element.ville == event.target.value});
        setCity(obj[0]);
        getCenters(area.region, obj[0].ville)
    }

    const pickArea = (event: SelectChangeEvent) => {
        const obj = data.filter( (element) => { return element.region == event.target.value});
        setArea(obj[0]);
        getCities(+obj[0].id)
    };


    const getData = () => {
        
        axios.get(`${process.env.REACT_APP_AREAS_API}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
        
    }


    useEffect(() => {
        getData();
    }, [])



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
                <div className="flex w-full justify-between items-center lg:flex-row flex-col">
                <FormControl id="formControlArea" size="small" required sx={{ m: 1, width: 1 }} fullWidth>
                    <InputLabel id="areas">Areas</InputLabel>
                    <Select labelId="area" id="area" value={area.region} label="Area *" onChange={pickArea}>
                    { data && data.map((d) => ( <MenuItem key={d.id} value={d.region} data-datax={d.region}>{d.region}</MenuItem> )) }
                    </Select>
                </FormControl>

                <FormControl size="small" required sx={{ m: 1, width: 1 }}>
                    <InputLabel id="cities">Cities</InputLabel>
                    <Select labelId="city" id="city" value={city.ville} label="City *" onChange={pickCity}>
                    { cities.length > 0 && cities.map((city) => ( <MenuItem key={city.id}  value={city.ville}>{city.ville}</MenuItem> )) }
                    </Select>
                </FormControl>
                
                </div>
                <div className="flex w-full justify-center items-center lg:flex-row flex-col">
                <FormControl size="small" required sx={{ m: 1, width: 1 }}>
                    <InputLabel id="centers">Centers</InputLabel>
                    <Select labelId="center" id="center" value={center.name} label="Center *" onChange={pickCenter}>
                    { (centers.status && Array.isArray(centers.message)) && centers.message.map((center) => ( <MenuItem key={center._id} value={center.name} >{center.name}</MenuItem> )) || (<MenuItem disabled value="">no center right now!</MenuItem>)}
                    </Select>
                </FormControl>
                    
                </div>

            </FormControl>

    )
}

export { UserInfoValidation }