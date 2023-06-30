import axios from 'axios';
import { apiURL } from '../helper/constants.helper';
import { token } from '../features/auth/authSlice';

export interface TUseFetchParams {
    path?: string | number;
    route: string;
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
    data?: object;
    params?: object;
    withToken?: boolean;
}

export const fetchApi = async (props : TUseFetchParams) => {
    const { route, method, path, data, params, withToken = true } = props;

    const routeAux = path ? `${route}/${path}` : route;

    const headers = {
        Authorization:  withToken ? `Bearer ${token}` : ''
    }
    const response = await axios({
        method: method || 'get',
        url: `${apiURL}/${routeAux}`,
        data,
        params,
        headers
    })
    return response;

}