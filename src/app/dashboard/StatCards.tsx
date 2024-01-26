import { BoxTick, BoxSearch, ShoppingCart, Coin1 } from "iconsax-react"
import { StatCard } from "../_components/stats/StatCard"
import OrderData from './../_data/orders.json';
import { listByMonth, toOrderArray } from "../_models/Order";
import { OrderStatus } from "./Order";

export const StatCards = () => {
    let data = listByMonth(toOrderArray(OrderData));
    return (
        <div className="grid-in-stats grid grid-cols-2 grid-rows-2 gap-3 bg-transparent w-full">
            <StatCard
                name="Total Order"
                data={data.map((month) => month.length)}
                icon={<BoxTick />}
            />
            <StatCard
                name="Total Refund"
                data={data.map((month) => month.filter((order) => order.status == OrderStatus.REFUND).length)}
                icon={<BoxSearch />}
            />
            <StatCard
                name="Average Sales"
                data={[3212, 342, 1212, 655, 2320, 1567]}
                icon={<ShoppingCart />}
            />
            <StatCard
                prefix="$"
                name="Total Income"
                data={data.map((month) => month.length == 0 
                    ? 0 
                    : month.reduce((a, b)=> ({...a, amount: a.amount + b.amount})).amount)}
                icon={<Coin1 />}
            />
        </div>
    )
}