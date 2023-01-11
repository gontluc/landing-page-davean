import styles from '../../../styles/Catalogo/Section7.module.css'

import waves from '../../../public/images/waveReviews.png'

import Image from 'next/image'

import { useEffect, useRef } from 'react'

export default function Section7({ isMobile }) {

    const sectionRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {

            const distFromTop = sectionRef.current.getBoundingClientRect().top
            const divHeight = sectionRef.current.getBoundingClientRect().height
            /* const scrollPos = window.scrollY */

            if (-distFromTop >= 0 & -distFromTop < divHeight) {

                /* -distFromTop / divHeight = Between 0 - 1 */
                if (-distFromTop / divHeight <= 0.3) {
                    sectionRef.current.style.filter = `blur(${-distFromTop / divHeight * 33}px)`
                    sectionRef.current.style.setProperty('--aux-gradient', `rgba(0, 0, 0, ${-distFromTop / divHeight * 0.66})`)
                } else {
                    sectionRef.current.style.filter = 'blur(10px)'
                    sectionRef.current.style.setProperty('--aux-gradient', 'rgba(0, 0, 0, 0.2)')
                }
            } else {
                sectionRef.current.style.filter = 'blur(0px)'
            }
        })
    }, [])

    /* Changes img if mobile */
    useEffect(() => {
        if (isMobile) {
            document.querySelector('html').style.setProperty('--section7-img', `linear-gradient(0deg, var(--aux-gradient), var(--aux-gradient)), url('/images/section7-mobile.jpg')`)
        } else { /* if Desktop */
        }
    }, [isMobile])

    return (
        <div className={styles.container}>
            <Image className={styles.waves} src={waves} alt='waves' quality={100}/>

            <section className={styles.section} ref={sectionRef}>
            </section>

            <div className={styles.frase}>y tener un recuerdo para la eternidad.</div>

        </div>
    )
}