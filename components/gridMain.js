import GridStyles from '../styles/components/grid_main/grid_main.module.scss'
import Image from 'next/image'

export function GridMain() {
  return (
    <div className={GridStyles.grid_main}>
      <div className={`
        ${GridStyles.card_item}
        ${GridStyles._inactive}
        ${GridStyles._grass}
      `}>
        <h2 className={GridStyles.title}>Bulbasaur</h2>
        <Image
          src="/images/bulbasaur.gif"
          alt="Bulbasaur pokemon"
          width="125"
          height="100"
        />
        <p className={GridStyles.description}>
          Bulbasaur is a dual-type Grass/Poison Pokémon
          introduced in Generation I. It evolves into
          Ivysaur starting at level 16, which evolves
          into Venusaur starting at level 32.
        </p>
        <div className={GridStyles.indicator}>
          <Image
            src="/images/pokeball.png"
            alt="pokeball"
            width="32"
            height="32"
          />
        </div>
      </div>

      <div className={`
        ${GridStyles.card_item}
        ${GridStyles._inactive}
        ${GridStyles._fire}
      `}>
        <h2 className={GridStyles.title}>Charmander</h2>
        <Image
          src="/images/charmander.gif"
          alt="Charmander pokemon"
          width="125"
          height="100"
        />
        <p className={GridStyles.description}>
          Charmander is a Fire-type Pokémon introduced
          in Generation I. It evolves into
          Charmeleon starting at level 16,
          which evolves into Charizard starting at level 36.
        </p>
        <div className={GridStyles.indicator}>
          <Image
            src="/images/pokeball.png"
            alt="pokeball"
            width="32"
            height="32"
          />
        </div>
      </div>

      <div className={`
        ${GridStyles.card_item}
        ${GridStyles._inactive}
        ${GridStyles._water}
      `}>
        <h2 className={GridStyles.title}>Squirtle</h2>
        <Image
          src="/images/squirtle.gif"
          alt="Squirtle profile"
          width="125"
          height="100"
        />
        <p className={GridStyles.description}>
          Squirtle is a Water-type Pokémon introduced
          in Generation I. It evolves into Wartortle
          starting at level 16, which evolves into Blastoise
          starting at level 36.
        </p>
        <div className={GridStyles.indicator}>
          <Image
            src="/images/pokeball.png"
            alt="pokeball"
            width="32"
            height="32"
          />
        </div>
      </div>
    </div>
  )
}