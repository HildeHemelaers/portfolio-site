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
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <Tussentitel>Gebruikte technologieën</Tussentitel>
      <Tussentitel>
        Beschrijven van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>
      <Back>/projects</Back>
    </SimpleLayout>
  );
}
