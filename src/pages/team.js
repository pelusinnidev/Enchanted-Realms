import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"team"} />
		<Helmet>
			<title>
				Team | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Team | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
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
				<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-align-items="center" md-justify-content="flex-end" md-display="flex">
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
				>
					<Override
						slot="item"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
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
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
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
			</Components.BurgerMenu>
			<Button
				padding="8px 18px 8px 18px"
				font="--base"
				letter-spacing="0.5px"
				background="--color-primary"
				hover-transform="translateY(-4px)"
				z-index="5"
				md-display="none"
				white-space="nowrap"
				border-radius="0px"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				justify-self="end"
			>
				Contact Us
			</Button>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
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
				background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
				md-min-height="360px"
				sm-min-height="180px"
				width="100%"
				min-height="480px"
			>
				<Text
					font="--headline1"
					align-items="center"
					justify-content="center"
					quarkly-title="Title"
					sm-text-align="center"
					md-font="--headline2"
					lg-font="--headline2"
					margin="0px 0px 0px 0px"
					display="flex"
					color="--light"
					sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-align="center"
				>
					Team.
				</Text>
			</Box>
		</Section>
		<Section
			border-width="1px 0px 1px 0px"
			justify-content="center"
			sm-padding="0px 0 0px 0"
			quarkly-title="About"
			padding="90px 0px 100px 0px"
			border-style="solid"
			box-sizing="border-box"
			background="--color-lightD1"
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
				font="--base"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				lg-text-align="center"
				quarkly-title="Title"
				text-align="center"
				opacity="0.6"
				lg-margin="0px 0px 6px 0px"
				text-transform="uppercase"
			>
				Who we are
			</Text>
			<Text
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
			>
				We’re a group of creatives who've built a business to make the world a better place.
			</Text>
		</Section>
		<Section
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			padding="80px 0px 60px 0px"
			quarkly-title="Team"
			box-sizing="border-box"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				text-transform="uppercase"
				text-align="center"
				font="--base"
				opacity="0.5"
			>
				Meet Us
			</Text>
			<Text
				color="--dark"
				md-margin="0px 0px 32px 0px"
				font="--headline2"
				letter-spacing="1px"
				width="100%"
				lg-margin="0px 0px 42px 0px"
				md-font="--headline3"
				margin="0px 0px 72px 0px"
				text-align="center"
			>
				Our World-Class Team
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
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							lg-margin="12px 0px 8px 0px"
							md-margin="8px 0px 2px 0px"
							color="--dark"
							quarkly-title="Name"
							sm-margin="0px 0px 4px 0px"
							md-font="--lead"
						>
							Nathan K. Joe
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							font="--base"
						>
							Founder
						</Text>
					</Box>
				</Box>
				<Box align-items="flex-start" display="flex" flex-direction="column">
					<Box
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
					/>
					<Box sm-width="100%" sm-margin="12px 0px 0px 0px">
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							quarkly-title="Name"
							md-font="--lead"
							color="--dark"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							md-margin="8px 0px 2px 0px"
						>
							Claire R. Peery
						</Text>
						<Text
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
						>
							Lead Designer
						</Text>
					</Box>
				</Box>
				<Box flex-direction="column" align-items="flex-start" display="flex">
					<Box
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
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
							color="--dark"
						>
							David R. Lema
						</Text>
						<Text
							color="--dark"
							quarkly-title="Position"
							text-align="left"
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
						>
							Developer
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start">
					<Box
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding-bottom="(4 / 3) * 100%"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/110% no-repeat"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							color="--dark"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							quarkly-title="Name"
							md-margin="8px 0px 2px 0px"
							md-font="--lead"
						>
							Janet E. Morey
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							HR
						</Text>
					</Box>
				</Box>
				<Box align-items="flex-start" display="flex" flex-direction="column">
					<Box
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						padding-bottom="(4 / 3) * 100%"
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						width="100%"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							md-margin="8px 0px 2px 0px"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							quarkly-title="Name"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							md-font="--lead"
							font="--headline3"
						>
							Harry S. Lyons
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							CEO
						</Text>
					</Box>
				</Box>
				<Box flex-direction="column" align-items="flex-start" display="flex">
					<Box
						padding-bottom="(4 / 3) * 100%"
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					<Box sm-margin="12px 0px 0px 0px" sm-width="100%">
						<Text
							margin="24px 0px 8px 0px"
							md-margin="8px 0px 2px 0px"
							md-font="--lead"
							font="--headline3"
							color="--dark"
							quarkly-title="Name"
							sm-margin="0px 0px 4px 0px"
							lg-margin="12px 0px 8px 0px"
							text-align="left"
						>
							Sherri J. Young
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							CTO
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0px 60px 0px"
			quarkly-title="About"
			background="--color-lightD1"
			border-style="solid"
			border-color="--color-lightD2"
			box-sizing="border-box"
			sm-padding="50px 0 50px 0"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="stretch"
			/>
			<Box
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="3fr 1fr 1fr 1fr 1fr"
				xl-grid-template-columns="2fr 1fr 1fr 1fr 1fr"
				md-grid-template-columns="repeat(4, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					sm-grid-column="auto / auto"
					sm-flex-direction="row"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					md-grid-column="1 / span 4"
					md-align-items="flex-start"
				>
					<Text
						lg-font="--headline2"
						sm-font="--headline2"
						sm-margin="0px 12px 0px 0px"
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--primary"
					>
						51
					</Text>
					<Text
						color="--primary"
						text-align="left"
						sm-font="--lead"
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
					>
						Total employees
					</Text>
				</Box>
				<Box
					flex-direction="column"
					align-items="flex-end"
					md-align-items="flex-start"
					sm-flex-direction="row"
					sm-align-items="center"
					display="flex"
				>
					<Text
						lg-text-align="center"
						text-align="left"
						lg-font="--headline2"
						sm-font="--headline2"
						sm-margin="0px 12px 0px 0px"
						font="--headline1"
						margin="0px 0px 0px 0px"
						color="--dark"
					>
						10
					</Text>
					<Text
						color="--darkL2"
						lg-text-align="center"
						text-align="left"
						sm-font="--lead"
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
					>
						designers
					</Text>
				</Box>
				<Box
					md-align-items="flex-start"
					sm-flex-direction="row"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					align-items="flex-end"
				>
					<Text
						sm-font="--headline2"
						display="inline-block"
						color="--dark"
						lg-font="--headline2"
						text-align="left"
						sm-margin="0px 12px 0px 0px"
						font="--headline1"
						margin="0px 0px 0px 0px"
						lg-text-align="center"
					>
						25
					</Text>
					<Text
						color="--darkL2"
						lg-text-align="center"
						text-align="left"
						sm-font="--lead"
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
					>
						developers
					</Text>
				</Box>
				<Box
					align-items="flex-end"
					md-align-items="flex-start"
					sm-flex-direction="row"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
				>
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						text-align="left"
						sm-font="--headline2"
						font="--headline1"
						color="--dark"
						lg-text-align="center"
						lg-font="--headline2"
						sm-margin="0px 12px 0px 0px"
					>
						12
					</Text>
					<Text
						text-align="left"
						lg-text-align="right"
						margin="0px 0px 0px 0px"
						color="--darkL2"
						opacity="0.6"
						sm-font="--lead"
						md-text-align="left"
						font="--lead"
						display="inline-block"
					>
						support agents
					</Text>
				</Box>
				<Box
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					align-items="flex-end"
					md-align-items="flex-start"
					sm-flex-direction="row"
				>
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						lg-text-align="center"
						sm-margin="0px 12px 0px 0px"
						font="--headline1"
						color="--dark"
						text-align="left"
						lg-font="--headline2"
						sm-font="--headline2"
					>
						04
					</Text>
					<Text
						lg-text-align="center"
						text-align="left"
						sm-font="--lead"
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
					>
						managers
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			justify-content="center"
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
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
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
				display="flex"
				align-items="center"
				lg-min-height="420px"
				md-min-height="360px"
			>
				<Text
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--light"
					md-font="--headline3"
					margin="10px 0px 15px 0px"
				>
					Make It Work.
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
					Good design adds value faster than it adds cost.
				</Text>
				<Button
					font="--lead"
					letter-spacing="0.5px"
					background="--color-light"
					active-box-shadow="none"
					transition="opacity .15s ease 0s"
					z-index="5"
					hover-opacity=".85"
					focus-box-shadow="none"
					color="--darkL2"
					padding="8px 36px 8px 36px"
					position="relative"
					hover-box-shadow="none"
					margin="10px auto 0px auto"
					opacity="1"
					width="fit-content"
					md-font="--base"
				>
					Start Now
				</Button>
			</Box>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				width="100%"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-gap="16px"
			>
				<Box display="flex" align-items="center" sm-flex-wrap="wrap">
					<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" width="28px" height="28px" />
					<Link
						white-space="nowrap"
						font="--base"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="1px 0px 0px 10px"
						hover-text-decoration-line="underline"
						href="https://quarkly.io/"
						color="--dark"
					>
						Made on Quarkly
					</Link>
				</Box>
				<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" justify-content="flex-end">
					<Override slot="link" background="none" border-radius="50%" />
					<Override slot="icon" color="--dark" />
				</SocialMedia>
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