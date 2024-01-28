'use client'


import { ArrowDown2, Calendar, HambergerMenu, Moon, Notification, SearchNormal1, Sun1 } from "iconsax-react";
import Image from "next/image";
import { StatCards } from "./StatCards";
import { Card } from "../_components/Card";
import { PercentBars } from "./PercentBars";
import { Order } from "./Order";

import OrderData from './../_data/orders.json';
import { OrderJSON, toOrderArray } from "../_models/Order";

import Metadata from './../_data/metadata.json';
import Link from "next/link";
import { SalesChart } from "./SalesChart";
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap'
import { MobileDrawer2 } from "./MobileDrawer";
import { showSoonToast } from "../utils/format";


function sortByDate(order: OrderJSON[]) {
    return order.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
const Home = () => {
    const loader = useRef<HTMLDivElement>(null);
    const [_window, setWindowObject] = useState<Window>();
    const [isMobile, setIsMobile] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false);

    const [orderCount, setOrderCount] = useState(5)

    useEffect(() => {
        if (window && document) {
            setWindowObject(window)
            setIsMobile(window.innerWidth < 768)

            console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                setDarkTheme(true)
            } else {
                document.documentElement.classList.remove('dark')
                setDarkTheme(false)
            }
        }
        setTimeout(() => {
            const el: HTMLDivElement = loader.current as HTMLDivElement;
            let anim = gsap.to(el, {
                scale: 0.4,
                opacity: 0,
                duration: 0.6
            })
            anim.eventCallback("onComplete", () => { el.style.display = "none" })
        }, 100)
    }, [])

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkTheme])

    useEffect(() => {

    }, [])
    return (
        <div className="w-full">
            <div ref={loader} className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 backdrop-blur-md bg-neutral-400 bg-opacity-30 dark:bg-neutral-800">
                <Image
                    src={"/stormsale.svg"}
                    alt={"StormSale"}
                    width={100}
                    height={100}
                    className="ping-animate w-14 h-14"
                />
            </div>
            {
                isMobile
                    ? <TopNavMobile dark={darkTheme} setDark={setDarkTheme} />
                    : <TopNav />
            }
            <section className="w-full flex flex-col md:grid gap-4 grid-areas-main-stats grid-cols-main-stats grid-rows-main-stats p-4">
                <Card title="Sales Trends" className="w-full h-[18rem] md:h-auto grid-in-trends !pt-4" rightAction={<div className="flex gap-1 items-center">
                    <p className="text-sm font-normal min-w-max hidden md:block dark:text-neutral-400">Sort by:</p>
                    <select name="select" className="select border border-border dark:border-neutral-500 select-rounded font-normal pr-8" defaultValue={"month"}>
                        <option value="week">Weekly</option>
                        <option value="month">Monthly</option>
                    </select>
                </div>}>
                    <SalesChart />
                </Card>
                <StatCards />
                <Card title="Last Orders" className="grid-in-orders w-full" rightAction={<button title="See All" className="btn btn-ghost !text-primary-green font-normal text-sm" onClick={() => setOrderCount(OrderData.length)}>See All</button>}>
                    <div className="no-scroll overflow-x-scroll">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="!bg-transparent border-none text-table">Name</th>
                                    <th className="!bg-transparent border-none text-table">Date</th>
                                    <th className="!bg-transparent border-none text-table">Amount</th>
                                    <th className="!bg-transparent border-none text-table">Status</th>
                                    <th className="!bg-transparent border-none text-table">Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toOrderArray(sortByDate(OrderData.slice(0, orderCount))).map((order, i) => (<Order order={order} key={i} />))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <PercentBars />
            </section>
        </div>
    )
}

const TopNav = () => (
    <nav className="w-full flex justify-between items-center py-2 px-6 bg-neutral-50 dark:bg-neutral-700">
        <h1 className="dark:text-white text-black">Dashboard</h1>
        <div className="flex gap-2 items-center">
            <div className="input flex flex-row items-center overflow-hidden rounded-full border-sm border-neutral-500">
                <SearchNormal1 className="" />
                <input type="text" placeholder="Search..." className="search input !border-none !rounded-none h-full text-sm w-full max-w-sm" />
            </div>
            <button className="hidden md:flex btn text-sm btn-ghost w-max flex-row gap-1" onClick={() => showSoonToast()}>
                <Calendar size={"1.2rem"} />
                <p className="min-w-max text-xs">{new Date(sortByDate(OrderData)[0].date).toDateString()}</p>
            </button>

            <div className="popover">
                <button tabIndex={0} className="popover-trigger btn btn-ghost  btn-outline !border-2 border-smoke-border btn-rounded p-3 min-w-[2.5rem] h-10">
                    <Notification />
                </button>
                <div className="popover-content w-screen max-w-sm popover-bottom-left flex popover-border flex-col items-center border-4 border-smoke-border dark:border-neutral-600 bg-mid-green" tabIndex={0}>
                    <h1 className="border-b text-xl p-4 pt-3 w-full text-black dark:text-white">Notifications</h1>
                    <Image
                        src={"/girl-meditating.png"}
                        alt={"Girl meditating"}
                        width={512}
                        height={512}
                        className=" w-9/12"
                    />
                    <div className="p-4 text-center text-xl text-neutral-500 dark:text-neutral-300">Silence is Golden</div>
                </div>
            </div>

            <div className="dropdown">
                <ProfileBtn />
                <div className="dropdown-menu bg-mid-green text-black dark:text-neutral-100">
                    <Link href={"#"} className="dropdown-item text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600">Account Settings</Link>
                    <Link href={"#"} className="dropdown-item text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600">Connected Accounts</Link>
                    <Link href={"#"} className="dropdown-item text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600">Help & Support</Link>
                    <Link href={"#"} className="dropdown-item text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600">Data Privacy</Link>
                </div>
            </div>
        </div>
    </nav>
)

const TopNavMobile: React.FC<{ dark: boolean, setDark: any }> = ({ dark, setDark }) => {
    return (
        <div className="flex flex-col pb-0 gap-8">
            <div className="flex bg-neutral-50 dark:bg-neutral-800 justify-between p-2 items-center">
                <div>
                    <input type="checkbox" id="drawer-left" className="drawer-toggle" />
                    <label htmlFor="drawer-left" className="btn btn-design-1 w-12 h-12 p-0 btn-ghost btn-outline text-black dark:text-white">
                        <HambergerMenu />
                    </label>
                    <label className="overlay" htmlFor="drawer-left"></label>
                    <MobileDrawer2 />
                </div>
                <div className="flex gap-1">
                    <button className="btn btn-design-1 w-12 h-12 p-0 btn-ghost btn-outline text-black dark:text-white" onClick={() => showSoonToast()}>
                        <SearchNormal1 />
                    </button>
                    <label className="btn btn-design-1 w-12 h-12 p-0 btn-ghost btn-outline text-black dark:text-white" onClick={() => setDark(!dark)}>
                        {dark
                            ? <Moon />
                            : <Sun1 />}
                    </label>
                    <label htmlFor="modal-notify" className="btn btn-design-1 w-12 h-12 p-0 btn-ghost btn-outline text-black dark:text-white">
                        <Notification />
                    </label>
                    <input className="modal-state" id="modal-notify" type="checkbox" />
                    <div className="modal">
                        <label className="modal-overlay" htmlFor="modal-notify"></label>
                        <div className="modal-content flex flex-col items-center border-4 border-smoke-border dark:border-neutral-600 bg-mid-green" tabIndex={0}>
                            <h1 className="border-b text-xl flex justify-between px-0 pt-0 pb-2 md:p-4  md:pt-3 w-full text-black dark:text-white">Notifications
                                <label htmlFor="modal-notify">✕</label>
                            </h1>
                            <Image
                                src={"/girl-meditating.png"}
                                alt={"Girl meditating"}
                                width={512}
                                height={512}
                                className=" w-9/12"
                            />
                            <div className="p-4 text-center text-xl text-neutral-500 dark:text-neutral-300">Silence is Golden</div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button tabIndex={0} className="md:hidden popover-trigger btn btn-ghost border-2 btn-outline rounded-full p-2 min-w-[2.5rem] h-full">
                            <div className="avatar w-8 h-full">
                                <Image
                                    src={"https://i.pravatar.cc/150?img=3"}
                                    alt={"Avatar"}
                                    width={300}
                                    height={300}
                                    className="rounded-lg" />
                            </div>
                        </button>
                        <div className="dropdown-menu bg-mid-green text-black dark:text-neutral-100">
                            <div className="flex gap-2 mb-4 px-2 py-2 items0-center">
                                <div className="avatar h-full">
                                    <Image
                                        src={"https://i.pravatar.cc/150?img=3"}
                                        alt={"Avatar"}
                                        width={300}
                                        height={300} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-sm text-dark dark:text-white">{Metadata.admin.name}</h2>
                                    <p className="text-xs">{Metadata.admin.email}</p>
                                </div>
                            </div>
                            <Link href={"#"} className="dropdown-item text-sm">Account Settings</Link>
                            <Link href={"#"} className="dropdown-item text-sm">Connected Accounts</Link>
                            <Link href={"#"} className="dropdown-item text-sm">Help & Support</Link>
                            <Link href={"#"} className="dropdown-item text-sm">Data Privacy</Link>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="pl-5 text-3xl font-semibold text-black dark:text-white">Dashboard</h1>
        </div>
    )
}

const ProfileBtn = () => (
    <button className="hidden md:flex btn btn-ghost flex-row gap-2 popover-trigger pl-0 pr-2 py-2 max-w-max btn-rounded" tabIndex={0}>
        <div className="avatar avatar-ring p-1">
            <Image
                src={"https://i.pravatar.cc/150?img=3"}
                alt={"user profile"}
                width={300}
                height={300}
                className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-0">
            <h2 className="">{Metadata.admin.name}</h2>
            <p className="text-xs text-text-subtitle">{Metadata.admin.email}</p>
        </div>
        <ArrowDown2 className="" />
    </button>
)

export default Home;