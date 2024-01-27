import { Moon, Sun1 } from "iconsax-react";

export const ThemeSwitcher = () => (
    <li className="w-full flex justify-center">
        <div className="flex flex-col gap-3 bg-white dark:bg-neutral-600 text-neutral-400 p-2 rounded-full">
        <Sun1 className="bg-primary-green p-1 text-white rounded-full" />
        <Moon className="p-1"/>
        </div>
    </li>
)