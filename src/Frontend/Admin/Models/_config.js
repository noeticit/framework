import {decrypt} from './_encrypt.js'

export const getHeader = function () {
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    const headers = {
        'Accept': 'application/json',
        'Authorization': tokenData ? 'Bearer ' + decrypt(tokenData.access_token) : null
    };
    return headers
};

export const clientId = process.env.CLIENT_ID;

export const clientSecret = process.env.CLIENT_SECRET;

export const appUrl = process.env.APP_URL
