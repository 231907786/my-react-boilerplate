import React from 'react'
import './index.styl'

export default class NavBar extends React.Component {

  componentDidMount() {
    console.log(this.props.params)
  }

  render() {
    const {
      hasBack,
      title,
      children,
      goBack,
    } = this.props

    return (
      <div className="root">
        {hasBack ? (
          <div className="left" onClick={goBack}>Back</div>
        ) : (
          <div className="left"></div>
        )}
        <div className="middle">{children || title || 'Title'}</div>
        <div className="right"></div>
      </div>
    )
  }
}
