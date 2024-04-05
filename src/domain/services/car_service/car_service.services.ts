import { AxiosResponse } from 'axios';
import { axiosClient } from '../../api/axios';
import { CreateCarServiceResponse, GetCarServicesResponse } from './types';
import { CarService, create_car_service_dto } from '../../models/CarService';

export default class CarServiceService {
    async get_car_services(): Promise<GetCarServicesResponse> {
        const response: AxiosResponse<GetCarServicesResponse> = await axiosClient.get('/car-service');
        return response.data;
    }

    async create_car_service(car_service_dto: create_car_service_dto) {
        const response: AxiosResponse<CreateCarServiceResponse> = await axiosClient.post('/car-service', car_service_dto);
        return response.data;
    }
    
    async update_status_car_service(props: { car_service_id: string, status_id: string }) {
        const { car_service_id, status_id } = props;
        const response: AxiosResponse<CarService> = await axiosClient.put(`/car-service/${car_service_id}`, { status_id });
        return response.data;
    }
}
