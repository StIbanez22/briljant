import { PlaceholderImages } from '@/lib/placeholder-images'
import { Heart, ShieldCheck, Users } from 'lucide-react'
import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image'

const values = [
    {
      icon: Heart,
      title: "Passion för Perfektion",
      description: "Varje uppdrag utförs med en genuin vilja att skapa ordning och glans. Vi älskar att se förvandlingen och går alltid det lilla extra steget för att du ska bli riktigt nöjd."
    },
    {
      icon: Users,
      title: "Handplockad Personal",
      description: "Vi väljer noggrant ut vår personal. Endast de mest kompetenta och de som delar vår vision om kvalitet och service blir en del av vårt team."
    },
    {
      icon: ShieldCheck,
      title: "En Garanti för Trygghet",
      description: "Vi vet hur stressande det kan vara med opålitliga firmor. Hos oss är en sak säker: vi levererar det vi lovar, varje gång. Inget krångel, inga besvikelser."
    }
]
export default function About( ) {
    const aboutFounderImage = PlaceholderImages.find(p => p.id === 'avatar-founder')
  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-center lg:text-left">
                Vår berättelse – och varför vi bryr oss på riktigt
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                    Efter många år i både restaurang- och städbranschen såg jag något som gjorde mig både besviken och beslutsam: det saknas städföretag som faktiskt bryr sig. Genuint.
                </p>
                <p>
                    Jag mötte kunder som betalat för en tjänst men ändå känt sig besvikna och sett hem där resultatet var långt ifrån vad det borde vara. Varje gång tänkte jag: “Det här ska inte behöva hända.”
                </p>
                <p>
                    Att skapa ordning ur kaos ligger i mitt DNA. Jag tror att om man ska driva ett städföretag, då måste man ha just den passionen. Det var där idén till Briljant Städ & Tvätt föddes.
                </p>
                <p className="font-semibold text-foreground">
                    Jag ville starta ett företag som visar hur det ska kännas när en städfirma har varit hos dig: Att du kommer hem, andas ut och tänker “wow”. Att du ser allt det där lilla extra vi gjort – inte missarna som andra lämnar kvar.
                </p>
            </div>
            <Separator className="my-8"/>
            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-xl p-6 bg-background/50">
                 {aboutFounderImage && (
                    <Image
                        src={aboutFounderImage.imageURL}
                        alt="Michaela, grundare av Briljant Städ och Tvätt"
                        width={120}
                        height={120}
                        className="rounded-full shadow-lg object-cover flex-shrink-0"
                        data-ai-hint={aboutFounderImage.imageHint}
                    />
                 )}
                 <div className="text-center sm:text-left">
                     <p className="font-handwriting text-primary text-3xl mb-1">Michaela</p>
                     <p className="font-semibold text-foreground">Grundare, Briljant Städ & Tvätt MB</p>
                 </div>
            </div>

          </div>
          <div className="lg:col-span-5 space-y-8">
            {values.map((value, index) => {
                const Icon = value.icon
                return (
                    <div key={index} className="flex items-start gap-5">
                         <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0 mt-1">
                           <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl text-foreground">{value.title}</h3>
                          <p className="text-muted-foreground mt-1">{value.description}</p>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
