'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceholderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const heroImage = PlaceholderImages.find(p => p.id === 'hero-background');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[80dvh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <Image
            src={heroImage.imageURL}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
      <div className="relative z-10 p-4 sm:p-6 max-w-4xl mx-auto drop-shadow-xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-handwriting">
          Vi briljerar på det vi gör.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-100">
          Professionell städning och tvätt för hem och företag. Vi anpassar oss efter dina behov för att leverera ett skinande resultat.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg">
            <Link href="#contact">
              Få en kostnadsfri offert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary shadow-lg">
             <Link href="#services">Se våra tjänster</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
