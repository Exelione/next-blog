'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import "@/app/index.css"

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
};



const Navigation = ({ navLinks }: Props) => {
    const pathName = usePathname();
    return <>{
        navLinks.map(link=>{
            const isActive = pathName === link.href;
            return <a key={link.label} href={link.href} className={isActive ? 'active' : ''}>{link.label}</a>
        })
    }</>
    
}

export default Navigation
