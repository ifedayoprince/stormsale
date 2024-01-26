import { TrendDown, TrendUp } from "iconsax-react"

interface PercentChipProps {
    trend: "up" | "down",
    value: number
}

export const PercentChip: React.FC<PercentChipProps> = ({trend, value}) => {
    return (
        <div className={`flex gap-1 px-2 py-1 rounded-full text-xs items-center text-new-red ${trend == "up" ? "text-primary-green bg-green-200" : "bg-red-100"}`}>
            {trend == "up" ? <TrendUp className="0.9rem" /> : <TrendDown size="0.9rem" />}
            <p>{value.toString().replace(".", ",")}%</p>
        </div>
    )
}