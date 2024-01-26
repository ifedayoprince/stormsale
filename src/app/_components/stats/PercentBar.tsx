
interface PercentBarProps {
    title: string;
    data: {
        months: number[];
    },
    rank: number;
}

export const PercentBar: React.FC<PercentBarProps> = ({title, data, rank})=>{
    return (
        <div className="w-full flex flex-col gap-2">
            <h3>{title}</h3>
            <progress className="progress w-full" value={30} max={100}></progress>
            <div className="flex justify-between w-full">
                <p className="text-neutral-600 text-sm">$2,500,000</p>
                <p className="text-neutral-600 text-sm">+15%</p>
            </div>
        </div>
    )
}