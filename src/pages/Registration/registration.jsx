import { useState } from 'react';
import './registration.scss';
import { api_Registration, api_Login } from '../../api/user';
import { setData } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BiLoaderAlt } from 'react-icons/bi';
import { useEffect } from 'react';
import { setError } from '../../features/errorSlice';


const Registration = ({login, signup, show}) => {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);
    const serverError = useSelector(state => state.error.data);
    const [loginError, setloginError] = useState("");
    const [passwordError, setPassworError] = useState("");
    const [loginClass, setLoginClass] = useState(login);
    const [signupClass, setSignupClass] = useState(signup);

    const [dataRegistr] = useState({
        usermail: '',
        username: '',
        password: ''
    })

    const [dataLogin] = useState({
        usermail: 'markzuckerberg@gmail.com',
        password: 'facebookmz'
    })

    const signupClick = () => {
        setSignupClass("signup");
        setLoginClass("login slide-up");
    }

    const loginClick = () => {
        setSignupClass("signup slide-up");
        setLoginClass("login");
    }

    const onChangeHandler_Register = (e, id) => {
        dataRegistr[id] = e.target.value;
    }

    const onSubmitHandler_Register = async (e) => {
        setLoad(true);
        e.preventDefault();
        const res = await api_Registration(dataRegistr);
        if (res) {
            dispatch(setData(res.data));
            dispatch(setError({}));
            show();
            setLoad(false);
        }
    }

    const onChangeHandler_Login = (e, id) => {
        dataLogin[id] = e.target.value;
    }
    
    const onSubmitHandler_Login = async (e) => {
        setLoad(true);
        e.preventDefault();
        if (dataLogin.usermail.trim() === "") {
            setloginError('Write log in');
            setLoad(false);
        } else {
            setloginError('');
        }

        if (dataLogin.password.trim() === "") {
            setPassworError('Write password');
            setLoad(false);
        } else {
            setPassworError('');
        }

        if (dataLogin.usermail.trim() !== "" && dataLogin.password.trim() !== "") {
            const res = await api_Login(dataLogin);
            if (res) {
                dispatch(setData(res.data));
                dispatch(setError({}));
                show();
                setLoad(false);
            }
        }
    }

    useEffect(() => {
        if (serverError) setLoad(false);
    },[serverError])

    
    return(
        <div className='registr-background' onMouseDown={show}>
             <div className="form-structor" onMouseDown={(e) => e.stopPropagation()}>
                <form 
                    className={signupClass} 
                    onChange={(e) => onChangeHandler_Register(e, e.target.id)}
                    onSubmit={(e) => onSubmitHandler_Register(e)}
                >
                    <h2 className="form-title" onClick={signupClick} id="signup"><span>or</span>Sign up</h2>
                    <div className="form-holder">
                        <input type="text" className="input" placeholder="Name" id='username' />
                        {serverError.message === "Registration error" && serverError.errors.errors.map(error => {
                            if (error.param === "username") {
                                return (
                                    <span className='error'>{error.msg}</span>
                                )
                            } 
                            return null
                        })}                        
                        <input type="email" className="input" placeholder="Email" id='usermail' />
                        {serverError.message === "Registration error" && serverError.errors.errors.map(error => {
                            if (error.param === "usermail") {
                                return (
                                    <span className='error'>{error.msg}</span>
                                )
                            } 
                            return null
                        })}
                        <input type="password" className="input" placeholder="Password" id='password'/>
                        {serverError.message === "Registration error" && serverError.errors.errors.map(error => {
                            if (error.param === "password") {
                                return (
                                    <span className='error'>{error.msg}</span>
                                )
                            } 
                            return null
                        })}   
                    </div>
                    <button className="submit-btn">{load ? <BiLoaderAlt className='load-icon' /> : "Sign up"}</button>
                </form>
                <form 
                    className={loginClass}
                    onChange={(e) => onChangeHandler_Login(e,e.target.id)}
                    onSubmit={(e) => onSubmitHandler_Login(e)}
                >
                    <div className="center">
                        <h2 className="form-title" onClick={loginClick} id="login"><span>or</span>Log in</h2>
                        <div className="form-holder">
                            {serverError.message === "Login error" && <span className='error'>Wrong username or password</span>}
                            <input type="email" className="input" placeholder="Email" id='usermail' defaultValue={'markzuckerberg@gmail.com'}/>
                            {loginError && <span className='error'>{loginError}</span>}
                            <input type="password" className="input" placeholder="Password" id='password' defaultValue={'facebookmz'} />
                            {passwordError && <span className='error'>{passwordError}</span>}
                        </div>
                        <button className="submit-btn">{load ? <BiLoaderAlt className='load-icon' /> : "Log in"}</button>
                  </div>
                </form>
            </div>
        </div>       
    )
}

export default Registration
