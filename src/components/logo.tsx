import {Gem} from 'lucide-react';
import {cn} from '@/lib/utils';

const Logo = ({className}: {className?: string}) => {
 return (
    <div className={cn("flex items-center gap-2 text-2xl font-bold text-foreground", className)}>
        <Gem className="h-6 w-6 text-primary" />
        <span className="font-heading">Briljant</span>
    </div>
 );
};

export default Logo;