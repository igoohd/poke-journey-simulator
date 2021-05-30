import headerStyles from '../styles/components/header/page_header.module.scss'

export function Header() {
  return (
    <header className={headerStyles.page_header}>
      <h1 className={headerStyles.title}>
        Welcome to your first <span className={headerStyles.highlight}>Pokémon journey!</span>
      </h1>

      <p className={headerStyles.description}>
        Keep calm and choose one.
      </p>
    </header>
  )
}