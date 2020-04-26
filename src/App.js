import React, { useState } from 'react'
import './App.css'
import MyInfo from './components/MyInfo'
import Button from './components/Button'
import DivButton from './components/DivButton'
import WhyDivButton from './components/WhyDivButton'
//import DivButton from './CompletedDivButton'

function App() {
  const [hideText, setHideText] = useState(true)
  const [
    showSimpleExample,
    setShowSimpleExample
  ] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button vs. Div</h1>
        <p>
          "You can make a div accessible,
          <br />
          so what's the big deal?"
        </p>
      </header>
      {showSimpleExample ? (
        <nav>
          <Button
            onClick={() => setHideText(!hideText)}
          >
            I am a Button
          </Button>
          <DivButton
            onClick={() => setHideText(!hideText)}
          >
            I am a div
          </DivButton>
        </nav>
      ) : (
        <WhyDivButton
          css={{
            display: showSimpleExample
              ? 'none'
              : 'block'
          }}
          onClick={() => setHideText(!hideText)}
        />
      )}
      <main>
        <article
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
        </article>
      </main>
      <footer>
        <Button
          onClick={() =>
            setShowSimpleExample(
              !showSimpleExample
            )
          }
          css={{
            position: 'absolute',
            top: -30,
            right: 10,
            backgroundColor: 'rebeccapurple',
            color: '#fff',
            border: '1px solid grey'
          }}
        >
          {showSimpleExample
            ? 'Why use a div?'
            : 'Show me the buttons'}
        </Button>
        <MyInfo />
      </footer>
    </div>
  )
}

export default App
