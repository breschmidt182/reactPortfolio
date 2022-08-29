import {useState} from 'react';
import {useForm} from '@formspree/react';

function Contact() {
	const [submit, handleSubmit] = useForm("xoqbvlgb")
	const [formState, setFormState] = useState({name:'', email:'', message:''});
	const {name, email, message} = formState;
	const [error, setError] = useState('');

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	function handleChange(e) {
		if(e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);

			if(!isValid) {
				setError('Your email is invalid');
			} else {
				setError('')
			}
		} else {
			if(!e.target.value.length) {
				setError(`${e.target.name} is required`);
			} else {
				setError('');
			}
		}
		setFormState({...formState, [e.target.name]: e.target.value})

		if(!error) {
			setFormState({...formState, [e.target.name]: e.target.value})
		}
	}
	
	if(submit.succeeded) {
		return <div>Message Sent!</div>
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='field'>
				<label className='label'>Name</label>
				<div className='control'>
					<input className='input' type='text' defaultValue={name} onChange={handleChange} name="name" placeholder='Enter name here'></input>
				</div>
			</div>
			<div className='field'>
				<label className='label'>Email</label>
				<div className='control has-icons-left has-icons-right'>
					<input className='input' type='email' defaultValue={email} onChange={handleChange} name="email" placeholder='Enter email address here'></input>
					<span className='icon is-small is-left'>
						<i className='fas fa-envelope'></i>
					</span>
				</div>
			</div>

			<div className='field'>
				<label className='label'>Message</label>
				<div className='control'>
					<textarea className='textarea' defaultValue={message} onChange={handleChange} name="message" placeholder='Type message here'></textarea>
				</div>
			</div>

			<div className='errorMsg'>
				{error && (
					<div>
						<p className='error-text'>{error}</p>
					</div>
				)}
			</div>

			<div className='field is-grouped'>
				<div className='control'>
					<button className='button is-link'>Submit</button>
				</div>
				<div className='control'>
					<button className='button is-link is-danger'>Cancel</button>
				</div>
			</div>
		</form>
	)
}

export default Contact;