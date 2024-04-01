import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import avatarImage from '../images/avatar.jpg'

import portraitImage from '../images/portrait.jpg'
import { Container } from '../components/Container'
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from '../components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32 relative">
      <div className="pl-4 h-36 w-full bg-huisstijl-blue w-full rounded-md text-6xl text-white flex flex-row-reverse pr-4 font-semibold items-center space-between">
        <p>Hilde Hemelaers</p>
        <div className='grow'></div>
        <Image
        src={avatarImage}
        alt=""
        sizes={'4rem'}
        className={
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800h-32 w-32'}
        priority
      />
      </div>
      <div className='grid grid-cols-3 pt-4'>
          <div className='col-span-3 md:col-span-1'>
            <p>1 juli 2002</p>
            <br />
            <p>0468/18.40.62</p>
            <p>hildehemelaers@hotmail.com</p>
            <br />
            <p>2200 Herentals</p>
            <hr className="h-px my-4 border-0 bg-gray-700 mr-2"/>
            <p className='text-xl font-semibold'>Opleiding</p>
            <p>2020-2024</p>
            <p className='pl-2'>
              Professionele bachelor in de toegepaste informatica specialisatie in applicatieontwikkeling
              <p className='text-slate-400'>Thomas more - Geel</p>
            </p>
            <p>2016-2020</p>
            <p className='pl-2'>
              Tso boekhouden informatica
              <p className='text-slate-400'>Campus de Vesten - Herentals</p>
            </p>
            <hr className="h-px my-4 border-0 bg-gray-700 mr-2"/>
            <a href="https://github.com/HildeH2002"  target='_blank' className="group -m-1 p-1 flex flex-rows gap-2">
              <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
              Github repo
            </a>
          </div>
          
          <div className='col-span-3 md:col-span-1'>col2</div>
      </div>
    </Container>
  )
}
