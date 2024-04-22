import { SimpleLayout } from '@/app/components/SimpleLayout';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function Krioen() {
  return (
    <SimpleLayout
      title='Krioen'
      intro='Krioen is de overkoepelende vzw van Akabe de Pioen en Chiro Kringel voor de bouw van hun gezamelijke lokalen.'
    >
      <p>
        April 2024 kreeg ik de vraag van vzw krioen of ik voor een website kon
        zorgen. Op deze site zou de conceptnota verschijnen. Dit om alle info op
        een toegankelijke manier tot de leden en sympathisanten van bijde
        jeugdbewegingen te krijgen en ook sponsors aan te kunnen spreken met de
        duidelijk informatie op een eigen website.
      </p>
      <p>
        Aangezien niemand bij de vzw ervaring had met het maken van een website
        kwamen ze bij mij terecht. Zelf ben ik jaren lid en leiding geweest bij
        Akabe de Pioen. Hierdoor ben ik gekend bij de leden van de vzw en wisten
        ze ook dat dit iets is waar ik voor kan zorgen. De website start vanaf
        een huisstijl die al gebruikt is voor de conceptnota en communicatie.
        Ook de tekst in de conceptnota is er al. Mijn taak is dus deze
        combineren in een gebruiksvriendelijke site. Ook moet ik ervoor zorgen
        dat deze site op een eigen domeinnaam komt te staan aan een zo
        betaalbaar mogelijke prijs.
      </p>
      <a
        href='/projects'
        className='flex ring-1 ring-gray-300 rounded-sm w-max items-center p-2 hover:bg-gray-200 mt-10'
      >
        <ArrowUturnLeftIcon className='h-4 w-4' /> Terug
      </a>
    </SimpleLayout>
  );
}
