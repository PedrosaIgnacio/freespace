import { Dispatch, SetStateAction, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./column";
import { CarService } from '../../../domain/models/CarService';
import { Status } from "../../../domain/models/Status";
import useUpdateStatusInCarService from "../../hooks/car_service/useUpdateStatusInCarService";
import { update_status_notify } from "../../pages/visionboard/toast";

interface BoardProps {
    carServices: CarService[];
    setCarServices: Dispatch<SetStateAction<CarService[]>>
    statuses: Status[]
    setStatuses: Dispatch<SetStateAction<Status[]>>
}

export default function Board({ carServices, setCarServices, statuses }: BoardProps) {
    const { mutate, data } = useUpdateStatusInCarService()
    const onDragEnd = (result: DropResult) => {
        const { draggableId, destination, source } = result;

        if (!destination?.droppableId) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            return;
        }

        setCarServices((current) => {
            const filteredCarServices = current.filter(service => service._id !== draggableId);
            const carServiceFound = current.find(carService => draggableId === carService._id);
            const destinationStatus = statuses.find(status => status._id === destination.droppableId);

            if (!destinationStatus || !carServiceFound) {
                return [];
            }

            const updatedService = { ...carServiceFound, status: destinationStatus };

            if (filteredCarServices.length > 0) {
                return [...filteredCarServices, updatedService]
            }
            return [updatedService];
        })
        mutate({ car_service_id: draggableId, status_id: destination.droppableId })
    }

    useEffect(() => {
        if(data){
            update_status_notify(data);
        }
    },[data])


    return (
        <div>
            <DragDropContext onDragEnd={(result) => onDragEnd(result)} >
                <div className="flex overflow-x-scroll md:overflow-auto gap-4 ">
                    {
                        statuses?.map(status => (
                            <Column status={status} carServices={carServices} key={status._id} />
                        ))
                    }
                </div>
            </DragDropContext>
        </div>
    )
}