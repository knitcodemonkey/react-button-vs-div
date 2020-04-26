import React, { Fragment } from 'react'

// Content from Goulet Pens
export const products = [
  {
    image:
      'https://cdn.shopify.com/s/files/1/2603/2528/products/TWSBI-ECO-TransparentPurple-1_large.jpg?v=1569515244',
    imageAlt:
      'TWSBI ECO Fountain Pen - Transparent Purple (Special Edition)',
    title:
      'TWSBI ECO Fountain Pen - Transparent Purple (Special Edition)',
    description: () => (
      <Fragment>
        <p className="small">
          The TWSBI ECO fountain pen boasts an
          incredible value with its piston filling
          system and affordable price. Like many
          other TWSBI fountain pens, this special
          edition ECO features a crystal clear
          acrylic barrel so you can see your ink
          level, and a translucent purple cap and
          piston knob. The pen cap has an inner
          cap to ensure a perfect seal when stored
          away. It is completed with silver trim
          and a silver stainless steel nib. This
          color is a limited production run.
        </p>
      </Fragment>
    ),
    price: '30.99',
    currency: 'USD',
    locale: 'en-US'
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/2603/2528/products/TWSBI-ECOT-Coral-2_large.jpg?v=1563931997',
    imageAlt:
      'TWSBI ECO-T Fountain Pen - Coral (Special Edition)',
    title:
      'TWSBI ECO-T Fountain Pen - Coral (Special Edition)',
    description: () => (
      <Fragment>
        <p className="small">
          The TWSBI ECO-T fountain pen boasts an
          incredible value with its piston filling
          system and affordable price. This
          special edition features a crystal clear
          acrylic barrel so you can see your ink
          level, and a trendy solid coral colored
          cap and piston knob. The pen cap has an
          inner cap to ensure a perfect seal when
          stored away. It is completed with silver
          trim and a silver stainless steel nib.
        </p>
        <p className="small">
          The ECO-T differs from the ECO in that
          it has a triangular grip section for
          ease of holding the pen, and triangular
          shaped cap and piston knob instead of
          hexagon.
        </p>
      </Fragment>
    ),
    price: '30.99',
    currency: 'EUR',
    locale: 'de-DE'
  }
]
