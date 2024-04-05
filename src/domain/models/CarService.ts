import { Status } from "./Status";

export interface CarService {
    _id: string;
    full_name: string;
    document_number: string;
    phone_number: string;
    estimated_duration: string;
    license_plate: string;
    car_service_type: string;
    car_model: string;
    car_brand: string;
    car_color: string;
    createdAt: Date;
    updatedAt: Date;
    status: Status;
    __v: number;
}

export type create_car_service_dto = Omit<CarService, '__v' | 'status' | 'updatedAt' | 'createdAt' | 'document_number'| '_id'>

export enum car_service_type {
    EXPRESS_WASH = 'lavado express',
    PREMIUM_WASH = 'lavado premium',
    MOTOR_WASH = 'lavado de motor',
    UPHOLSTERY_CLEAN = 'limpieza de tapizado',
}