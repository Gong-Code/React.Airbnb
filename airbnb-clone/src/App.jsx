import './App.css'
import { Card } from './components/Card'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import data from './data.js'


function App() {

  const cards = data.map(item => {
     
    return <Card
      key={item.id}
      {...item}
    />
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      
    </>
  )
}

export default App

  // img={item.coverImg}
      // starIcon={item.starIcon}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}