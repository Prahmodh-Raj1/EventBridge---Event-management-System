import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Building Connections through events</MainHeading>
				<HeroText>
					Connecting the bridge between Event Organizers and Participants
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Register</Button>
					</Link>
					<Link to="login">
                        <Button>Login</Button>
                    </Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;