import { useState } from 'react';
import './SignInForm.scss';
import Button from '../Button/Button';
import FormInput from '../form-input/form-input';

const deaultFormFields = {
    username: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(deaultFormFields);
    const {username, password} = formFields;

    const resetFormFields = () => setFormFields(deaultFormFields);

    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
        
    }

    return(
        <div className='sign-in-container'>
            <form>
                <FormInput
                    type="text"
                    name="username"
                    required
                    value={username}
                    onChange={handleChange}
                    label="Username"
                />
                <FormInput 
                    label="Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <Button type="submit">Login</Button>

            </form>
        </div>
    )
}

export default SignInForm;