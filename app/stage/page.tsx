import { type Metadata } from 'next'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { SimpleLayout } from '../components/SimpleLayout'


function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card>
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Stage',
  description:
    'Stage 2024',
}

export default function Stage() {
  return (
    <SimpleLayout
      title="Ontwikkelen van SaaS-platform voor energiemanagement van gebouwen"
      // TODO - intro stage pagina
      intro="Inleidende tekst stage"
    >
      <div className="space-y-20">
        <SpeakingSection title="Verschillende Fases stageopdracht">
          {/* TODO - verschillende fases uitschrijven met uitleg */}
          <Appearance
            href="#"
            title="Analyse"
            description="Info analyse fase"
            event="Week 1 (19/02-23/02)"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="..."
            description="..."
            event="Week 2 - week ... (26/02-...)"
            cta="Watch video"
          />
        </SpeakingSection>
        {/* TODO - stage documenten */}
      </div>
    </SimpleLayout>
  )
}
