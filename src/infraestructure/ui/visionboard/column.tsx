import { Droppable } from "react-beautiful-dnd"
import CardBoard from "./card_board"
import { useMemo } from "react"
import { Status } from "../../../domain/models/Status"
import { CarService } from "../../../domain/models/CarService"

export default function Column({ status, carServices }: { status: Status, carServices: CarService[] }) {

    const filteredServices = useMemo(() => {
        return carServices.filter(carService => carService.status.name === status.name)
    }, [carServices, status])

    return (
        <div key={status._id} className="bg-gray-50 p-4 rounded-md min-w-[350px] flex flex-col gap-4 max-h-[750px] min-h-[650px]">
            <div className="flex justify-between items-center">
                <div className="bg-sky-500 rounded-md w-fit px-2 py-1">
                    <p className="text-sm tracking-normal font-bold text-white">{status.name.toUpperCase()}</p>
                </div>
                <p className="text-xs">{filteredServices.length}</p>
            </div>
            <Droppable droppableId={status._id}>
                {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-4 overflow-y-auto h-full">
                            {
                                filteredServices.map((carService, index) => (
                                    <CardBoard carService={carService} index={index} key={carService._id}/>
                                ))
                            }
                            {provided.placeholder}

                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}