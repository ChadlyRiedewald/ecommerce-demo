import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';
import { useState } from 'react';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('no user found');
                    break;
                default:
                    console.log(e);
            }
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        type='button'
                        buttonType='google'
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
