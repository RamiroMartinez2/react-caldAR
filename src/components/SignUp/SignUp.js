import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../../firebase/base';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
      const { email, password } = event.target.elements;
      try{
        await app
					.auth()
					.createUserWithEmailAndPassword(email.value, password.value);
				history.push("/");				
      } catch (error) {
				alert(error);
			}
	}, [history]);
	return(
		<div>
			<h1>SIGN UP</h1>
			<form onSubmit={handleSignUp}>
				<label>EMAIL
					<input name='email' type='email' placeholder='Email' />
				</label>
				<label>PASSWORD
					<input name='password' type='password' placeholder='Password' />
				</label>
				<button type='Submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default withRouter (SignUp);