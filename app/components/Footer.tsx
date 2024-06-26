import Link from 'next/link';
import { ContainerInner, ContainerOuter } from './Container';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className='transition hover:text-huisstijl-green'>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className='mt-32 flex-none'>
      <ContainerOuter>
        <div className='border-t border-zinc-100 pb-16 pt-10 '>
          <ContainerInner>
            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
              <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800'>
                <NavLink href='/about'>Over mij</NavLink>
                <NavLink href='/projects'>Projecten</NavLink>
                <NavLink href='/stage'>Stage</NavLink>
              </div>
              <p className='text-sm text-zinc-400 '>
                &copy; {new Date().getFullYear()} Hilde Hemelaers. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
