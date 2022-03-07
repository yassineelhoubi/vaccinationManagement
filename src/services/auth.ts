import axios from "axios"
import { Manager } from './../interfaces';

const login = async (manager: Manager) => {

    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}api/manager/login`, {
        email: manager.email,
        password: manager.password
    })
    return res

}
export { login }