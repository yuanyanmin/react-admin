import React from 'react'
import './style.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import loginBg from '../../assets/img/login_bg.jpg'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showBox: 'login',  // 展示当前表单
      loading: false,
    }
  }

  componentDidMount() {
  }

  switchShowBox = (val) => {
    this.setState({
      showBox: val
    })
  }


  render() {
    const {showBox, loading} = this.state
    return (
      <div id="login-page">
        {
          loading ?
          <div>
            <h3 style={styles.loadingTitle}>载入中...</h3>
          </div> :
          <div>
            <div id="backgroundBox" style={styles.backgroundBox}></div>
            <div className='container'>
              <LoginForm className={showBox === 'login' ? 'box showBox' : 'box hiddenBox'}
                         switchShowBox={this.switchShowBox}></LoginForm>
              <RegisterForm className={showBox === 'register' ? 'box showBox' : 'box hiddenBox'}
                         switchShowBox={this.switchShowBox}></RegisterForm>
            </div>
          </div>
            
        }
      </div>
    )
  }
}

const styles = {
  backgroundBox: {
    position: "Fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${loginBg})`,
    backgroundSize: 'cover',
    transition:'all .5s'
  },
  loadingBox: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  loadingTitle: {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginLeft: -45,
    marginTop: -18,
    fontWeight: 500,
    fontSize: 24,
  }
}
export default Login