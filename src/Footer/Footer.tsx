import './Footer.scss';

function Footer() {
	const currentYear = 2021;
  return (
	<footer className="footer py-3">
		<div className="container-lg text-end">&copy; {currentYear}</div>
	</footer>
  );
}

export default Footer;
