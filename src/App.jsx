import './App.css'
import Store from './components/Store'

const items = [
  { id: 1, name: 'NIKE METCON 2', price: 130, color: 'red', img: '/images/nike-metcon-2-red.png' },
  { id: 2, name: 'NIKE METCON 2', price: 130, color: 'green', img: '/images/nike-metcon-2-green.png' },
  { id: 3, name: 'NIKE METCON 2', price: 130, color: 'blue', img: '/images/nike-metcon-2-blue.png' },
  { id: 4, name: 'NIKE METCON 2', price: 130, color: 'black', img: '/images/nike-metcon-2-black.png' },
  { id: 5, name: 'NIKE FREE RUN', price: 170, color: 'black', img: '/images/nike-free-run-black.png' },
  { id: 6, name: 'NIKE METCON 3', price: 150, color: 'green', img: '/images/nike-metcon-3-green.png' },
]

function App() {
  return (
    <div className="app">
      <Store items={items} />
    </div>
  )
}

export default App
