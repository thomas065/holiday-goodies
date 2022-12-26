import './countdown.styles.scss';
import {useState, useEffect} from 'react';

const Countdown = () => {
	const [days, setDays] = useState(10);
	const [hours, setHours] = useState(10);
	const [minutes, setMinutes] = useState(10);
	const [seconds, setSeconds] = useState(10);

	useEffect(() => {
		const interval = setInterval(() => {

		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<section className='container holiday-font'>
				<h1>Countdown to Baking Event:</h1>
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
		</>
	);
}

export default Countdown;
