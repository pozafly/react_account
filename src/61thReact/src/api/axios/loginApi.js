
import axios from "axios";

export const login = (empCode,password) => {
    axios({
        method: "post",
        url: "http://localhost:8282/api/auth/login",
        fetchOnStart: false,
        data: {
            empCode : empCode,
            password : password
        }            
      })
};
