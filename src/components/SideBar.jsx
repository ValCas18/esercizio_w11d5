import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import logo from "../media/logo/logo.png";

const SideBar = () => {
	return (
		<Container fluid>
			<Row>
				<Col xs={2}>
					<nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
						<Container className="flex-column align-items-start">
							<Link className="navbar-brand" href="index.html">
								<img src={logo} alt="Spotify Logo" width="140" height="40" />
							</Link>
							<Button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="/navbarNavAltMarkup"
								aria-controls="navbarNavAltMarkup"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</Button>
							<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
								<div className="navbar-nav">
									<ul>
										<li>
											<Link className="nav-item nav-link d-flex align-items-center" href="/">
												<HouseDoorFill style={{ width: "24px", height: "36px" }} />
												&nbsp; Home
											</Link>
										</li>
										<li>
											<Link className="nav-item nav-link d-flex align-items-center" href="/">
												<BookFill className="bi bi-book-fill" />
												&nbsp; Your Library
											</Link>
										</li>
										<li>
											<form className="input-group mt-3" onsubmit="search(event)">
												<input
													type="text"
													className="form-control"
													id="searchField"
													placeholder="Search"
													aria-label="Search"
													aria-describedby="basic-addon2"
												/>
												<div className="input-group-append">
													<Button className="btn btn-outline-secondary bg-black btn-sm h-100" type="submit">
														GO
													</Button>
												</div>
											</form>
										</li>
									</ul>
								</div>
							</div>
						</Container>
						<div className="nav-btn">
							<Button className="btn signup-btn" type="button">
								Sign Up
							</Button>
							<Button className="btn login-btn" type="button">
								Login
							</Button>
							<Link href="/">Cookie Policy</Link> |<Link href="/"> Privacy</Link>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
export default SideBar;
