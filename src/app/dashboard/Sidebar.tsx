import { ArrowCircleRight2, ArrowRight, ArrowRight2, Box, Category, DiscountShape, InfoCircle, Login, Logout, Moon, Profile2User, Setting2, Setting3, Setting4, Sun, TrendUp } from "iconsax-react"
import Link from 'next/link'
import Image from 'next/image'
import { ThemeSwitcher } from "../_components/ThemeSwitcher"
import { MenuItem } from "../_components/sidebar/MenuItem"

export const Sidebar = () => {
    return (
        <aside className="no-scroll overflow-y-scroll h-screen w-[4.3rem] bg-mid-green flex flex-col gap-5 items-center py-3 border-r group transition-all hover:items-start hover:w-max">
            <Image
                src={"/stormsale.svg"}
                alt={"StormSale"}
                width={100}
                height={100}
                className="w-9 h-9"
            />
            <div className="w-full flex flex-col gap-12">
                <ul className="flex flex-col items-center group-hover:items-start group-hover:w-max">
                    <MenuItem href="#" icon={<Category />} name="Dashboard" active={true} />
                    <MenuItem href="#" icon={<TrendUp />} name="Tracker" active={false} />
                    <MenuItem href="#" icon={<Profile2User />} name="Customers" active={false} />
                    <MenuItem href="#" icon={<Box />} name="Products" active={false} />
                    <MenuItem href="#" icon={<DiscountShape />} name="Coupons" active={false} />
                    <MenuItem href="#" icon={<InfoCircle />} name="Public Info" active={false} />
                    <ThemeSwitcher />
                </ul>
                <ul>
                    <MenuItem href="#" icon={<ArrowCircleRight2 />} name="Profile" active={false} />
                    <MenuItem href="#" icon={<Setting2 />} name="Settings" active={false} />
                    <MenuItem href="#" icon={<Logout />} name="Logout" active={false} />
                </ul>
            </div>
        </aside>
    )
}

export const Sidebar2 = () => {
    return (
        <div className="flex flex-row sm:gap-10">
            <div className="sm:w-full sm:max-w-[18rem]">
                <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
                <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
                <aside className="sidebar sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
                    <Image
                        src={"/stormsale.svg"}
                        alt={"StormSale"}
                        width={100}
                        height={100}
                        className="sidebar-title w-9 h-9"
                    />
                    <section className="sidebar-content">
                        <nav className="menu rounded-md">
                            <MenuItem href="#" icon={<Category />} name="Dashboard" active={true} />
                            <MenuItem href="#" icon={<TrendUp />} name="Tracker" active={false} />
                            <MenuItem href="#" icon={<Profile2User />} name="Customers" active={false} />
                            <MenuItem href="#" icon={<Box />} name="Products" active={false} />
                            <MenuItem href="#" icon={<DiscountShape />} name="Coupons" active={false} />
                            <MenuItem href="#" icon={<InfoCircle />} name="Public Info" active={false} />
                            <ThemeSwitcher />
                        </nav>
                    </section>
                    <section className="sidebar-footer justify-end bg-gray-2 pt-2">
                        <MenuItem href="#" icon={<ArrowCircleRight2 />} name="Profile" active={false} />
                        <MenuItem href="#" icon={<Setting2 />} name="Settings" active={false} />
                        <MenuItem href="#" icon={<Logout />} name="Logout" active={false} />
                    </section>
                </aside>
            </div>
            <div className="w-fit">
                <label htmlFor="sidebar-mobile-fixed" className="btn-primary btn sm:hidden">Open Sidebar</label>
            </div>
        </div>
    )
}