import styles from '../../styles/HeroSection.module.css'

import RubberLetter from './RubberLetter/RubberLetter'

import { useEffect, useState } from 'react'

import decoradoLeft from '../../public/images/decoradoLeft.png'
import decoradoRight from '../../public/images/decoradoRight.png'
import logoLine from '../../public/images/logoLine.png'

import Image from 'next/image'

export default function HeroSection({ isMobile, header }) {

    /* Change nav li color based on current img displaying */

    /* function changeNavColor(i) {
        switch (i) {
            case 1:
                document.querySelector('html').style.setProperty('--nav-color', '#fff')
                break
            case 2:
                document.querySelector('html').style.setProperty('--nav-color', '#fff')
                break
            case 4:
                document.querySelector('html').style.setProperty('--nav-color', 'var(--blue)')
                break
            case 5:
                document.querySelector('html').style.setProperty('--nav-color', '#fff')
                break
            case 6:
                document.querySelector('html').style.setProperty('--nav-color', '#fff')
                break
            default:
                document.querySelector('html').style.setProperty('--nav-color', 'var(--blue)')
                break
        }
    }

    useEffect(() => {

        for(let i = 0; i < 7; i++) {
            setInterval(() => {
                setTimeout(() => {
                    changeNavColor(i)
                }, 5000 * i)
            }, 5000 * 7)

            setTimeout(() => {
                changeNavColor(i)
            }, 5000 * i)
        }
    }, []) */

    /* Change visibility 'Mi primera comunión' */

    const [showHeroTitle, setShowHeroTitle] = useState(false)

    function changeHeroTitle(i) {
        /* If max-width:600px then mi primera comunion doesnt disappear */
        if (window.innerWidth > 600) {
            switch (i) {
                case 0:
                    setShowHeroTitle(true)
                    break
                case 1:
                    setShowHeroTitle(false)
                    break
                case 2:
                    setShowHeroTitle(false)
                    break
                case 4:
                    setShowHeroTitle(false)
                    break
                case 5:
                    setShowHeroTitle(true)
                    break
                case 6:
                    setShowHeroTitle(false)
                    break
                default:
                    setShowHeroTitle(false)
                    break
            }
        }
    }

    useEffect(() => {

        /* Change heroTitle */
        setTimeout(() => {
            for(let i = 0; i < 7; i++) {
                setInterval(() => {
                    setTimeout(() => {
                        changeHeroTitle(i)
                    }, 5000 * i)
                }, 5000 * 7)

                setTimeout(() => {
                    changeHeroTitle(i)
                }, 5000 * i)
            }
        /* 4000 is var(--loading) */
        }, 4000)

        /* Changes imgs hero section if mobile */
        if (!isMobile) {
            document.querySelector('html').style.setProperty('--herosection-img1-dt', `linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url('/images/heroImg2.jpg')`)
        }
    }, [])

    /* 
        RubberBand animation and framer-motion npm:
        https://www.youtube.com/watch?v=ykR07FSEYcc&list=WL&index=10&t=546s
        https://www.framer.com/docs/use-animation-controls/
    */

    const word1 = 'mi'.split('')
    const word2 = 'primera'.split('')
    const word3 = 'COMUNIÓN'.split('')

    const word4 = 'Mi primera COMUNIÓN'.split('')

    return (
        <>
        <div className={styles.container} ref={header}>

            <div className={styles.heroImg1}></div>
            <div className={styles.heroImg7}></div>
            <div className={styles.heroImg6}></div>
            <div className={styles.heroImg4}></div>
            <div className={styles.heroImg5}></div>
            <div className={styles.heroImg2}></div>
            <div className={styles.heroImg3}></div>

            <div className={styles.auxContainer}></div>

            <div className={styles.heroTitle} style={{ opacity: showHeroTitle ? 1 : 0 }}>
                <div className={styles.mi}>
                    {showHeroTitle && word1.map((letter, index) => {
                        return (
                            <RubberLetter key={index} letter={letter} index={index} classLetter={'mi'}/>
                        )
                    })}
                </div>

                <div className={styles.primera}>
                    {showHeroTitle && word2.map((letter, index) => {
                        return (
                            <RubberLetter key={index} letter={letter} index={index} classLetter={'primera'}/>
                        )
                    })}
                </div>
                
                <div className={styles.comunion}>
                    {showHeroTitle && word3.map((letter, index) => {
                        return (
                            <RubberLetter key={index} letter={letter} index={index} classLetter={'comunion'}/>
                        )
                    })}
                </div>
            </div>

            <div className={styles.heroTitleMobile} style={{ opacity: showHeroTitle ? 0 : 1 }}>
                {word4.map((letter, index) => {
                    return (
                        <RubberLetter key={index} letter={letter} index={index} classLetter={'frase'}/>
                    )
                })}
            </div>
            

            {/* <div className={styles.decoradoContainer} style={{ opacity: showHeroTitle ? 0 : 1 }}>
                <Image src={decorado} alt='decorado' quality={100} priority className={styles.decorado}/>
            </div> */}

            <div className={styles.decoradoContainer} style={{ opacity: showHeroTitle ? 0 : 1 }}>
                <div className={styles.decoradoimgs}>
                    <Image src={decoradoLeft} alt='decorado' quality={100} priority className={styles.decorado}/>

                    <Image src={logoLine} alt='logo Davean Fotografía' quality={100} priority className={styles.logoLine}/>

                    <Image src={decoradoRight} alt='decorado' quality={100} priority className={styles.decorado}/>
                </div>
                
                <h1>Fotografía Sevilla</h1>
            </div>

        </div>
        </>
    )
}