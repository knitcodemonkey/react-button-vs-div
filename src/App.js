import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'
import DivButton from './components/DivButton'
// import DivButton from './CompletedDivButton'

function App() {
  const [hideText, setHideText] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button vs. Div</h1>
        <p>
          "You can make an accessible div, so
          what's the big deal?"
        </p>
      </header>
      <nav>
        <Button
          hideText={hideText}
          setHideText={setHideText}
        />
        <DivButton
          hideText={hideText}
          setHideText={setHideText}
        />
      </nav>
      <main>
        <p
          css={{
            display: hideText ? 'none' : 'block'
          }}
        >
          It is amazing how much work you have to
          do to get a div to look and act like a
          button.
        </p>
      </main>
    </div>
  )
}

export default App
