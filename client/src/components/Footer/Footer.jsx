import { VscGithubInverted, VscTwitter } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text">Created by Jordi Ollé</p>
            <div className="footer__links">
                <a href="https://github.com/jolle11" className="footer__link">
                    <VscGithubInverted />
                </a>
                <a
                    href="https://www.linkedin.com/in/jordi-oll%C3%A9-ballest%C3%A9-8398b181/"
                    className="footer__link footer__link--linkedin"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://jordi0lle.hashnode.dev/"
                    className="footer__link footer__link--hashnode"
                >
                    <SiHashnode />
                </a>
                <a
                    href="https://twitter.com/jordi0lle"
                    className="footer__link footer__link--twitter"
                >
                    <VscTwitter />
                </a>
                <a
                    href="https://www.instagram.com/jordi0lle/"
                    className="footer__link footer__link--instagram"
                >
                    <AiFillInstagram />
                </a>
            </div>
        </div>
    );
};

export default Footer;
