import { useState } from 'react'

import './App.css'

// 1st COMPONENT Header
const Header = () => {
  return (
    <header className="header">
      <h1>Personal Project Showcase App</h1>
    </header>
  );
};

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Header />
  )
}

export default App
