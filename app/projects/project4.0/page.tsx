import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';
import Screen from '@/app/images/projects/40/videoscreen.png';
import Screen2 from '@/app/images/projects/40/screen2.png';
import Image from 'next/image';
import { ProjectNavigation } from '@/app/components/projectNavigation';

export default function Project40() {
  return (
    <SimpleLayout
      title='Project 4.0'
      intro='Samenwerking tussen verschillende velden binnen de IT.'
    >
      <ProjectNavigation href1='/projects/krioen' href2='/projects' href3='/projects/nvdos' />
      <div className='flex-col flex xl:flex-row gap-4'>
        <Image
          src={Screen}
          width={600}
          alt='Foto krioen'
          className='object-contain'
        />
        <Image
          src={Screen2}
          width={410}
          alt='Foto krioen'
          className='object-contain'
        />
      </div>
      
      <Tussentitel>Achtergrond en context</Tussentitel>
      <p>
        Project 4.0 was een vak op school in het derde jaar. We werkten voor het
        gehele project samen in een groep van 6 studenten. Onze groep bestond
        uit drie studenten applicatieontwikkeling, 2 studenten{' '}
        <text className='italic '>cloud and cybersecurity</text> en één student{' '}
        <text className='italic '>internet of things</text>.
      </p>
      <p className='pt-2'>
        Ons project was erop gericht een oplossing te bieden in de bouw bij de
        fase van de grondbemaling. Wij zouden een{' '}
        <text className='italic '>proof fp concept</text> maken waarmee onze
        klant hogerop kon gaan om te vragen voor budget voor de volledige
        uitwerking van het idee.
      </p>
      <p className='pt-2'>
        Voor de bouw start van een kelder, septische putten, waterputten, ...
        moet eerst het grondwater weggepompt worden tot onder het niveau van de
        plaatsing van deze onderdelen. Momenteel gebeurt dit niet efficiënt en
        economisch. Er wordt vaak te veel water weggepompt. Dit kost veel.
      </p>
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <p>
        Project 4.0 bestond uit meerdere fases. In de eerste fase was het doel
        om een goede analyse te maken van het project. Ook moest er een
        duidelijk plan van aanpak zijn voor de volgende fase. In deze fase
        gebeurden de voorbereidingen zoals het uitzoeken van de nodige
        componenten om vlot te kunnen starten in de volgende fase.
      </p>
      <p className='pt-2'>
        In het tweede deel was ons doel het uitwerken van een{' '}
        <text className='italic '>proof of concept</text> voor de automatische
        grondbemaling. De pompen zouden moeten aangestuurd worden op basis van
        sensorgegevens die aangeven tot waar het grondwater staat. Ook zou het
        systeem zich automatisch moeten heropstarten als er een probleem is met
        één pomp. Momenteel valt het volledige systeem uit bij een pomp met
        probleem waardoor het kan voorkomen dat er buiten de werkuren een
        technieker ter plaatse moet komen.
      </p>
      <Tussentitel>Gebruikte technologieën</Tussentitel>
      <p>
        Voor het teamwerk hebben we gebruik gemaakt van Jira. Hierin konden we
        bijhouden wie wat aan het doen was in welke sprint en of we op schema
        waren. Dit werd ondersteund door onze{' '}
        <text className='italic '>daily standup meeting</text>.
      </p>
      <p className='pt-2'>
        Het project zelf bestond uit een frontend, backend en IOT-gedeelte. Voor
        de frontend maakten we gebruik van Angular. De backend was geschreven in
        .NET. Voor het IOT-gedeelte maakten we gebruik van verschillende
        componenten. Deze communiceerden met elkaar via LoRa.
      </p>
      <Tussentitel>
        Beschrijving van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <p>
        Ik was verantwoordelijk voor de uitwerking van de frontend en de hosting
        hiervan. De styling heb ik samen met een andere student gedaan. Hoewel
        er twee andere studenten verantwoordelijk waren voor de backend heb ik
        hier ook bij mogen helpen. Zo heb ik een paar specifieke functies
        geschreven die ik nodig had in de frontend.
      </p>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>
      <p>
        Het project was in een best groot team en ook voor het eerst in een team
        waarin mensen met verschillende specialiteiten zaten. Dit was een enorm
        leerrijke setting. Ik heb veel geleerd over het samenwerken en
        communiceren. Ook leerde je vertrouwen op andere mensen hun
        specialiteit.
      </p>
      <p className='pt-2'>
        Ook technisch heb ik heel wat bijgeleerd. Ik heb alleen gebruik gemaakt
        van technologieën die ik al kende, maar omdat het zo een uitgebreid
        project was heb ik nog veel bijgeleerd over Angular en .NET.
      </p>
      <Tussentitel>Video over het project</Tussentitel>
      <iframe
        width='426'
        height='240'
        src='https://www.youtube.com/embed/FuzaasrWwbU'
      ></iframe>
      
    </SimpleLayout>
  );
}
