import React, { useState } from 'react'
import './App.css'
import MyInfo from './components/MyInfo'
import Button from './components/Button'
import DivButton from './components/DivButton'
//import DivButton from './CompletedDivButton'

function App() {
  const [hideText, setHideText] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button vs. Div</h1>
        <p>
          "You can make an accessible div,
          <br />
          so what's the big deal?"
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
        <div
          css={{
            display: hideText ? 'none' : 'block'
          }}
        >
          <p>
            It is amazing how much work you have
            to do to get a div to look and act
            like a button.
          </p>
          <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">
            WAI-ARIA Authoring Practices
          </a>
        </div>
      </main>
      <footer>
        <MyInfo></MyInfo>
      </footer>
    </div>
  )
}

export default App
