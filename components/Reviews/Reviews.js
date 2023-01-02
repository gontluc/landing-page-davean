import styles from '../../styles/Reviews.module.css'

import Image from 'next/image'

import waves from '../../public/images/waveReviews.png'
import comillas from '../../public/images/comillasReviews.png'
import stars from '../../public/images/starsReviews.png'
import ig1 from '../../public/images/ig1.jpg'
import ig2 from '../../public/images/ig2.jpg'
import ig3 from '../../public/images/ig3.jpg'
import ig4 from '../../public/images/ig4.jpg'
import ig5 from '../../public/images/ig5.jpg'
import ig6 from '../../public/images/ig6.jpg'

export default function Reviews({ isMobile }) {
    return (
        <div className={styles.container}>
            <Image className={styles.waves} src={waves} alt='waves' quality={100}/>
            
            <div className={styles.subContainer}>
                <div className={styles.row1}>
                    <div className={styles.review}>
                        <Image className={styles.comillas} src={comillas} alt='comillas' quality={100}/>
                        <p className={styles.reviewText}>
                            Encantada con la sesión de fotos de la primera comunión de mi hijo, gran calidad y muy originales. Estoy super contenta de haberlo elegido, es un profesional de 10!
                        </p>
                        <Image className={styles.stars} src={stars} alt='5 estrellas' quality={100}/>
                        <p className={styles.author}>Laura Nuñez</p>
                    </div>

                    <div className={styles.review}>
                        <Image className={styles.comillas} src={comillas} alt='comillas' quality={100}/>
                        <p className={styles.reviewText}>
                            Reportaje de comunión excelente, las fotos y el album precioso, muy buen gusto en todo, hasta el usb de las fotos esta bonito, lo recomiendo totalmente
                        </p>
                        <Image className={styles.stars} src={stars} alt='5 estrellas' quality={100}/>
                        <p className={styles.author}>Patry Fernandez</p>
                    </div>
                </div>

                <div className={styles.row2}>
                <div className={styles.review}>
                        <Image className={styles.comillas} src={comillas} alt='comillas' quality={100}/>
                        <p className={styles.reviewText}>
                            Muy buen profesional, atento, rápido y con muchísima calidad en su trabajo
                        </p>
                        <Image className={styles.stars} src={stars} alt='5 estrellas' quality={100}/>
                        <p className={styles.author}>Ana Maria</p>
                    </div>
                </div>
            </div>

            <div className={styles.followMe}>
                <h4 className={styles.follow}>Sígueme en Instagram</h4>
                <div className={styles.profile}><a href="https://www.instagram.com/comuniones_davean/" target="_blank">@comuniones_davean</a></div>
            </div>

            <div className={styles.instagramPics}>
                <div className={styles.igPicContainer}>
                    <a href="https://www.instagram.com/p/CgH2lQdsXfW/" target="_blank">
                        <Image className={styles.igPic} src={ig1} alt='niña fotografía comunión Sevilla Davean' quality={100}/>
                    </a>
                </div>

                <div className={styles.igPicContainer}>
                    <a href="https://www.instagram.com/p/CfesWxvMSGz/" target="_blank">
                        <Image className={styles.igPic} src={ig2} alt='hermanos fotografía comunión Sevilla Davean' quality={100}/>
                    </a>
                </div>

                <div className={styles.igPicContainer}>
                    <a href="https://www.instagram.com/p/Cc2nrUDoAWo/" target="_blank">
                        <Image className={styles.igPic} src={ig3} alt='niño fotografía comunión Sevilla Davean' quality={100}/>
                    </a>
                </div>

                <div className={styles.igPicContainer}>
                    <a href="https://www.instagram.com/p/CdGazN0LSc4/" target="_blank">
                        <Image className={styles.igPic} src={ig4} alt='niño fotografía comunión Sevilla Davean' quality={100}/>
                    </a>
                </div>

                <div className={styles.igPicContainer}>
                    <a href="https://www.instagram.com/p/ChFYB3wLLX4/" target="_blank">
                        <Image className={styles.igPic} src={ig5} alt='niño fotografía comunión Sevilla Davean' quality={100}/>
                    </a>
                </div>

                <div className={styles.igPicContainer}>
                    <a href="https://www.instagram.com/p/ChXvoNZrhQT/" target="_blank">
                        <Image className={styles.igPic} src={ig6} alt='niña fotografía comunión Sevilla Davean' quality={100}/>
                    </a>
                </div>
            </div>
        </div>
    )
}