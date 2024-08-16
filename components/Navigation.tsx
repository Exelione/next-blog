'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import "@/app/index.css"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
};



const Navigation = ({ navLinks }: Props) => {
    const pathName = usePathname();
    const session = useSession();
    navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
        { label: 'Profile', href: '/profile' },

    ]
    return <>
        {navLinks.map(link => {
            if (link.label === 'Profile' && session.status === 'unauthenticated') {
                return null;
            }
            const isActive = pathName === link.href;
            return <a key={link.label} href={link.href} className={isActive ? 'active' : ''}>{link.label}</a>
        })}
       
        
        {session.status === 'authenticated' ? <Link href="#" onClick={()=>signOut
            ({callbackUrl: '/'})}>
                Sign Out
            </Link>
            : (
            <Link href="/signin" >SignIn</Link>)}
        
        </>

}

export default Navigation
