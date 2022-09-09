import SignInForm from '../../components/signin-form/signin-form.component.jsx';
import SignUpForm from '../../components/signup-form/signup-form.component.jsx';
import './authentication.styles.scss'
const Authentication = () => {

    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}


export default Authentication