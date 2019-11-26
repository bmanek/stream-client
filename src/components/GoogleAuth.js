import React from 'react'

const API_KEY = process.env.REACT_APP_MY_API_KEY

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: API_KEY,
        scope: 'email',
      })
    })
  }

  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth
