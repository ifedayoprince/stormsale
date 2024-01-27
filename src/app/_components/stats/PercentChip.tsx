import TrendUp from '@/app/trend-up.svg';
import TrendDown from '@/app/trend-down.svg';


interface PercentChipProps {
    trend: "up" | "down",
    value: number,
    hide?: boolean
    showMobile?: boolean
}

export const PercentChip: React.FC<PercentChipProps> = ({trend, value, hide,showMobile}) => {
    return (
        <div className={`gap-1 px-2 py-1 rounded-full text-xs items-center text-alert-red ${hide ? "hidden md:flex" : showMobile 
        ? "flex md:hidden"
        : "flex"} ${trend == "up" ? "text-primary-green bg-[#34CAA51F]" : "bg-[#ED544E1F]"}`}>
            {trend == "up" ? <TrendUp className="0.9rem" /> : <TrendDown size="0.9rem" />}
            <p>{value.toString().replace(".", ",")}%</p>
        </div>
    )
}