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
      <div className='pl-4 h-36 w-full bg-huisstijl-green rounded-md text-6xl text-white flex flex-row-reverse pr-4 font-semibold items-center space-between'>
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
      <div className='flex gap-1 justify-between mt-4'>
        <div className='w-40 rounded overflow-hidden shadow-lg'>
          <Image
            src={oogVoorDetail}
            alt='Oog voor detail'
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
            alt='Creativiteit'
            sizes={'10rem'}
            className={'object-cover w-40'}
            priority
          />
          <div className='px-1 py-1 flex justify-center'>
            <div className='font-bold text-base text-center'>Creativiteit</div>
          </div>
        </div>
        <div className='w-40 rounded overflow-hidden shadow-lg'>
          <Image
            src={doorzetten}
            alt='Doorzetten'
            sizes={'10rem'}
            className={'object-cover w-40'}
            priority
          />
          <div className='px-1 py-1 flex justify-center'>
            <div className='font-bold text-base text-center'>Doorzetten</div>
          </div>
        </div>
        <div className='w-40 rounded overflow-hidden shadow-lg'>
          <Image
            src={probleemoplossendDenken}
            alt='Probleemoplossend denken'
            sizes={'10rem'}
            className={'object-cover w-40'}
            priority
          />
          <div className='px-1 py-1 flex justify-center'>
            <div className='font-bold text-base text-center'>
              Probleemoplossend denken
            </div>
          </div>
        </div>
      </div>
      <hr className='h-px my-4 border-0 bg-gray-700' />

      <div className='grid grid-cols-3 pt-4 gap-2'>
        <div className='col-span-3 sm:col-span-1 pt-2'>
          <p>1 juli 2002</p>
          <br />
          <p>0468/18.40.62</p>
          <p>hildehemelaers@hotmail.com</p>
          <br />
          <p>2200 Herentals</p>
          <br />
          <p>Rijbewijs: type B</p>
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <p className='text-xl font-semibold'>Talenkennis</p>
          <tbody>
          <tr>
              <td className='w-44'>Nederlands</td>
              <td>Moedertaal</td>
            </tr>
          </tbody>
          <p>Engels</p>
          <tbody>
            <tr>
              <td className='pl-2 w-44'>Lezen & luisteren</td>
              <td>C2</td>
            </tr>
            <tr>
              <td className='pl-2'>Spreken</td>
              <td>B2</td>
            </tr>
          </tbody>
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <p className='text-xl font-semibold'>Vrije tijd</p>
          <p>2022-2023</p>
          <p className='pl-2'>
            Groepsleiding
            <p className='text-slate-400'>
              <a
                  target='_blank'
                  href='https://depioen.be/wie-zijn-wij/'
                  className='hover:text-[##697A61] flex items-center gap-2'
                >
                Akabe de Pioen
              </a>
            </p>
          </p>
          <p>2019-2023</p>
          <p className='pl-2'>
            Leiding
            <p className='text-slate-400'>
              <a
                  target='_blank'
                  href='https://depioen.be/wie-zijn-wij/'
                  className='hover:text-[##697A61] flex items-center gap-2'
                >
                Akabe de Pioen
              </a>
            </p>
          </p>
          <p>2019</p>
          <p className='pl-2'>
            Animatorattest
            <p className='text-slate-400'>
              <a
                  target='_blank'
                  href='https://www.krunsj.be/'
                  className='hover:text-[##697A61] flex items-center gap-2'
                >
                Krunsj
              </a>
            </p>
          </p>
          
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <a
            href='https://rt6zyqesuqnyty1i.public.blob.vercel-storage.com/CurriculumVitae-QPGgi80haB3ewwRH1Oqa2FNaCMLmGj.pdf'
            target='_blank'
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
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
            <div className='col-span-1'>
              <a
                target='_blank'
                href='https://nextjs.org/'
                className='hover:text-[##697A61] flex items-center gap-2'
              >
                Next.js
              </a>
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>
              <a
                target='_blank'
                href='https://react.dev/'
                className='hover:text-[##697A61] flex items-center gap-2'
              >
                React
              </a>
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>
              <a
                target='_blank'
                href='https://www.python.org/'
                className='hover:text-[##697A61] flex items-center gap-2'
              >
                Python
              </a>
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>
              Html/css
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-5/6'></div>
              </div>
            </div>
            <div className='col-span-1'>
              <a
                target='_blank'
                href='https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet'
                className='hover:text-[##697A61] flex items-center gap-2'
              >
                .Net
              </a>
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-3/4'></div>
              </div>
            </div>
            <div className='col-span-1'>
              <a
                target='_blank'
                href='https://www.java.com/nl/'
                className='hover:text-[##697A61] flex items-center gap-2'
              >
                Java
              </a>
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-3/4'></div>
              </div>
            </div>
            <div className='col-span-1'>
              <a
                target='_blank'
                href='https://angular.dev/'
                className='hover:text-[##697A61] flex items-center gap-2'
              >
                Angular
              </a>
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-4/6'></div>
              </div>
            </div>
            <div className='col-span-1'>
              <a
                target='_blank'
                href='https://www.qlik.com/us/products/qlik-sense'
                className='hover:text-[##697A61] flex items-center gap-2'
              >
                Qlik sense
              </a>
            </div>
            <div className='col-span-2'>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-huisstijl-green h-2.5 rounded-full w-1/2'></div>
              </div>
            </div>
          </div>
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <p className='text-xl font-semibold pb-2'>Opleiding</p>
          <p>2020-2024</p>
          <a
            target='_blank'
            href='https://thomasmore.be/nl/opleidingen/professionele-bachelor/toegepaste-informatica/application-development/geel/basistraject'
            className='hover:text-[##697A61] flex items-center gap-2'
          >
            <p className='pl-2 px-2'>
              Professionele bachelor in de toegepaste informatica, specialisatie
              in applicatieontwikkeling
              <p className='text-slate-400 py-2'>Thomas More - Geel</p>
            </p>
          </a>
          <p>2016-2020</p>
          <a
            target='_blank'
            href='https://www.campusdevesten.be/cms/campus-de-vesten-herentals-2/campus-de-vesten-herentals-aanbod/duplicated-campus-de-vesten-herentals-aanbod-tweede-graad-2/duplicated-campus-de-vesten-herentals-aanbod-derde-graad/duplicated-campus-de-vesten-herentals-aanbod-derde-graad-boekhouden-informatica/'
            className='hover:text-[##697A61] flex items-center gap-2'
          >
            <p className='pl-2 px-2'>
              Tso boekhouden informatica
              <p className='text-slate-400 py-2'>Campus de Vesten - Herentals</p>
            </p>
          </a>
          
          
          <hr className='h-px my-4 border-0 bg-gray-700' />
          <p className='text-xl font-semibold'>Werkervaring</p>
          <p>April 2021-februari 2023</p>
          <p className='pl-2'>
            Jysk Olen
            <p className='text-slate-400'>
              Jobstudent in de winkel (winkel aanvullen, kassa en klanten
              helpen)
            </p>
          </p>
        </div>
      </div>
    </Container>
  );
}
