import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      displayName: '',
      profilePicUrl: '',
      password: '',
      errorMessage: '',
    }
  }

  onUsernameChange = e => {
    this.setState({ username: e.target.value })
  }
  
  onDisplayNameChange = e => {
    this.setState({ displayName: e.target.value })
  }
  
  onProfilePicChange = e => {
    this.setState({ profilePicUrl: e.target.value })
  }
  
  onPasswordChange = e => {
    this.setState({ password: e.target.value })
  }
  
  onRegister = () => {
    axios.post('http://167.99.66.103/api/users', {
      username: this.state.username,
      password: this.state.password,
      profilePicUrl: this.state.profilePicUrl,
      displayName: this.state.displayName,
    }).then(res => {
      this.setState({ errorMessage: res.data.message })
    })
  }

  render() {
    return (
      <div className="form-wrapper">

        <label htmlFor="usernameId">Username</label>
        <input id="usernameId" type="text" value={this.state.username} onChange={this.onUsernameChange} />

        <label htmlFor="nameId">Display Name</label>
        <input id="nameId" type="text" value={this.state.displayName} onChange={this.onDisplayNameChange} />

        <label htmlFor="profileId">Profile Picture URL</label>
        <input id="profileId" type="text" value={this.state.profilePicUrl} onChange={this.onProfilePicChange} />

        <label htmlFor="passwordId">Password</label>
        <input id="passwordId" type="password" value={this.state.password} onChange={this.onPasswordChange} />

        <button className="submit-button" onClick={this.onRegister}>Register Now</button>
        
        <div className="error-msg">{this.state.errorMessage}</div>
      </div>
    )
  }
}

export default Register
