import Button from "../../components/Button/Button";
import './Authentication.scss';

const Auth = () => {
    return(
        <div id="AuthDiv">
            <Button text={'New to ToDoEase'}/>
            <Button text={'Already a User'}/>
        </div>
    )
}

export default Auth;