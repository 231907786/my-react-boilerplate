import React from 'react'
import Tabs from '../../components/Tabs'
import NavBar from '../../components/NavBar'
import { connect } from 'react-redux'
import wrap from '../../utils/pageWrapper'
import { push, goBack } from 'react-router-redux'

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
      //   .then(json => dispatch({type: 'FETCHING', payload: json}))
      const promise = new Promise((resolve, reject) => {
        setTimeout(resolve,3000)
      })
      promise.then(() => dispatch({type: 'FETCHING', payload: '加载完成'}))
      return promise
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(wrap(Tabs))
