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
                        <p className={styles.reviewText}>Hizo el reportaje de la comuion de mi hija y quedamos muy contentos.</p>
                        <Image className={styles.stars} src={stars} alt='5 estrellas' quality={100}/>
                        <p className={styles.author}>Manuel Andujar</p>
                    </div>

                    <div className={styles.review}>
                        <Image className={styles.comillas} src={comillas} alt='comillas' quality={100}/>
                        <p className={styles.reviewText}>Gran profesional! Las fotos que me hizo me encantaron!! Sin duda volveré a repetir</p>
                        <Image className={styles.stars} src={stars} alt='5 estrellas' quality={100}/>
                        <p className={styles.author}>Elisabet Jurado</p>
                    </div>
                </div>

                <div className={styles.row2}>
                <div className={styles.review}>
                        <Image className={styles.comillas} src={comillas} alt='comillas' quality={100}/>
                        <p className={styles.reviewText}>Cercanía y profesionalidad 100%!</p>
                        <Image className={styles.stars} src={stars} alt='5 estrellas' quality={100}/>
                        <p className={styles.author}>Mónica Cruz</p>
                    </div>
                </div>
            </div>

            <div className={styles.followMe}>
                <h4 className={styles.follow}>Sígueme en Instagram</h4>
                <div className={styles.profile}>@comuniones_davean</div>
            </div>

            <div className={styles.instagramPics}>
                <div className={styles.igPicContainer}>
                    <Image className={styles.igPic} src={ig1} alt='niña fotografía comunión Sevilla Davean' quality={100}/>
                </div>

                <div className={styles.igPicContainer}>
                    <Image className={styles.igPic} src={ig2} alt='hermanos fotografía comunión Sevilla Davean' quality={100}/>
                </div>

                <div className={styles.igPicContainer}>
                    <Image className={styles.igPic} src={ig3} alt='niño fotografía comunión Sevilla Davean' quality={100}/>
                </div>

                <div className={styles.igPicContainer}>
                    <Image className={styles.igPic} src={ig4} alt='niño fotografía comunión Sevilla Davean' quality={100}/>
                </div>

                <div className={styles.igPicContainer}>
                    <Image className={styles.igPic} src={ig5} alt='niño fotografía comunión Sevilla Davean' quality={100}/>
                </div>

                <div className={styles.igPicContainer}>
                    <Image className={styles.igPic} src={ig6} alt='niña fotografía comunión Sevilla Davean' quality={100}/>
                </div>
            </div>
        </div>
    )
}