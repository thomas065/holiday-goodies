import './login-button.styles.scss'

const LoginButton = ({handleLoginClick}) => {
	const handleClick = () => {
		handleLoginClick();
	}

	return (
		<div className='button'>
			<button onClick={handleClick} className='push-me button'>
				<a href='/login' className='front'>Order</a>
			</button>
		</div>
	);
}

export default LoginButton;