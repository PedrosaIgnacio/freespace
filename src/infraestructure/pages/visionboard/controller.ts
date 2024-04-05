import { useEffect, useState } from "react";
import useGetCarServices from "../../hooks/car_service/useGetCarServices";
import useGetStatuses from "../../hooks/status/useGetStatuses";

export default function useController () {
    const { data: statusesData, isFetching: isFetchingStatuses } = useGetStatuses();
    const { data: carServicesData, isFetching: isFetchingCarServices } = useGetCarServices();

    const [statuses, setStatuses] = useState(statusesData?.statuses ?? []);
    const [carServices, setCarServices] = useState(carServicesData?.car_services ?? []);

    useEffect(() => {
        if(statusesData && carServicesData){
            setStatuses(statusesData?.statuses);
            setCarServices(carServicesData?.car_services);
        }
    }, [statusesData, carServicesData ])
    return {
        statuses,
        setStatuses,
        carServices,
        setCarServices,
        isFetchingStatuses,
        isFetchingCarServices
    }
}