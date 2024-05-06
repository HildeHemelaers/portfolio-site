import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';
import photoDrive from '@/app/images/projects/googleDrive/drive.jpg';
import Image from 'next/image';

export default function GoogleDrive() {
  return (
    <SimpleLayout
      title='Google drive'
      intro="Voor een jeugdbeweging is het belangrijk om hun bestanden op een overzichtelijke manier te beheren. Ook foto's moeten bewaard worden en dit op een manier die in norm is met de GDPR wetgeving."
    >
      <Tussentitel>Achtergrond en context</Tussentitel>
      <p>
        De pioen bestond al bijna 25 jaar en sinds ongeveer 10 jaar hielden we
        onze documenten al online bij op één plek. Jammer genoeg gingen er nog
        veel documenten verloren omdat we gebruik maakten van Nextcloud. Leiding
        vond dit vaak niet handig omdat er problemen ontstonden als je samen in
        een document aan het werken was. Hierdoor maakte leiding vaak zelf een
        Google drive mapje aan wat ze deelden met de leiding die op dat moment
        het bepaalde document nodig had. Na het gebruiken van dit document ging
        dit mapje verloren en kwam dit dus niet in een gezamenlijk archief
        terecht waarin we informatie van de vorige jaren konden terugvinden.
        Leiding die al aan het werken was en hierdoor geen account meer had voor
        Word en Excel kon de bestanden ook niet bewerken.
      </p>
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <p>
        Ik heb zelf de beslissing gemaakt dit aan te passen omdat ik merkte dat
        het me enorm stoorde. Ik ben gaan uitzoeken wat goede alternatieven
        {/* eslint-disable-next-line react/no-unescaped-entities */} waren. Al
        snel kwam ik erachter dat VZW's in België gratis een Google Workspace
        konden afsluiten. Hiermee zouden we gemakkelijk de toegang tot mappen
        voor gebruikers kunnen beheren. Ook kregen we 1TB aan opslagruimte wat
        ruim voldoende was. Ik moest er dus voor zorgen dat we dit gratis
        account kregen, dat alle leiding en oud-leiding aan account had, dat al
        onze documenten overgezet werden, dat (oud)leiding wist hoe alles{' '}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        werkte, dat ouders terug toegang kregen dat de foto's en dat er nog
        andere mensen samen het admin schap van de Google Workspace op zich
        konden nemen.
      </p>
      <Tussentitel>Gebruikte technologieën</Tussentitel>
      <div className='flex gap-5 md:h-128'>
        <div className='relative w-200 '>
          <Image
            src={photoDrive}
            fill={true}
            alt='Foto drive'
            className='object-contain'
          />
        </div>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Ik heb al onze documenten en foto's overgezet naar een Google drive.
          Aangezien deze Google drive gekoppeld was aan een Google Workspace
          konden daar ook de accounts gemaakt worden. Ik heb gebruikt gemaakt
          van Photoshop om voor elk mapje een passende cover te maken.
        </p>
      </div>
      <Tussentitel>
        Beschrijven van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <p>
        Ik was verantwoordelijk voor het volledige project. Ik kon terecht bij
        één van onze oud-leiding voor vragen en hulp waar nodig.
      </p>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>
      <p>
        Het was een zeer leerrijk project. Ik heb hier veel geleerd van het
        opzoeken van wat ik juist wou gebruiken tot het uitwerken en duidelijk
        maken aan de eindgebruiker. Ik had natuurlijk vooraf al gewerkt met
        Google drive maar nog nooit met Google Workspace. Vooral het gedeelte
        over de aanvraag van de gratis Google Workspace en de initialisatie van
        de mail waren moeilijk, maar hierdoor heb ik veel bijgeleerd.
      </p>
      <Back>/projects</Back>
    </SimpleLayout>
  );
}
