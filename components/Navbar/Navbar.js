import styles from '../../styles/Navbar.module.css'

import Image from 'next/image'

import logo from '../../public/images/logo.png'

import { useEffect, useState } from 'react'

export default function Navbar() {

    const [onTop, setOnTop] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY !== 0 && onTop) {
                setOnTop(false)
            } else {
                setOnTop(true)
            }
        })
    }, [])

    return (
        <nav className={styles.navbar} style={{ backgroundColor: onTop ? 'transparent' : 'var(--green-transparent)' }}>
            <div className={styles.imgContainer}>
                <Image src={logo} alt="Logo Davean fotografía" priority className={styles.logo}/>
            </div>

            <ul className={styles.navigation} style={{ color: onTop ? 'var(--blue)' : '#fff' }}>
                <li>Catálogo</li>
                <li>Packs</li>
                <li>Preguntas</li>
            </ul>

            <div className={styles.btn}>RESERVA HOY</div>
        </nav>
    )
}