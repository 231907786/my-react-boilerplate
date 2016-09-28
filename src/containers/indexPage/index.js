import React from 'react'
import Tabs from '../../components/Tabs'
import NavBar from '../../components/NavBar'
import { connect } from 'react-redux'
import wrap from '../../utils/pageWrapper'
import { push, goBack } from 'react-router-redux'

// const wait = delay => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(resolve, delay)
//   })
// }
//
// const test = async () => {
//   await wait(5000)
//   console.log('hello world!')
// }
//
// test()


const mapStateToProps = (state, ownProps) => {
  return {
    hasBack: state.hasBack,
    text: state.main.github
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  push(path) {
    dispatch(push(path))
  },

  goBack() {
    dispatch(goBack())
  },

  fetching() {
    dispatch((dispatch, getState) => {
      dispatch({
        type: 'FETCHING',
      })

      // return fetch('//api.github.com')
      //   .then(res => res.json())
      //   .then(json => dispatch({type: 'FETCHING', payload: JSON.stringify(json)}))

      const promise = new Promise((resolve, reject) => {
        const action = Math.random() > 0.5 ? resolve : reject
        setTimeout(action,3000)
      })
      promise.then(
        () => dispatch({type: 'FETCHING', payload: '加载完成'}),
        () => dispatch({type: 'FETCHING', error: true, payload: '加载失败，请检查网络'})
      )
      return promise
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(Tabs))
