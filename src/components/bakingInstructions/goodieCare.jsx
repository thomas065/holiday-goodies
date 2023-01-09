import './goodieCare.scss';
import {Link} from "react-router-dom";

const GoodieCare = () => {
	const mystyle1 = {
		color: "red",
		fontSize: "50px",
		fontWeight: "bold",
		textShadow: "5px 5px 2px white",
		textAlign: "center",
		margin: "50px",
	};

	const mystyle2 = {
		fontSize: "30px",
		textAlign: "center",
		margin: "50px",
	};

	const mystyle3 = {
		fontSize: "30px",
		margin: "50px",
		fontWeight: "bold",
	};

  return (
		<div className='holiday-font mt-5 d-flex flex-column align-items-center background-fade'>
			<div className='col-12'>
				  <h1 className='directions'>Happy Holidays!</h1>
			</div>
			<div className="col-12">
				<h2 style={mystyle1}>Instructions and Care for Goodie Basket</h2>
			</div>
			<div className='col'>
				<ul>
					<li style={mystyle2}>
						As all of the items included in your basket are food, they do require some special handling.
					</li>
				</ul>
			</div>
			<div className='col-6 text-center'>
				<h1 style={{textDecoration: 'underline', backgroundColor: 'green', borderRadius: "40px", width: '200px', margin: 'auto'}}>
					Cookies:
				</h1>
			</div>
			<div className='col-9 col-sm-12'>
				<p style={mystyle3}>
					No refigeration is needed if eaten by December 31st. If you want to save some for later,
					I would place them in an airtight container and store in the fridge or freezer. They will last for about 2 weeks.
					Bring to room temperature before eating -- unless you like frozen or cold cookies!
				</p>
			</div>
			<div className='col-6 text-center'>
				<h1 style={{textDecoration: 'underline', backgroundColor: 'red', borderRadius: "40px", width: '200px', margin: 'auto'}}>
					Breads:
				</h1>
			</div>
			<div className='col-9 col-sm-12'>
				<p style={mystyle3}>
					No refigeration is needed if eaten by December 31st. If you want to save some for later,
					I would place them in an airtight container and store in the fridge or freezer. They will last for about 2 weeks.
					Bring to room temperature before eating -- unless you like frozen or cold cookies!
				</p>
			</div>
			<div className='col-12 text-center'>
				<h1 style={{textDecoration: 'underline', backgroundColor: 'gold', color: 'green', borderRadius: "40px", width: '300px', margin: 'auto'}}>
					Pickles, Tapanade and Butters:
				</h1>
			</div>
			<div className='col-9 col-sm-12'>
				<p style={mystyle3}>
					No refigeration is needed if eaten by December 31st. If you want to save some for later,
					I would place them in an airtight container and store in the fridge or freezer. They will last for about 2 weeks.
					Bring to room temperature before eating -- unless you like frozen or cold cookies!
				</p>
			</div>
			<Link style={{ textDecoration: 'none', color: 'white' }} to={'/order-form'} className='orderbutton'>Continue</Link>>
		</div>
  );
}

export default GoodieCare;