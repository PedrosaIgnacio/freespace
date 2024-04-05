import { Draggable } from "react-beautiful-dnd";
import DragIcon from '../../../assets/drag-icon.svg';
import { CarService } from "../../../domain/models/CarService";

export default function CardBoard({ carService, index }: { carService: CarService, index: number }) {

    return (
        <div key={carService._id} >
            <Draggable index={index} draggableId={carService._id} >
                {(provided) => (
                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className="bg-white p-4 rounded-md border-[1px] shadow-sm flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="tracking-normal font-medium text-sm capitalize">{carService.car_brand + ' ' + carService.car_model}</p>
                                <p className="tracking-tighter font-medium text-xl">{carService.license_plate}</p>
                            </div>
                            <div className="w-5 h-5">
                                <img src={DragIcon} alt="drag-icon" className="w-full" />
                            </div>
                        </div>
                        <div className="bg-emerald-600 w-fit px-2 py-1 rounded-full">
                            <p className="text-white tracking-wider font-normal text-[10px]">{carService.full_name}</p>
                        </div>
                    </div>
                )}
            </Draggable>
        </div>
    )
}