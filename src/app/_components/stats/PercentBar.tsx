import { formatThousand } from "@/app/utils/format";

interface PercentBarProps {
    title: string;
    data: number;
    rank: number;
    max: number;
}

export const PercentBar: React.FC<PercentBarProps> = ({ title, data, rank,max }) => {
    console.log(`(progress)[${title}] ${data}, ${rank}`)
    return (
        <div className="w-full flex flex-col gap-2">
            <h3 className="text-dark dark:text-neutral-200">{title}</h3>
            <progress className={`progress w-full ${rank == 1
                ? "[&::-webkit-progress-value]:bg-[#6160DC]"
                : rank == 2
                    ? "[&::-webkit-progress-value]:bg-[#54C5EB]"
                    : rank == 3
                        ? "[&::-webkit-progress-value]:bg-[#FFB74A]"
                        : "[&::-webkit-progress-value]:bg-[#FF4A55]"}`} value={data} max={max}></progress>
            <div className="flex justify-between w-full">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">${formatThousand(data)}</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">+15%</p>
            </div>
        </div>
    )
}