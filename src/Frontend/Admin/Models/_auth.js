import {encrypt} from "./_encrypt"
import {getHeader} from "./_config"

export default class auth {

    //Finding logged-in user.
    isLoggedIn() {
        tokenData = JSON.parse(window.localStorage.getItem('authUser'))
        return tokenData.access_token ? true : false;
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
            axios.post('oauth/token', postData).then(response => {
                if (response.status === 200) {
                    authUser.access_token = encrypt(response.data.access_token);
                    authUser.refesh_token = encrypt(response.data.refresh_token);
                    window.localStorage.setItem('authUser', JSON.stringify(authUser));

                    axios.get('nits-system-api/user', {headers: getHeader()}).then(response => {
                        if(response.status === 200)
                        {
                            authUser.name = encrypt(response.data.name)
                            authUser.email = encrypt(response.data.email)
                            authUser.email_verified_at = encrypt(response.data.email_verified_at)
                            window.localStorage.setItem('authUser', JSON.stringify(authUser));

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
