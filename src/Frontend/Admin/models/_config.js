import {decrypt} from './_encrypt.js'
import VueSession from 'NitsModels/_session';

const session = new VueSession('localStorage', process.env.MIX_LIFE_SESSION, process.env.INACTIVITY_SESSION);

export const getHeader = function () {
    const tokenData = session.get('authUser')
    const headers = {
        'Accept': 'application/json',
        'Authorization': tokenData ? 'Bearer ' + decrypt(tokenData.access_token) : null
    };
    return headers
};

export const clientId = process.env.MIX_CLIENT_ID;

export const clientSecret = process.env.MIX_CLIENT_SECRET;

export const appUrl = process.env.MIX_APP_URL;
