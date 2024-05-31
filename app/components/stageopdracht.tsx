import { GlobeAltIcon, PaperClipIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import ScreenApp from '@/app/images/photos/screenapp.png';

const features = [
  {
    name: 'Plan van aanpak',
    link: 'https://rt6zyqesuqnyty1i.public.blob.vercel-storage.com/Plan%20van%20aanpak%20Hilde%20Hemelaers%20stage%202024-xJyk39k44B1naf0Zc3G9H5lbmDso3h.pdf',
  },
  {
    name: 'Realisatie',
    link: 'https://rt6zyqesuqnyty1i.public.blob.vercel-storage.com/Realisatie%20stage%202024%20Hilde%20Hemelaers-rXnYE5Ie4vODC3Zvx8IoMU8XAT1UFf.pdf',
  },
  {
    name: 'Reflectie',
    link: 'https://rt6zyqesuqnyty1i.public.blob.vercel-storage.com/Reflectie_Stage2024_HildeHemelaers-D0o2YXdLJXo4dOTuA0stmSZ8MW9SE7.pdf',
  },
  {
    name: 'Documentatie Energy!',
    link: 'https://rt6zyqesuqnyty1i.public.blob.vercel-storage.com/documentatie%20energy-hdEvk3IVhj6NJyTkZRnG8SvMdLOawR.pdf',
  },
];

export function StageOpdracht() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className=''>
            <div className='lg:max-w-lg'>
              <a
                target='_blank'
                href='https://stage-energy.vercel.app/'
                className='text-base font-semibold leading-7 text-teal-500 hover:text-teal-600 flex items-center gap-2'
              >
                <GlobeAltIcon className='h-4 w-4' />
                stage-energy.vercel.app
              </a>
              <p className='my-2 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Stage documentatie
              </p>
              <ul
                role='list'
                className='divide-y divide-gray-100 rounded-md border border-gray-200'
              >
                {features.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'
                  >
                    <div className='flex w-0 flex-1 items-center'>
                      <PaperClipIcon
                        className='h-5 w-5 flex-shrink-0 text-gray-400'
                        aria-hidden='true'
                      />
                      <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                        <span className='truncate font-medium'>
                          {item.name}
                        </span>
                      </div>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        target='_blank'
                        href={item.link}
                        className='font-medium text-teal-500 hover:text-teal-600'
                      >
                        Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex items-start justify-end lg:order-first'>
            <a target='_blank' href='https://stage-energy.vercel.app/'>
              <Image
                src={ScreenApp}
                alt='app screenshot'
                className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
                width={2432}
                height={1442}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
