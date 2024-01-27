import { Box, Category, DiscountShape, InfoCircle, Logout, Profile2User, Setting2, TrendUp } from "iconsax-react"
import { MenuItem } from "../_components/sidebar/MenuItem"
import Image from "next/image"
import { showSoonToast } from "../utils/format"


export const MobileDrawer = () => {
    return (
        <section className="bg-mid-green dark:bg-neutral-800 backdrop-blur-xl flex-col items-center p-5 dark:border-neutral-600 absolute top-0 left-0 h-screen w-screen flex md:hidden z-20">
            <div className="w-full h-full overflow-y-scroll">
                <div className="flex justify-between w-full">
                    <button className="btn">
                        ✕
                    </button>
                    <button className="btn btn-ghost flex-row gap-1" onClick={() => showSoonToast()}>
                        <Logout />
                        <p>Log Out</p>
                    </button>
                </div>

                <div className="flex flex-col gap-3 items-center justify-center w-full py-8">
                    <Image
                        src={"/stormsale.svg"}
                        alt={"StormSale"}
                        width={100}
                        height={100}
                        className="w-4/12"
                    />
                    <h1 className="font-bold text-2xl text-black dark:text-neutral-100">StormSale</h1>
                </div>
                <nav className="menu p-2 rounded-md">
                    <section className="menu-section">
                        <ul className="menu-items">
                            <MenuItem href="#" icon={<Category variant="Broken" />} name="Dashboard" active={true} />
                            <MenuItem href="#" icon={<TrendUp variant="Broken" />} name="Tracker" active={false} />
                            <MenuItem href="#" icon={<Profile2User variant="Broken" />} name="Customers" active={false} />
                            <MenuItem href="#" icon={<Box variant="Broken" />} name="Products" active={false} />
                            <MenuItem href="#" icon={<DiscountShape variant="Broken" />} name="Coupons" active={false} />
                            <MenuItem href="#" icon={<InfoCircle variant="Broken" />} name="Public Info" active={false} />
                            <MenuItem href="#" icon={<Setting2 variant="Broken" />} name="Settings" active={false} />
                        </ul>
                    </section>
                </nav>
            </div>
        </section>
    )
}
export const MobileDrawer2 = () => {
    return (
        <div className="drawer w-screen">
            <section className="drawer-content bg-mid-green dark:bg-neutral-800 flex-col items-center dark:border-neutral-600 flex md:hidden z-20">
                <div className="w-full h-full overflow-y-scroll">
                    <div className="flex justify-between w-full">
                        <label htmlFor="drawer-left" className="btn bg-white dark:bg-neutral-700 text-black dark:text-white">
                            ✕
                        </label>
                        <button className="btn btn-ghost flex-row gap-1" onClick={() => showSoonToast()}>
                            <Logout />
                            <p>Log Out</p>
                        </button>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center w-full py-8">
                        <Image
                            src={"/stormsale.svg"}
                            alt={"StormSale"}
                            width={100}
                            height={100}
                            className="w-4/12"
                        />
                        <h1 className="font-bold text-2xl text-black dark:text-neutral-100">StormSale</h1>
                    </div>
                    <nav className="menu p-2 rounded-md">
                        <section className="menu-section">
                            <ul className="menu-items">
                                <MenuItem href="#" icon={<Category variant="Broken" />} name="Dashboard" active={true} />
                                <MenuItem href="#" icon={<TrendUp variant="Broken" />} name="Tracker" active={false} />
                                <MenuItem href="#" icon={<Profile2User variant="Broken" />} name="Customers" active={false} />
                                <MenuItem href="#" icon={<Box variant="Broken" />} name="Products" active={false} />
                                <MenuItem href="#" icon={<DiscountShape variant="Broken" />} name="Coupons" active={false} />
                                <MenuItem href="#" icon={<InfoCircle variant="Broken" />} name="Public Info" active={false} />
                                <MenuItem href="#" icon={<Setting2 variant="Broken" />} name="Settings" active={false} />
                            </ul>
                        </section>
                    </nav>
                </div>
            </section>
        </div>
    )
}