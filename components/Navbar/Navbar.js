import styles from '../../styles/Navbar.module.css'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/images/logo.png'
import ig from '../../public/images/igIcon.png'
import fb from '../../public/images/fbIcon.png'

import { useEffect, useState, useCallback } from 'react'

import { HiOutlineMenuAlt2 as Menu } from 'react-icons/hi'
import { IoClose as Close } from 'react-icons/io5'

export default function Navbar({ catalogo, packs, preguntas }) {

    /* Hamburguer menu */
    const [toggleMenu, setToggleMenu] = useState(false)

    /* Check if scroll === 0 and mobile*/
    const [onTop, setOnTop] = useState(true)
    const [mobile, setMobile] = useState(true)

    /*
        Using callback ref, because useRef won't notify us about changes to the current ref value:
        https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
    */

    const [appendCatalogo, setAppendCatalogo] = useState([])
    const [appendPacks, setAppendPacks] = useState([])
    const [appendPreguntas, setAppendPreguntas] = useState([])

    const [appendCatalogoResponsive, setAppendCatalogoResponsive] = useState([])
    const [appendPacksResponsive, setAppendPacksResponsive] = useState([])
    const [appendPreguntasResponsive, setAppendPreguntasResponsive] = useState([])

    const [animatingCatalogo, setAnimatingCatalogo] = useState(false)
    const [animatingPacks, setAnimatingPacks] = useState(false)
    const [animatingPreguntas, setAnimatingPreguntas] = useState(false)

    const [leaveCatalogo, setLeaveCatalogo] = useState(true)
    const [leavePacks, setLeavePacks] = useState(true)
    const [leavePreguntas, setLeavePreguntas] = useState(true)


    const liCatalogo = useCallback((node) => {
        if (node !== null) {
            if (appendCatalogo.length !== 0) {
                node.innerHTML = ''
            }

            if (node.innerHTML !== 'Fotos') {
                const newNode = document.createElement('div')
                newNode.classList.add('absolute')
                newNode.append(appendCatalogo[0], appendCatalogo[1], appendCatalogo[2])
                node.appendChild(newNode)
            }
        }
    }, [appendCatalogo])

    const liPacks = useCallback((node) => {
        if (node !== null) {
            if (appendPacks.length !== 0) {
                node.innerHTML = ''
            }

            if (node.innerHTML !== 'Packs') {
                const newNode = document.createElement('div')
                newNode.classList.add('absolute')
                newNode.append(appendPacks[0], appendPacks[1], appendPacks[2])
                node.appendChild(newNode)
            }
        }
    }, [appendPacks])

    const liPreguntas = useCallback((node) => {
        if (node !== null) {
            if (appendPreguntas.length !== 0) {
                node.innerHTML = ''
            }

            if (node.innerHTML !== 'Preguntas') {
                const newNode = document.createElement('div')
                newNode.classList.add('absolute')
                newNode.append(appendPreguntas[0], appendPreguntas[1], appendPreguntas[2])
                node.appendChild(newNode)
            }
        }
    }, [appendPreguntas])

    const liCatalogoResponsive = useCallback((node) => {
        if (node !== null) {
            if (appendCatalogoResponsive.length !== 0) {
                node.innerHTML = ''
            }

            if (node.innerHTML !== 'Fotos') {
                const newNode = document.createElement('div')
                newNode.classList.add('absolute')
                newNode.append(appendCatalogoResponsive[0], appendCatalogoResponsive[1], appendCatalogoResponsive[2])
                node.appendChild(newNode)
            }
        }
    }, [appendCatalogoResponsive])

    const liPacksResponsive = useCallback((node) => {
        if (node !== null) {
            if (appendPacksResponsive.length !== 0) {
                node.innerHTML = ''
            }

            if (node.innerHTML !== 'Packs') {
                const newNode = document.createElement('div')
                newNode.classList.add('absolute')
                newNode.append(appendPacksResponsive[0], appendPacksResponsive[1], appendPacksResponsive[2])
                node.appendChild(newNode)
            }
        }
    }, [appendPacksResponsive])

    const liPreguntasResponsive = useCallback((node) => {
        if (node !== null) {
            if (appendPreguntasResponsive.length !== 0) {
                node.innerHTML = ''
            }

            if (node.innerHTML !== 'Preguntas') {
                const newNode = document.createElement('div')
                newNode.classList.add('absolute')
                newNode.append(appendPreguntasResponsive[0], appendPreguntasResponsive[1], appendPreguntasResponsive[2])
                node.appendChild(newNode)
            }
        }
    }, [appendPreguntasResponsive])

    /* Check if scroll === 0 and mobile*/
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY !== 0 && onTop) {
                window.innerWidth <= 600 && setOnTop(false)
            } else {
                window.innerWidth <= 600 && setOnTop(true)
            }
        })

        setMobile(window.innerWidth <= 600)
    }, [])

    function animateNavbar(e, setAppendLi, setAnimating, setLeave, refScroll) {
        setLeave(false)
        setAnimating(true)
        const word = e.target.textContent

        let downLettersBefore = ''
        let downLettersAfter = ''
        let upLetter = ''
        
        for (let i = 0; i <= word.length; i++) {
            setTimeout(() => {
                upLetter = word.slice(i, i+1)
                downLettersBefore = word.slice(-word.length, i) 
                downLettersAfter = word.slice(i+1, word.length)
                
                const upLetterHTML = document.createElement('div')
                upLetterHTML.innerHTML = upLetter
                upLetterHTML.classList.add('upLetter')

                upLetterHTML.addEventListener('click', () => {
                    refScroll.scrollIntoView()
                })
    
                const downLettersBeforeHTML = document.createElement('div')
                downLettersBeforeHTML.innerHTML = downLettersBefore

                downLettersBeforeHTML.addEventListener('click', () => {
                    refScroll.scrollIntoView()
                })
    
                const downLettersAfterHTML = document.createElement('div')
                downLettersAfterHTML.innerHTML = downLettersAfter

                downLettersAfterHTML.addEventListener('click', () => {
                    refScroll.scrollIntoView()
                })
    
                setAppendLi([downLettersBeforeHTML, upLetterHTML, downLettersAfterHTML])

                if (i === word.length) {
                    setAnimating(false)
                }
            }, 100 * (i + 1))
        }
    }

    return (
        <nav className={styles.navbar} style={{ backgroundColor: 
            /* Check if scroll === 0 and mobile*/
            mobile 
                ? onTop ? 'transparent' : 'var(--green-transparent)' 
                : 'var(--green-transparent)' 
        }}>
            <div className={styles.imgContainer}>
                <Link href="/" legacyBehavior>
                    <a>
                        <Image src={logo} alt="Logo Davean fotografía" priority className={styles.logo}/>
                    </a>
                </Link>
            </div>

            <ul className={styles.navigation} /* style={{ color: onTop ? 'var(--nav-color)' : '#fff' }} */>
                <li 
                    onClick={() => catalogo.current.scrollIntoView()}
                    onMouseEnter={(e) => { !animatingCatalogo && leaveCatalogo && animateNavbar(e, setAppendCatalogo, setAnimatingCatalogo, setLeaveCatalogo, catalogo.current)}}
                    onMouseLeave={() => setLeaveCatalogo(true)}
                    ref={liCatalogo}
                    className={styles.catalogo}
                >Fotos</li>
                <li 
                    onClick={() => packs.current.scrollIntoView()} 
                    onMouseEnter={(e) => !animatingPacks && leavePacks && animateNavbar(e, setAppendPacks, setAnimatingPacks, setLeavePacks, packs.current)}
                    onMouseLeave={() => setLeavePacks(true)}
                    ref={liPacks}
                    className={styles.packs}
                >Packs</li>
                <li 
                    onClick={() => preguntas.current.scrollIntoView()} 
                    onMouseEnter={(e) => !animatingPreguntas && leavePreguntas && animateNavbar(e, setAppendPreguntas, setAnimatingPreguntas, setLeavePreguntas, preguntas.current)}
                    onMouseLeave={() => setLeavePreguntas(true)}
                    ref={liPreguntas}
                    className={styles.preguntas}
                >Preguntas</li>
            </ul>

            <Menu className={styles.hamMenu} onClick={() => setToggleMenu(!toggleMenu)}/>

            <div 
                className={styles.navResponsive} 
                style={{ /* opacity: toggleMenu ? 1 : 0, */ visibility: toggleMenu ? 'visible' : 'hidden', transform: toggleMenu ? 'translateX(0%)' : 'translateX(-100%)' }}
            >

                <div className={styles.topContainer}>

                    <Menu className={styles.menuTop} onClick={() => setToggleMenu(!toggleMenu)}/>

                    <div className={styles.closeContainer} onClick={() => setToggleMenu(false)}>
                        <Close className={styles.close}/>
                    </div>
                </div>


                

                <ul className={styles.navigationResponsive}>
                    <li 
                        onClick={() => {
                            catalogo.current.scrollIntoView()
                            setToggleMenu(false)
                        }}
                        onMouseEnter={(e) => { !animatingCatalogo && leaveCatalogo && animateNavbar(e, setAppendCatalogoResponsive, setAnimatingCatalogo, setLeaveCatalogo, catalogo.current)}}
                        onMouseLeave={() => setLeaveCatalogo(true)}
                        ref={liCatalogoResponsive}
                        className={styles.catalogo}
                    >Fotos</li>
                    <li 
                        onClick={() => {
                            packs.current.scrollIntoView()
                            setToggleMenu(false)
                        }} 
                        onMouseEnter={(e) => !animatingPacks && leavePacks && animateNavbar(e, setAppendPacksResponsive, setAnimatingPacks, setLeavePacks, packs.current)}
                        onMouseLeave={() => setLeavePacks(true)}
                        ref={liPacksResponsive}
                        className={styles.packs}
                    >Packs</li>
                    <li 
                        onClick={() => {
                            preguntas.current.scrollIntoView()
                            setToggleMenu(false)
                        }} 
                        onMouseEnter={(e) => !animatingPreguntas && leavePreguntas && animateNavbar(e, setAppendPreguntasResponsive, setAnimatingPreguntas, setLeavePreguntas, preguntas.current)}
                        onMouseLeave={() => setLeavePreguntas(true)}
                        ref={liPreguntasResponsive}
                        className={styles.preguntas}
                    >Preguntas</li>
                </ul>

                <div className={styles.logoContainerResponsive}>
                    <Link href="/" legacyBehavior>
                        <a>
                            <Image src={logo} alt="Logo Davean fotografía" priority className={styles.logoResponsive}/>
                        </a>
                    </Link>
                    <div className={styles.socials}>
                        <Link href="https://www.instagram.com/comuniones_davean/" legacyBehavior>
                            <a target="_blank">
                                <Image src={ig} alt="instagram Davean fotografía" priority className={styles.social}/>
                            </a>
                        </Link>
                        <Link href="https://es-es.facebook.com/daveanphotography/" legacyBehavior>
                            <a target="_blank">
                                <Image src={fb} alt="facebook Davean fotografía" priority className={styles.social}/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.btn} onClick={() => packs.current.scrollIntoView()}>RESERVAR</div>
        </nav>
    )
}