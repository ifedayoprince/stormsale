import { Card } from "../_components/Card"
import { PercentBar } from "../_components/stats/PercentBar"

export const PercentBars = () => {
    return (
        <Card title="Top Platform" className="grid-in-platform max-h-min">
            <div className="flex flex-col gap-3 w-full">
                <PercentBar
                    title="Book Bazaar"
                    data={{ months: [3212, 342, 1212, 655, 2320, 1567] }}
                    rank={1}
                />
                <PercentBar
                    title="Artisan Aisle"
                    data={{ months: [3212, 342, 1212, 655, 2320, 1567] }}
                    rank={2}
                />
                <PercentBar
                    title="Toy Troop"
                    data={{ months: [3212, 342, 1212, 655, 2320, 1567] }}
                    rank={3}
                />
                <PercentBar
                    title="XStore"
                    data={{ months: [3212, 342, 1212, 655, 2320, 1567] }}
                    rank={4}
                />
            </div>
        </Card>
    )
}