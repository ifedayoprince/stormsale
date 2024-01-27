
interface PercentBarProps {
    title: string;
    data: number;
    rank: number;
}

export const PercentBar: React.FC<PercentBarProps> = ({ title, data, rank }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <h3 className="text-dark dark:text-neutral-200">{title}</h3>
            <progress className={`progress w-full ${rank == 1
                ? "bg-[#6160DC]"
                : rank == 2
                    ? "bg-[#54C5EB]"
                    : rank == 3
                        ? "bg-[#FFB74A]"
                        : "bg-[#FF4A55]"}`} value={data} max={100}></progress>
            <div className="flex justify-between w-full">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">$2,500,000</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">+15%</p>
            </div>
        </div>
    )
}