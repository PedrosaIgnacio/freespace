import { useState } from "react";
import useGetStatuses from "../../hooks/status/useGetStatuses";
import useGetCarServices from "../../hooks/car_service/useGetCarServices";

export default function useController () {
    const { data: statusesData } = useGetStatuses();
    const { data: carServicesData } = useGetCarServices();

    const [statuses, setStatuses] = useState(statusesData?.statuses);
    const [carServices, setCarServices] = useState(carServicesData?.car_services);

    return {
        statuses,
        setStatuses,
        carServices,
        setCarServices
    }
}