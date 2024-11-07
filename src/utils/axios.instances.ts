// Lib Imports.
import axios from 'axios';

export const userReq = axios.create({ baseURL: '/api/user/' });

export const uploadImage = axios.create({ baseURL: '/api/upload/image/', method: 'POST' });
