import { Header } from './components/Header'
import { Post }   from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cunhafelipe098.png',
      name: 'Felipe Cunha',
      role: 'CTO D. Industry' 
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👊'},
      {type: 'paragraph', content: 'Acabei de subir mais um conteúdo no meu portifólio'},
      {type: 'link', content: 'felipe.com.br'},
    ],
    publishedAt: new Date('2022-02-03 20:00:00'),
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat' 
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👊'},
      {type: 'paragraph', content: 'Acabei de subir mais um conteúdo no meu portifólio'},
      {type: 'link', content: 'felipe.com.br'},
    ],
    publishedAt: new Date('2022-02-15 20:00:00'),
  }
]


function App() {

  return (
    <>

      <Header />
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
    
  )
}



export default App
