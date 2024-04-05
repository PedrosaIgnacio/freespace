import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();
    return (
        <div className="py-4 flex justify-between">
            <div>
                <p className="tracking-tighter font-semibold text-4xl text-blue-950">Actividad</p>
            </div>
            <div className="h-fit py-2 px-3 bg-blue-950 items-center flex justify-center rounded-md">
                <Link to={`${pathname}/new`} className="font-normal text-sm text-white">+ Nueva Entrada</Link>
            </div>
        </div>
    )
}