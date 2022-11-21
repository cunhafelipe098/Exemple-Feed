import { Header } from './components/Header'
import { Post }   from './Post'
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
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe ipsum autem, consequatur perferendis a unde doloribus explicabo neque asperiores vero maxime! Reiciendis omnis unde sequi dolorem molestiae nisi facilis?"
          /> 
          <Post 
            author="Ed Matheus" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe ipsum autem, consequatur perferendis a unde doloribus explicabo neque asperiores vero maxime! Reiciendis omnis unde sequi dolorem molestiae nisi facilis?"
          />
        </main>
      </div>
    </>
    
  )
}



export default App
