import './Footer.scss';

function Footer() {
	const today = new Date();
	const currentYear = today.getFullYear();
  return (
	<footer className="footer py-3">
		<div className="container-lg text-end">&copy; {currentYear}</div>
	</footer>
  );
}

export default Footer;
