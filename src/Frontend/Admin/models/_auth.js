import {encrypt} from "./_encrypt";
import {getHeader} from "./_config";
import store from "../store/_store";

export default class auth {

    //Finding logged-in user.
    isLoggedIn() {
        const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
        return tokenData && tokenData.access_token ? true : false;
    }
    
    //Login
    login(user) {
        return new Promise((resolve, reject) => {
            const authUser = {}

            const postData = {
                grant_type: 'password',
                username: user.email,
                password: user.password,
                client_id: process.env.MIX_CLIENT_ID,
                client_secret: process.env.MIX_CLIENT_SECRET,
                scope: ''
            }
            axios.post('/oauth/token', postData).then(response => {
                if (response.status === 200) {
                    authUser.access_token = encrypt(response.data.access_token);
                    authUser.refesh_token = encrypt(response.data.refresh_token);
                    window.localStorage.setItem('authUser', JSON.stringify(authUser));

                    axios.get('/nits-system-api/user', {headers: getHeader()}).then(response => {
                        if(response.status === 200)
                        {
                            authUser.first_name = encrypt(response.data.first_name)
                            authUser.last_name = encrypt(response.data.last_name)
                            authUser.email = encrypt(response.data.email)
                            authUser.role_id = response.data.role_id
                            authUser.email_verified_at = encrypt(response.data.email_verified_at)
                            //Storing into local storage.
                            window.localStorage.setItem('authUser', JSON.stringify(authUser));
                            //Storing to state.
                            store.commit("STORE_USER_DATA", authUser);

                            return resolve('Login Successfull');
                        }
                    }).catch((err) => {
                        return reject(err);
                    })
                }
            }).catch((err) => {
                return reject(err);
            })
        })
    }

    //For Logout..
    logout() {
        window.localStorage.removeItem('authUser')
        return true;
    }

    //registration..
    registration(user) {
        //Call registration API, once done redirect them to login page.
        return new Promise((resolve, reject)  => {
            const userData = {
                first_name: user.first_name,
                email: user.email,
                mobile: user.mobile,
                password: user.password,
            }
            //User log request....
            axios.post('user/registration', userData).then(response => {
                if(response.status === 200)
                {
                    resolve('User Successfully Registered')
                }
            }).catch( (err) => {
                return reject(err);
            })
        })
    }
}
