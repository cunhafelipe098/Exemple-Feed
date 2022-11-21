import { Header } from './components/Header'
import { Post }   from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>

      <Header />
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post 
          author="Felipe" 
          content="Web Develop"
          /> 
          <Post 
            author="Ed Matheus" 
            content="Web Develop"
          />
        </main>
      </div>
    </>
    
  )
}



export default App
