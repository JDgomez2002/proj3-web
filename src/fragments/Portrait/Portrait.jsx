import * as styles from './Portrait.module.css'

function Portrait() {
  return (
    <div className={styles.portrait}>
      <div className={styles.header}>
        <div className={styles.flex}>
          <img
            className={styles.logo}
            alt="Datagrip Logo"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/Foto%20c%C3%A9dula.jpg?raw=true"
          />
          <h1>Jose Daniel Gomez Cabrera</h1>
        </div>
        <h2>Web developer🌐</h2>
        <p>
          <h1>About me</h1>
          I&apos;m a Web dewveloper that loves team work and solve difficult problems
          I&apos;m a third year computer science student, my favorite course
          was the Web Technology course
          I&apos;m interested on apply for a full stack job! I like the Front-end
          and Back-end, the best of both worlds!
          I play basketball in univertsity too, and like to play videogames in my free-time!
        </p>
      </div>
      <div className={`${styles.infoContainer} ${styles.grid}`}>
        <h1>Knowledge</h1>
        <div className={`${styles.table}`}>
          <img
            className={styles.img}
            alt="react"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/React_logo_wordmark.png?raw=true"
          />
          <img
            className={styles.img}
            alt="node"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/node-js.png?raw=true"
          />
        </div>
        <div className={`${styles.table}`}>
          <img
            className={styles.img}
            alt="yarn"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/Yarn-logo-kitten.svg.png?raw=true"
          />
          <img
            className={styles.img}
            alt="eslint"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/Es%20lint%20portrait.png?raw=true"
          />
        </div>
        <div className={`${styles.table}`}>
          <img
            className={styles.img}
            alt="css"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/css%20portrait.png?raw=true"
          />
          <img
            className={styles.img}
            alt="html"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/html%20portrait.png?raw=true"
          />
        </div>
        <div className={`${styles.table}`}>
          <img
            className={styles.img}
            alt="github"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/github%20portrait.png?raw=true"
          />
          <img
            className={styles.img}
            alt="html"
            src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/postgres%20portrait.png?raw=true"
          />
        </div>
      </div>
    </div>
  )
}

export default Portrait
