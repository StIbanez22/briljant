'use client';

import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Home, Building, Truck, WashingMachine, Check } from 'lucide-react';
import Image from 'next/image';
import { PlaceholderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

type Price = {
  label: string;
  value: string;
};

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  imageId: string;
  prices: Price[];
  includes?: string[];
  notes?: string[];
};

const servicesList: Service[] = [
    {
    icon: Home,
    title: "Hemstädning",
    description:
      "Regelbunden städning för ett skinande rent hem. Anpassas efter dina behov.",
    imageId: "service-home-cleaning",
    prices: [
      { label: "Varje vecka", value: "219 kr/tim" },
      { label: "Varannan vecka", value: "249 kr/tim" },
      { label: "Enstaka tillfälle", value: "279 kr/tim" },
    ],
    includes: [
      "Dammsugning av golv, mattor och lister",
      "Moppning av golv",
      "Dammning av fria ytor, hyllor och möbler",
      "Rengöring av kök",
      "Rengöring av badrum",
      "Torkning av synliga ytor",
      "Bäddning av sängar (vid önskemål)",
      "Strykning (vid önskemål)",
    ],
    notes: ["Priser efter 50% RUT-avdrag"],
  },
  {
    icon: Truck,
    title: "Flyttstädning",
    description:
      "Professionell flyttstädning för en smidig överlämning av din bostad.",
    imageId: "service-move-out-cleaning",
    prices: [
      { label: "0–40 kvm", value: "50 kr/kvm" },
      { label: "41–99 kvm", value: "45 kr/kvm" },
      { label: "100–150 kvm", value: "38 kr/kvm" },
      { label: "Över 150 kvm", value: "35 kr/kvm" },
    ],
    notes: [
      "Extra tillägg för balkong/inglasad altan",
      "Extra tillägg för källare eller garage",
      "Priser efter 50% RUT-avdrag",
    ],
  },
  {
    icon: WashingMachine,
    title: "Tvättservice",
    description:
      "Professionell tvätt, tork och vikning med varsam hantering av plagg.",
    imageId: "service-laundry",
    prices: [
      { label: "Upp till 5 kg", value: "299 kr" },
      { label: "Upp till 7 kg", value: "349 kr" },
      { label: "Upp till 10 kg", value: "449 kr" },
    ],
    includes: ["Tvätt", "Tork", "Vikning", "Varsam hantering"],
    notes: [
      "Överstiger tvätten angiven vikt justeras priset",
      "Hämtning/lämning enligt överenskommelse",
    ],
  },
  {
    icon: Building,
    title: "Kontors- & Lokalstädning",
    description:
      "Flexibla och professionella lösningar för företag och lokaler.",
    imageId: "service-office-cleaning",
    prices: [{ label: "Pris", value: "Från 299 kr/tim" }],
    includes: [
      "Städning av arbetsytor",
      "Golv (dammsugning & moppning)",
      "Kök / pentry",
      "Toaletter",
      "Anpassas efter lokalens behov",
    ],
  },
];


export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Våra Tjänster</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Vi erbjuder ett brett utbud av städ- och tvättjänster för att göra din vardag enklare. Klicka på en tjänst för att läsa mer och se priser.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service) => {
            const Icon = service.icon;
            const image = PlaceholderImages.find(p => p.id === service.imageId);
            return (
              <Dialog key={service.title}>
                <DialogTrigger asChild>
                  <Card className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                    <CardContent className="flex flex-col flex-grow p-0">
                      {image && (
                         <div className="relative w-full h-48 overflow-hidden">
                           <Image
                             src={image.imageURL}
                             alt={image.description}
                             fill
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             className="object-cover transition-transform duration-300 group-hover:scale-105"
                             data-ai-hint={image.imageHint}
                           />
                         </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-primary/10 text-primary rounded-lg p-3 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                        </div>
                        <p className="flex-grow text-muted-foreground">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader className="mb-4">
                    <div className="flex items-center gap-5">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                        <Icon className="h-7 w-7" />
                      </div>
                      <DialogTitle className="text-3xl font-bold font-headline">{service.title}</DialogTitle>
                    </div>
                     <DialogDescription className="text-lg text-muted-foreground pt-2 text-left">
                       {service.description}
                     </DialogDescription>
                  </DialogHeader>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                     <div>
                       <h3 className="font-bold text-xl mb-4 text-foreground">Prislista</h3>
                       <div className="space-y-3">
                         {service.prices.map(price => (
                           <div key={price.label} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                             <span className="text-muted-foreground">{price.label}</span>
                             <span className="font-semibold text-primary text-lg">{price.value}</span>
                           </div>
                         ))}
                       </div>
                        {service.notes && (
                         <div className="mt-4 space-y-1">
                           {service.notes.map(note => (
                              <p key={note} className="text-xs text-muted-foreground italic">* {note}</p>
                           ))}
                         </div>
                       )}
                     </div>

                    {service.includes && (
                       <div>
                         <h3 className="font-bold text-xl mb-4 text-foreground">Detta ingår</h3>
                         <ul className="space-y-3">
                           {service.includes.map(item => (
                             <li key={item} className="flex items-start gap-3">
                               <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                               <span className="text-muted-foreground">{item}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                     )}
                  </div>
                  <Separator className="my-2" />
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="w-full" size="lg">
                       <a href="#contact">Jag är intresserad, kontakta mig!</a>
                    </Button>
                     <DialogTrigger asChild>
                      {/*<Button variant="outline" className="w-full" size="lg">Stäng</Button>*/}
                     </DialogTrigger>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}