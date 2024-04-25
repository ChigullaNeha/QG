import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <img
        src="https://res.cloudinary.com/dedvz7flb/image/upload/v1713332178/Frame_8787_o8mjbv.png"
        alt="NxtQuiz"
        className="nav-img"
      />
      <button type="button" className="logout-btn" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}
export default withRouter(Header)
