import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, setPlayer } from "../redux/action";

const Albums = ({ artist }) => {
	const albums = useSelector((state) => state.album.results);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAlbum(artist));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{albums
				.filter((album, index) => index < 4)
				.map((album) => (
					<Col
						className="col text-center mt-3"
						key={album.id}
						style={{ cursor: "pointer" }}
						onClick={() => dispatch(setPlayer(album))}
					>
						<img className="img-fluid" src={album.album.cover_medium} alt="track" />
						<p>
							Track: {album.title.length < 16 ? album.title : album.title.substring(0, 16) + "..."}
							<br />
							Artist: {album.artist.name}
						</p>
					</Col>
				))}
		</>
	);
};

export default Albums;
