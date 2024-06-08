import { type Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { SimpleLayout } from '../components/SimpleLayout';
import { StageOpdracht } from '../components/stageopdracht';
import { Tussentitel } from '../components/tussentitel';

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className='space-y-16'>{children}</div>
    </Section>
  );
}

function Appearance({
  title,
  description,
  event,
}: {
  title: string;
  description: string;
  event: string;
}) {
  return (
    <Card>
      <Card.Title as='h3'>{title}</Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  );
}

export const metadata: Metadata = {
  title: 'Stage',
  description: 'Stage 2024',
};

export default function Stage() {
  return (
    <SimpleLayout
      title='Ontwikkelen van SaaS-platform voor energiemanagement van gebouwen'
      intro='Ik kreeg de kans aan een zeer boeiende en leerrijke stageopdracht te werken bij iSmart te Westerlo. Hieronder kunt u alles terugvinden in verband met mijn stage.'
    >
      <Tussentitel>Aanleiding en achtergrond </Tussentitel>
      <p>ISmart maakt bedrijven en gebouwen efficiënt. In Lier is er een site met verschillende gebouwen en appartementen van O3shift. De appartementen hebben gezamenlijke zonnepanelen, maar deze energie moet zo efficiënt mogelijk verdeeld worden over 70 appartementen. De projectontwikkelaar heeft zelf veel van deze appartementen in eigen beheer en wil dus geen verspilling van energie. Hij wil alles kunnen monitoren via een applicatie.</p>
      <p className='pt-2'>Voor deze klant heeft iSmart een oplossing op maat gemaakt, maar natuurlijk bevindt deze projectontwikkelaar zich niet in een unieke situatie. Steeds meer sites hebben meerdere gebouwen met meerdere appartementen. Deze worden ook steeds energieneutraler. Niet iedereen die zich in deze situatie bevindt heeft het budget om een oplossing op maat te laten ontwikkelen. Ook is bij veel van deze personen en bedrijven het budget dat ze hierin zouden moeten investeren veel hoger dan de winst die ze met de data van de applicatie zouden kunnen bereiken. Om de oplossing die ze nu op maat hebben gemaakt voor één klant toegankelijk te maken voor meerdere bedrijven wil iSmart een platform ontwikkelen. Hierop kunnen bedrijven een abonnement afsluiten met maandelijkse betaling aan de hand van de hoeveelheid appartementen, sensoren, data, …  </p>
      <p className='pt-2'>Tijdens mijn stageperiode heb ik dit idee voor een SaaS-platform omgezet naar een volledig werkende proof of concept. Dit deed ik samen met een andere student, namelijk Daan Michielsen. Hij studeert ook toegepaste informatica aan Thomas More in Geel maar dan in de afstudeerrichting artificiële intelligentie.</p>
      <Tussentitel>Tijdlijn stage</Tussentitel>
      <div className='space-y-20'>
        <SpeakingSection title='Verschillende fases stage'>
          {/* TODO - verschillende fases uitschrijven met uitleg */}
          <Appearance
            title='Analyse'
            description='De eerste week heb ik me bezig gehouden met het onderzoeken van de scope van de stageopdracht. Dit heb ik dan gedocumenteerd. Dit ook aangezien we vanaf de tweede week met twee studenten gingen zijn en het zo voor beide duidelijk werd wat er van ons verwacht werd.'
            event='Week 1 (19/02-23/02)'
          />
          <Appearance
            title='Uitvoering'
            description='In deze fase heb ik samen met de andere student aan de proof of concept gewerkt. Hierin zijn we ook steeds in overleg gebleven met het stagebedrijf over de scope. Deze kon aangepast worden waar nodig en onze stageopdracht is nog vergroot met een aantal mooie extra functionaliteiten.'
            event='Week 2 - week 12 (26/02-10/05)'
          />
          <Appearance
            title='Controle'
            description='In deze fase hebben we de applicatie nog eens onderworpen aan een grondige test. Hierbij hebben we waar nodig ook nog aanpassingen aangebracht.'
            event='Week 13 (13/05-17/05)'
          />
          <Appearance
            title='Afsluiting'
            description='In deze fase heb ik me bezig gehouden met alle documentatie om mijn stage in orde te maken.'
            event='Week 14 - week 15 (20/05-31/05)'
          />
        </SpeakingSection>
        <StageOpdracht />
      </div>
    </SimpleLayout>
  );
}
