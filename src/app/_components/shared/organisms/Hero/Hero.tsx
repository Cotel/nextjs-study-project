import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero-header']}>
        <div className={styles['hero-header-img']}></div>
        <h2>
          DAILY SPECIAL<span>!!</span>
        </h2>
      </div>

      <div className={styles['hero-content']}>
        <div className={styles['hero-content-text']}>
          <h3>
            <span></span>
            GAMECUBE
          </h3>
          <p>
            Discover the legendary GameCube – the must-have console that defined
            a generation. Perfect for both nostalgic fans and newcomers alike.
            Don't miss your chance to own a piece of gaming history!
          </p>

          <div className={styles['hero-content-offer']}>
            <p>199.95$</p>
            <h3>149.95$</h3>
          </div>
        </div>

        <div className={styles['hero-content-img']}></div>
      </div>
    </div>
  )
}
