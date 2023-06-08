import * as styles from './Body.module.css'

function Body() {
  return (
    <div
      className={styles.background}
      id="my_projects"
    >
      <div className={styles.container}>
        {/* First group */}
        <div className={`${styles.flex} ${styles.marginBottom}`}>
          <span className={styles.textColumn}>
            <div
              id={styles.projects}
            >
              My Projects
            </div>
            <h1>Hospitals application</h1>
            <a
              href="https://jdgomez2002.github.io/Proj2_DBI/"
              className={styles.marginBottom}
            >
              Go to application
            </a>
            <p>
              This application communicate with a database to
              store data like hospitals, patients, doctors, etc.
              It have all the functions with the Administrator account.
              And the better, it has Dark Mode! Press the Top Right button to toggle Dark Mode.
              It use React, Vitest, Material UI icons, React-pro-sidebar, React-router-dom
              and Supabase.
            </p>
            <p>
              Administrator: Admin
              <br />
              Password: admin123
            </p>
            <div className={styles.flex}>
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/React-icon.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/supabase-logo-icon_1.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/vitest-logo-9ADDA575A5-seeklogo.com.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/material%20UI%20icon.png?raw=true"
              />
            </div>
          </span>
          <div className={styles.grid}>
            <div className={styles.imageContainer}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/dataBase.png?raw=true"
              />
            </div>
          </div>
        </div>
        {/* Second group */}
        <div className={`${styles.flex} ${styles.marginBottom}`}>
          <div className={styles.grid}>
            <div className={styles.imageContainer}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/dataGrip.png?raw=true"
              />
            </div>
          </div>
          <span className={styles.textColumn}>
            <h1>DataGrip website</h1>
            <a
              href="https://uvgenios.online/21429/proy1_web/"
              className={styles.marginBottom}
            >
              Go to application
            </a>
            <p>
              This website its a high fidelity
              copy of the DataGrip official website.
              It was made with React, ESlint, ViteTest,
              Material UI icons.
            </p>
            <div className={styles.flex}>
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/React-icon.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/ESLint_logo.svg.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/vitest-logo-9ADDA575A5-seeklogo.com.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/material%20UI%20icon.png?raw=true"
              />
            </div>
          </span>
        </div>
        {/* Third group */}
        <div className={`${styles.flex} ${styles.marginBottom}`}>
          <span className={styles.textColumn}>
            <h1>Memory game!</h1>
            <a
              href="https://uvgenios.online/21429/lab06_web/"
              className={styles.marginBottom}
            >
              Go to application
            </a>
            <p>
              This memory 4x4 game implements React and introduces
              React hooks like useState(), useEffect(), useMemo(), etc.
            </p>
            <div className={styles.flex}>
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/React-icon.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/CSS3_logo.svg.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/174854.png?raw=true"
              />
            </div>
          </span>
          <div className={styles.grid}>
            <div className={styles.imageContainer}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/memory.png?raw=true"
              />
            </div>
          </div>
        </div>
        {/* Fourth group */}
        <div className={`${styles.flex} ${styles.marginBottom}`}>
          <div className={styles.grid}>
            <div className={styles.imageContainer}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/batman.png?raw=true"
              />
            </div>
          </div>
          <span className={styles.textColumn}>
            <h1>Single div Batman image</h1>
            <a
              href="https://uvgenios.online/21429/lab04_css_web/"
              className={styles.marginBottom}
            >
              Go to application
            </a>
            <p>
              This is a draw with just one div. It implements the CSS3 concepts:
              before and after to create the figure without any other HTML5 tag.
            </p>
            <div className={styles.flex}>
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/CSS3_logo.svg.png?raw=true"
              />
              <img
                alt="firstScreenshoot"
                className={styles.logo}
                src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/174854.png?raw=true"
              />
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Body
