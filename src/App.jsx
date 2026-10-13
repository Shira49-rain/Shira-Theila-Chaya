import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import  {Book}  from './components/book'
import { RecommendedBooks } from './components/RecommendedBooks'


function App() {
  const books = [{title: 'Sky', author:'Sofer' , likes:67, isAvailable: true},
    {title: 'Esterak', author:'Keinan' , likes:125, isAvailable: true},
    {title: 'By', author:'Sofi' , likes:9, isAvailable: false},
    {title: 'To vanqish the dragon', author:'Benish' , likes:400, isAvailable: true}]

  return (
    <>
      <h1>BOOK STORE</h1>
       {books.map((b , index)=> <Book title={b.title}  author={b.author} likes={b.likes}  index={index} isAvailable={b.isAvailable} ></Book>)}
       <RecommendedBooks books={books} />

    </>
  )
}

export default App
