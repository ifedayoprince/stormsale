import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
    title: string;
    className?: string;
    children?: ReactNode;
    rightAction?: ReactNode;
    hide?: boolean;
    noTitle?: boolean;
}
export const Card: React.FC<CardProps> = ({ title, className, children, rightAction, hide, noTitle }) => {
    return (
        <div className={`card w-full min-w-full p-6 pt-5 md:p-4 md:pt-7 border border-border dark:border-neutral-600 rounded-2xl md:rounded-[0.875rem] bg-white dark:bg-neutral-600 ${hide ? "!bg-transparent !p-0 border-none" : ""}  ${className ? className : ""}`}>
            <div className={`card-header mb-2 ${noTitle ? "hidden" : ""}`}>
                <h4 className={`${hide ? "md:hidden" : ""} font-semibold text-sm md:text-[1.1rem] dark:text-white`}>{title}</h4>
                {rightAction
                    ? rightAction
                    : <Link href={"#"} title="See All" className=" font-normal text-sm text-primary-green">See All</Link>}
            </div>
            {children} 
        </div>
    )
}