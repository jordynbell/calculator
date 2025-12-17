import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [sharedCount, setSharedCount] = useState(0)
  const [manualCount, setManualCount] = useState(0)

  let content;
  let value = false;
  const products = [
    { id: 1, name: 'Tomato', isFruit: true,  price: 10 },
    { id: 2, name: 'Bread', isFruit: false, price: 20 },
    { id: 3, name: 'Apple', isFruit: true, price: 30 },
  ];

  const listItems = products.map(product => 
    <li key={product.id} className={product.isFruit ? 'fruit' : 'not-fruit'}>
      {product.name}: R{product.price}
    </li>
  )

  if (manualCount % 10 === 0 && manualCount !== 0) {
      content = <h2>Congratulations! You've reached {manualCount} clicks!</h2>
      value = true;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

       {value ? content : <h2>Keep clicking to reach the next milestone!</h2>}
        

      <div className="card">
        <button onClick={() => setManualCount((count) => count + 1)}>
          count is {manualCount}
        </button>
        <MyButton sharedCount = {sharedCount} onClick={() => setSharedCount(sharedCount + 1)}/>
        <MyButton sharedCount = {sharedCount} onClick={() => setSharedCount(sharedCount + 1)}/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <ol>{listItems}</ol>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function MyButton({ sharedCount, onClick } : { sharedCount: number; onClick: () => void }) {
  return (
    <button onClick={onClick}>
      Button was clicked {sharedCount} times.
    </button>
  );
}