import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'


import logoAirbnb from './images/logos/airbnb.svg'
import logoFacebook from './images/logos/facebook.svg'
import logoPlanetaria from './images/logos/planetaria.svg'
import logoStarbucks from './images/logos/starbucks.svg'
import image1 from './images/photos/image-1.jpg'
import image2 from './images/photos/image-2.jpg'
import image3 from './images/photos/image-3.jpg'
import image4 from './images/photos/image-4.jpg'
import image5 from './images/photos/image-5.jpg'
import { Card } from './components/Card'
import { formatDate } from './lib/formatDate'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from './components/SocialIcons'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  // let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Student toegepaste informatica - applicatie ontwikkeling.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Ik ben Hilde Hemelaers, student applicatieontwikkeling aan de Thomas More hogeschool in Geel. Ik 
          ben nu bezig met mijn derde jaar en studeer dus dit jaar (juni 2024) af. In mijn portfolio kan u 
          lezen Wat ik tijdens mijn studie al bereikt heb.
          {/* <br />
          Mijn hobby is Akabe. Dit is een scoutsorganisatie voor kinderen met en zonder een beperking. 
          Na 7 jaar lid te zijn geweest waarin ik veel geleerd heb over de omgang met deze mensen, ben ik 
          vier jaar leiding waarvan één jaar groepsleider geweest. Ook ben ik graag creatief bezig in mijn 
          vrije tijd. */} 
          <br />
          Welkom op mijn protfolio website!

          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
            <a href="https://www.instagram.com/hildecreates/"  target='_blank' className="group -m-1 p-1">
              <InstagramIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
            <a href="https://github.com/HildeH2002"  target='_blank' className="group -m-1 p-1">
              <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
          </div>
        </div>
      </Container>
      <Photos />
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  )
}
