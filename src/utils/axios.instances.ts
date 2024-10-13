// Lib Imports.
import axios from 'axios';

export const userReq = axios.create({ baseURL: '/api/user/' });
