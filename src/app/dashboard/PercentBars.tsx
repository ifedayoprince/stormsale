import { Card } from "../_components/Card"
import { PercentBar } from "../_components/stats/PercentBar"
import OrderData from '@/app/_data/orders.json';
import { OrderJSON, OrderStruct, listByMonth, toOrderArray } from "../_models/Order";


export const PercentBars = () => {
    let data = listByMonth(toOrderArray(OrderData));
    let allPlatforms = {}
    data.forEach((month) => {
        month.forEach((val) => {
            if (val.platform in allPlatforms) {
                (allPlatforms as any)[val.platform] += 1
            } else {
                (allPlatforms as any)[val.platform] = 1
            }
        })
    })

    function rankObjects(obj: {}) {
        const sorted = Object.entries(obj).sort((a, b) => (b[1] as number) - (a[1] as number));
        const ranked = sorted.map((entry, index) => {
            const [key, value] = entry;
            return { name: key, value, rank: index + 1 };
        });
        return ranked;
    }
    // [ { name: 'Book Bazaar', value: 3, rank: 1 } ]
    let formatData = rankObjects(allPlatforms)
    console.log(formatData)
    return (
        <Card title="Top Platform" className="grid-in-platform max-h-min pb-4 md:pb-0">
            <div className="flex flex-col gap-3 w-full">
                {
                    formatData.map((bar)=>{
                        return <PercentBar 
                        title={bar.name} 
                        data={bar.value as number} rank={bar.rank}                        />
                    })
                }
            </div>
        </Card>
    )
}