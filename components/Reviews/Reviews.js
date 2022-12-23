import styles from '../../styles/Reviews.module.css'

import Image from 'next/image'

import waves from '../../public/images/waveReviews.png'

export default function Reviews({ isMobile }) {
    return (
        <div className={styles.container}>
            <Image className={styles.waves} src={waves} alt='waves' quality={100} priority/>
            
            <div className={styles.subContainer}>
                reviews
            </div>
        </div>
    )
}