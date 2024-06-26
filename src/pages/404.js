import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Enchanted Realms
			</title>
			<meta name={"description"} content={"Discover the magic of Enchanted Realms: your ultimate Minecraft adventure awaits! Explore immersive landscapes, forge friendships, and unleash your creativity. Join us today and experience the enchantment firsthand!"} />
			<meta property={"og:title"} content={"Enchanted Realms"} />
			<meta property={"og:description"} content={"Discover the magic of Enchanted Realms: your ultimate Minecraft adventure awaits! Explore immersive landscapes, forge friendships, and unleash your creativity. Join us today and experience the enchantment firsthand!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/7bca460786c52b85bbd4b94017bc565a.png?v=2024-05-10T11:23:56.517Z"} />
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
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
			/>
			<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
				<Image
					src="https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09:11:32.307Z"
					width="120px"
					z-index="3"
					srcSet="https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09%3A11%3A32.307Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09%3A11%3A32.307Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09%3A11%3A32.307Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09%3A11%3A32.307Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09%3A11%3A32.307Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09%3A11%3A32.307Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/Screenshot%202024-05-11%20at%2011.08.19.png?v=2024-05-11T09%3A11%3A32.307Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="menu"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-top={0}
					padding="0px 0 0px 0"
					align-items="center"
					lg-transform="translateY(0px) translateX(0px)"
					md-width="100%"
					md-height="100%"
					justify-content="center"
					md-left={0}
				>
					<Override
						slot="item"
						text-transform="uppercase"
						text-align="center"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override
						slot="item-index"
						lg-display="none"
						display="none"
						color="#ffffff"
						background="#000000"
					/>
					<Override
						slot="link"
						transition="opacity .15s ease 0s"
						hover-opacity="1"
						md-font="16px/24px sans-serif"
						color="--dark"
						font="--base"
						text-transform="initial"
						md-transition="opacity .15s ease 0s"
						md-active-opacity="1"
						text-decoration-line="initial"
						letter-spacing="0.5px"
						md-hover-opacity="1"
						opacity=".5"
						md-color="--dark"
						md-opacity=".5"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
					<Override slot="link-index" color="--dark" />
					<Override
						slot="item-about"
						color="#ffffff"
						background="#000000"
						border-width="2px"
						border-style="solid"
						margin="0px 15px 0px 0px"
					/>
					<Override slot="link-about" color="#ffffff" background="#000000" />
					<Override
						slot="item-team"
						color="#ffffff"
						background="#000000"
						border-width="2px"
						border-style="solid"
						margin="0px 0px 0px 15px"
					/>
					<Override slot="link-team" border-color="#ffffff" background="#000000" color="#ffffff" />
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
				/>
				<Override
					slot="menu-open"
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					md-top={0}
					md-bottom={0}
				/>
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
			</Components.BurgerMenu>
		</Section>
		<Section lg-padding="25px 0 25px 0" quarkly-title="Hero" padding="25px 0 75px 0" background="#000000">
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
						md-height="360px"
						flex-direction="column"
					/>
					{"        "}
					<Text
						text-align="center"
						padding="0px 16px 0px 16px"
						color="--light"
						font="--headline1"
						margin="16px 0px 0px 0px"
						sm-text-align="center"
						sm-width="80%"
					>
						404
					</Text>
					<Text
						margin="10px 0px 35px 0px"
						sm-text-align="center"
						sm-width="80%"
						opacity="0.7"
						text-align="center"
						padding="0px 16px 0px 16px"
						font="--lead"
						color="--light"
					>
						This is not the page you're looking for. Move along, move along.
					</Text>
					<Link
						href="/"
						text-decoration-line="initial"
						color="--darkL2"
						background="--color-light"
						padding="12px 24px 12px 24px"
						letter-spacing="0.5px"
						hover-transform="translateY(-4px)"
						font="--base"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Home Page
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
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