import { type Metadata } from 'next';
import Image from 'next/image';

import krioen from '../images/logos/krioen.png';
import hooyberghs from '../images/logos/hooyberghs.png';
import googleDrive from '../images/logos/googleDrive.png';
import flutter from '../images/logos/flutter.png';
import RA from '../images/logos/RA.png';
import aanstokerij from '../images/logos/aanstokerij.png';
import ismart from '../images/logos/ismart.png';
import { SimpleLayout } from '../components/SimpleLayout';
import { Card } from '../components/Card';

const projects = [
  {
    name: 'Website Krioen',
    description: 'Scouts',
    link: { href: '/projects/krioen', label: 'info website krioen' },
    logo: krioen,
  },
  {
    name: 'Project 4.0',
    description: 'School',
    link: { href: '/projects/project4.0', label: 'info project 4.0' },
    logo: hooyberghs,
  },
  {
    name: 'Nacht van de ondernemende student',
    description: `School (extra activiteit)`,
    link: { href: '/projects/nvdos', label: 'info nvdos' },
    logo: aanstokerij,
  },
  {
    name: 'Implementatie Google workspace',
    description: 'Scouts',
    link: { href: '/projects/googleDrive', label: 'info google drive' },
    logo: googleDrive,
  },
  {
    name: 'App mobile dev and AR',
    description: 'School',
    link: { href: '/projects/appMobileDevAndAr', label: 'info app' },
    logo: flutter,
  },
  {
    name: 'Project requirement analysis',
    description: 'School',
    link: {
      href: '/projects/projectRA',
      label: 'info project requirement analysis',
    },
    logo: RA,
  },
  {
    name: 'Stage',
    description: 'School',
    link: {
      href: '/stage',
      label: 'info stage',
    },
    logo: ismart,
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
        fill='currentColor'
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title='Mijn projecten'
      intro='Hieronder kan u een aantal van mijn verwezenlijkte projecten terugvinden. Dit gaat zowel over projecten die ik binnen als buiten de schoolcontext heb gemaakt.'
    >
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
      >
        {projects.map((project) => (
          <Card as='li' key={project.name}>
            <div className='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5'>
              <Image
                src={project.logo}
                alt=''
                className='h-8 w-8'
                /* unoptimized */
              />
            </div>
            <h2 className='mt-6 text-base font-semibold text-zinc-800'>
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-huisstijl-green'>
              <LinkIcon className='h-6 w-6 flex-none' />
              <span className='ml-2'>{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
