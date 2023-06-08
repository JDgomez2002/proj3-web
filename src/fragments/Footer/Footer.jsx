import GitHubIcon from '@mui/icons-material/GitHub'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode'
import EmailIcon from '@mui/icons-material/Email'
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
          <div
            className={`${styles.textColumn} ${styles.grid}`}
            id="footer"
          >
            <div className={styles.flex}>
              <GitHubIcon style={{ color: 'white', }} />
              <h1>Github</h1>
            </div>
            <a
              href="https://github.com/JDgomez2002"
            >
              JDgomez2002
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
            <div className={styles.flex}>
              <InterpreterModeIcon style={{ color: 'white', }} />
              <h1>Discord</h1>
            </div>
            <a
              href="none"
            >
              JDgomeZz#5573
            </a>
          </div>
          {/* sixth */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <div className={styles.flex}>
              <EmailIcon style={{ color: 'white', }} />
              <h1>Email</h1>
            </div>
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
