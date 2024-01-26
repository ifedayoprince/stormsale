import { ShoppingCart } from "iconsax-react";
import { StatCard } from "../_components/stats/StatCard";
import { PercentBar } from "../_components/stats/PercentBar";

export default function Home() {
    return (
        <div className="w-full p-8 h-screen">
            {/* Add component here */}
            <PercentBar
                title="Book Bazaar"
                data={{ months: [3212, 342, 1212, 655, 2320, 1567] }}
                rank={1}
            />
        </div>
    )
}