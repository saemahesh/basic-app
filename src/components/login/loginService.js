import axios from "axios";
import { env_config } from '../config/env'


export let login = (data) => {
	console.log("login service env_config: ", env_config);
  console.log('\n\n data ', data)
    axios.post(`${env_config.BASE_URL}/users/login`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};
