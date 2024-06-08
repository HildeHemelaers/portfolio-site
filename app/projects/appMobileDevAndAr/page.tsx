import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { ProjectNavigation } from '@/app/components/projectNavigation';
import { Tussentitel } from '@/app/components/tussentitel';
import screen from '@/app/images/projects/mdevar/screen.png';
import Image from 'next/image';

export default function AppMobileDevAndAr() {
  return (
    <SimpleLayout
      title='Project mobile development and augmented reality'
      intro='Applicatie met Flutter en Wikitude.'
    >
      <ProjectNavigation href1='/projects/googleDrive' href2='/projects' href3='/projects/projectRA' />
      <Image
        src={screen}
        width={300}
        alt='Screenshot AR app'
        className='object-contain'
      />
      <Tussentitel>Achtergrond en context</Tussentitel>
      <p>
        Voor het vak <text className='italic '>Mobile development and AR</text>{' '}
        kregen we een groot project. Dit project diende als eindevaluatie voor
        het vak. Er waren heel wat technische vereisen om te kunnen slagen. Door
        het beter uitwerken van de applicatie was het mogelijk om hogere punten
        te scoren.
      </p>
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <p>
        Het project bestond uit twee applicaties. Er waren per applicatie een
        aantal voorwaarden om te slagen:
      </p>
      <ul className='list-disc ml-10 pt-2'>
        <li>
          Een Flutter/Wikitude applicatie met AR beleving
          <ul className='list-circle ml-11'>
            <li>AR flavor: een trigger (iets herkennen, geolocation ...)</li>
            <li>
              AR toevoeging: iets mooi/nuttig/relevant toevoegen aan de
              realiteit (model, HTML, video, ...)
            </li>
            <li>Data wordt uit API gehaald en gebruikt in de AR omgeving</li>
            <li>
              Data wordt via API weggeschreven na een interactie van de
              gebruiker in de AR omgeving
            </li>
          </ul>
        </li>
        <li>
          Een Flutter applicatie rond de data
          <ul className='list-circle ml-11'>
            <li>Minstens 3 pagina’s</li>
            <li>Minstens 1 API call die data ophaalt</li>
            <li>
              Minstens 1 API call die data wijzigt (create, update, delete)
            </li>
          </ul>
        </li>
      </ul>
      <Tussentitel>Gebruikte technologieën</Tussentitel>
      <p>
        Voor beide applicaties werd Flutter gebruikt. Voor de UI heb ik Material
        Design gebruikt. De implementatie van AR gebeurde met Wikitude.
      </p>
      <Tussentitel>
        Beschrijving van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <p>
        Ik heb dit project individueel gemaakt. Voor hulp waar nodig kon ik
        terecht bij de leerkrachten en mijn klasgenoten van het vorige jaar in
        het hoger onderwijs.
      </p>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>
      <p>
        Aangezien ik dit vak twee keer gevolgd heb, heb ik zeker veel
        bijgeleerd. Zo heb ik geleerd dat uitstellen niet altijd de beste optie
        is. Ook heb ik geleerd dat het belangrijk is eerst de lessen en
        oefeningen te maken voor aan het project te beginnen. Bij een project in
        team (want het eerste jaar heb ik dit project wel in duo gedaan) is het
        ook zeer belangrijk om duidelijk en voldoende te communiceren. Ook
        buiten de leerpunten waardoor ik het vak een tweede keer moest doen heb
        ik veel geleerd. Ik had voor dit vak nog nooit met Wikitude of Flutter
        gewerkt dus dit was nieuwe kennis.
      </p>
      <Tussentitel>Video over het project</Tussentitel>
      <iframe
        width='426'
        height='240'
        src='https://www.youtube.com/embed/oaopJjkADss'
      ></iframe>
      
    </SimpleLayout>
  );
}
