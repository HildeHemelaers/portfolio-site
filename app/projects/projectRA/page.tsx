import { SimpleLayout } from '@/app/components/SimpleLayout';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function ProjectRa() {
  return (
    <SimpleLayout title='Project requirements analysis' intro='intro'>
      <a
        href='/projects'
        className='flex ring-1 ring-gray-300 rounded-sm w-max items-center p-2 hover:bg-gray-200'
      >
        <ArrowUturnLeftIcon className='h-4 w-4' /> Terug
      </a>
    </SimpleLayout>
  );
}
