/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik"
import * as yup from 'yup';
import useCreateCarService from "../../../hooks/car_service/useCreateCarService";
import { useLocation, useNavigate } from "react-router-dom";
import { created_notify } from "../toast";
import { useEffect } from "react";

export type FormikHandleChange = {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
};

export type FormikHandleBlur = {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

export interface CreateServiceFormValues {
    full_name: string;
    phone_number: string;
    estimated_duration: string;
    license_plate: string;
    car_service_type: string;
    car_model: string;
    car_brand: string;
    car_color: string;
}

const create_service_form: CreateServiceFormValues = {
    full_name: '',
    phone_number: '',
    estimated_duration: '',
    license_plate: '',
    car_service_type: '',
    car_model: '',
    car_brand: '',
    car_color: '',
}

const create_service_form_schema = yup.object().shape({
    full_name: yup.string().required('Campo requerido'),
    phone_number: yup.string().required('Campo requerido'),
    estimated_duration: yup.string().required('Campo requerido'),
    license_plate: yup.string().required('Campo requerido'),
    car_service_type: yup.string().required('Campo requerido'),
    car_model: yup.string().required('Campo requerido'),
    car_brand: yup.string().required('Campo requerido'),
    car_color: yup.string().required('Campo requerido'),
})

export default function useController() {
    const mutation = useCreateCarService();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const formik = useFormik({
        initialValues: create_service_form,
        validationSchema: create_service_form_schema,
        onSubmit: (values) => handle_submit(values),
    })

    const handle_submit = async (values: CreateServiceFormValues) => {
        await mutation.mutateAsync(values);
    }

    useEffect(() => {
        if (mutation.data) {
            created_notify(mutation.data);
            const backPath = pathname.split('/');
            backPath.pop();
            navigate(backPath.join('/'))
        }
    }, [mutation.data, navigate, pathname])

    return {
        formik,
    }
}