import { useMutation, useQueryClient } from '@tanstack/react-query';

import { create_car_service_dto } from '../../../domain/models/CarService';
import CarServiceService from '../../../domain/services/car_service/car_service.services';

function useCreateCarService() {
    const carServiceService = new CarServiceService();
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['create-car-service'],
        mutationFn: (car_service: create_car_service_dto) => carServiceService.create_car_service(car_service),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-car_services'],
            });
        }
    });
}

export default useCreateCarService;
