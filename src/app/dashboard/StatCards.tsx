import { StatCard } from "../_components/stats/StatCard"
import OrderData from './../_data/orders.json';
import { listByMonth, toOrderArray } from "../_models/Order";
import { OrderStatus } from "./Order";
import { Card } from "../_components/Card";

import BoxTick from './../box-tick.svg';
import Box3dRotate from './../rotate-3d.svg';
import ShoppingCart from './../shopping-cart.svg';
import Coin from './../coin.svg';

export const StatCards = () => {
    let data = listByMonth(toOrderArray(OrderData));
    let totalSales = data.map((month) => {
        let totalIncome = month.length == 0
            ? 0
            : month.reduce((a, b) => ({ ...a, amount: a.amount + b.amount })).amount
        return totalIncome / month.length;
    })

    console.log(data)
    return (
        <Card className="grid-in-stats w-full" title={"Quick Stats"} hide noTitle rightAction={<></>}>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:bg-transparent w-full h-full">
                <StatCard
                    name="Total Order"
                    data={data.map((month) => month.length)}
                    icon={<BoxTick />}
                />
                <StatCard
                    name="Total Refund"
                    data={data.map((month) => month.filter((order) => order.status == OrderStatus.REFUND).length)}
                    icon={<Box3dRotate />}
                />
                <StatCard
                    name="Average Sales"
                    data={totalSales}
                    icon={<ShoppingCart />}
                />
                <StatCard
                    prefix="$"
                    name="Total Income"
                    data={data.map((month) => month.length == 0
                        ? 0
                        : month.reduce((a, b) => ({ ...a, amount: a.amount + b.amount })).amount)}
                    icon={<Coin />}
                />
            </div>
        </Card>
    )
}

export const StatCardMobile = () => {
    let data = listByMonth(toOrderArray(OrderData));
    return (
        <Card className="grid-in-stats w-full" title={"Quick Stats"} hide rightAction={<></>}>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:bg-transparent w-full">
                <StatCard
                    name="Total Order"
                    data={data.map((month) => month.length)}
                    icon={<BoxTick />}
                />
                <StatCard
                    name="Total Refund"
                    data={data.map((month) => month.filter((order) => order.status == OrderStatus.REFUND).length)}
                    icon={<Box3dRotate />}
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
                        : month.reduce((a, b) => ({ ...a, amount: a.amount + b.amount })).amount)}
                    icon={<Coin />}
                />
            </div>
        </Card>
    )
}