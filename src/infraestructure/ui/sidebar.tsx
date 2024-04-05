import { Link } from "react-router-dom";
import NavLinks from "./nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "../zustand/auth/useAuthStore";

export default function Sidebar() {
    const { logout } = useAuthStore();
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex justify-center md:justify-start items-center rounded-md p-4 gap-2"
                to="/visionboard"
            >

                <p className='text-4xl font-bold text-center text-sky-950'>FreeSpace</p>
            </Link>
            <div className="flex grow flex-row justify-between px-4 space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md md:block"></div>
                <button onClick={logout} className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-300 md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Cerrar Sesión</div>
                </button>
            </div>
        </div>
    )
}