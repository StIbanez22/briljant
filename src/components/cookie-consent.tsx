"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // This code runs only on the client-side
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (consent !== "true") {
        setShowConsent(true);
      }
    } catch (e) {
      // localStorage may be disabled
      console.error("Could not access localStorage", e);
    }
  }, []);

  const acceptConsent = () => {
    setShowConsent(false);
    try {
      localStorage.setItem("cookie_consent", "true");
    } catch (e) {
      console.error("Could not set localStorage item", e);
    }
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <Card className="max-w-3xl mx-auto p-6 shadow-2xl flex flex-col sm:flex-row items-center gap-6 bg-card/95 backdrop-blur-sm">
        <Cookie className="h-10 w-10 text-primary flex-shrink-0 hidden sm:block" />
        <div className="flex-grow text-center sm:text-left">
          <h3 className="font-semibold text-lg text-card-foreground">
            Vi använder cookies
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Den här webbplatsen använder cookies för att säkerställa att du får
            den bästa upplevelsen.
            {/* Du kan länka till en integritetspolicy här om du vill. */}
            {/* <Link href="/integritetspolicy" className="underline hover:text-primary">Läs mer</Link> */}
          </p>
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Button onClick={acceptConsent} className="w-full">
            Acceptera
          </Button>
        </div>
      </Card>
    </div>
  );
}
