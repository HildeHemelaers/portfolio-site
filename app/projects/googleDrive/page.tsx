import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';

export default function GoogleDrive() {
  return (
    <SimpleLayout
      title='Google drive'
      intro="Voor een jeugdbeweging is het belangrijk om hun bestanden op een overzichtelijke manier te beheren. Ook foto's moeten overzichtelijk bewaard worden en dit op een manier die in norm is met de GDPR wetgeving."
    >
      <Tussentitel>Achtergrond en context</Tussentitel>
      <p>
        De pioen bestond al bijna 25 jaar en sinds ongeveer 10 jaar hielden wij
        onze documenten al online bij op één plek. Jammer genoeg gingen er nog
        veel documenten verloren omdat wij gebruik maakten van X. Leiding vond
        dit vaak niet handig omdat er problemen ontstonden als je samen in een
        document aan het werken was. Hierdoor maakte leiding vaak zelf een
        google drive mapje aan wat ze deelden met de leiding die op dat moment
        het bepaalde document nodig had. Na het gebruiken van dit document ging
        dit mapje verloren en kwam dit dus niet in een gezamenlijk archief
        terecht waarin we informatie van de vorige jaren in konden terugvinden.
        Leiding die al aan het werken was en hierdoor geen account meer had voor
        word en excel kon de bestanden ook niet bewerken.
      </p>
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <p>
        Ik heb zelf de beslissing gemaakt dit aan te passen omdat ik merkte dat
        het mj enorm stoorde. Ik ben gaan uitzoeken wat goede alternatieven
        waren. Al snel kwam ik erachter dat VZWs in België gratis een google
        workspace konden afsluiten. Hiermee zouden we gemakkelijk de toegang tot
        mappen voor gebruikers kunnen beheren. Ook kregen we 1TB aan
        opslagruimte wat ruim voldoende was. Ik moest er dus voor zorgen dat we
        dit gratis account kregen, dat alle leiding en oudleiding aan account
        had, dat al onze documenten overgezet werden, dat leiding en oudleiding
        wist hoe alles{' '}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        werkte, dat ouders terug toegang kregen dat de foto's en dat er nog
        andere mensen samen het admin schap van de google workspace op zich
        konden nemen.
      </p>
      <Tussentitel>Gebruikte technologieën</Tussentitel>
      <Tussentitel>
        Beschrijven van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>
      <Back>/projects</Back>
    </SimpleLayout>
  );
}
