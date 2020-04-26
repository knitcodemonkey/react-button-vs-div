import React, { Fragment } from 'react'
import SvgTwitter from '../svg/twitter'
import SvgDiscord from '../svg/discord'

const findme = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 24
}

const MyInfo = () => (
  <div
    css={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}
  >
    <div css={findme}>
      <SvgTwitter />
      <p>@knitcodemonkey</p>
    </div>

    <div css={findme}>
      <SvgDiscord />
      <p>#accessibility</p>
    </div>
  </div>
)

export default MyInfo
