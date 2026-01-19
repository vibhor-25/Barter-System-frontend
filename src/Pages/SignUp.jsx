import {Link} from 'react-router-dom';
function SignUp() {
    return(
        <>
        <img className='background' src='../../public/images/backgroundimg.png' alt=''/>
        <div className='Maindiv'>
            <div className='Mainbgdiv'>
                <img className='Mainbg' src='../../public/images/mainbg.png' alt=''/>
            </div>
            <div className='Welcomediv2'>
                <div className='welcome2'><h1>Welcome To Barter!</h1></div>

                <div className='name'>
                    <h1 className='nametext'>Name</h1>
                    <div className='nameinput'>
                        <input className='inputbox' placeholder='First name'></input>
                        <input className='inputbox' placeholder='last name'></input>
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

                <div className='signupdiv'>
                    <Link to='/home' className='signup-buton-link'>
                    <h1 className='signup'>Sign Up</h1>
                    </Link>
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