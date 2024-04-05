import Form from "../../../ui/visionboard/new/form";
import useController from "./controller";

export default function NewCarService() {
    const { formik } = useController();
    return (
        <div className="py-4 flex flex-col">
            <div>
                <p className="tracking-tighter font-semibold text-4xl text-blue-950">Registrar Entrada</p>
            </div>
            <Form values={formik.values} errors={formik.errors} handleChange={formik.handleChange} touched={formik.touched} handleBlur={formik.handleBlur} handleSubmit={formik.handleSubmit} />
        </div>
    )
}