'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../logo";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Menu, X } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";


const navLinks = [
    {href:"#services", label:"Tjänster"},
    {href:"#about", label:"Om oss"},
    {href:"#contact", label:"Kontakt"},
];

interface NavLinkProps {
    className?: string;
    onLinkClick?: () => void;
}

function NavLinks({className, onLinkClick}: NavLinkProps) {
    return (
        <nav className={cn("flex items-center gap-8", className)}>
            {navLinks.map((link) => (
                <Link 
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300",
       isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur-sm" : "bg-background"
     )}>
     <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Till startsidan">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
            <NavLinks onLinkClick={() => setIsMobileMenuOpen(false)} />
                <Button asChild size="sm">
                    <Link href="#contact">Få en offert</Link>
                </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Öppna meny</span> 
                </Button>
            </DialogTrigger>
            <DialogContent className="w-75 sm:w-96 p-0">
               <VisuallyHidden.Root>
                <DialogTitle className="sr-only">Mobilmeny</DialogTitle>
               </VisuallyHidden.Root>
               <div className="p-4">
                 <div className="flex justify-between items-center mb-8">
                    <Logo />
                    <Button variant="ghost" size="icon" onClick={()=> setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Stäng meny</span>
                    </Button>
                 </div>
                 <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                 </nav>

                 <Button asChild className="w-full mt-8">
                    <Link href="#contact" onClick={()=> setIsMobileMenuOpen(false)}>
                    Få en offert
                    </Link>
                 </Button>
               </div>
            </DialogContent>
          </Dialog> 
        </div>
     </div>
    </header>
  );
}
