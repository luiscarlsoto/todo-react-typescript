import axios from 'axios';
import { apiURL } from '../helper/constants.helper';

export interface TUseFetchParams {
    path?: string;
    route: string;
    method?: 'get' | 'post' | 'put' | 'delete';
    data?: object;
    params?: object;
}

export const fetchApi = async (props : TUseFetchParams) => {
    const { route, method, path, data, params } = props;
    const routeAux = path ? `${route}/${path}` : route;

    const response = await axios({
        method: method || 'get',
        url: `${apiURL}/${routeAux}`,
        data,
        params,
    })
    return response;

}