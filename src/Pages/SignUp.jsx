import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
function SignUp() {
    const navigate = useNavigate();
    const handleDivClick = () => {
    navigate('/home');
  };
    return(
        <>
        <img className='background' src='../../public/images/backgroundimg.png' alt=''/>
        <div className='Maindiv'>
            <div className='Mainbgdiv'>
                <img className='Mainbg' src='../../public/images/mainbg.png' alt=''/>
            </div>
            <div className='Welcomediv2'>
                <div className='welcome2'><h1><span>Welcome To</span> <span>Barter!</span></h1></div>

                <div className='name'>
                    <h1 className='nametext'>Name</h1>
                    <div className='nameinput'>
                        <input className='inputbox2' placeholder='First name'></input>
                        <input className='inputbox2' placeholder='last name'></input>
                    </div>
                </div>

                 <div className='emaildiv2'>
                    <h1 className='emailtext2'>Email</h1>
                    <input className='inputbox' placeholder='eg. abc'></input>
                </div>

                <div className='newpassworddiv'>
                    <h1 className='newpasswordtext'>New Password</h1>
                    <input className='inputbox' placeholder='eg. abc'></input>
                </div>

                <div className='conpassworddiv'>
                    <h1 className='conpasswordtext'>Confirm Password</h1>
                    <input className='inputbox' placeholder='eg. abc'></input>
                </div>

                <div className='signupdiv' 
                 onClick={handleDivClick}
                 style={{ cursor: 'pointer' }}>
                    <h1 className='signup'>Sign Up</h1>
                </div>

                <div className='alrdiv'>
                    <Link to='/'  className='alreadyregistered'>Already Registered?</Link>
                </div>
            </div>
        </div>
        </>
    );
}
export default SignUp;