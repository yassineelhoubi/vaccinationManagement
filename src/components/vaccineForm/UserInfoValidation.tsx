import FormControl from '@mui/material/FormControl';
import { FormHelperText, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { UserInfoProps, UserInfo, areas, cities, centers } from '../../interfaces';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfoValidation: React.FC<UserInfoProps> = ({ setUserInfo, userInfo }) => {
    
    const newData = { ...userInfo }
    const handleChange = (e: any) => {
        //@ts-ignore
        newData[e.target.id] = e.target.value as UserInfo
        setUserInfo(newData)
    }

    const [area , setArea ] = useState<areas>({
        id : "",
        region : "",
    });
    const [ city , setCity ] = useState<cities>({
        id : "",
        ville : "",
        region: ""
    });
    const [ center , setCenter ] = useState({
        center : "",
    });
    

    const [data, setData ] = useState<areas[]>([])
    const [cities, setCities ] = useState<cities[]>([])
    const [centers, setCenters ] = useState<centers>({
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

        let based_url : string = "http://localhost:4000/api/manager/getAllCenters"

        if (region && city ){
            based_url = `${based_url}?area=${region}&city=${city}`
        }
        console.log("this is based_url" + based_url)
        axios.get(based_url)
        .then((res) => {
            console.log("this data coming from area and center", res.data.message);
            setCenters(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const getCities = (id : number) => {
        console.log("this is id : ",id);
        axios.get(`https://calm-fjord-14795.herokuapp.com/api/villes/${id}`)
        .then((res) => {
            console.log(res.data);
            setCities(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const pickArea = (event: SelectChangeEvent) => {

        const obj = data.filter( (element) => { return element.region == event.target.value});
        setArea(obj[0]);
        getCities(+obj[0].id)
        
    };

    const pickCity= (event: SelectChangeEvent) => {
        const obj = cities.filter( (element) => { return element.ville == event.target.value});
        setCity(obj[0]);
        getCenters(area.region, obj[0].ville)
    }

    const pickCenter= (event: SelectChangeEvent) => {
        
        setCenter({center : event.target.value});
        // getCenters(area.region, obj[0].ville)
    }

    const getData = () => {
        
        axios.get(`https://calm-fjord-14795.herokuapp.com/api/regions`)
        .then((res) => {
            console.log(res.data);
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
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Areas</InputLabel>
                <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required" value={area.region} label="Area *" onChange={pickArea}>
                { data && data.map((d) => ( <MenuItem key={d.id} value={d.region} data-datax={d.region}>{d.region}</MenuItem> )) }
                </Select>
            </FormControl>

            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label2">Cities</InputLabel>
                <Select labelId="demo-simple-select-required-label2" id="demo-simple-select-required" value={city.ville} label="City *" onChange={pickCity}>
                { cities.length > 0 && cities.map((city) => ( <MenuItem key={city.id} value={city.ville} data-datax={city.ville}>{city.ville}</MenuItem> )) }
                </Select>
            </FormControl>
            
            </div>
            <div className="flex w-full justify-center items-center lg:flex-row flex-col">
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Cities</InputLabel>
                <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required" value={center.center} label="Center *" onChange={pickCenter}>
                { (centers.status && Array.isArray(centers.message)) && centers.message.map((center) => ( <MenuItem key={center._id} value={center.city} data-datax={center.city}>{center.name}</MenuItem> )) || (<MenuItem>no center right now!</MenuItem>)}
                {/* { (centers || {message : []})?.message?.length > 0 && (centers || {message : []}).message.map((center) => ( <MenuItem key={center.area} value={center.city} data-datax={center.city}>{center.name}</MenuItem> )) } */}
                </Select>
            </FormControl>
                
            </div>

        </FormControl>

    )
}

export { UserInfoValidation }