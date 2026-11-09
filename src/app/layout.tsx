import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { companies, coreStack, person, site, skillGroups } from "@/content/profile";
import "./globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: person.name, url: site.url }],
  openGraph: {
    type: "profile",
    url: "/",
    siteName: person.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${person.name}, ${person.title}` }],
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#0b0c0e", width: "device-width", initialScale: 1 };

const current = companies.find((c) => c.end === null);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: [person.title, person.altTitle, ...person.searchTitles],
  hasOccupation: { "@type": "Occupation", name: person.title, skills: coreStack.join(", ") },
  url: site.url,
  image: `${site.url}${person.photo.share}`,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Prague", addressCountry: "CZ" },
  sameAs: [person.linkedin.href, person.github.href],
  ...(current && { worksFor: { "@type": "Organization", name: current.name } }),
  alumniOf: { "@type": "CollegeOrUniversity", name: "Drohobych Ivan Franko State Pedagogical University" },
  knowsLanguage: ["uk", "en"],
  knowsAbout: skillGroups.flatMap((g) => g.skills.filter((s) => s.use !== "personal").map((s) => s.name)),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="leading-[1.55]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
