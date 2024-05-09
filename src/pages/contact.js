import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Section, Text, Box, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Helmet>
			<title>
				Contact | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Contact | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section align-items="center" justify-content="center" padding="16px 0 16px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				display="grid"
			/>
			<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
				<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="menu"
					lg-transform="translateY(0px) translateX(0px)"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					md-top={0}
					padding="0px 0 0px 0"
					justify-content="center"
					md-width="100%"
					md-height="100%"
					align-items="center"
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
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						transition="opacity .15s ease 0s"
						md-color="--dark"
						md-opacity=".5"
						md-hover-opacity="1"
						md-active-opacity="1"
						color="--dark"
						opacity=".5"
						font="--base"
						letter-spacing="0.5px"
						text-transform="initial"
						md-transition="opacity .15s ease 0s"
						hover-opacity="1"
						md-font="16px/24px sans-serif"
						text-decoration-line="initial"
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
					size="36px"
					md-right="0px"
					md-position="relative"
					category="md"
					icon={MdMenu}
				/>
				<Override
					slot="menu-open"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
				/>
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
			</Components.BurgerMenu>
			<Button
				white-space="nowrap"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				padding="8px 18px 8px 18px"
				background="--color-primary"
				z-index="5"
				md-display="none"
				border-radius="0px"
				hover-transform="translateY(-4px)"
				justify-self="end"
				font="--base"
				letter-spacing="0.5px"
			>
				Contact Us
			</Button>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				align-items="center"
				justify-content="center"
				background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
				md-min-height="360px"
				sm-min-height="180px"
				width="100%"
				min-height="480px"
				display="flex"
			>
				<Text
					align-items="center"
					justify-content="center"
					sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-align="center"
					font="--headline1"
					display="flex"
					color="--light"
					quarkly-title="Title"
					sm-text-align="center"
					md-font="--headline2"
					lg-font="--headline2"
					margin="0px 0px 0px 0px"
				>
					Contact Us.
				</Text>
			</Box>
		</Section>
		<Section
			justify-content="center"
			box-sizing="border-box"
			quarkly-title="Contacts"
			padding="50px 0px 50px 0px"
			lg-padding="25px 0px 25px 0px"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				display="grid"
				grid-gap="82px"
				grid-template-columns="7fr 3fr"
				md-grid-template-columns="1fr"
				md-grid-gap="40px"
				lg-grid-gap="36px"
				width="100%"
			>
				<Box
					border-style="solid"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					background="--color-lightD1"
					padding="48px 36px 54px 36px"
					border-width="1px"
				>
					<Text
						quarkly-title="Title"
						md-font="--headline3"
						font="--headline3"
						margin="0px 0px 15px 0px"
						display="inline-block"
					>
						Get in Touch.
					</Text>
					<Text
						color="--dark"
						md-font="--base"
						font="--base"
						margin="0px 0px 28px 0px"
						display="inline-block"
						quarkly-title="Description"
					>
						Feel free to contact us anytime. We'll get back to you as soon as possible!
					</Text>
					<Formspree
						errorMessage="Something went wrong"
						completeText="Success"
						endpoint="meqveqwr"
						display="flex"
						width="100%"
					>
						<Input
							name="email"
							placeholder="Email"
							width="66.66%"
							margin="0px 4px 10px 0px"
							required
							type="email"
							md-width="100%"
							margin-right="4px"
							lg-width="100%"
						/>
						<Input
							placeholder="Name"
							width="66.66%"
							margin="0px 4px 10px 0px"
							type="text"
							md-width="100%"
							lg-width="100%"
							name="name"
						/>
						<Input
							margin="0px 4px 10px 0px"
							type="tel"
							md-width="100%"
							lg-width="100%"
							name="tel"
							placeholder="Phone"
							width="66.66%"
						/>
						<Button width="66.66%" lg-width="100%">
							Submit
						</Button>
					</Formspree>
				</Box>
				<Box>
					<Box margin="0px 0px 36px 0px" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Our location
						</Text>
						<Text
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
						>
							WORKING HOURS
						</Text>
						<Text
							quarkly-title="Description"
							color="--dark"
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
						>
							6:00 a.m. - 10:00 p.m.
						</Text>
					</Box>
					<Box quarkly-title="Contact" xl-margin="0px 0px 24px 0px" margin="0px 0px 36px 0px">
						<Text
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
						>
							Contact us
						</Text>
						<Link
							color="--dark"
							quarkly-title="Email"
							white-space="normal"
							hyphens="manual"
							font="--base"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
							opacity="0.6"
							word-break="normal"
							target="_blank"
							transition="opacity .15s ease 0s"
							text-indent="0"
							text-overflow="clip"
							hover-opacity="0.6"
							href="mailto:hello@company.com"
							overflow-wrap="normal"
						>
							hello@company.com
						</Link>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Call us
						</Text>
						<Link
							white-space="normal"
							text-overflow="clip"
							hyphens="manual"
							opacity="0.6"
							transition="opacity .15s ease 0s"
							target="_blank"
							display="block"
							text-decoration-line="initial"
							overflow-wrap="normal"
							word-break="normal"
							text-indent="0"
							hover-opacity=".5"
							href="tel:+1(234)567-89-00"
							quarkly-title="Phone"
							color="--dark"
							font="--base"
						>
							+1(234)567-89-00
						</Link>
					</Box>
					<Text
						font="--lead"
						text-align="center"
						padding="14px 24px 14px 24px"
						margin="0px 0px 0px 0px"
						xl-font="--base"
						md-display="block"
						display="inline-block"
						quarkly-title="Description"
						color="--dark"
						background="--color-lightD1"
					>
						We're always happy to make valuable new contacts!
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
			padding="50px 0px 50px 0px"
			quarkly-title="Team"
			box-sizing="border-box"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				sm-min-width="none"
				sm-flex-direction="column"
				sm-align-items="flex-start"
				md-margin="0px 16px 0px 16px"
				sm-justify-content="flex-start"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.5"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
			>
				The team
			</Text>
			<Text
				sm-text-align="left"
				color="--dark"
				width="100%"
				md-margin="0px 0px 16px 0px"
				lg-margin="0px 0px 30px 0px"
				font="--headline2"
				margin="0px 0px 55px 0px"
				text-align="center"
				md-font="--headline3"
			>
				Meet Our Experts.
			</Text>
			<Box
				width="100%"
				quarkly-title="Card"
				display="grid"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box
					display="flex"
					flex-direction="column"
					lg-grid-column="1 / span 3"
					md-grid-column="auto / auto"
					md-flex-direction="row"
				>
					<Text
						lg-font="--lead"
						margin="0px 0px 8px 0px"
						text-align="left"
						quarkly-title="Name"
						md-font="--lead"
						sm-font="--base"
						sm-margin="0px 0px 0px 0px"
						font="--headline3"
						color="--dark"
					>
						We work every day to provide the best services and make our clients happy.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" md-flex-direction="row">
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						quarkly-title="Image"
						padding-bottom="(4 / 3) * 100%"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-padding="0px 0px 0px 0px"
						width="100%"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/110% no-repeat"
						md-width="200px"
						md-height="250px"
						sm-height="auto"
					/>
					<Box
						md-width="50%"
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							sm-margin="0px 0px 4px 0px"
							md-font="--lead"
						>
							Nathan K. Joe
						</Text>
						<Text
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
						>
							Founder
						</Text>
						<Text
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
						>
							<Link
								opacity="0.6"
								text-indent="0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
								color="--dark"
								white-space="normal"
								text-overflow="clip"
								href="mailto:head@company.com"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
							>
								head@company.com
							</Link>
							<Link
								text-overflow="clip"
								display="block"
								text-decoration-line="initial"
								opacity="1"
								transition="opacity .15s ease 0s"
								target="_blank"
								word-break="normal"
								hyphens="manual"
								font="--base"
								href="tel:+1(234)567-89-01"
								white-space="normal"
								text-indent="0"
								quarkly-title="Phone"
								overflow-wrap="normal"
								color="--dark"
								hover-opacity="1"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-01
							</Link>
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" md-flex-direction="row">
					<Box
						width="100%"
						padding="0px 0px 121% 0px"
						md-padding="0px 0px 0px 0px"
						md-width="200px"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						sm-height="auto"
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/100% no-repeat"
						quarkly-title="Image"
						md-margin="0px 0px 0px 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/110% no-repeat"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
						>
							Claire R. Peery
						</Text>
						<Text
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
						>
							Designer
						</Text>
						<Text
							color="--dark"
							sm-margin="10px 0px 0px 0px"
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
						>
							<Link
								hyphens="manual"
								text-decoration-line="initial"
								overflow-wrap="normal"
								text-indent="0"
								word-break="normal"
								text-overflow="clip"
								transition="opacity .15s ease 0s"
								font="--base"
								href="mailto:design@company.com"
								opacity="0.6"
								hover-text-decoration-line="underline"
								color="--dark"
								quarkly-title="Email"
								target="_blank"
								white-space="normal"
							>
								design@company.com
							</Link>
							<Link
								hyphens="manual"
								transition="opacity .15s ease 0s"
								text-indent="0"
								text-overflow="clip"
								display="block"
								text-decoration-line="initial"
								opacity="1"
								quarkly-title="Phone"
								word-break="normal"
								white-space="normal"
								color="--dark"
								hover-text-decoration-line="underline"
								href="tel:+1(234)567-89-02"
								target="_blank"
								overflow-wrap="normal"
								hover-opacity="1"
								font="--base"
							>
								+1(234)567-89-02
							</Link>
						</Text>
					</Box>
				</Box>
				<Box md-flex-direction="row" display="flex" flex-direction="column">
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						width="100%"
						quarkly-title="Image"
						md-width="200px"
						sm-height="auto"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
							font="--headline3"
							margin="24px 0px 8px 0px"
							color="--dark"
							quarkly-title="Name"
						>
							David R. Lema
						</Text>
						<Text
							md-margin="0px 0px 0px 0px"
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
						>
							Developer
						</Text>
						<Text
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
							font="--base"
							margin="18px 0px 0px 0px"
						>
							<Link
								overflow-wrap="normal"
								white-space="normal"
								quarkly-title="Email"
								word-break="normal"
								text-overflow="clip"
								target="_blank"
								opacity="0.6"
								text-indent="0"
								font="--base"
								text-decoration-line="initial"
								color="--dark"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								hover-text-decoration-line="underline"
								href="mailto:dev@company.com"
							>
								dev@company.com
							</Link>
							<Link
								target="_blank"
								quarkly-title="Phone"
								hover-opacity="1"
								href="tel:+1(234)567-89-03"
								opacity="1"
								font="--base"
								text-overflow="clip"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								transition="opacity .15s ease 0s"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								hyphens="manual"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-03
							</Link>
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
			quarkly-title="USP"
			padding="75px 0 50px 0"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				min-height="480px"
				padding="36px 24px 36px 24px"
				align-items="center"
				sm-min-height="280px"
				md-min-height="360px"
				display="flex"
				justify-content="center"
				flex-direction="column"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
				lg-min-height="420px"
			>
				<Text
					margin="10px 0px 15px 0px"
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--light"
					md-font="--headline3"
				>
					Make It Work.
				</Text>
				<Text
					color="--light"
					max-width="720px"
					margin="0px 0px 28px 0px"
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
				>
					Good design adds value faster than it adds cost.
				</Text>
				<Button
					transition="opacity .15s ease 0s"
					position="relative"
					z-index="5"
					opacity="1"
					hover-opacity=".85"
					hover-box-shadow="none"
					margin="10px auto 0px auto"
					width="fit-content"
					md-font="--base"
					focus-box-shadow="none"
					color="--darkL2"
					padding="8px 36px 8px 36px"
					font="--lead"
					letter-spacing="0.5px"
					active-box-shadow="none"
					background="--color-light"
				>
					Start Now
				</Button>
			</Box>
		</Section>
		<Section
			justify-content="center"
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
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
						text-align="left"
						margin="1px 0px 0px 10px"
						white-space="nowrap"
						opacity="0.6"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
						href="https://quarkly.io/"
						font="--base"
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