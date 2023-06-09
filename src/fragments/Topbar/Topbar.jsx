import TranslateIcon from '@mui/icons-material/Translate'
import GitHubIcon from '@mui/icons-material/GitHub'
import StorageIcon from '@mui/icons-material/Storage'
import TerminalIcon from '@mui/icons-material/Terminal'
import * as styles from './Topbar.module.css'

function Topbar() {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <img
          className={styles.logo}
          alt="logo"
          src="https://github.com/JDgomez2002/proj3-web/blob/main/src/assets/img/SnarkyPuppy.png?raw=true"
        />
        <div className={`${styles.flex} ${styles.geologica}`}>
          <a href="#about_me"> About me </a>
          <a href="#knowledge_id"> Knowledge </a>
          <a href="#my_projects"> My projects </a>
          <a href="#footer"> Workspace </a>
          <a href="#footer"> Contact </a>
          <div className={styles.iconsContainer}>
            <TerminalIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', cursor: 'pointer', borderBottom: '1px solid white', }, }} />
            <GitHubIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', borderBottom: '1px solid white', }, cursor: 'pointer', }} />
            <StorageIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', borderBottom: '1px solid white', }, cursor: 'pointer', }} />
            <TranslateIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', cursor: 'pointer', borderBottom: '1px solid white', }, }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
