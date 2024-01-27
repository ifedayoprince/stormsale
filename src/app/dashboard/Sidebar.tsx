'use client'

import { ArrowCircleRight2, Box, Category, DiscountShape, InfoCircle, Logout, Moon, Profile2User, Setting2, Sun1, TrendUp } from "iconsax-react"
import Image from 'next/image'
import { MenuItem } from "../_components/sidebar/MenuItem"
import { useState, useEffect } from "react"

export const Sidebar = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(()=>{
        if (window && document) {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
                setDarkTheme(true)
            } else {
                document.documentElement.classList.remove('dark')
                setDarkTheme(false)
            }
        }
    }, [])
    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkTheme])
    return (
        <aside className="h-full w-[4.3rem] bg-mid-green flex-col gap-5 items-center py-3 border-r hidden md:flex dark:border-neutral-600">
            <Image
                src={"/stormsale.svg"}
                alt={"StormSale"}
                width={100}
                height={100}
                className="w-10 h-10"
            />
            <div className="w-full flex flex-col gap-12">
                <ul className="flex flex-col items-center">
                    <MenuItem href="#" icon={<Category variant="Bulk" />} name="Dashboard" active={true} />
                    <MenuItem href="#" icon={<TrendUp variant="Broken" />} name="Tracker" active={false} />
                    <MenuItem href="#" icon={<Profile2User variant="Broken" />} name="Customers" active={false} />
                    <MenuItem href="#" icon={<Box variant="Broken" />} name="Products" active={false} />
                    <MenuItem href="#" icon={<DiscountShape variant="Broken" />} name="Coupons" active={false} />
                    <MenuItem href="#" icon={<InfoCircle variant="Broken" />} name="Public Info" active={false} />

                    <li className="w-full flex justify-center">
                        <div className="flex flex-col gap-3 bg-white dark:bg-neutral-600 text-neutral-400 p-2 rounded-full">
                            <Sun1 onClick={() => setDarkTheme(false)} variant={!darkTheme ? "Bold" : "Outline"} className={`${!darkTheme ? "text-white bg-primary-green" : ""} p-1 rounded-full`} />
                            <Moon onClick={()=> setDarkTheme(true)} variant={darkTheme ? "Bold" : "Outline"} className={`p-1 ${darkTheme ? "text-white bg-primary-green" : ""} rounded-full`} />
                        </div>
                    </li>
                </ul>
                <ul>
                    <MenuItem href="#" icon={<ArrowCircleRight2 variant="Broken" />} name="Profile" active={false} />
                    <MenuItem href="#" icon={<Setting2 variant="Broken" />} name="Settings" active={false} />
                    <MenuItem href="#" icon={<Logout variant="Broken" />} name="Logout" active={false} />
                </ul>
            </div>
        </aside>
    )
}
