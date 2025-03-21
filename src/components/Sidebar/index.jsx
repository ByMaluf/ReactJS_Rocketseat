import styles from './sidebar.module.css'
import galaxy from '../../assets/galaxy.jpg'
import { PencilLine } from 'phosphor-react'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={galaxy} />

      <div className={styles.profile}>
        <img className={styles.avatar} src="http://github.com/bymaluf.png" alt="" />

        <strong>Brenno Ysrael</strong>
        <span>Full Stack</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}