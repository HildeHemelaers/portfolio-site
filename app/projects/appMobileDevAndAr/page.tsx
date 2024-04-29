import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';

export default function AppMobileDevAndAr() {
  return (
    <SimpleLayout
      title='Project mobile development and augmented reality'
      intro='intro'
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
