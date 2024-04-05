import { useQuery } from '@tanstack/react-query';
import StatusService from '../../../domain/services/status/status.service';

const useGetStatuses = () => {
    const statusService = new StatusService();
    return useQuery({
        queryKey: ['get-statuses'],
        queryFn: () => statusService.getStatuses(),
    });
};

export default useGetStatuses;
