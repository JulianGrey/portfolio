import FooterColumn from '../FooterColumn/FooterColumn';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <FooterColumn heading='Julian Grey'>
        <li><a href="http://github.com/JulianGrey" target="_blank">GitHub</a></li>
        <li><a href="http://www.linkedin.com/in/julianrgrey" target="_blank">LinkedIn</a></li>
        <li><a href="mailto:contact@juliangrey.dev">contact@juliangrey.dev</a></li>
      </FooterColumn>
    </footer>
  );
};
