import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';
import project from '@/app/images/projects/ra/ProjectRA.png';
import useCase1 from '@/app/images/projects/ra/usecase1.jpg';
import screen1a from '@/app/images/projects/ra/screen11.jpg';
import screen1b from '@/app/images/projects/ra/screen12.jpg';
import useCase2 from '@/app/images/projects/ra/usecase2.jpg';
import screen2a from '@/app/images/projects/ra/screen21.jpg';
import Image from 'next/image';

export default function ProjectRa() {
  return (
    <SimpleLayout
      title='Project requirements analysis'
      intro='IT projecten analyseren en documenteren.'
    >
      <Image src={project} width={600} alt='Foto RA' />
      <Tussentitel>Achtergrond en context</Tussentitel>
      <p>
        Project <text className='italic '>requirements analysis</text> was een
        project na de cursus van{' '}
        <text className='italic '>requirements analysis</text>. In de cursus
        leerden we werken met verschillende modellen voor het analyseren en
        documenteren van een IT-project. Ook leerden we een prototype maken.
      </p>
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <p>
        Tijdens het project kregen we een klant toegewezen. We analyseerden haar
        IT vraag en documenteerden aan de hand van verschillende modellen het
        volledige project. Ook maakten we een prototype van de gewenste
        applicatie. Later zou onze documentatie gebruikt worden door een andere
        groep studenten voor het uitwerken van de IT-oplossing. Hiervoor moest
        onze documentatie dus volledig en duidelijk zijn.
      </p>
      <Tussentitel>Gebruikte technologieën</Tussentitel>
      <p>
        Aan het einde van het project leverden we een Analyse-en-ontwerprapport
        op en een prototype. Het prototype is gemaakt in Axure. Het
        Analyse-en-ontwerprapport bevatte onderstaande onderdelen.
      </p>
      <ul className='list-disc ml-10 pt-2'>
        <li>
          Opdrachtbeschrijving
          <ul className='list-circle ml-11'>
            <li>Achtergrondinformatie</li>
            <li>Doelstellingen en doelgroep</li>
          </ul>
        </li>
        <li>
          Eisenanalyse
          <ul className='list-circle ml-11'>
            <li>Functionele eisen</li>
            <li>Niet-functionele eisen</li>
          </ul>
        </li>
        <li>Prioriteit per functionaliteit</li>
      </ul>
      <p className='pt-2'>Voor het projectmanagement gebruikten we Trello.</p>
      <Tussentitel>
        Beschrijven van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <p>
        We werkten in een team van 5 studenten. Het werk is redelijk gelijk
        verdeeld geweest. Ik heb dus ongeveer 1/5 van het werk gedaan, dit
        betekent dat ik een aantal use cases heb uitgeschreven en een deel van
        het prototype heb uitgewerkt.
      </p>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>
      <p>
        Door een best groot project uit te werken in een use case diagram ben ik
        ervan overtuigd dat ik tegen het einde zeker goed begrepen had hoe een
        use case diagram te maken. Ik heb extra nauwkeurig leren werken want ook
        al was het een groepswerk, het moest wel consistent zijn zodat het niet
        duidelijk was wanneer een gedeelte van een andere student begon.
        Aangezien ons project gericht was naar mensen met dementie heb ik
        inzicht gekregen in wat er belangrijk is in het ontwerp van een
        applicatie voor deze doelgroep.
      </p>
      <Tussentitel>Use cases van het project</Tussentitel>
      <Image src={useCase1} width={500} alt='Foto RA' className=' my-5 mt-10' />
      <Image src={screen1a} width={400} alt='Foto RA' className=' my-5' />
      <Image src={screen1b} width={300} alt='Foto RA' className=' my-5' />
      <Image src={useCase2} width={500} alt='Foto RA' className=' my-5 mt-10' />
      <Image src={screen2a} width={400} alt='Foto RA' className=' my-5' />
      <Back>/projects</Back>
    </SimpleLayout>
  );
}
