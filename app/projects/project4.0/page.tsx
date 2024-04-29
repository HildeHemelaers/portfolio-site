import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';

export default function Project40() {
  return (
    <SimpleLayout title='Project 4.0' intro='intro'>
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
