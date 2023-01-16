import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import Frase from '../components/Frase/Frase'
import Catalogo from '../components/Catalogo/Catalogo'
import Plazas from '../components/Plazas/Plazas'
import Packs from '../components/Packs/Packs'
import Preguntas from '../components/Preguntas/Preguntas'
import Reviews from '../components/Reviews/Reviews'
import Footer from '../components/Footer/Footer'

import Loading from './loading'

import { useEffect, useRef, useState } from 'react'

export default function Home() {

  const header = useRef(null)
  const catalogo = useRef(null)
  const packs = useRef(null)
  const preguntas = useRef(null)

  const [isMobile, setMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSafari, setIsSafari] = useState(true)

  useEffect(() => {
    setMobile(window.innerWidth <= 769)
    window.addEventListener('resize', () => {
      setMobile(window.innerWidth <= 769)
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    /* Check if it browser is safari */
    setIsSafari(!navigator.userAgent.match(/safari/i))
  }, [])

  return (
    <>
      <Head>
        <title>Fotografía de Comunión - Davean</title>
        
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#00aba9"/>
        <meta name="theme-color" content="#ffffff"/>
        
        {/* Preload fonts to load fonts faster */}
        <link
          rel="preload"
          href="/fonts/adele-light-webfont-webfont.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/adele-light-webfont-webfont.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dk_lemon_yellow_sun-webfont.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dk_lemon_yellow_sun-webfont.woff2"
          as="font"
          crossOrigin="anonymous"modernline-webfont
        />
        {/* <link
          rel="preload"
          href="/fonts/modernline-webfont.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/modernline-webfont.woff2"
          as="font"
          crossOrigin="anonymous"
        /> */}

        {/* Default */}
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="fotografía, fotógrafo, fotos, Davean, Sevilla, primera, comunión, comuniones, niño, niña, reportaje, estudio, traje, natural, bonito, triana, andalucía, álbum, peque, tradicional" />
        <meta name="description" content="Fotógrafía de Primera Comunión en Sevilla. Momentos naturales e irrepetibles para crear un recuerdo único. Pide info en el 691041289" />
        <meta name="copyright" content="Davean Comuniones" />
        <meta name="language" content="ES" />
        <meta name="classification" content="Business" />
        <meta name="author" content="Davean García Arroyo, 691041289" />
        <meta name="url" content="https://comuniones.davean.es/" />
        <meta name="identifier-URL" content="https://comuniones.davean.es/" />
        <meta name="pagename" content="Fotografía de Comunión - Davean" />
        <meta name="robots" content="index, follow" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        {/* Schema.org markup for Google+ */}
        <meta itemprop="name" content="Fotografía de Comunión - Davean" />
        <meta itemprop="url" content="https://comuniones.davean.es/" />
        <meta itemprop="telephone" content="+34 691041289" />
        <meta itemprop="addressCountry" content="España" />
        <meta itemprop="addressRegion" content="Sevilla" />
        <meta itemprop="addressLocality" content="Andalucía" />

        {/* Twitter Card data */}
        <meta name="twitter:title" content="Fotografía de Comunión - Davean" />
        <meta name="twitter:description" content="Fotógrafía de Primera Comunión en Sevilla. Momentos naturales e irrepetibles para crear un recuerdo único. Pide info en el 691041289" />

        {/* Open Graph data */}
        <meta property="og:title" content="Fotografía de Comunión - Davean" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://comuniones.davean.es/" />
        <meta property="og:site_name" content="Fotografía de Comunión - Davean" />
        <meta property="og:description" content="Fotógrafía de Primera Comunión en Sevilla. Momentos naturales e irrepetibles para crear un recuerdo único. Pide info en el 691041289" />
        
        {/* Contact */}
        <meta property="og:email" content="davean@hotmail.es" />
        <meta property="og:phone_number" content="34 691041289" />

        {/* Local */}
        <meta property="og:locality" content="Andalucía" />
        <meta property="og:region" content="Sevilla" />
        <meta property="og:country-name" content="España" />
      </Head>

      {isLoading && <Loading />}

      <Navbar catalogo={catalogo} packs={packs} preguntas={preguntas}/>

      <main>
        <HeroSection isMobile={isMobile} header={header}/>

        <Frase />

        <Catalogo isSafari={isSafari} isMobile={isMobile} catalogo={catalogo}/>

        <Plazas isMobile={isMobile}/>

        <Packs isMobile={isMobile} packs={packs}/>

        <Preguntas isMobile={isMobile} preguntas={preguntas}/>

        <Reviews isMobile={isMobile}/>
      </main>

      <Footer header={header}/>
    </>
  )
}
