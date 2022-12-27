import './countdown.styles.scss';
import {useState, useEffect} from 'react';
import LoginButton from "../login/loginbutton";
import LoginForm from "../login/loginform";

const Countdown = () => {
	const [days, setDays] = useState(10);
	const [hours, setHours] = useState(10);
	const [minutes, setMinutes] = useState(10);
	const [seconds, setSeconds] = useState(10);
	const [isLoading, setIsLoading] = useState(true)

	const [isShowLogin, setIsShowLogin] = useState(false);

	const handleLoginClick = () => {
		setIsShowLogin((isShowLogin) => !isShowLogin);
	}

	useEffect(() => {
		const countdown = () => {
			const endDate = new Date("November 13, 2023 00:00:00").getTime();
			const now = new Date().getTime();

			const timeLeft = endDate - now;

			const seconds = 1000;
			const minutes = seconds * 60;
			const hours = minutes * 60;
			const days = hours * 24;

			let timeLeftDays = Math.floor(timeLeft / days);
			let timeLeftHours = Math.floor((timeLeft % days) / hours);
			let timeLeftMinutes = Math.floor((timeLeft % hours) / minutes);
			let timeLeftSeconds = Math.floor((timeLeft % minutes) / seconds);

			timeLeftHours = timeLeftHours < 10 ? '0' + timeLeftHours : timeLeftHours;
			timeLeftMinutes = timeLeftMinutes < 10 ? '0' + timeLeftMinutes : timeLeftMinutes;
			timeLeftSeconds = timeLeftSeconds < 10 ? '0' + timeLeftSeconds : timeLeftSeconds;

			setDays(timeLeftDays);
			setHours(timeLeftHours);
			setMinutes(timeLeftMinutes);
			setSeconds(timeLeftSeconds);
			setIsLoading(false);
		}
		setInterval(countdown, 1000);
	}, []);

	return (
		<>
			{isLoading ? (
				<div className='loading'>
					<div>
						<h1>Loading...</h1>
					</div>
					<div className='spinner1'></div>
					<div className='spinner2'></div>
					<div className='spinner3'></div>
				</div>
			) : (
				<div>
					<section className='container holiday-font'>
						<h1>Baking Event Countdown:</h1>
						<div className='countdown'>
							<article>
								<p>{days}</p>
								<h3>Days:</h3>
							</article>
							<article>
								<p>{hours}</p>
								<h3>Hours:</h3>
							</article>
							<article>
								<p>{minutes}</p>
								<h3>Minutes:</h3>
							</article>
							<article>
								<p>{seconds}</p>
								<h3>Seconds:</h3>
							</article>
						</div>
					</section>
					<LoginButton handleLoginClick={handleLoginClick}/>
					<LoginForm isShowLogin={isShowLogin}/>
				</div>
			)}
		</>
	);
}

export default Countdown;
