import { OrderStatus } from "../dashboard/Order";

export interface OrderStruct {
    name: string;
    date: Date;
    amount: number,
    status: OrderStatus;
    platform: string;
    avatar: string;
}

export interface OrderJSON {
    name: string;
    date: string;
    amount: number,
    status: string;
    platform: string;
    avatar: string;
}

export function toOrderArray(orderJson: OrderJSON[]): OrderStruct[] {
    return orderJson.map(({ name, amount, status, platform, date , avatar}) => ({
        name, amount, platform, avatar,
        date: new Date(date),
        status: status as OrderStatus,
    }))
}

export function listByMonth(orders: OrderStruct[]): Array<OrderStruct>[] {
    let out: [OrderStruct[]] = fillArray(12, [])
    let filteredOrders = orders;
    filteredOrders.forEach((order) => {
        out[order.date.getMonth()].push(order)
    })

    // out = fillArray(12, [])
    return out;
}

function fillArray(size: number, e: any): [any[]] {
    let arr = []
    for (let i = 0; i < size; i++) {
        arr.push(e)
        arr[i] = []
    }
    return arr as [[]];
} 