import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box, Icon, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
import { DiJava, DiUbuntu, DiWindows, DiGithubBadge } from "react-icons/di";
import { FaDiscord } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/32px.png?v=2024-05-10T09:37:16.885Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/152px.png?v=2024-05-10T09:37:54.804Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/152px.png?v=2024-05-10T09:37:54.804Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/152px.png?v=2024-05-10T09:37:54.804Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/152px.png?v=2024-05-10T09:37:54.804Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/270px.png?v=2024-05-10T09:38:23.065Z"} />
		</Helmet>
		<Section
			padding="16px 0 16px 0"
			quarkly-title="Header"
			align-items="center"
			justify-content="center"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
			/>
			<Link transition="opacity 200ms ease" quarkly-title="Link" href="/" position="relative">
				<Image
					src="https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10:11:23.173Z"
					width="120px"
					z-index="3"
					srcSet="https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10%3A11%3A23.173Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10%3A11%3A23.173Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10%3A11%3A23.173Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10%3A11%3A23.173Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10%3A11%3A23.173Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10%3A11%3A23.173Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10%3A11%3A23.173Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
				<Override
					slot="menu"
					md-top={0}
					md-width="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					lg-transform="translateY(0px) translateX(0px)"
					md-height="100%"
					padding="0px 0 0px 0"
					align-items="center"
					position="sticky"
				>
					<Override
						slot="item"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
						padding="8px 20px 8px 20px"
						color="#fcfcfc"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						md-hover-opacity="1"
						md-active-opacity="1"
						md-color="--dark"
						font="--base"
						text-transform="initial"
						md-font="16px/24px sans-serif"
						text-decoration-line="initial"
						color="--dark"
						transition="opacity .15s ease 0s"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-transition="opacity .15s ease 0s"
						opacity=".5"
						hover-opacity="1"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
					<Override slot="link-about" color="--light" />
					<Override
						slot="item-about"
						color="#fcfcfc"
						border-width="2px"
						border-style="solid"
						margin="0px 15px 0px 0px"
					/>
					<Override
						slot="item-team"
						color="#fcfcfc"
						background="#000000"
						border-width="2px"
						border-style="solid"
						margin="0px 10px 0px 15px"
					/>
					<Override slot="link-team" color="--light" />
					<Override
						slot="item-contact"
						color="#fcfcfc"
						background="#000000"
						border-width="2px"
						border-style="solid"
						margin="0px 0px 0px 10px"
					/>
					<Override slot="link-contact" color="--light" />
					<Override slot="link-guide" color="--light">
						Guide
					</Override>
					<Override slot="item-guide" background="#000000" border-width="2px" border-style="solid" />
					<Override slot="link-index" sm-color="#ffffff" />
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
					sm-color="#ffffff"
				/>
				<Override
					slot="menu-open"
					md-justify-content="center"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
				/>
			</Components.BurgerMenu>
		</Section>
		<Section
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				width="100%"
				background="url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10:11:23.173Z) 0% 0%/contain no-repeat,#000000"
				height="620px"
				justify-content="center"
				sm-width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				overflow-x="visible"
				overflow-y="visible"
				flex-direction="column-reverse"
				display="grid"
				flex="0 1 auto"
				order="0"
				align-self="auto"
				sm-align-items="end"
				sm-justify-items="center"
				sm-background="url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-10%20at%2012.10.49.png?v=2024-05-10T10:11:23.173Z) 0% 0%/contain no-repeat"
			/>
			<Text
				font="--headline1"
				margin="350px 0px 0px 0px"
				sm-text-align="center"
				sm-width="100% border-box"
				lg-text-align="center"
				lg-font="--headline2"
				color="--light"
				lg-padding="0px 0px 75px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="350px 0px 100px 0px"
			>
				Enchant Your Way.
			</Text>
		</Section>
		<Section
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			id="mission"
			padding="90px 0px 100px 0px"
			quarkly-title="About"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			sm-padding="24px 0 24px 0"
			background="--color-dark"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				color="--light"
				lg-text-align="center"
			>
				Our Mission
			</Text>
			<Text
				letter-spacing="0.7px"
				color="--light"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="normal 500 28px/1.2 'AvenirNextCyrRegular', sans-serif"
				margin="0px 0px 0px 0px"
			>
				At Enchanted Realms, we strive to forge a vibrant community of adventurers and builders dedicated to crafting unforgettable experiences. Join us to explore boundless possibilities and create your own legend in our mystical world.
			</Text>
		</Section>
		<Section
			md-padding="25px 0px 25px 0px"
			justify-content="center"
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="2fr 3fr"
				grid-gap="64px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						md-font="--headline3"
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--light"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
					>
						Defeat...or Run!
					</Text>
					<Text
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--light"
						opacity="0.6"
						lg-text-align="left"
						text-align="left"
					>
						Embark on an epic journey through the realms of danger and excitement with Defeat... or Run! Starting with an easy-medium difficulty, brace yourself for thrilling challenges that will test your skills and courage. From facing menacing creatures to overcoming treacherous obstacles, every step of your adventure will push you to the limit. Are you ready to face the ultimate test of bravery?
					</Text>
				</Box>
				<Box
					height="0px"
					md-order="-1"
					width="100%"
					margin="0px 0px 0px 0px"
					lg-order="-1"
					padding="0px 0px 60% 0px"
					background="url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/IMG_0062.JPG?v=2024-05-10T10:47:22.832Z) 0% 0%/cover"
				/>
			</Box>
			<Box
				md-margin="44px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="3fr 2fr"
				grid-gap="64px"
				margin="96px 0px 0px 0px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				lg-margin="64px 0px 0px 0px"
			>
				<Box
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					width="100%"
					background="rgb(228, 232, 236) url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/2024-05-10%2012.31.07.jpg?v=2024-05-10T10:31:24.758Z) 50% 50% /110% auto no-repeat scroll padding-box"
				/>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					min-width="100px"
					min-height="100px"
				>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--light"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Your Kingdom. Your Rules.
					</Text>
					<Text
						opacity="0.6"
						sm-text-align="left"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--light"
					>
						Welcome to the heart of the realm, where tranquility reigns supreme in the main kingdom. But the choice is yours – will you uphold the peace or forge your own destiny? Build your own kingdom and become the hero or villain of the server. Shape the land, wield power, and leave your mark on history. Your kingdom, your rules – the fate of the realm lies in your hands.
					</Text>
				</Box>
			</Box>
			<Box
				md-margin="44px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="2fr 3fr"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				lg-margin="64px 0px 0px 0px"
				grid-gap="64px"
				margin="96px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--light"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-text-align="left"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Where We Work
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--light"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						At Where We Work, our passion for Minecraft knows no bounds. Based in Spain, we take pride in offering unparalleled support in both English and Spanish, ensuring a seamless experience for players worldwide. With servers located right here in Spain, enjoy proximity, reliability, and friendly assistance every step of the way. Join us and discover a world where adventure awaits around every corner.
						<br />
						<br />
						<br />
						<br />
					</Text>
				</Box>
				<Box
					lg-order="-1"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					md-order="-1"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/2024-05-10%2012.39.58.jpg?v=2024-05-10T10:40:16.230Z) center center/cover no-repeat"
				/>
			</Box>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			background="--color-dark"
			border-style="solid"
			box-sizing="border-box"
			justify-content="center"
			padding="90px 0px 100px 0px"
			border-color="--color-lightD2"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 30px 50px 30px"
			quarkly-title="FAQ"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 48px 0px 48px"
				md-margin="0px 16px 0px 16px"
				align-items="center"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				letter-spacing="1px"
				color="--light"
				opacity="0.6"
				text-align="center"
				lg-text-align="center"
			>
				We're here to help
			</Text>
			<Text
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--light"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
			>
				FAQ
			</Text>
			<Box
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box>
					<Text
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--light"
					>
						Is it Free?
					</Text>
					<Text
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
						lg-text-align="center"
					>
						Yes, Enchanted Realms is completely free to play! Dive into the enchanting world of Minecraft without any cost.
					</Text>
				</Box>
				<Box>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="center"
						md-text-align="left"
						font="--lead"
					>
						How can I play?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
					>
						You can play Enchanted Realms from anywhere with an internet connection. Simply connect to our servers and start your adventure! Please note that the speed of your connection may affect gameplay, so ensure you have a stable internet connection for the best experience. Enchanted Realms is compatible with Mac, Windows, and Linux operating systems. However, please note that our servers do not support consoles or mobile devices at this time.
					</Text>
				</Box>
				<Box>
					<Text
						color="--light"
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
					>
						How can I talk to people?
					</Text>
					<Text
						font="--base"
						color="--light"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Communication is key at Enchanted Realms! You can interact with other players through our Discord server, where you can join discussions, make friends, and stay updated on server events. Additionally, our servers feature enabled proximity chat, adding a touch of realism and immersion to your gameplay experience. We highly recommend using proximity chat for a more immersive adventure!
					</Text>
				</Box>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--light"
						text-align="center"
						md-text-align="left"
					>
						Can I do...?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
					>
						Before diving into any actions that may impact your gameplay experience, we encourage you to familiarize yourself with our rules and guidelines. These can be found on our website and Discord server. If you have any questions or concerns, don't hesitate to reach out to our moderators for assistance. Remember, following the rules ensures a fair and enjoyable experience for all players.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			quarkly-title="Customers"
			lg-padding="50px 0 50px 0"
			justify-content="center"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				width="100%"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				text-align="center"
				lg-text-align="center"
				sm-margin="0px 0px 48px 0px"
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--light"
			>
				...WE WORK WITH...
			</Text>
			<Box
				lg-grid-template-columns="repeat(6, 1fr)"
				sm-grid-template-columns="1fr"
				display="grid"
				width="100%"
				grid-gap="32px"
				grid-template-columns="repeat(5, 1fr)"
			>
				<Box
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
					lg-grid-column="1 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					color="#ffffff"
				>
					<Icon
						category="di"
						icon={DiJava}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						color="#ee3b3b"
					/>
					<Text
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
					>
						Java / Oracle
					</Text>
				</Box>
				<Box
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
					lg-grid-column="3 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
				>
					<Icon
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
						icon={DiUbuntu}
						margin="0px auto 0px auto"
						color="#ff7200"
					/>
					<Text
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						opacity="0.6"
						lg-text-align="center"
					>
						Ubuntu Server
					</Text>
				</Box>
				<Box
					lg-grid-column="5 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						sm-font="48px sans-serif"
						category="di"
						icon={DiWindows}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						color="#19aee3"
					/>
					<Text
						font="--base"
						color="--light"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Windows
					</Text>
				</Box>
				<Box
					lg-grid-column="2 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						icon={FaDiscord}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="fa"
						color="#7a00ff"
					/>
					<Text
						color="--light"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
					>
						Discord
					</Text>
				</Box>
				<Box
					lg-grid-column="4 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
						icon={DiGithubBadge}
						margin="0px auto 0px auto"
						size="84px"
						color="#a800ff"
					/>
					<Text
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
					>
						Github
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				background="rgba(0, 0, 0, 0)"
				align-self="auto"
			/>
			<Box
				justify-content="center"
				flex-direction="column"
				md-min-height="360px"
				min-height="480px"
				padding="36px 24px 36px 24px"
				align-items="center"
				sm-min-height="280px"
				display="flex"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/52BD9432-842A-42AD-B498-988926A5D8CB_1_105_c.jpeg?v=2024-05-10T09:50:48.471Z) center center/cover no-repeat"
				lg-min-height="420px"
			>
				<Text
					color="--light"
					md-font="--headline3"
					margin="10px 0px 275px 0px"
					font="--headline1"
					text-align="center"
					quarkly-title="Title"
				>
					<Em>
						Don't wait. Just Join.
					</Em>
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});