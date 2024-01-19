import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import shuffle from "../media/playerbuttons/shuffle.png";
import prev from "../media/playerbuttons/prev.png";
import play from "../media/playerbuttons/play.png";
import next from "../media/playerbuttons/next.png";
import repeat from "../media/playerbuttons/repeat.png";

const Player = () => {
	return (
		<Container fluid className="fixed-bottom bg-container pt-1">
			<Row className="h-100">
				<Col lg={10} className="offset-lg-2">
					<Row className="h-100 flex-column justify-content-center align-items-center">
						<Col xs={6} md={4} className="playerControls">
							<div className="d-flex">
								<Link href="#">
									<img src={shuffle} alt="shuffle" />
								</Link>
								<Link href="#">
									<img src={prev} alt="prev" />
								</Link>
								<Link href="#">
									<img src={play} alt="play" />
								</Link>
								<Link href="#">
									<img src={next} alt="next" />
								</Link>
								<Link href="#">
									<img src={repeat} alt="repeat" />
								</Link>
							</div>
							<div className="progress mt-3">
								<div role="progressbar"></div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default Player;
