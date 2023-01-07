import './login-button.styles.scss'
import {Link} from "react-router-dom";

const LoginButton = () => {

	return (
		<div className='button'>
			<button className='push-me button'>
				<Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'} className='front'>Order</Link>
			</button>
		</div>
	);
}

export default LoginButton;