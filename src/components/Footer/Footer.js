import './_footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import facebook from '../img/face.svg';
import twitter from '../img/twitter.svg';
import youtube from '../img/youtube.svg';
const Footer = () => {
	let footerFirstSec = ['Why Invest', 'Industries', 'Programs & Incentives', 'Locations', 'News', 'About'];
	let contactUs = ['Contact Us', 'mail@linkdevelopment.com', '+02-12-14490877', ' Please drop an email or call us our representative', 'will connect with you soon.'];

	return (
		// start footer
		<div className="footer">
			<div className="container-fluid bg-green ">
				<div className="row">
					<div className="col-lg-2 border-right"></div>
					<div className="col-lg-10 footer-contain">
						<div className="container-fluid">
							<div className="row">
								<div className="col-lg-3">
									<ul className="footer-pages">
										{footerFirstSec.map((desc) => (
											<li>{desc}</li>
										))}
									</ul>
								</div>
								<div className="col-lg-5">
									<ul className="contuct-us">
										{contactUs.map((info) => (
											<li>{info}</li>
										))}
									</ul>
									<div className="social-media">
										<span>Follow us</span>
										<div>
											<img src={facebook} />
											<img src={twitter} />
											<img src={youtube} />
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="subscribe">
										<p>Subscribe to our newsletter</p>
										<input type="email" placeholder="E-mail" />
										<button>send</button>
									</div>

									<div className="copyright">
										<p>© 2022 Linkdevelopment Sub From A15</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		// end footer
	);
};

export default Footer;
