import React from 'react';
import '../Scss/_footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer className='footer' >
            <div className="container">
                <div className="footer__socials">
                    <a href='/' className="footer__social"><FacebookIcon/></a>
                    <a href='/'className="footer__social"><InstagramIcon/></a>
                    <a href='/'className="footer__social"><TwitterIcon/></a>
                    <a href='/'className="footer__social"><YouTubeIcon/></a>
                </div>
                <ul className='footer__links'>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>Lien Footer</a>
                    </li>

                </ul>
                <div className='footer--copy'> netflix clone - tout droits reservés</div>
            </div>
        </footer >
    );
};

export default Footer;