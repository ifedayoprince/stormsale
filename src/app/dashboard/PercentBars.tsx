import { Card } from "../_components/Card"
import { PercentBar } from "../_components/stats/PercentBar"
import OrderData from '@/app/_data/orders.json';
import { listByMonth, toOrderArray } from "../_models/Order";


export const PercentBars = () => {
    let data = listByMonth(toOrderArray(OrderData));
    let allPlatforms = {}
    data.forEach((month) => {
        month.forEach((val) => {
            if (val.platform in allPlatforms) {
                (allPlatforms as any)[val.platform].amount += val.amount;
                (allPlatforms as any)[val.platform].num+= 1;
            } else {
                (allPlatforms as any)[val.platform] = {
                    amount: val.amount,
                    num: 1
                }
            }
        })
    })

    function rankObjects(obj: {}) {
        const sorted = Object.entries(obj).sort((a: [string, any], b: [string, any]) => (b[1].num - a[1].num));
        const ranked = sorted.map((entry, index) => {
            const [key, value] = entry;
            return { name: key, value, rank: index + 1 };
        });
        return ranked;
    }
    // [ { name: 'Book Bazaar', value: 3, rank: 1 } ]
    let formatData = rankObjects(allPlatforms)
    let max = 0;

    formatData.forEach(({value})=> {
        let v = value as number;
        if (v > max) max = v
    })

    // console.log(formatData)
    return (
        <Card title="Top Platform" className="grid-in-platform h-min pb-4">
            <div className="flex flex-col gap-3 w-full">
                {
                    formatData.map((bar)=>{
                        return <PercentBar 
                        title={bar.name} 
                        data={(bar.value as any).amount} rank={bar.rank}
                        max={max}
                         />
                    })
                }
            </div>
        </Card>
    )
}