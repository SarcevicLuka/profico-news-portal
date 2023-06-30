import "../assets/styles/header.scss";

function Header() {
	return (
		<div className="header-container">
			<div className="messages">
				<span className="messages__action">
					Make MyNews your homepage
				</span>
				<span className="messages__desc">
					Every day discover what's trending on the internet
				</span>
			</div>
			<div className="actions">
				<button className="actions__get">GET</button>
				<button className="actions__cancel">No, thanks</button>
			</div>
		</div>
	);
}

export default Header;
