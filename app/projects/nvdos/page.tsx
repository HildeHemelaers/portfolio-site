import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';
import Image from 'next/image';
import tweet1 from '@/app/images/projects/nvdos/hacktory tweet 1.jpg';
import tweet2 from '@/app/images/projects/nvdos/hacktory tweet 2.jpg';
import tweet3 from '@/app/images/projects/nvdos/hacktory tweet 3.jpg';
import spelbord from '@/app/images/projects/nvdos/Spelbord.png'
import bewijsFinale from '@/app/images/projects/nvdos/hacktory bewijs 4 punten.jpg';
import { ProjectNavigation } from '@/app/components/projectNavigation';

export default function Krioen() {
  return (
    <SimpleLayout
      title='Nacht van de ondernemende student'
      intro='Een hackathon voor en door studenten.'
    >
      <ProjectNavigation href1='/projects/project4.0' href2='/projects' href3='/projects/googleDrive' />
      <Image
        className='pt-2'
        src={spelbord}
        width={600}
        height={600}
        alt='Spelbord'
      />
      <Tussentitel>Achtergrond en context</Tussentitel>
      <p>
        Nacht van de ondernemende student is een hackathon die door gaat op
        Thomas More Geel in samenwerking met ICE Cube. De hackathon start
        &apos;s avonds. Een bedrijf geeft een challenge waarvoor tijdens de
        nacht een oplossing gezocht moet worden. &apos;s Ochtends geeft elk
        team dan een pitch om zo nacht van de ondernemende student te kunnen
        winnen.
      </p>
      <p className='pt-2'>
        Dit jaar kregen we een opdracht van de Aanstokerij. Zij bieden vormingen
        en spelmateriaal aan om maatschappelijke thema&apos;s bespreekbaar te
        maken. Onze opdracht was één of meerdere SDG&apos;s kiezen en een spel te
        maken om dit thema aan te kaarten voor een bepaalde leeftijdscategorie.
      </p>
      <p className='pt-2'>
        Aangezien corona nog steeds fel aanwezig was in het land is nacht van de
        ondernemende student online doorgegaan. Hierdoor duurde het ook niet de
        volledige nacht, maar zijn we rond 2 uur &apos;s nachts gaan slapen om
        de volgende ochtend onze pitch te geven.
      </p>
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <p>
        Ongeveer elk uur kregen we een nieuwe opdracht die voltooid moest worden
        met als einddoel een concept voor een spel waarover we een pitch konden
        geven. Opdrachten varieerden van het kiezen van de SDG, het uitwerken
        van de leeftijdsgroep tot het spelconcept maken. Hierbij werkten we
        samen in een team van 4 mensen.
      </p>
      <p className='pt-2'>
        Na de pitch werden drie groepen gekozen die naar de finale mochten. We
        waren blij om te horen dat we er één van waren. Uiteindelijk eindigden
        we op de derde plaats wat toch een mooie prestatie was.
      </p>
      <Tussentitel>
        Beschrijving van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <p>
        Aangezien de gekregen opdracht minder in de leefwereld van mijn
        medestudenten lag, heb ik veel uitleg gegeven. Ook zorgde ik ervoor dat
        alle ideeën uitgewerkt werden naar de juiste leeftijdsgroep. Ik heb ook
        een deel van het spel ontworpen (te zien op onderstaande afbeeldingen).
      </p>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>
      <p>
        Ik vond het zeer interessant om een spel te maken en een maatschappelijk
        thema aan te kaarten. Hieruit heb ik zeker ideeën gehaald om te
        gebruiken op de scouts. Vaak wordt hier minder aandacht aan besteed
        tijdens een spel, zeker met de doelgroep (kinderen met een beperking) en
        leeftijdscategorie (zes tot negen jaar) waarbij ik leiding gaf. Deze
        opdracht bewees dat je maatschappelijke thema&apos;s bij alle doel- en
        leeftijdsgroepen kan gebruiken.
      </p>
      <Tussentitel>Afbeeldingen van het project</Tussentitel>
      <Image src={tweet1} width={400} height={400} alt='Tweet1' />
      <Image
        className='pt-2'
        src={tweet2}
        width={400}
        height={400}
        alt='Tweet2'
      />
      <Image
        className='pt-2'
        src={tweet3}
        width={400}
        height={400}
        alt='Tweet3'
      />
      <Image
        className='pt-2'
        src={bewijsFinale}
        width={400}
        height={400}
        alt='Bewijs finale'
      />
      <Tussentitel>Video pitch</Tussentitel>
      <iframe
        width='426'
        height='240'
        src='https://www.youtube.com/embed/6mM7xQ_dQnU'
      ></iframe>
      
    </SimpleLayout>
  );
}
