'use client'

import Link from "next/link";

export function NavItem({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
  
    return (
      <li>
        <Link
          href={href}
          className='relative block px-3 py-2 transition text-xl hover:text-[#697A61]'
        >
          {children}
          
        </Link>
      </li>
    );
  }