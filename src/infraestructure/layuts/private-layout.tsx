import Sidebar from "../ui/sidebar";

export default function PrivateLayout({ children }: { children: JSX.Element }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Sidebar />
            </div>
            <div className="flex-grow md:overflow-y-auto px-12 pt-4">
                {children}
            </div>
        </div>
    )
}