import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
    title: string;
    className?: string;
    children?: ReactNode;
    rightAction?: ReactNode;
}
export const Card: React.FC<CardProps> = ({ title, className, children, rightAction }) => {
    return (
        <div className={`card w-full min-w-full p-4 pt-5 border-none bg-white ${className ? className : ""}`}>
            <div className="card-header mb-2">
                <h4 className=" font-normal text-[1.1rem]">{title}</h4>
                {rightAction
                    ? rightAction
                    : <Link href={"#"} title="See All" className=" font-normal text-sm text-primary-green">See All</Link>}
            </div>
            {children}
        </div>
    )
}