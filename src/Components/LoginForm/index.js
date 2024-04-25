import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    history.push('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showPassword, password, showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <img
          src="https://res.cloudinary.com/dedvz7flb/image/upload/v1713332178/Frame_8787_o8mjbv.png"
          alt="NxtQuiz"
          className="nxt-img"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <label htmlFor="username" className="text">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            className="input-el"
            onChange={this.onChangeUsername}
          />
          <br />
          <label htmlFor="password" className="text">
            PASSWORD
          </label>
          <br />
          {showPassword ? (
            <input
              type="text"
              value={password}
              className="input-el"
              onChange={this.onChangePassword}
            />
          ) : (
            <input
              type="password"
              className="input-el"
              onChange={this.onChangePassword}
              value={password}
            />
          )}
          <div className="show-password-container">
            <input type="checkbox" onChange={this.onChangeShowPassword} />
            <p>Show Password</p>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          {showError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
