import React from 'react'

const wrap = Component => props => (
  <div style={{
    height: '100%',
    width: '100%',
    display: 'inline-block',
  }}>
    <Component {...props} />
  </div>
)

export default wrap
