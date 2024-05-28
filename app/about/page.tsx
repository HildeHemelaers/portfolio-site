import Image from 'next/image';
import avatarImage from '@/app/images/avatar.jpg';
import oogVoorDetail from '@/app/images/softSkills/oogVoorDetail.png';
import creativiteit from '@/app/images/softSkills/creativiteit.png';
import doorzetten from '@/app/images/softSkills/doorzetten.png';
import probleemoplossendDenken from '@/app/images/softSkills/probleemoplossendDenken.png';

import { Container } from '../components/Container';
import { GitHubIcon } from '../components/SocialIcons';

export default function About() {
  return (
    <Container className='mt-16 sm:mt-32 relative'>
      <div className='pl-4 h-36 w-full bg-huisstijl-blue rounded-md text-6xl text-white flex flex-row-reverse pr-4 font-semibold items-center space-between'>
        <p>Hilde Hemelaers</p>
        <div className='grow'></div>
        <Image
          src={avatarImage}
          alt=''
          sizes={'4rem'}
          className={'rounded-full bg-zinc-100 object-cover w-32'}
          priority
        />
      </div>

      <p className='text-xl font-semibold py-4'>Mijn soft skills</p>
      <div className='flex gap-1 justify-between'>
        <div className='w-40 rounded overflow-hidden shadow-lg'>
          <Image
            src={oogVoorDetail}
            alt=''
            sizes={'10rem'}
            className={'object-cover w-40'}
            priority
          />
          <div className='px-1 py-1 flex justify-center'>
            <div className='font-bold text-base text-center'>
              Oog voor detail
            </div>
          </div>
        </div>
        <div className='w-40 rounded overflow-hidden shadow-lg'>
          <Image
            src={creativiteit}
            alt=''
            sizes={'10rem'}
            className={'object-cover w-40'}
            priority
          />
          <div className='px-1 py-1 flex justify-center'>
            <div className='font-bold text-base text-center'>creativiteit</div>
          </div>
        </div>
        <div className='w-40 rounded overflow-hidden shadow-lg'>
          <Image
            src={doorzetten}
            alt=''
            sizes={'10rem'}
            className={'object-cover w-40'}
            priority
          />
          <div className='px-1 py-1 flex justify-center'>
            <div className='font-bold text-base text-center'>doorzetten</div>
          </div>
        </div>
        <div className='w-40 rounded overflow-hidden shadow-lg'>
          <Image
            src={probleemoplossendDenken}
            alt=''
            sizes={'10rem'}
            className={'object-cover w-40'}
            priority
          />
          <div className='px-1 py-1 flex justify-center'>
            <div className='font-bold text-base text-center'>
              probleemoplossend denken
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px my-4 border-0 bg-gray-700' />

      <div className='grid grid-cols-3 pt-4 gap-2'>
        <div className='col-span-3 sm:col-span-1 pt-2'>
          <p className=''>1 juli 2002</p>
          <br />
          <p className=''>0468/18.40.62</p>
          <p className=''>hildehemelaers@hotmail.com</p>
          <br />
          <p className=''>2200 Herentals</p>
          <br />
          <p className=''>Rijbewijs: type B</p>
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <p className='text-xl font-semibold pb-2'>Opleiding</p>
          <p>2020-2024</p>
          <p className='pl-2 px-2'>
            Professionele bachelor in de toegepaste informatica, specialisatie
            in applicatieontwikkeling
            <p className='text-slate-400 py-2'>Thomas More - Geel</p>
          </p>
          <p>2016-2020</p>
          <p className='pl-2 px-2'>
            Tso boekhouden informatica
            <p className='text-slate-400 py-2'>Campus de Vesten - Herentals</p>
          </p>
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <a
            href='https://github.com/HildeH2002'
            target='_blank'
            className='group -m-1 p-1 flex flex-rows gap-2'
          >
            <GitHubIcon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 ' />
            Github repo
          </a>
          <a
            href='https://rt6zyqesuqnyty1i.public.blob.vercel-storage.com/CurriculumVitaeHildeHemelaers-XGFb3wN3Xubk5TWBBxnbWyf3INlVok.pdf'
            target='_blank'
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-10'
          >
            <svg
              className='fill-current w-4 h-4 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        <div className='col-span-3 sm:col-span-2'>
          <div className='text-center text-3xl w-full'>
            <p>Student professionele bachelor toegepaste informatica</p>
          </div>
          <hr className='h-px my-4 border-0 bg-gray-700' />

          <div className='grid grid-cols-3 gap-y-2'>
            <div className='col-span-1'>Next.js</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>React</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>Pyton</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>html/css</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>.net</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-3/4'></div>
              </div>
            </div>
            <div className='col-span-1'>Java</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-3/4'></div>
              </div>
            </div>
            <div className='col-span-1'>Angular</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-4/6'></div>
              </div>
            </div>
            <div className='col-span-1'>Qlick sense</div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-blue h-2.5 rounded-full w-1/2'></div>
              </div>
            </div>
          </div>
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <p className='text-xl font-semibold'>Werkervaring</p>
          <p>april 2021-februari 2023</p>
          <p className='pl-2'>
            Jysk Olen
            <p className='text-slate-400'>
              Jobstudent in de winkel (Winkel aanvullen, kassa en klanten
              helpen)
            </p>
          </p>
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <p className='text-xl font-semibold'>Vrije tijd</p>
          <p>2022-2023</p>
          <p className='pl-2'>
            Groepsleiding
            <p className='text-slate-400'>Akabe de Pioen</p>
          </p>
          <p>2019-2023</p>
          <p className='pl-2'>
            Leiding
            <p className='text-slate-400'>Akabe de Pioen</p>
          </p>
          <p>2019</p>
          <p className='pl-2'>
            Animatorattest
            <p className='text-slate-400'>Krunsj</p>
          </p>
        </div>
      </div>
    </Container>
  );
}
