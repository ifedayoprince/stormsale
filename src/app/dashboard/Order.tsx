import { DocumentDownload } from "iconsax-react";
import { OrderStruct } from "../_models/Order";

export enum OrderStatus {
    PAID = "paid",
    REFUND = "refund",
    UNPAID = "unpaid"
}

export interface OrderProps {
    order: OrderStruct
}
export const Order: React.FC<OrderProps> = ({ order }) => {
    return (
        <tr>
            <td className="flex items-center gap-2">
                <div className="avatar avatar-sm">

                </div>
                <p className="text-black">{order.name}</p>
            </td>
            <td><p className="text-neutral-500">{order.date.toDateString()}</p></td>

            <td>
                <p className="text-black">${order.amount}
                </p>
                </td>

            <td>
                <p className={order.status == OrderStatus.PAID ? "text-primary-green" : "text-new-red"}>{order.status == OrderStatus.PAID
                    ? "Paid"
                    : order.status == OrderStatus.UNPAID
                        ? "Unpaid"
                        : "Refund"}
                </p>
            </td>

            <td className="flex gap-2 items-center">
                <DocumentDownload size={"1rem"} />
                <p className="text-sm">View</p>
            </td>
        </tr>
    )
}