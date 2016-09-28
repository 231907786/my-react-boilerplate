import React from 'react'
import styles from './index.styl'

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
      <div className={styles.root}>
        {hasBack ? (
          <div className={styles.left} onClick={goBack}>Back</div>
        ) : (
          <div className={styles.left}></div>
        )}
        <div className={styles.middle}>{children || title || 'Title'}</div>
        <div className={styles.right}></div>
      </div>
    )
  }
}
