import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFields)
            });

            if(!response){
                throw new Error('Failed to Register the User');
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
        <div className='sign-up-container'>
            <form onSubmit={handleSubmit}>
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