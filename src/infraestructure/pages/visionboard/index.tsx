import Board from "../../ui/visionboard/board";
import Header from "../../ui/visionboard/header";
import useController from "./controller";


export default function VisionBoard() {
    const controller = useController();
    return (
        <div className="grid grid-cols-1">
            <Header />
            {
                controller.isFetchingCarServices || controller.isFetchingStatuses ?
                    <p>Cargando...</p>
                    :
                    <Board statuses={controller.statuses} carServices={controller.carServices} setCarServices={controller.setCarServices} setStatuses={controller.setStatuses} />
            }
        </div>
    )
}
