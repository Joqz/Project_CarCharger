import axios from 'axios';
import constants from '../constants.json';

let UserInfo = {
  username: null,
  password: null
}

let Authenticator = {
    authenticate: (username, password) => {      
      return new Promise((resolve, reject) => {
        axios.get(constants.baseAddress + '/users/:id', 
          {
              auth: {
              username: username,
              password: password
            }
          })
          .then(result => {
            UserInfo = {
              username: username,
              password: password
            }
            resolve();
          })
          .catch(error => 
            {
              console.log(error);
              reject();
            }
          )
      });
    },
    getAxiosAuth: () => {
      return {
        auth: UserInfo
      }
    } 
}

export default Authenticator;