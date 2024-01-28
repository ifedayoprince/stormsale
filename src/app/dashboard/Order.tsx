import { DocumentDownload } from "iconsax-react";
import { OrderStruct } from "../_models/Order";
import { formatNumber } from "chart.js/helpers";
import { formatThousand, showSoonToast } from "../utils/format";
import Image from "next/image";

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
            <td>
                <div className="flex items-center gap-2">
                    <div className="avatar avatar-sm">
                        <Image 
                        src={order.avatar}
                        alt={"user avatar"}
                        width={100}
                        height={100} />
                    </div>
                    <p className="text-blue-primary dark:text-white">{order.name}</p>
                </div>
            </td>
            <td><p className="text-neutral-500 dark:text-neutral-300">{order.date.toDateString()}</p></td>

            <td>
                <p className="text-secondaryBlue dark:text-white">${formatThousand(order.amount)}
                </p>
            </td>

            <td>
                <p className={order.status == OrderStatus.PAID ? "text-primary-green" : "text-alert-red dark:text-[#f06a66]"}>{order.status == OrderStatus.PAID
                    ? "Paid"
                    : order.status == OrderStatus.UNPAID
                        ? "Unpaid"
                        : "Refund"}
                </p>
            </td>

            <td>
                <button title="View Invoice" className="btn btn-sm flex gap-2 items-center bg-neutral-200 dark:bg-neutral-800 text-secondaryBlue" onClick={() => showSoonToast()}>
                    <DocumentDownload size={"1rem"} />
                    <p className="text-sm">View</p>
                </button>
            </td>
        </tr>
    )
}