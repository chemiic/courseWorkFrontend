import {useMemo} from "react";
import {usePathname} from "next/navigation";
import MenuItem from "@/components/menu/MenuItem";
import * as React from "react";
import AuthButton from "@/components/menu/AuthButton";
const Navigation = () => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: 'Главная',
            active: pathname === '/',
            href: '/',
        },
        {
            label: 'Каталог',
            active: pathname === '/catalog',
            href: '/catalog',
        },
        {
            label: 'Контакты',
            active: pathname === '/contacts',
            href: '/contacts',
        },
        {
            label: 'О нас',
            active: pathname === '/about',
            href: '/about',
        },
    ], [pathname]);

    return (
        <ul className={`flex gap-1 flex-col items-center relative lg:flex-row lg:gap-4`}>
            {routes.map((item)=> (
                <MenuItem key={item.label} {...item} />
            ))}
        </ul>
    )
}
export default Navigation;