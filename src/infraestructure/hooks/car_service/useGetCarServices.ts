import { useQuery } from '@tanstack/react-query';
import CarServiceService from '../../../domain/services/car_service/car_service.services';

const useGetCarServices = () => {
    const carServiceService = new CarServiceService();
    return useQuery({
        queryKey: ['get-car_services'],
        queryFn: () => carServiceService.get_car_services(),
    });
};

export default useGetCarServices;
