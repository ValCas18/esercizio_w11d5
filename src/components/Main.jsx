import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { Col, Row } from "react-bootstrap";
import Albums from "./Albums";

const Main = () => {
	return (
		<>
			<Col md={9} className="mainPage">
				<Row>
					<Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
						<Link to="/">TRENDING</Link>
						<Link to="/">PODCAST</Link>
						<Link to="/">MOODS AND GENRES</Link>
						<Link to="/">NEW RELEASES</Link>
						<Link to="/">DISCOVER</Link>
					</Col>
				</Row>
				<Row>
					<Col xs={10}>
						<div id="searchResults">
							<h2>Search Results</h2>
							<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={10}>
						<div id="pop">
							<h2>Rock Classics</h2>
							<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
								{" "}
								{/* <Albums> */}
							</Row>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={10}>
						<div id="pop">
							<h2>Pop Culture</h2>
							<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
								{" "}
								{/* <Albums> */}
							</Row>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={10}>
						<div id="pop">
							<h2>Pop Culture</h2>
							<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
								{" "}
								{/* <Albums> */}
							</Row>
						</div>
					</Col>
				</Row>
			</Col>
			<SideBar />
		</>
	);
};

export default Main;
