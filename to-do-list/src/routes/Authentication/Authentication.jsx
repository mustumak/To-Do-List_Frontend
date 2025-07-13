import SignInForm from "../../components/SignInForm/SignInform";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Button from "../../components/Button/Button";
import './Authentication.scss';

const Auth = ({authMode,setAuthMode}) => {

    return(
        <div id="AuthDiv">
            {
                authMode === null && (
                    <div className="auth-buttons">
                        <Button onClick={() => setAuthMode('register')}>New to ToDoEase</Button>
                        <Button onClick={() => setAuthMode('login')}>Already a User</Button>
                    </div>
                )
            }
            {                
                authMode === 'login' && (
                    <>
                    <div className="form-container">
                        <h2>Sign In</h2>
                        <SignInForm />
                    </div>
                    <div className="switch-link">
                        <Button onClick={() => setAuthMode('register')}>New to ToDoEase</Button>
                    </div>
                    </>
                )
            }
            {
                authMode === 'register' && (
                    <>
                    <div className="form-container">
                        <h2>Sign Up</h2>
                        <SignUpForm />
                    </div>
                    <div className="switch-link">
                        <Button onClick={() => setAuthMode('login')}>Already a User</Button>
                    </div>
                    </>
                )
            }
            
        </div>
    )
}

export default Auth;