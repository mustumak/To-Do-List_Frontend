import { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button from '../Button/Button';
import './SignUpForm.scss';

const deaultFormFields = {
    username: '',
    password: '',
    email: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(deaultFormFields);
    const {username, password, email} = formFields;

    const resetFormFields = () => setFormFields(deaultFormFields);

    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
        
    }
    
    return(
        <div className='sign-up-container'>
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
                    label="Email" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />
                <FormInput 
                    label="Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <Button type="submit">Register</Button>
            </form>
        </div>
    )
}

export default SignUpForm;