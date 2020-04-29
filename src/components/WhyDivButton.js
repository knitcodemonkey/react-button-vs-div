import React, { useState } from 'react'
import CompletedDivButton from '../CompletedDivButton'
import { products } from '../fixtures/products'

const WhyDivButton = () => {
  const [index, setIndex] = useState()
  const [hideText, setHideText] = useState(true)
  return (
    <article>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-around',
          borderBottom: '1px outset #767676'
        }}
      >
        {products.map(
          (
            {
              image,
              imageAlt,
              title,
              price,
              currency,
              locale
            },
            i
          ) => (
            <CompletedDivButton
              key={title}
              aria-pressed={index === i}
              onClick={() => {
                if (i === index) {
                  // if same as active product, toggle
                  setHideText(!hideText)
                } else {
                  // show new description
                  setIndex(i)
                  setHideText(false)
                }
              }}
              css={{
                padding: 10,
                backgroundColor: '#fff',
                width: 190,
                marginTop: 20,
                marginBottom: 20
              }}
            >
              <img
                src={image}
                alt={imageAlt}
                width="150"
                css={{
                  border: '1px solid grey'
                }}
              />
              <p css={{ fontSize: 16 }}>
                {title}
              </p>
              <div>
                {new Intl.NumberFormat(locale, {
                  style: 'currency',
                  currency
                }).format(price)}
              </div>
            </CompletedDivButton>
          )
        )}
      </div>
      <div
        css={{
          fontSize: 16,
          display: hideText ? 'none' : 'block',
          margin: 20,
          textAlign: 'left'
        }}
      >
        {products[index]?.description()}
      </div>
    </article>
  )
}

export default WhyDivButton
