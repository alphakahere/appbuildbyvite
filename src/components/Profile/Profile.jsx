// const avatarStyle = {
// 	borderRadius: 10,
// 	margin: "auto",
// };

// const person = {
// 	name: "Alpha",
// 	age: 25,
// 	account: "1 milliard dollars",
// };

import "./Profile.css";

const Profile = ({
	name,
	role,
	url,
	note = 6,
	componentAge,
	isShowNote = true,
}) => {
	// const { name, role , url, note} = props;
	// console.log(person.name);

	// function getFirstLetter(param){
	//     return param.charAt(0);
	// }

	return (
		<div
			style={{
				border: "1px solid #000",
				padding: 10,
				borderRadius: 10,
			}}
		>
			<img
				src={url}
				className="img-avatar"
				alt="photo de profil"
				// style={avatarStyle}
			/>
			<h5>{name}</h5>
			<p>{role}</p>
			{componentAge}
			<p>
				{isShowNote ? <>Note: {note}</> : <>This is the boss</>}
			</p>
		</div>
	);
};

export default Profile;
