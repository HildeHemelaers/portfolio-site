'use client'

import { NavItem } from "./navitem";

export function ProjectNavigation({
    href1,
    href2,
    href3,
  }: {
    href1: string;
    href2: string;
    href3: string;
  }) {
    return (
      <div className="sticky ml-12 top-6 z-50 mb-4 max-w-max">
        <nav>
          <ul className="divide-x flex rounded-full bg-huisstijl-green px-3 text-sm font-medium text-white shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
            {href1 !== 'null' && <NavItem href={href1}>Vorige project</NavItem> }
            {href2 !== 'null' && <NavItem href={href2}>Overzicht</NavItem> }
            {href3 !== 'null' && href3 !== 'stage' && <NavItem href={href3}>Volgende project</NavItem> }
            {href3 === 'stage' && <NavItem href='/stage'>Naar stage</NavItem>}
          </ul>
        </nav>
      </div>
    );
  }