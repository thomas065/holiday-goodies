import './login-button.styles.scss'
import {Link} from "react-router-dom";

const LoginButton = ({handleLoginClick}) => {
	const handleClick = () => {
		handleLoginClick();
	}

	return (
		<div className='button'>
			<button onClick={handleClick} className='push-me button'>
				<Link to={'/login'} ><a href='#!' className='front'>Order</a></Link>
			</button>
		</div>
	);
}

export default LoginButton;