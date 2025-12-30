import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "../ui/card";
import { InquiryForm } from "../inquiry-form";

const contactDetails = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+46 73 731 10 55",
    href: "tel:+46737311055",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "info@briljantstad.nu",
    href: "mailto:info@briljantstad.nu",
  },
  {
    icon: MapPin,
    label: "Adress",
    value: "Backstugugatan 10, 724 80 Västerås",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Kontakta Oss
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Har du frågor eller vill du boka en tjänst? Fyll i formuläret så
            återkommer vi inom 24 timmar.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold">Direktkontakt</h3>
            <div className="space-y-6">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const Wrapper = detail.href ? "a" : "div";
                const props = detail.href
                  ? {
                      href: detail.href,
                      className: "hover:text-primary transition-colors",
                    }
                  : {};

                return (
                  <div key={detail.label} className="flex items-start gap-5">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 mt-1 flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{detail.label}</h4>
                      <Wrapper {...props}>
                        <p className="text-muted-foreground">{detail.value}</p>
                      </Wrapper>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-3">
             <Card className="p-8 sm:p-10 shadow-lg">
                <InquiryForm />
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
