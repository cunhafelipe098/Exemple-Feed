import { Header } from './components/Header'
import { Post }   from './Post'
import './global.css'

function App() {

  return (
    <>

      <Header />
      <Post 
        author="Felipe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe ipsum autem, consequatur perferendis a unde doloribus explicabo neque asperiores vero maxime! Reiciendis omnis unde sequi dolorem molestiae nisi facilis?"
      /> 
      <Post 
        author="Ed Matheus" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe ipsum autem, consequatur perferendis a unde doloribus explicabo neque asperiores vero maxime! Reiciendis omnis unde sequi dolorem molestiae nisi facilis?"
      />
    </>
    
  )
}



export default App
