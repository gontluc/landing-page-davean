import styles from '../../../styles/Catalogo/Section6.module.css'

import l1 from '../../../public/images/l1.jpg'
import l2 from '../../../public/images/l2.jpg'
import l3 from '../../../public/images/l3.jpg'
import l4 from '../../../public/images/l4.jpg'

import r1 from '../../../public/images/r1.jpg'
import r2 from '../../../public/images/r2.jpg'
import r3 from '../../../public/images/r3.jpg'
import r4 from '../../../public/images/r4.jpg'
import r5 from '../../../public/images/r5.jpg'

/* Mobile */
import l1Mobile from '../../../public/images/l1-mobile.jpg'
import l2Mobile from '../../../public/images/l2-mobile.jpg'
import l3Mobile from '../../../public/images/l3-mobile.jpg'
import l4Mobile from '../../../public/images/l4-mobile.jpg'

import r1Mobile from '../../../public/images/r1-mobile.jpg'
import r2Mobile from '../../../public/images/r2-mobile.jpg'
import r3Mobile from '../../../public/images/r3-mobile.jpg'
import r4Mobile from '../../../public/images/r4-mobile.jpg'
import r5Mobile from '../../../public/images/r5-mobile.jpg'

import flower from '../../../public/images/flower.png'
import wheat from '../../../public/images/wheat.png'

import Image from 'next/image'

import Link from 'next/link'

export default function Section6({ isMobile }) {

    return (
        <section className={styles.section}>

            <div className={styles.fraseContainer}>
                <Image 
                    alt='flores' 
                    src={flower} 
                    className={styles.flower} 
                    quality={100} 
                />

                <p className={styles.frase}>y reflejando la esencia y <br /> personalidad de cada peque</p>

                <Image 
                    alt='trigo' 
                    src={wheat} 
                    className={styles.wheat} 
                    quality={100} 
                />
            </div>

            <div className={styles.imgs}>

                <div className={styles.imgsColumn}>
                    <Image 
                        alt='niño fotografía primera comunión' 
                        src={isMobile ? l1Mobile : l1} 
                        className={styles.img} 
                        quality={100} 
                    />

                    <Image 
                        alt='niño fotografía primera comunión' 
                        src={isMobile ? l2Mobile : l2} 
                        className={styles.img} 
                        quality={100} 
                    />

                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={isMobile ? l3Mobile : l3} 
                        className={styles.img} 
                        quality={100} 
                    />

                    <Image 
                        alt='niño fotografía primera comunión' 
                        src={isMobile ? l4Mobile : l4} 
                        className={styles.img} 
                        quality={100} 
                    />
                </div>

                <div className={styles.imgsColumn}>
                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={isMobile ? r1Mobile : r1} 
                        className={styles.img} 
                        quality={100} 
                    />

                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={isMobile ? r2Mobile : r2} 
                        className={styles.img} 
                        quality={100} 
                    />

                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={isMobile ? r3Mobile : r3} 
                        className={styles.img} 
                        quality={100} 
                    />

                    <Image 
                        alt='hermanos fotografía primera comunión' 
                        src={isMobile ? r4Mobile : r4} 
                        className={styles.img} 
                        quality={100} 
                    />

                    <Image 
                        alt='niña fotografía primera comunión' 
                        src={isMobile ? r5Mobile : r5} 
                        className={styles.img} 
                        quality={100} 
                    />
                </div>
            </div>

            <div className={styles.btn}><Link href="https://www.instagram.com/comuniones_davean/" legacyBehavior><a target="_blank">VER MÁS FOTOS</a></Link></div>
            
        </section>
    )
}