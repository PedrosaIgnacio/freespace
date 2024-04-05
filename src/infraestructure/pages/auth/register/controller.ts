import { useFormik } from "formik"
import * as yup from 'yup';
import useAuthenticateUser from "../../../hooks/auth/useAuthenticateUser";
import { useEffect } from "react";
import { useAuthStore } from "../../../zustand/auth/useAuthStore";
import { useNavigate } from "react-router-dom";

interface RegisterFormValues {
    email: string;
    password: string;
}

const REGISTER_FORM_SCHEMA = yup.object().shape({
    email: yup
        .string()
        .email(),
    password: yup
        .string()
        .min(8, 'must contain 8 characters')
        .matches(/^(?=.*[a-z])/, 'must contain one lowercase character')
        .matches(/^(?=.*[A-Z])/, 'must contain one lowercase character')
})

const LOGIN_FORM_INITIAL_VALUES: RegisterFormValues = {
    email: "",
    password: ""
}

export default function useController() {

    const { mutate, isSuccess, data, isPending } = useAuthenticateUser();
    const { authenticate } = useAuthStore();
    const navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: LOGIN_FORM_INITIAL_VALUES,
        validationSchema: REGISTER_FORM_SCHEMA,
        onSubmit: (values) => handleSubmit(values),
    });

    const handleSubmit = (values: RegisterFormValues) => {
        const { email, password } = values;
        mutate({ email, password })
    }
    const navigateToOtpCode = () => {
        navigate('/auth/register/otp')
    }

    useEffect(() => {
        if (isSuccess) {
            authenticate(data.access, data.user);
        }
    }, [isSuccess, data, authenticate]);

    return {
        formik,
        isPending,
        navigateToOtpCode,
    }

}