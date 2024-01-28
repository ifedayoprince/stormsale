'use client'

import { showSoonToast } from "@/app/utils/format";
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
    const activeStyle = "after:absolute after:bg-black dark:after:bg-neutral-50 after:content-[''] after:w-1 after:h-[32%] after:top-[34%] after:right-0 after:rounded-l-lg"

    return <>
        <li className={`hidden md:block relative w-full ${active ? activeStyle : ""}`} onClick={()=> {if(!active) showSoonToast()}}>
            <span className={`flex tooltip tooltip-right before:px-8 before:rounded-full before:bg-mid-green before:text-black before:border before:py-2 before:text-lg`} data-tooltip={name}>
                <Link href={href} className={`w-full p-3 flex gap-2 items-center text-neutral-400 justify-center`}>
                    {icon}
                    <p className="md:hidden">{name}</p>
                </Link>
            </span>
        </li>
        <li className={`menu-item relative md:hidden rounded-xl ${active ? "bg-neutral-200 dark:bg-neutral-700" : ""} hover:bg-neutral-200 dark:hover:bg-neutral-700 w-full ${active ? activeStyle : ""}`} onClick={()=> {if(!active) showSoonToast()}}>
            <Link href={href} className={`w-full py-2 flex gap-2 items-center text-neutral-400`}>
                {icon}
                <p className="">{name}</p>
            </Link>
        </li>
    </>
}