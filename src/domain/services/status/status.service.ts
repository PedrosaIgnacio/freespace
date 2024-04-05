import { AxiosResponse } from 'axios';
import { axiosClient } from '../../api/axios';
import { GetStatusesResponse } from './types';

export default class StatusService {
    async getStatuses(): Promise<GetStatusesResponse> {
        const response: AxiosResponse<GetStatusesResponse> = await axiosClient.get('/status');
        console.log(response.data);
        return response.data;
    }
}
