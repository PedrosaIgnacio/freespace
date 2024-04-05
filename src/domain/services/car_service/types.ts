import { CarService } from "../../models/CarService";

export interface GetCarServicesResponse {
    car_services: CarService[]
}

export type CreateCarServiceResponse = CarService;