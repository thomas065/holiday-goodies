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
		  <div className="holiday-font">
			  <h1 className='logo'>Christmas Baking "{yearNow}"</h1>
		  </div>
		  <div className="col-12 mt-5 disclaimer">
			<ul>
				<li>2 Items MAX each</li>
				<li>Input of which double in the last box</li>
				<li>Send responses by <b>November 13th</b></li>
				<li><em>Be sure to select a Butter if you choose a Bread</em></li>
			</ul>
		  </div>
		<div>
			<Form onSubmit={formik.handleSubmit}>
					<div className='name-space'>
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
					</div>
					<div className='treats'>
					{/*Section 1*/}
							<Button
								color="primary"
								className='m-3 order'
								type="button"
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
								className='m-3 order'
								type="button"
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
								className='m-3 order'
								type="button"
							>
								Snickerdoodles{' '}
								<Badge
									color="dark"
								>
									2
								</Badge>
							</Button>

					{/*Section 2*/}
						<Button
							color="primary"
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
						>
							Cinnamon Rolls{' '}
							<Badge
								color="dark"
							>
								2
							</Badge>
						</Button>

				{/*Section 3*/}
						<Button
							color="primary"
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
						>
							Pumpkin Bread{' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>

					{/*Section 4*/}
						<Button
							color="primary"
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
						>
							Raisin Scones{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>

					{/*Section 5*/}
						<Button
							color="primary"
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
						>
							Double Chocolate Chip Cookies{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>

						<Button
							color="primary"
							className='m-3 order'
							type="button"
						>
							Chocolate Chip Cookies w/ Mocha Cream Filling{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>

				{/*Section 6*/}
						<Button
							color="primary"
							className='m-3 order'
							type="button"
						>
							Chocolate Peanut Butter No Bake Cookies{' '}
							<Badge
								color="dark"
							>
								0
							</Badge>
						</Button>

						<Button
							color="primary"
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
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
							className='m-3 order'
							type="button"
						>
							Rice Krispie Treats (CHOCOLATE){' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>
						<Button
							color="primary"
							className='m-3 order'
							type="button"
						>
							Other{' '}
							<Badge
								color="dark"
							>
								1
							</Badge>
						</Button>

				</div>
					{/*text field*/}
				<FormGroup floating className='col-5 mt-5 m-auto'>
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
				<div className='bake'>
					<Button
					className=' text-light w-50 fw-bold border border-3 rounded-pill mt-3 p-3 bg-success'
					color="warning"
					type="submit"
					>Submit</Button>
				</div>

				</FormGroup>
			</Form>
		</div>
	  </>
  );
};

export default OrderForm;
