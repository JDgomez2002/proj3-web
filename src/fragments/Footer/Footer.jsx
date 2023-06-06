import * as styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.background}>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.flex} ${styles.fullWidth} ${styles.boderBottom}`}
          style={{ justifyContent: 'center', }}
        >
          {/* First Column */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Workspace</h1>
            <a
              href="https://github.com/JDgomez2002"
            >
              Github.com
            </a>
          </div>
          {/* Second */}
          {/* <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Email</h1>
            <a
              href="none"
            >
              jdgomez@dsoluciones.com
            </a>
          </div> */}
          {/* Third */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Discord</h1>
            <a
              href="none"
            >
              JDgomeZz#5573
            </a>
          </div>
          {/* sixth */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Email</h1>
            <a
              href="none"
            >
              jdgomez@dsoluciones.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
