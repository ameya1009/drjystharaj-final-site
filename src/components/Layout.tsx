\import type { ReactNode } from "react"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import WhatsAppFloat from "./WhatsAppFloat"

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  ogImage?: string
}

export default function Layout({
  children,
  title = "Dr. Jyeshtharaj V. Patangankar - Pain Management Specialist",
  description = "Leading Spine & Neuro Pain Management specialist in Chhatrapati Sambhajinagar. Expert treatment for chronic pain, spine disorders, and neurological conditions.",
  ogImage = "/JystharajLogo.jpg",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr. Jyeshtharaj V. Patangankar" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Pain Panacea Clinic" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/JystharajLogo.jpg" />

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Jyeshtharaj V. Patangankar",
              alternateName: "डॉ. ज्येष्ठराज व्ही. पाटणगणकर",
              description: "Pain Management Specialist, Spine & Neuro Pain Consultant",
              medicalSpecialty: "Pain Management",
              address: {
                "@type": "PostalAddress",
                streetAddress: "OM Tower, Chetak Chowk, Ulkanagari",
                addressLocality: "Chhatrapati Sambhajinagar",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              telephone: ["+91-88050-56135", "+91-80557-19887"],
              url: "https://drjystharaj-final-site.vercel.app",
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}
