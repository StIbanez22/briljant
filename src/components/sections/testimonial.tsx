"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { PlaceholderImages } from "@/lib/placeholder-images";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatarId: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anna Svensson",
    title: "Villaägare, Västerås",
    quote:
      "Helt otroligt resultat! Vårt hem har aldrig varit så rent. Teamet var professionellt, punktligt och noggrant. Kan starkt rekommendera Briljant Städ!",
    avatarId: "avatar-1",
  },
  {
    name: "Mikael Persson",
    title: "Kontorschef",
    quote:
      "Vi anlitar Briljant för vår veckovisa kontorsstädning och är supernöjda. Alltid skinande rent och en trevlig personal. De är flexibla och lätta att ha att göra med.",
    avatarId: "avatar-2",
  },
  {
    name: "Familjen Eriksson",
    title: "Flyttstädning",
    quote:
      "Flyttstädningen var perfekt utförd. Inte en anmärkning på besiktningen och vi kunde lämna över nycklarna med gott samvete. Tack för ett fantastiskt jobb!",
    avatarId: "avatar-3",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Vad våra kunder säger
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi är stolta över att ha nöjda kunder. Läs vad några av dem tycker
            om våra tjänster.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceholderImages.find(p => p.id === testimonial.avatarId);
              const fallbackInitial = testimonial.name ? testimonial.name.charAt(0) : 'B';
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-6">{testimonial.quote}</p>
                        <div className="flex flex-col items-center">
                           {avatarImage && (
                            <Avatar className="h-16 w-16 mb-4">
                               <AvatarImage src={avatarImage.imageURL} alt={testimonial.name} />
                               <AvatarFallback>{fallbackInitial}</AvatarFallback>
                            </Avatar>
                           )}
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
