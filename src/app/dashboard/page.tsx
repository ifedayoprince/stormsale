'use client'


import { ArrowDown2, Calendar, Notification } from "iconsax-react";
import Image from "next/image";
import { StatCards } from "./StatCards";
import { Card } from "../_components/Card";
import { PercentBars } from "./PercentBars";
import { Order, OrderStatus } from "./Order";

import OrderData from './../_data/orders.json';
import { toOrderArray } from "../_models/Order";

import Metadata from './../_data/metadata.json';
import Link from "next/link";
import { BarElement, CategoryScale, Chart, LineElement, LinearScale, PointElement } from "chart.js";
import { SalesChart } from "./SalesChart";


Chart.register(LinearScale)
Chart.register(LineElement)
Chart.register(CategoryScale)
Chart.register(PointElement)
// Chart.register(BarElement)

const Home = () => {
    return (
        <div className="w-full">
            <TopNav />
            <section className="w-full grid gap-4 grid-areas-main-stats grid-cols-main-stats grid-rows-main-stats p-4">
                <Card title="Sales Trends" className="w-full grid-in-trends">
                    <SalesChart />
                </Card>
                <StatCards />
                <Card title="Last Orders" className="grid-in-orders">
                    <table className="table table-compact">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toOrderArray(OrderData).map((order, i) => (<Order order={order} key={i} />))}
                        </tbody>
                    </table>
                </Card>

                <PercentBars />
            </section>
        </div>
    )
}

const TopNav = () => (
    <nav className="w-full flex justify-between items-center py-2 px-6 border-b">
        <h1 className="">Dashboard</h1>
        <div className="flex gap-2 items-center">
            {/* <SearchNormal1 /> */}
            <input type="text" placeholder="Search..." className="search input rounded-full border-sm text-sm w-full max-w-sm" />
            <button className="btn text-sm btn-ghost w-max flex-row gap-1 items-">
                <Calendar size={"1.2rem"} />
                <p className="min-w-max text-xs">{new Date(Metadata.date).toDateString()}</p>
            </button>

            <div className="popover">
                <button tabIndex={0} className="popover-trigger btn btn-ghost border-2 btn-outline rounded-full p-2 min-w-[2.5rem] h-10">
                    <Notification />
                </button>
                <div className="popover-content w-screen max-w-sm popover-bottom-left flex popover-border flex-col items-center border-4 shadow-non !bg-mid-green" tabIndex={0}>
                    <h1 className="border-b text-xl p-4 pt-3 w-full">Notifications</h1>
                    <Image
                        src={"/girl-meditating.png"}
                        alt={"Girl meditating"}
                        width={512}
                        height={512}
                        className=" w-9/12"
                    />
                    <div className="p-4 text-center text-xl text-neutral-500">Silence is Golden</div>
                </div>
            </div>

            <div className="dropdown">
                <ProfileBtn />
                <div className="dropdown-menu bg-mid-green">
                    <Link href={"#"} className="dropdown-item text-sm">Account Settings</Link>
                    <Link href={"#"} className="dropdown-item text-sm">Connected Accounts</Link>
                    <Link href={"#"} className="dropdown-item text-sm">Help & Support</Link>
                    <Link href={"#"} className="dropdown-item text-sm">Data Privacy</Link>
                </div>
            </div>
        </div>
    </nav>
)

export const ProfileBtn = () => (
    <button className="btn btn-ghost btn-rounded min-h-[4rem] popover-trigger p-1 rounded-full gap-x-2 items-center grid grid-areas-profile-action-chip grid-rows-profile-action-chip grid-cols-profile-action-chip" tabIndex={0}>
        <div className="avatar grid-in-avatar">
            <Image
                src={"/stormsale.svg"}
                alt={"Avatar"}
                width={300}
                height={300} />
        </div>
        <h2 className="grid-in-name">{Metadata.admin.name}</h2>
        <p className="grid-in-email text-sm">{Metadata.admin.email}</p>
        <ArrowDown2 className="grid-in-more" />
    </button>
)
export default Home;