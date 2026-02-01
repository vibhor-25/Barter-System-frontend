import {data, Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from '../utils/axiosConfig';

async function login_request(data){
    try {
        const response = await axios.post(
            "http://localhost:8000/api/auth/user/login/",
            data,
            { withCredentials: true },
        );
        
        if (response.status === 200) {
            console.log('Login successful:', response.data);
            return { success: true, data: response.data };
        } else {
            console.error('Login failed with status:', response.status);
            return { success: false, error: 'Login failed' };
        }
    } catch (error) {
        console.error('Login error:', error.response?.status, error.response?.data);
        
        if (error.response?.status === 401) {
            return { success: false, error: 'Invalid email or password' };
        } else if (error.response?.status === 400) {
            return { success: false, error: error.response?.data?.message || 'Invalid credentials' };
        } else {
            return { success: false, error: 'Login failed. Please try again.' };
        }
    }
}

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    
    const handleDivClick = async () => {
        // Validation
        if (!loginData.email || !loginData.password) {
            setError('Email and password are required');
            return;
        }

        setIsLoading(true);
        setError('');
        
        try {
            const result = await login_request(loginData);
            
            if (result.success) {
                console.log('Redirecting to home...');
                navigate('/home');
            } else {
                console.error('Login failed:', result.error);
                setError(result.error || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleDivClick();
        }
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
                    }} onKeyPress={handleKeyPress}></input>
                </div>

                <div className='passworddiv'>
                    <h1 className='passwordtext'>Password</h1>
                    <input className='inputbox' type="password" placeholder='eg. abc' value={loginData.password} onChange={(e) => {
                        setLoginData({...loginData, password: e.target.value})
                    }} onKeyPress={handleKeyPress}></input>
                </div>

                {error && (
                    <div style={{
                        color: 'red',
                        backgroundColor: '#ffe0e0',
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '10px',
                        textAlign: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}>
                        {error}
                    </div>
                )}

                <div className='forgotdiv'>
                    <h1 className='forgot'>Forget Password?</h1>
                </div>

                <div className='logindiv'
                onClick={handleDivClick}
                style={{cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.6 : 1}}>
                    <h1 className='login'>{isLoading ? 'Logging in...' : 'Login'}</h1>
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