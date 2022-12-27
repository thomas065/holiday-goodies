import './login.styles.scss'

const LoginButton = ({handleLoginClick}) => {
	const handleClick = () => {
		handleLoginClick();
	}

	return (
		<>
			<button onClick={handleClick} className='push-me button'>
				<span className='front'>Order</span>
			</button>
		</>
	);
}

export default LoginButton;