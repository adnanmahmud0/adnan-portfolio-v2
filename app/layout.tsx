import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.adnanmahmud.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Adnan Mahmud | Software Engineer",
  description: "Software engineer delivering production web and mobile applications, marketplace platforms, workflow automation, data-validation systems, and reusable development tooling.",
  keywords: ["Md. Adnan Mahmud", "Software Engineer", "Full Stack Developer", "React Developer", "Next.js Developer", "Dhaka Bangladesh", "Automation Engineer"],
  authors: [{ name: "Md. Adnan Mahmud", url: siteUrl }], creator: "Md. Adnan Mahmud",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: "Md. Adnan Mahmud", title: "Md. Adnan Mahmud | Software Engineer", description: "Full-stack, frontend, automation and DevOps delivery for production products and international clients.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Md. Adnan Mahmud — Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "Md. Adnan Mahmud | Software Engineer", description: "Full-stack, frontend, automation and DevOps engineer based in Dhaka, Bangladesh.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080a0a" };

const structuredData = { "@context": "https://schema.org", "@type": "Person", name: "Md. Adnan Mahmud", url: siteUrl, image: `${siteUrl}/assest/adnan-hero-hd.png`, jobTitle: "Software Engineer", address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" }, email: "mailto:adnan@adnanmahmud.me", sameAs: ["https://github.com/adnanmahmud0", "https://www.linkedin.com/in/adnanmahmud99/", "https://www.facebook.com/adnanmahmud99/"], knowsAbout: ["React.js", "Next.js", "Express.js", "Python", "Flask", "React Native", "Docker", "CI/CD"] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
