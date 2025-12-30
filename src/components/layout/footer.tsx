import Logo from '../logo'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-secondary'>
        <div className='container mx-auto max-w-7xl px-4 py-8 md:px-6'>
            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                <Logo />
                <p className='text-sm text-muted-foreground'>© {new Date().getFullYear()} Briljant Städ och Tvätt MB. Alla rättigheter förbehållna.</p>
                <div className='flex items-center gap-4'>
                    <Link href="https://ww.facebook.com/Briljantstad/" aria-label="Facebook">
                    <Facebook className='h-5 w-5 text-muted-foreground hover:text-primary transition-colors'/>
                    </Link>
                    <Link href="https://www.instagram.com/briljantstad/" aria-label="Instagram">
                    <Instagram className='h-5 w-5 text-muted-foreground hover:text-primary transition-colors'/>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
