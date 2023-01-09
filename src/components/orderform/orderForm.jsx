import './order.styles.scss';
import {useFormik} from "formik";
import {Form, FormGroup, Input, Label, Button, Badge,} from "reactstrap";

const OrderForm = () => {
const year = new Date();
const yearNow = year.getFullYear();

	const validate = values => {
		const errors = {};
		if (!values.firstName) {
			errors.firstName = 'Required';
		} else if (values.firstName.length > 15) {
			errors.firstName = 'Must be 15 characters or less';
		}

		if (!values.lastName) {
			errors.lastName = 'Required';
		} else if (values.lastName.length > 20) {
			errors.lastName = 'Must be 20 characters or less';
		}

		if (!values.email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			specialInstructions: '',
			goodies: [],
		},
		validate,
		onSubmit: values => {
			console.log(`Your Order Status`, values);
			alert(`Your order was successfully submitted!`);
		},
	});

  return (
	  <>
		<div className="mt-5">
		  <div className="col-12">
			  <h1 className='holiday-font'>Christmas Baking {yearNow}</h1>
		  </div>
		  <div className="col-12 mt-5 m-auto text-start holiday-font">
			<ul>
				<li>2 Items MAX each</li>
				<li>Input of which double in the last box</li>
				<li>Send responses by <b>November 13th</b></li>
				<li><b>Be sure to select a Butter if you choose a Bread</b></li>
			</ul>
		  </div>
		</div>
		<div>
			<Form onSubmit={formik.handleSubmit}>
						<FormGroup floating className="mb-3 col-3">
							<Input
								id="firstName"
								name="firstName"
								type="text"
								placeholder='First Name'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.firstName}
								className='form-control'
							/>
							{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

							<Label htmlFor="firstName">First Name</Label>
						</FormGroup>
						<FormGroup floating className="mb-3 col-3">
							<Input
								id="lastName"
								name="lastName"
								type="text"
								placeholder='Last Name'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.lastName}
								className='form-control'
							/>
							{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

							<Label htmlFor="lastName">Last Name</Label>
						</FormGroup>
						<FormGroup floating className="col-3">
							<Input
								id="email"
								name="email"
								type="text"
								placeholder='username@email.com'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								className='form-control'
							/>
							{formik.errors.email ? <div>{formik.errors.email}</div> : null}

							<Label htmlFor="email">Email Address</Label>
						</FormGroup>

					{/*Section 1*/}
					<div className='col'>
							<Button
								color="primary"
								className='m-3'
							>
								Ginger Snaps{' '}
								<Badge
								color="dark"
								>
									2
								</Badge>
							</Button>
							<Button
								color="primary"
								className='m-3'
							>
								Sugar Cookies{' '}
								<Badge
									color="dark"
								>
									1
								</Badge>
							</Button>
							<Button
								color="primary"
								className='m-3'
							>
								Snickerdoodles{' '}
								<Badge
									color="dark"
								>
									2
								</Badge>
							</Button>

					</div>
					{/*Section 2*/}
					<div className='col'>
						<Button
							color="primary"
							className='m-3'
						>
							Hot Pickles{' '}
							<Badge
								color="dark"
							>
								2
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Sweet Pickles{' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Cinnamon Rolls{' '}
							<Badge
								color="dark"
							>
								2
							</Badge>
						</Button>

					</div>
				{/*Section 3*/}
					<div className='col'>
						<Button
							color="primary"
							className='m-3'
						>
							Pecan Puffs{' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Olive Tapanade{' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Pumpkin Bread{' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
					</div>
					{/*Section 4*/}
					<div className='col'>
						<Button
							color="primary"
							className='m-3'
						>
							Apple Sauce Cake{' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							English Muffins{' '}
							<Badge
								color="dark"
							>
								2
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Raisin Scones{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>
					</div>
					{/*Section 5*/}
					<div className='col'>
						<Button
							color="primary"
							className='m-3'
						>
							Strawberry Butter{' '}
							<Badge
								color="dark"
							>
								2
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Cinnamon Honey Butter{' '}
							<Badge
								color="dark"
							>
								2
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Chocolate Chip Cookies w/ Mocha Cream Filling{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>
					</div>
				{/*Section 6*/}
					<div className='col'>
						<Button
							color="primary"
							className='m-3'
						>
							Chocolate peanut Butter No Bake Cookies{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Vanilla Orange Cranberry Cookies{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Rice Krispie Treats (REGULAR){' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3'
						>
							Rice Krispie Treats (CHOCOLATE){' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
					</div>
					{/*text field*/}
				<FormGroup floating className='col-5'>
						<Input
							id="specialInstructions"
							name="specialInstructions"
							type="textarea"
							placeholder='Special Instructions'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.specialInstructions}
							className='form-control'
						/>
					<Label
						htmlFor="text"
					>
						Special Instructions:
					</Label>
				</FormGroup>
				<Button
					className='text-light fw-bold border border-3 light rounded-pill mt-3 p-3 bg-success'
					color="warning"
					type="submit"
				>Submit</Button>
			</Form>
		</div>
	  </>
  );
};

export default OrderForm;
