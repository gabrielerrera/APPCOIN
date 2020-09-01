import axios from 'axios';

/**
 * Android com emulador: localhost => (adb reverse tcp:3333 tcp:3333) 
 * Android com emulador: 10.0.2.2 => (Android Studio)
 * Android com emulador: 10.0.3.2 => (Genymotion)
 */

const api = axios.create({
//  baseURL: 'http://10.0.2.2:3333',
    baseURL: 'https://min-api.cryptocompare.com/data/',
});

export default api;
