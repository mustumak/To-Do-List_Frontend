import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFields)
            });

            if(!response){
                throw new Error('Invalid Username/Password');
            }

            const data = await response.json();
            const token = data.token;            

            localStorage.setItem('jwtToken',token);

            resetFormFields();
            navigate('/dashboard');

        }catch(error){
            console.error(error);
        }
    };

    return(
        <div className='sign-in-container'>
            <form onSubmit={handleSubmit} autoComplete='off'>
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