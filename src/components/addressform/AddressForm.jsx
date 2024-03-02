import React, { useState } from "react";
import axios from "axios";
import "./AddressForm.css";
import { useNavigate } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { Bounce, ToastContainer, toast } from "react-toastify";

const states = [
	"Andhra Pradesh",
	"Arunachal Pradesh",
	"Assam",
	"Bihar",
	"Chhattisgarh",
	"Goa",
	"Gujarat",
	"Haryana",
	"Himachal Pradesh",
	"Jharkhand",
	"Karnataka",
	"Kerala",
	"Madhya Pradesh",
	"Maharashtra",
	"Manipur",
	"Meghalaya",
	"Mizoram",
	"Nagaland",
	"Odisha",
	"Punjab",
	"Rajasthan",
	"Sikkim",
	"Tamil Nadu",
	"Telangana",
	"Tripura",
	"Uttarakhand",
	"Uttar Pradesh",
	"West Bengal",
];

const cities = [
	"Delhi",
	"Mumbai",
	"Kolkāta",
	"Bangalore",
	"Chennai",
	"Hyderābād",
	"Pune",
	"Ahmedabad",
	"Sūrat",
	"Prayagraj",
	"Lucknow",
	"Jaipur",
	"Cawnpore",
	"Mirzāpur",
	"Nāgpur",
	"Ghāziābād",
	"Vadodara",
	"Vishākhapatnam",
	"Indore",
	"Thāne",
	"Bhopāl",
	"Chinchvad",
	"Patna",
	"Bilāspur",
	"Ludhiāna",
	"Agwār",
	"Āgra",
	"Madurai",
	"Jamshedpur",
	"Nāsik",
	"Farīdābād",
	"Aurangābād",
	"Rājkot",
	"Meerut",
	"Jabalpur",
	"Kalamboli",
	"Vasai",
	"Najafgarh",
	"Vārānasi",
	"Srīnagar",
	"Dhanbād",
	"Amritsar",
	"Alīgarh",
	"Guwāhāti",
	"Hāora",
	"Rānchi",
	"Gwalior",
	"Chandīgarh",
	"Vijayavāda",
	"Jodhpur",
	"Raipur",
	"Kota",
	"Kālkāji Devi",
	"Bhayandar",
	"Ambattūr",
	"Salt Lake City",
	"Bhātpāra",
	"Kūkatpalli",
	"Darbhanga",
	"Dāsarhalli",
	"Muzaffarpur",
	"Oulgaret",
	"New Delhi",
	"Tiruvottiyūr",
	"Puducherry",
	"Byatarayanpur",
	"Pallāvaram",
	"Secunderābād",
	"Shimla",
	"Puri",
	"Shrīrāmpur",
	"Hugli",
	"Chandannagar",
	"Sultānpur Mazra",
	"Krishnanagar",
	"Bārākpur",
	"Bhālswa Jahangirpur",
	"Nāngloi Jāt",
	"Yelahanka",
	"Titāgarh",
	"Dam Dam",
	"Bānsbāria",
	"Madhavaram",
	"Baj Baj",
	"Nerkunram",
	"Kendrāparha",
	"Sijua",
	"Manali",
	"Chakapara",
	"Pāppākurichchi",
	"Herohalli",
	"Madipakkam",
	"Sabalpur",
	"Salua",
	"Balasore",
	"Jālhalli",
	"Chinnasekkadu",
	"Jethuli",
	"Nagtala",
	"Bāgalūr",
	"Pakri",
	"Hunasamaranhalli",
	"Hesarghatta",
	"Bommayapālaiyam",
	"Gundūr",
	"Punādih",
	"Harilādih",
	"Alāwalpur",
	"Mādnāikanhalli",
	"Kādiganahalli",
	"Mahuli",
	"Zeyādah Kot",
	"Arshakunti",
	"Hīrāpur",
	"Mirchi",
	"Sonudih",
	"Sondekoppa",
	"Babura",
	"Mādavar",
	"Kadabgeri",
	"Nanmangalam",
	"Taliganja",
	"Tarchha",
	"Belgharia",
	"Kammanhalli",
	"Sonnappanhalli",
	"Kedihāti",
	"Doddajīvanhalli",
	"Simli Murārpur",
	"Sonāwān",
	"Devanandapur",
	"Tribeni",
	"Huttanhalli",
	"Nathupur",
	"Bāli",
	"Vājarhalli",
	"Saino",
	"Shekhpura",
	"Cāchohalli",
	"Nārāyanpur Kola",
	"Gyan Chak",
	"Kasgatpur",
	"Kitanelli",
	"Harchandi",
	"Santoshpur",
	"Bendravādi",
	"Kodagihalli",
	"Harna Buzurg",
	"Mailanhalli",
	"Sultānpur",
];

const AddressForm = () => {
	const [address, setAddress] = useState({
		streetAddress: "",
		city: "",
		state: "",
		zipCode: "",
	});

	const handleChange = (e) => {
		setAddress({ ...address, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:3001/api/address",
				address
			);
			console.log("Address added:", response.data);
			alert("Address Added!")
			// Clear the form fields after successful submission
			setAddress({
				streetAddress: "",
				city: "",
				state: "",
				zipCode: ""
			});
		} catch (error) {
			console.error("Error adding address:", error);
		}
	};
	
	const handleAlert = () => {
		alert("Form Submitted");
	};
	

	const navigate = useNavigate();

	const handleList = () => {
		navigate("/addresslist");
	};

	return (
		<div className="form-main">
			<h1>Address Updater App</h1>
			<form className="address-form" onSubmit={handleSubmit}>
				<label>
					Street Address
					<input
						type="text"
						name="streetAddress"
						value={address.streetAddress}
						placeholder="Enter your Street Address"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					City
					<select
						id="city"
						name="city"
						value={address.city}
						onChange={handleChange}
						required
					>
						<option value="">Select City</option>
						{cities.map((city, index) => (
							<option key={index} value={city}>
								{city}
							</option>
						))}
					</select>
				</label>
				<label>
					State
					<select
						id="state"
						name="state"
						value={address.state}
						onChange={handleChange}
						required
					>
						<option value="">Select State</option>
						{states.map((state, index) => (
							<option key={index} value={state}>
								{state}
							</option>
						))}
					</select>
				</label>
				<label>
					Zip Code
					<input
						type="number"
						id="zip"
						name="zipCode"
						value={address.zipCode}
						pattern="[0-9]*"
						placeholder="Enter your area-code"
						onChange={handleChange}
						required
					/>
				</label>
				<button className="form-button" type="submit" >
					Submit
				</button>
			</form>
			<div className="address-list-red">
				Check all the addresses here{" "}
				<button className="address-list-button" onClick={handleList}>
					Address List
					<CiBoxList className="icons" />
				</button>
			</div>
		</div>
	);
};

export default AddressForm;
