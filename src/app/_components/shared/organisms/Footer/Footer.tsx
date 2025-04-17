import Link from "next/link"
import styles from "./Footer.module.scss"
import { Github, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Gamepad2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>
        <div className={styles['footerGrid']}>
          <div className={styles['column']}>
            <div className={styles['logo']}>
              <Gamepad2 size={24} />
              <h3>QEYS</h3>
            </div>
            <p className={styles['description']}>
              Your go-to place for buying and selling consoles and video games at unbeatable prices — making gaming more accessible for everyone.
            </p>
            <div className={styles['contactInfo']}>
              <div className={styles['contactItem']}>
                <Mail size={16} />
                <span>quimudev@gmail.com</span>
              </div>
              <div className={styles['contactItem']}>
                <Phone size={16} />
                <span>+34 589 673 616</span>
              </div>
              <div className={styles['contactItem']}>
                <MapPin size={16} />
                <span>Valencia, Spain</span>
              </div>
            </div>
          </div>

          <div className={styles['column']}>
            <h4 className={styles['columnTitle']}>About Us</h4>
            <p className={styles['aboutText']}>
              Our team is made up of dedicated gamers who understand the culture, trends, and needs of the gaming world. We're constantly looking for the best deals and curating top picks so every player—casual or hardcore—can get the most out of their gaming experience.
            </p>
          </div>

          <div className={styles['column']}>
            <h4 className={styles['columnTitle']}>Legal</h4>
            <ul className={styles['linkList']}>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/legal-notice">Legal Notice</Link>
              </li>
            </ul>

            <h4 className={styles['columnTitle']}>Follow Us</h4>
            <div className={styles['socialIcons']}>
              <Link href="https://github.com/quimudev" aria-label="GitHub">
                <Github size={20} />
              </Link>
              <Link href="https://twitter.com/quimudev" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com/qimuart" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles['divider']}></div>

        <div className={styles['copyright']}>
          <p>&copy; {currentYear} QEYS. All rights reserved.</p>
          <p>
            Designed with <span className={styles['heart']}>❤</span> for gamers
          </p>
        </div>
      </div>
    </footer>
  )
}
