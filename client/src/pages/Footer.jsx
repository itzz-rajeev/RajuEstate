import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 30px 0;
  box-shadow: 0 -2px 5px rgba(3, 3, 3, 0.3);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 0 0 33.33%;
  padding: 0 15px;
`;

const Heading = styled.h4`
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #666;
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Heading>About Us</Heading>
          <Paragraph>
          "Raju Estate: Your premier real estate partner for buying, selling, and leasing properties. Our expert team provides seamless guidance to achieve your goals, making transactions gratifying and fulfilling."
          </Paragraph>
        </Column>
        <Column>
          <Heading>Quick Links</Heading>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">Properties</Link></li>
            <li><Link href="#">Rentals</Link></li>
            <li><Link href="/">Sales</Link></li>
          </ul>
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <Paragraph>
            Rajiv Gandhi University of Knowledge Technologies-Basar, Nirmal,Telangana-504107<br />
            Phone: +91 7730094057<br />
            Email: rajuestate@gmail.com
          </Paragraph>
        </Column>
      </FooterContent>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Paragraph>&copy; 2025 Raju Estate Company. All rights reserved.</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
