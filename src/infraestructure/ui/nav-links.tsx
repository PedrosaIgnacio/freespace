import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const links = [
    { name: 'Vision Board', href: '/visionboard', icon: RectangleGroupIcon },
]

export default function NavLinks() {
    const { pathname } = useLocation();

    return (
        <>
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link to={link.href} key={link.name} className={`flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-sky-500 md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href && 'text-sky-500'}`}>
                            <LinkIcon className={'w-6'} />
                            <p className='hidden md:block '>{link.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}