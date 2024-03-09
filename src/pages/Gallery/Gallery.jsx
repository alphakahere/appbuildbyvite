import Profile from "../../components/Profile/Profile";

const Gallery = () => {
	return (
		<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
			<Profile
				name="Ibrahima Bayo"
				role="Développeur web et mobile"
				url="https://i.pravatar.cc/300?img=5"
				// note={8}
				componentAge={<strong>Age: {18}</strong>}
			/>
			<Profile
				name="Pathe PK"
				role="Artist"
				url="https://i.pravatar.cc/300?img=9"
				// note={9}
			/>
			<Profile
				name="Bangaly Camara"
				role="Footballeur"
				url="https://i.pravatar.cc/300?img=4"
				note={7}
			/>
			<Profile
				name="Ahmad Diallo"
				role="Ceo"
				url="https://i.pravatar.cc/300?img=2"
				note={8}
        isShowNote={false}
			/>
		</div>
	);
};

export default Gallery;
