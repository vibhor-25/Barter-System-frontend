import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  const handleDivClick = () => {
    navigate('/home');
  }
    return(
        <>
        <img className='background' src='../../public/images/backgroundimg.png' alt=''/>
        <div className='Maindiv'>
            <div className='Mainbgdiv'>
                <img className='Mainbg' src='../../public/images/mainbg.png' alt=''/>
            </div>
            <div className='Welcomediv'>
                <div className='welcome'><h1>Welcome Back!</h1></div>

                <div className='emaildiv'>
                    <h1 className='emailtext'>Email</h1>
                    <input className='inputbox' placeholder='eg. abc'></input>
                </div>

                <div className='passworddiv'>
                    <h1 className='passwordtext'>Password</h1>
                    <input className='inputbox' type='password' placeholder='eg. abc'></input>
                </div>

                <div className='forgotdiv'>
                    <h1 className='forgot'>Forget Password?</h1>
                </div>

                <div className='logindiv'
                onClick={handleDivClick}
                style={{cursor: 'pointer'}}>
                    <h1 className='login'>Login</h1>
                </div>

                <div className='notrdiv'>
                    <Link to='/signup' className='notregistered'>Not Registered yet?</Link>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login;