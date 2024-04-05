import { useMutation, useQueryClient } from '@tanstack/react-query';
import CarServiceService from '../../../domain/services/car_service/car_service.services';

function useUpdateStatusInCarService() {
    const carServiceService = new CarServiceService();
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['update-status-car-service'],
        mutationFn: (props: { car_service_id: string, status_id: string }) => carServiceService.update_status_car_service(props),
        onError: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-car_services'],
            });
        }
    });
}

export default useUpdateStatusInCarService;
