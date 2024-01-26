import type { Icon } from "iconsax-react";
import Link from "next/link";
import { ReactNode } from "react";

export interface MenuItemProps {
    name: string;
    href: string;
    icon: ReactNode;
    active?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ href, icon, active, name }) => {
    const activeStyle = "after:absolute after:bg-black after:content-[''] after:w-1 after:h-[32%] after:top-[34%] after:right-0 after:rounded-l-lg"

    return <li className={`w-max`}>
        {/* <span className="tooltip tooltip-right before:px-8 before:rounded-full before:bg-mid-green before:text-black before:border before:py-2 before:text-lg" data-tooltip={name}> */}
            <Link href={href} className={`w-full p-3 flex gap-2 items-center text-neutral-400 flex items-center justify-center relative ${active ? activeStyle : ""}`}>
                {icon}
                <p className="hidden group-hover:block">{name}</p>
            </Link>
        {/* </span> */}
    </li>
}