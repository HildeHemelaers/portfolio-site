import { SimpleLayout } from '@/app/components/SimpleLayout';
import { Back } from '@/app/components/back';
import { Tussentitel } from '@/app/components/tussentitel';

export default function Krioen() {
  return (
    <SimpleLayout
      title='Krioen'
      intro='Krioen is de overkoepelende vzw van Akabe de Pioen en Chiro Kringel Elsum voor de bouw van hun gezamenlijke  lokalen.'
    >
      <Tussentitel>Achtergrond en context</Tussentitel>
      <p>
        April 2024 kreeg ik de vraag van vzw krioen of ik voor een website kon
        zorgen. Op deze site zou de conceptnota verschijnen. Dit om alle info op
        een toegankelijke manier tot de leden en sympathisanten van beide
        jeugdbewegingen te krijgen. Ook zal deze dienen om sponsors aan te
        kunnen spreken met duidelijke informatie op een eigen website.
      </p>
      <p>
        Aangezien niemand bij de vzw ervaring had met het maken van een website
        kwamen ze bij mij terecht. Zelf ben ik jaren lid en leiding geweest bij
        Akabe de Pioen. Hierdoor ben ik gekend bij de leden van de vzw en wisten
        ze ook dat dit iets is waar ik voor kan zorgen.
      </p>
      <Tussentitel>Doelstellingen van het project</Tussentitel>
      <p>
        De website start vanaf een huisstijl die al gebruikt is voor de
        conceptnota en communicatie. Ook de tekst in de conceptnota is er al.
        Mijn taak is dus deze combineren in een gebruiksvriendelijke site. Ook
        moet ik ervoor zorgen dat deze site op een eigen domeinnaam komt te
        staan aan een zo betaalbaar mogelijke prijs.
      </p>
      <Tussentitel>Gebruikte technologieën</Tussentitel>
      <p>
        Ik heb ervoor gekozen om een Next.js applicatie te maken. Dit omdat ze
        de website na de bouw willen hergebruiken om er een boekingsplatform van
        te maken voor de verhuur van het lokaal. Ik maakte ook gebruik van
        tailwind css voor de styling.
      </p>
      <Tussentitel>
        Beschrijven van mijn taken en verantwoordelijkheden
      </Tussentitel>
      <p>
        Dit project heb ik volledig zelf gedaan. Ik kon wel mensen te hulp
        vragen voor info. Zo kon ik bij een van de verantwoordelijke van de vzw
        terecht voor meer info over wat er juist op de website moest verschijnen
        en hoe zij dit zagen. Op mijn stage kon ik een aantal vragen stellen
        over het hosten van een website op een eigen domeinnaam.
      </p>
      <Tussentitel>Persoonlijke ontwikkeling</Tussentitel>

      <Back>/projects</Back>
    </SimpleLayout>
  );
}
