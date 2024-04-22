import { type Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { SimpleLayout } from '../components/SimpleLayout';
import { StageOpdracht } from '../components/stageopdracht';

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
      intro='Ik kreeg de kans aan een zeer boeiende een leerrijke stageopdracht te werken bij iSmart te Westerlo. Hieronder kan u alles terugvinden in verband met mijn stage.'
    >
      <div className='space-y-20'>
        <SpeakingSection title='Verschillende Fases stage'>
          {/* TODO - verschillende fases uitschrijven met uitleg */}
          <Appearance
            title='Analyse'
            description='De eerste week heb ik mij bezig gehouden met het onderzoeken van de scope van de stageopdracht. Dit heb ik dan gedocumenteerd. Dit ook aangezien we vanaf de tweede week met twee studenten gingen zijn en het zo voor beide duidelijk werd wat er van ons verwacht werd.'
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
            description='In deze fase heb ik mij bezig gehouden met alle ducomentatie voor mijn stage in orde te brengen.'
            event='Week 14 - week 15 (20/05-31/05)'
          />
        </SpeakingSection>
        <StageOpdracht />
      </div>
    </SimpleLayout>
  );
}
