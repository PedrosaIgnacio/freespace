import toast from "react-hot-toast"
import { CarService } from "../../../domain/models/CarService";

export const created_notify = (carService: CarService) => {
    toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        {/* <img
                            className="h-10 w-10 rounded-full"
                            src={Bricces}
                            alt="bricces-logo"
                        /> */}
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            {carService.full_name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {carService.car_brand + ' ' + carService.car_model + ' ' + carService.car_color} 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Cerrar
                </button>
            </div>
        </div>
    ))
}
export const update_status_notify = (carService: CarService) => {
    console.log(carService)
    toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        {/* <img
                            className="h-10 w-10 rounded-full"
                            src={Bricces}
                            alt="bricces-logo"
                        /> */}
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            {carService.full_name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {carService.car_brand + ' ' + carService.car_model + ' ' + carService.car_color} 
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            Ahora esta en estado <span className="text-sm text-gray-500 capitalize">{carService.status.name} </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Cerrar
                </button>
            </div>
        </div>
    ))
}
