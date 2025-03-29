import { Header } from './components/Header'
import Post from './components/Post'
import Sidebar from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={'Brenno'}
            content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum assumenda dicta ab eos? Odio, consequuntur optio. Dolores, aut fugiat accusamus minima amet recusandae corporis reiciendis delectus ex, non perferendis.'}
          />
          <Post
            author={'Brenno'}
            content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum assumenda dicta ab eos? Odio, consequuntur optio. Dolores, aut fugiat accusamus minima amet recusandae corporis reiciendis delectus ex, non perferendis.'}
          />
        </main>
      </div>
    </div>
  )
}

