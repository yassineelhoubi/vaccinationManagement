import axios from "axios"
import { Manager } from './../interfaces';

const login = async (user: any) => {

    let url = ''
    if (user.role == "admin") {
      url = `${process.env.REACT_APP_BASE_URL}api/admin/login`
    } else {
      url = `${process.env.REACT_APP_BASE_URL}api/manager/login`
    }
    const res = await axios.post(url, {
        email: user.email,
        password: user.password
    })
    return res

}
export { login }