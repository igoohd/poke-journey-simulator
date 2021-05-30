import footerStyles from '../styles/components/footer/footer.module.scss'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className={footerStyles.page_footer}>
      <div className={footerStyles.footer_content}>
        <a
          className={footerStyles.cta}
          href="https://www.linkedin.com/in/igorduartematos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By: Igor Duarte
          <Image
            className="{footerStyles.image}"
            src="/images/linkedin.svg"
            alt="Linkedin profile"
            width="20"
            height="20"
          />
        </a>
      </div>
    </footer>
  )
}