import Image from 'next/image';
import clsx from 'clsx';
import image1 from './images/photos/image-1.jpg';
import image2 from './images/photos/image-2.jpg';
import image3 from './images/photos/image-3.jpg';
import image4 from './images/photos/image-4.jpg';
import image5 from './images/photos/image-5.jpg';
import { Container } from './components/Container';
import { GitHubIcon } from './components/SocialIcons';

function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className='mt-16 sm:mt-20'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl ',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=''
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl '>
            Student toegepaste informatica - applicatie ontwikkeling.
          </h1>
          <p className='mt-6 text-base text-zinc-600 '>
            Ik ben Hilde Hemelaers, student applicatieontwikkeling aan de Thomas
            More hogeschool in Geel. Ik ben nu bezig met mijn derde jaar en
            studeer dus dit jaar (juni 2024) af. In mijn portfolio kan u lezen
            Wat ik tijdens mijn studie al bereikt heb.
            {/* <br />
          Mijn hobby is Akabe. Dit is een scoutsorganisatie voor kinderen met en zonder een beperking. 
          Na 7 jaar lid te zijn geweest waarin ik veel geleerd heb over de omgang met deze mensen, ben ik 
          vier jaar leiding waarvan één jaar groepsleider geweest. Ook ben ik graag creatief bezig in mijn 
          vrije tijd. */}
            <br />
            Welkom op mijn protfolio website!
          </p>
          <div className='mt-6 flex gap-6'>
            <a
              href='https://github.com/HildeH2002'
              target='_blank'
              className='group -m-1 p-1'
            >
              <GitHubIcon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 ' />
            </a>
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
}
