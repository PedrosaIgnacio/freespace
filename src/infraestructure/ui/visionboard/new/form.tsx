import { useNavigate } from "react-router-dom"
import { CreateServiceFormValues, FormikHandleBlur, FormikHandleChange } from "../../../pages/visionboard/new/controller";
import { FormikErrors, FormikTouched } from "formik";

export default function Form({
    values,
    errors,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
}: {
    values: CreateServiceFormValues,
    errors: FormikErrors<CreateServiceFormValues>,
    handleChange: FormikHandleChange,
    touched: FormikTouched<CreateServiceFormValues>,
    handleBlur: FormikHandleBlur
    handleSubmit: () => void
}) {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/visionboard')
    }

    return (
        <form className="grid grid-cols-1 xl:grid-cols-2 py-4 gap-8">
            <div className="w-full">
                <div className="border-b-[1px] border-gray-200">
                    <p className="font-semibold tracking-tighter text-2xl text-blue-950">Cliente</p>
                </div>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="w-full">
                        <label className="text-sm" htmlFor="full_name">Nombre completo</label>
                        <div className="w-full relative">
                            <input
                                value={values.full_name}
                                onChange={handleChange('full_name')}
                                onBlur={handleBlur('full_name')}
                                type="text"
                                id='full_name'
                                name='full_name'
                                placeholder="Nombre del cliente..."
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            />
                            {
                                errors.full_name && touched.full_name && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.full_name}</p>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-sm" htmlFor="phone_number">Teléfono</label>
                        <div className="w-full relative">
                            <input
                                value={values.phone_number}
                                onChange={handleChange('phone_number')}
                                onBlur={handleBlur('phone_number')}
                                type="text"
                                id='phone_number'
                                name='phone_number'
                                placeholder="Numero de teléfono del cliente..."
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            />
                            {
                                errors.phone_number && touched.phone_number && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.phone_number}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="border-b-[1px] border-gray-200">
                    <p className="font-semibold tracking-tighter text-2xl text-blue-950">Servicio</p>
                </div>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="w-full">
                        <label className="text-sm" htmlFor="car_service_type">Tipo</label>
                        <div className="w-full relative">
                            <select
                                value={values.car_service_type}
                                onChange={handleChange('car_service_type')}
                                name="car_service_type"
                                id="car_service_type"
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            >
                                <option value=''>Seleccione el tipo de servicio...</option>
                                <option value='lavado express'>Lavado Express</option>
                                <option value='lavado premium'>Lavado Premium</option>
                                <option value='lavado de motor'>Lavado de Motor</option>
                                <option value='limpieza de tapizado'>Limpieza de Tapizado</option>
                            </select>
                            {
                                errors.car_service_type && touched.car_service_type && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.car_service_type}</p>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-sm" htmlFor="estimated_duration">Duracion estimada</label>
                        <div className="w-full relative">
                            <select
                                value={values.estimated_duration}
                                onChange={handleChange('estimated_duration')}
                                name="estimated_duration"
                                id="estimated_duration"
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            >
                                <option value=''>Tiempo estimado del servicio...</option>
                                <option value='0 - 30m'>0 - 30m</option>
                                <option value='30m - 1h' >30m - 1h</option>
                                <option value='1h - 1h 30m'>1h - 1h 30m</option>
                                <option value='1h 30m - 2h'>1h 30m - 2h</option>
                                <option value='2h - 2h 30m'>2h - 2h 30m</option>
                                <option value='2h 30m - 3h'>2h 30m - 3h</option>
                                <option value='3h - 3h 30m'>3h - 3h 30m</option>
                                <option value='3h 30m - 4h'>3h 30m - 4h</option>
                                <option value='4h - 4h 30m'>4h - 4h 30m</option>
                                <option value='4h 30m - 5h'>4h 30m - 5h</option>
                            </select>
                            {
                                errors.estimated_duration && touched.estimated_duration && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.estimated_duration}</p>
                            }
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className="border-b-[1px] border-gray-200">
                    <p className="font-semibold tracking-tighter text-2xl text-blue-950">Vehículo</p>
                </div>
                <div className="grid grid-cols-2 gap-8 py-4">
                    <div className="w-full">
                        <label className="text-sm" htmlFor="car_brand">Marca</label>
                        <div className="w-full relative">
                            <input
                                value={values.car_brand}
                                onChange={handleChange('car_brand')}
                                onBlur={handleBlur('car_brand')}
                                type="text"
                                id='car_brand'
                                name='car_brand'
                                placeholder="Ingrese la marca del vehículo..."
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            />
                            {
                                errors.car_brand && touched.car_brand && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.car_brand}</p>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-sm" htmlFor="car_model">Modelo</label>
                        <div className="w-full relative">
                            <input
                                value={values.car_model}
                                onChange={handleChange('car_model')}
                                onBlur={handleBlur('car_model')}
                                type="text"
                                id='car_model'
                                name='car_model'
                                placeholder="Ingrese el modelo del vehículo..."
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            />
                            {
                                errors.car_model && touched.car_model && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.car_model}</p>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-sm" htmlFor="car_color">Color</label>
                        <div className="w-full relative">
                            <input
                                value={values.car_color}
                                onChange={handleChange('car_color')}
                                onBlur={handleBlur('car_color')}
                                type="text"
                                id='car_color'
                                name='car_color'
                                placeholder="Ingrese el color del vehículo..."
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            />
                            {
                                errors.car_color && touched.car_color && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.car_color}</p>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-sm" htmlFor="license_plate">Patente</label>
                        <div className="w-full relative">
                            <input
                                value={values.license_plate}
                                onChange={handleChange('license_plate')}
                                onBlur={handleBlur('license_plate')}
                                type="text"
                                id='license_plate'
                                name='license_plate'
                                placeholder="Ingrese la patente del vehículo..."
                                className="px-3 py-2 border-[1px] border-gray-200 rounded-md text-sm w-full font-light"
                            />
                            {
                                errors.license_plate && touched.license_plate && <p className="absolute text-red-300 text-xs -bottom-[18px]">{errors.license_plate}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:col-span-2">
                <div className="flex gap-4">
                    <button className="px-3 py-2 bg-white rounded-md text-blue-950 font-normal text-sm border-[1px] border-blue-950" onClick={handleGoBack}>Cancelar</button>
                    <button className="px-3 py-2 bg-blue-950 rounded-md  text-white font-normal text-sm border-[1px] border-blue-950 hover:bg-blue-900" type="button" onClick={handleSubmit}>Confirmar</button>
                </div>
            </div>

        </form>
    )
}