import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Box, Text, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"team"} />
		<Helmet>
			<title>
				Team | Enchanted Realms
			</title>
			<meta name={"description"} content={"Discover the magic of Enchanted Realms: your ultimate Minecraft adventure awaits! Explore immersive landscapes, forge friendships, and unleash your creativity. Join us today and experience the enchantment firsthand!"} />
			<meta property={"og:title"} content={"Team | Enchanted Realms"} />
			<meta property={"og:description"} content={"Discover the magic of Enchanted Realms: your ultimate Minecraft adventure awaits! Explore immersive landscapes, forge friendships, and unleash your creativity. Join us today and experience the enchantment firsthand!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Captura_de_pantalla_2024-05-09_a_las_20.04.08.png?v=2024-05-10T09:48:51.459Z"} />
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
			<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
				<Image
					src="https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13:16:09.978Z"
					width="75px"
					z-index="3"
					sm-width="45px"
					srcSet="https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Link>
			<Components.BurgerMenu
				md-align-items="center"
				md-justify-content="flex-end"
				md-display="flex"
				sm-background="#000000"
				justify-self="auto"
				align-self="center"
			>
				<Override
					slot="menu-open"
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					md-top={0}
				/>
				<Override slot="icon-open" md-right="18px" md-position="fixed" md-top="18px" />
				<Override
					slot="menu"
					lg-transition="transform 400ms ease 0s"
					md-top={0}
					align-items="center"
					md-height="100%"
					padding="0px 0 0px 0"
					justify-content="center"
					lg-transform="translateY(0px) translateX(0px)"
					md-position="fixed"
					display="flex"
					md-left={0}
					md-width="100%"
					sm-background="#000000"
					sm-color="#ffffff"
				>
					<Override
						slot="item"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
						border-color="#ffffff"
						background="#000000"
						color="#ffffff"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override
						slot="item-index"
						lg-display="none"
						display="none"
						sm-color="#ffffff"
						sm-background="#000000"
						color="#ffffff"
						background="#000000"
					/>
					<Override
						slot="link"
						color="--dark"
						letter-spacing="0.5px"
						md-transition="opacity .15s ease 0s"
						font="--base"
						text-transform="initial"
						md-font="16px/24px sans-serif"
						transition="opacity .15s ease 0s"
						text-decoration-line="initial"
						opacity=".5"
						md-color="--dark"
						md-opacity=".5"
						hover-opacity="1"
						md-hover-opacity="1"
						md-active-opacity="1"
						sm-color="#ffffff"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
					<Override slot="link-index" color="#ffffff" background="#000000" />
					<Override
						slot="item-about"
						color="#ffffff"
						background="#000000"
						border-width="2px"
						border-style="solid"
						margin="0px 15px 0px 0px"
						sm-margin="0px 15px 15px 16px"
						sm-width="120px"
					/>
					<Override slot="link-about" color="#ffffff" background="#000000" sm-color="#ffffff" />
					<Override
						slot="item-team"
						border-width="2px"
						border-style="solid"
						margin="0px 0px 0px 15px"
						sm-margin="0px 10px 10px 15px"
						sm-width="120px"
					/>
					<Override slot="link-team" color="#ffffff" background="#000000" />
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
			</Components.BurgerMenu>
		</Section>
		<Section
			quarkly-title="Hero"
			padding="25px 0 75px 0"
			lg-padding="25px 0 25px 0"
			justify-content="center"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				display="flex"
				align-items="center"
				justify-content="center"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/IMG_0101.jpeg?v=2024-05-11T10:30:54.442Z) 0% 0%/cover"
				md-min-height="360px"
				sm-min-height="180px"
				width="100%"
				min-height="480px"
			/>
		</Section>
		<Section
			border-width="1px 0px 1px 0px"
			justify-content="center"
			sm-padding="0px 0 0px 0"
			quarkly-title="About"
			padding="90px 0px 100px 0px"
			border-style="solid"
			box-sizing="border-box"
			background="--color-dark"
			border-color="--color-lightD2"
			lg-padding="50px 0px 50px 0px"
		>
			<Override
				slot="SectionContent"
				sm-padding="24px 0px 24px 0px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
				margin="0px 32px 0px 32px"
			/>
			<Text
				color="--light"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
			>
				United by Passion, Dedicated to Excellence: The Trio Crafting the Ultimate Minecraft Experience
			</Text>
		</Section>
		<Section
			justify-content="center"
			quarkly-title="Prismarine"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				width="100%"
			/>
			<Box
				sm-min-height="280px"
				min-height="480px"
				padding="36px 24px 36px 24px"
				justify-content="center"
				flex-direction="column"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09:11:32.307Z) center center/cover no-repeat"
				display="flex"
				align-items="center"
				lg-min-height="420px"
				md-min-height="360px"
				sm-background="--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2013.09.17.png?v=2024-05-11T11:09:33.496Z) center center/cover no-repeat"
			>
				<Text
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
					color="--light"
					max-width="720px"
					margin="16px 0px 170px 0px"
					sm-margin="16px 0px 120px 0px"
				>
					Made by
				</Text>
				<Text
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--green"
					md-font="--headline3"
					margin="200px 0px 16px 0px"
					sm-margin="120px 0px 16px 0px"
				>
					<Em>
						Prismarine Foundation
					</Em>
				</Text>
			</Box>
		</Section>
		<Section
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			padding="80px 0px 60px 0px"
			quarkly-title="Team"
			box-sizing="border-box"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				background="#000000"
			/>
			<Text
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--light"
				text-transform="uppercase"
				text-align="center"
				font="--base"
				opacity="0.5"
				background="#000000"
			>
				Meet Us
			</Text>
			<Text
				color="--light"
				md-margin="0px 0px 32px 0px"
				font="--headline2"
				letter-spacing="1px"
				width="100%"
				lg-margin="0px 0px 42px 0px"
				md-font="--headline3"
				margin="0px 0px 72px 0px"
				text-align="center"
			>
				...Here we Are...
			</Text>
			<Box
				sm-grid-template-columns="1fr"
				min-width="10px"
				display="grid"
				width="100%"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
			>
				<Box display="flex" flex-direction="column" align-items="flex-start">
					<Box
						padding="0px 0px 121% 0px"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						background="--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2009.42.34.png?v=2024-05-11T07:43:00.355Z) center center/cover no-repeat"
						width="100%"
						quarkly-title="Image"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%" color="#ffffff">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							lg-margin="12px 0px 8px 0px"
							md-margin="8px 0px 2px 0px"
							color="--light"
							quarkly-title="Name"
							sm-margin="0px 0px 4px 0px"
							md-font="--lead"
						>
							@Pelusinni05
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--light"
							quarkly-title="Position"
							font="--base"
						>
							Founder & Lead Server Technician
						</Text>
					</Box>
				</Box>
				<Box flex-direction="column" align-items="flex-start" display="flex">
					<Box
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						background="--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2010.36.33.png?v=2024-05-11T08:36:53.338Z) center center/cover no-repeat"
					/>
					<Box sm-width="100%" sm-margin="12px 0px 0px 0px">
						<Text
							margin="24px 0px 8px 0px"
							quarkly-title="Name"
							md-font="--lead"
							text-align="left"
							font="--headline3"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							md-margin="8px 0px 2px 0px"
							color="--light"
						>
							@Presidente
						</Text>
						<Text
							color="--light"
							quarkly-title="Position"
							text-align="left"
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
						>
							Co-Founder & Lead Administrador
						</Text>
					</Box>
				</Box>
				<Box align-items="flex-start" display="flex" flex-direction="column">
					<Box
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						background="--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2009.42.21.png?v=2024-05-11T07:43:13.941Z) center center/cover no-repeat"
					/>
					<Box sm-width="100%" sm-margin="12px 0px 0px 0px">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							quarkly-title="Name"
							md-font="--lead"
							color="--light"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							md-margin="8px 0px 2px 0px"
						>
							@Dr.Helix
						</Text>
						<Text
							opacity="0.6"
							color="--light"
							quarkly-title="Position"
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
						>
							Co-Founder & Lead Server Modding{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			justify-content="center"
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				width="100%"
			/>
			<Box
				sm-min-height="280px"
				min-height="480px"
				padding="36px 24px 36px 24px"
				justify-content="center"
				flex-direction="column"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/wallhaven-6qx916.png?v=2024-05-11T07:36:19.514Z) center center/cover no-repeat"
				display="flex"
				align-items="center"
				lg-min-height="420px"
				md-min-height="360px"
			>
				<Text
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--indigo"
					md-font="--headline3"
					margin="10px 0px 15px 0px"
				>
					Wanna talk with us?
				</Text>
				<Text
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
					color="--light"
					max-width="720px"
					margin="0px 0px 28px 0px"
				>
					...Joining our Discord server is a good start...
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					padding="8px 24px 08px 24px"
					color="#ffffff"
					background="#000000"
					border-width="2px"
					border-style="dashed"
					border-color="#aa00ff"
				>
					https://discord.gg/e4v9UAyqHB
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