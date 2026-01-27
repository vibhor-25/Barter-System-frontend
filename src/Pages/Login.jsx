import {data, Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

async function login_request(data){
    // const response = await axios({
    //   method: "POST",
    //   url: "login/",
    //   baseURL: "http://127.0.0.1:8000/api/auth/user/",
    //   data: data,
    // }).then((rec_data) => {
    //   // console.log(rec_data.data)
    //   if (rec_data.status === 200) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    await axios.post(
       "http://localhost:8000/api/auth/user/login/",
        data,
        { withCredentials: true, },
    ).then((rec_data) => {
      // console.log(rec_data.data)
      if (rec_data.status === 200) {
        return true;
      } else {
        return false;
      }
    });
}

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const handleDivClick = async () => {
        const login_success = login_request(loginData);

        if(login_success) navigate('/home');
    };
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
                    <input className='inputbox' placeholder='eg. abc' value={loginData.email} onChange={(e) => {
                        setLoginData({...loginData, email: e.target.value})
                    }}></input>
                </div>

                <div className='passworddiv'>
                    <h1 className='passwordtext'>Password</h1>
                    <input className='inputbox' placeholder='eg. abc' value={loginData.password} onChange={(e) => {
                        setLoginData({...loginData, password: e.target.value})
                    }}></input>
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