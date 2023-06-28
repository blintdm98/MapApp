import React from 'react';
import { FooterSection, FooterElements, FooterContent, FooterTitle, FooterItem } from './FooterStyles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterElements>
		<FooterItem>
			<FooterTitle>e-mail:</FooterTitle>
			<FooterContent>blintdm98@gmail.com</FooterContent>
		</FooterItem>
		<FooterItem>
			<FooterTitle>Tel:.</FooterTitle>
			<FooterContent>+40745148242</FooterContent>
		</FooterItem>
	  </FooterElements>
    </FooterSection>
  );
};

export default Footer;