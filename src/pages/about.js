import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Box, Text, Icon, Em, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdMenu, MdFace } from "react-icons/md";
import { FaRegGem, FaRegLifeRing, FaRegCalendarCheck, FaRegStar } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				About | Enchanted Realms
			</title>
			<meta name={"description"} content={"Discover the magic of Enchanted Realms: your ultimate Minecraft adventure awaits! Explore immersive landscapes, forge friendships, and unleash your creativity. Join us today and experience the enchantment firsthand!"} />
			<meta property={"og:title"} content={"About | Enchanted Realms"} />
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
			quarkly-title="Header"
			align-items="center"
			justify-content="center"
			padding="16px 0 16px 0"
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
			<Link position="relative" transition="opacity 200ms ease" quarkly-title="Link" href="/">
				<Image
					z-index="3"
					src="https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13:16:09.978Z"
					width="75px"
					sm-width="45px"
					srcSet="https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/663cf7db3f24780021f6cc6a/images/icon.png?v=2024-05-11T13%3A16%3A09.978Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="icon"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
					category="md"
					background="#000000"
					sm-background="#000000"
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
				<Override slot="icon-open" md-right="18px" md-position="fixed" md-top="18px" />
				<Override
					slot="menu"
					md-height="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-top={0}
					md-width="100%"
					lg-transform="translateY(0px) translateX(0px)"
					md-left={0}
					padding="0px 0 0px 0"
					align-items="center"
					sm-background="#000000"
				>
					<Override
						slot="item-index"
						lg-display="none"
						display="none"
						sm-background="#000000"
						sm-color="#ffffff"
					/>
					<Override
						slot="link"
						hover-opacity="1"
						md-transition="opacity .15s ease 0s"
						md-font="16px/24px sans-serif"
						font="--base"
						color="--dark"
						opacity=".5"
						transition="opacity .15s ease 0s"
						text-transform="initial"
						md-color="--dark"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-hover-opacity="1"
						md-active-opacity="1"
						text-decoration-line="initial"
					/>
					<Override
						slot="link-active"
						opacity="1"
						color="--primary"
						cursor="default"
						md-opacity="1"
						md-cursor="default"
					/>
					<Override
						slot="item"
						text-align="center"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
					/>
					<Override
						slot="item-404"
						lg-display="none"
						display="none"
						sm-background="#000000"
						sm-color="#ffffff"
					/>
					<Override
						slot="link-team"
						sm-background="#000000"
						sm-color="#ffffff"
						background="#000000"
						color="--light"
					>
						About the Team
					</Override>
					<Override
						slot="item-team"
						sm-background="#000000"
						sm-color="#ffffff"
						background="#000000"
						color="#ffffff"
						border-width="2px"
						border-style="solid"
						margin="0px 0px 0px 15px"
						sm-width="120px"
						sm-margin="0px 10px 10px 15px"
					/>
					<Override slot="link-about" sm-background="#000000" sm-color="#ffffff" color="--light" />
					<Override
						slot="item-about"
						sm-background="#000000"
						background="#000000"
						color="#ffffff"
						border-width="2px"
						border-style="solid"
						margin="0px 15px 0px 0px"
						sm-width="120px"
						sm-margin="0px 15px 15px 16px"
					/>
					<Override slot="link-index" sm-background="#000000" sm-color="#ffffff" />
					<Override slot="link-404" sm-background="#000000" sm-color="#ffffff" />
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
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
				align-items="center"
				display="flex"
				justify-content="center"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/IMG_0100.jpeg?v=2024-05-11T10:31:38.909Z) 0% 0%/cover"
				md-min-height="360px"
				sm-min-height="180px"
				width="100%"
				min-height="480px"
				height="240px"
			/>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			background="--color-dark"
			border-style="solid"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			quarkly-title="About"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			md-padding="50px 0px 50px 0px"
			sm-padding="0px 0 0px 0"
			border-color="--color-lightD2"
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
				letter-spacing="1px"
				color="--light"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
			>
				Embark on an epic journey through Enchanted Realms, where imagination meets adventure, and every block holds the potential for magic and wonder!
			</Text>
		</Section>
		<Section
			box-sizing="border-box"
			padding="100px 0px 100px 0px"
			quarkly-title="Our Services"
			xl-padding="100px 0px 100px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			background="#000000"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
			/>
			<Text
				letter-spacing="1px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				margin="0px 0px 10px 0px"
				color="--light"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				font="--base"
				background="#000000"
			>
				WHAT WE DO BEST
			</Text>
			<Text
				lg-margin="0px 0px 48px 0px"
				md-font="--headline3"
				sm-margin="0px 0px 36px 0px"
				font="--headline2"
				margin="0px 0px 72px 0px"
				color="--light"
				text-align="center"
				lg-text-align="center"
				background="#000000"
			>
				Our Services
			</Text>
			<Box
				grid-template-columns="repeat(3, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				width="100%"
				display="grid"
				grid-gap="32px"
			>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegGem}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text color="--light" font="--lead" margin="0px 0px 10px 0px" display="inline-block">
						High Quality
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--light"
					>
						At our core, we prioritize the delivery of high-quality server infrastructure to ensure optimal performance and reliability for our clients. Our servers are meticulously maintained with cutting-edge technology, providing a seamless experience for all users. We invest in top-tier hardware and employ robust security measures to guarantee the integrity of your data and operations.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegLifeRing}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--light">
						Best Support
					</Text>
					<Text
						opacity="0.6"
						color="--light"
						lg-text-align="center"
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						Our commitment to providing the best support services sets us apart. Our dedicated team of experts is available around the clock to address any queries or concerns you may have. Whether you encounter technical issues, require assistance with configurations, or seek guidance on optimizing performance, our knowledgeable support staff is here to ensure your satisfaction and success.
					</Text>
				</Box>
				<Box justify-content="center" display="flex" flex-direction="column" align-items="center">
					<Icon
						font="36px sans-serif"
						color="--primary"
						category="md"
						icon={MdFace}
						size="82px"
						margin="0px 0px 19px 0px"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--light">
						Personal Approach
					</Text>
					<Text
						text-align="center"
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--light"
						lg-text-align="center"
					>
						We understand that every client is unique, which is why we adopt a personalized approach to service. From initial consultation to ongoing support, we tailor our solutions to meet your specific requirements and objectives. By fostering close partnerships with our clients, we can better understand their needs and deliver customized solutions that exceed expectations.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						category="fa"
						icon={FaRegCalendarCheck}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--light">
						Flexible Schedule
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--light"
						lg-text-align="center"
						text-align="center"
					>
						Our 24/7 server availability is complemented by flexible schedule management tailored to your preferences. While our servers operate around the clock, you have the flexibility to define hour limits according to your workload and usage patterns. This empowers you to optimize resource allocation and maximize efficiency without compromising accessibility.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						font="36px sans-serif"
						color="--primary"
						category="fa"
						icon={FaRegStar}
						size="82px"
						margin="0px 0px 19px 0px"
					/>
					<Text color="--light" font="--lead" margin="0px 0px 10px 0px" display="inline-block">
						Extensive Experience
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--light"
						lg-text-align="center"
						text-align="center"
						font="--base"
					>
						With years of experience in server management, we bring unparalleled expertise to the table. Our team has a proven track record of hosting successful mini events, executing seamless updates, and fostering vibrant communities. Leveraging our extensive knowledge and insights, we consistently deliver value-added services that enhance user engagement and satisfaction.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" align-items="center" justify-content="center">
					<Icon
						color="--primary"
						category="ai"
						icon={AiOutlineThunderbolt}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--light">
						Better Efficiency
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--light"
						lg-text-align="center"
						text-align="center"
					>
						Our servers are strategically located in Madrid to cater to the Spanish community, providing low-latency access and optimal performance. Equipped with 24GB RAM and ARM cores, our infrastructure boasts superior processing power and efficiency. By harnessing the latest advancements in technology, we empower our clients to achieve their goals with speed, reliability, and scalability.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0px 80px 0px"
			quarkly-title="About"
			background="--color-dark"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			color="#ffffff"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(2, 1fr)"
				width="100%"
				lg-grid-template-columns="1fr"
			>
				<Text
					color="--light"
					lg-margin="0px 0px 0px 0px"
					md-font="--lead"
					font="--headline3"
					margin="0px 0px 10px 0px"
					display="inline-block"
				>
					Our Requirements...
				</Text>
				<Text
					display="inline-block"
					opacity="0.6"
					color="--light"
					lg-text-align="left"
					text-align="left"
					font="--base"
					margin="0px 0px 0px 0px"
				>
					At Enchanted Realms, we champion creativity and individuality. While we believe in the freedom to explore and innovate, we also value community harmony. Our guidelines, though necessary for cohesion, serve as guardrails, ensuring a welcoming and respectful environment for all. Join us in celebrating diversity while adhering to guidelines that promote kindness and inclusivity. Join our Discord server or copy the following link. Let's create together, respectfully...
					<br />
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							{" "}COPY THE LINK:
						</Em>
					</Strong>
					{" "}https://dolls-learn-63t.craft.me/ZdR8JQI7Wcu7oH
				</Text>
			</Box>
		</Section>
		<Section
			padding="80px 0px 80px 0px"
			quarkly-title="About"
			background="--color-dark"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			color="#ffffff"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(2, 1fr)"
				width="100%"
				lg-grid-template-columns="1fr"
			>
				<Text
					margin="0px 0px 0px 0px"
					display="inline-block"
					opacity="0.6"
					color="--light"
					lg-text-align="left"
					text-align="right"
					font="--base"
				>
					To ensure a smooth and enjoyable gaming experience, we recommend configuring your Minecraft launcher using our provided guide. This guide has been meticulously crafted to assist you in seamlessly connecting to our server. By following the steps outlined in the guide, you'll be ready to embark on exciting adventures with fellow players. Copy the link below to access the guide and begin your journey with us. Thank you for choosing our server, and we look forward to seeing you online!
					<br />
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							COPY THE LINK:
						</Em>
					</Strong>
					{" "}https://dolls-learn-63t.craft.me/Y9e6hWrA2bWBZB{" "}
				</Text>
				<Text
					color="--light"
					lg-margin="0px 0px 0px 0px"
					md-font="--lead"
					font="--headline3"
					margin="0px 0px 10px 0px"
					display="inline-block"
					text-align="right"
				>
					Need help joining the Server?
				</Text>
			</Box>
		</Section>
		<Section
			padding="80px 0px 80px 0px"
			quarkly-title="About"
			background="--color-dark"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			color="#ffffff"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(2, 1fr)"
				width="100%"
				lg-grid-template-columns="1fr"
			>
				<Text
					color="--light"
					lg-margin="0px 0px 0px 0px"
					md-font="--lead"
					font="--headline3"
					margin="0px 0px 10px 0px"
					display="inline-block"
				>
					Need help with Mods?
				</Text>
				<Text
					display="inline-block"
					opacity="0.6"
					color="--light"
					lg-text-align="left"
					text-align="left"
					font="--base"
					margin="0px 0px 0px 0px"
				>
					At our Minecraft server, we pride ourselves on offering a diverse array of mods to enhance your gaming experience. However, we understand that managing multiple mods simultaneously can sometimes pose a challenge. To ensure seamless gameplay and control over your gaming environment, we encourage you to utilize our comprehensive keyboard configuration guide. This guide has been thoughtfully curated to assist you in optimizing your keyboard settings, allowing for effortless navigation and interaction within the game. By following the instructions provided, you'll be able to tailor your keyboard layout to suit your preferences, thus maximizing your enjoyment while exploring our server. Copy the link below to access the guide and embark on a truly immersive gaming journey with us. Thank you for being part of our community, and we look forward to seeing you in-game!
					<br />
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							COPY THE LINK:
						</Em>
					</Strong>
					{" "}https://dolls-learn-63t.craft.me/dWx2tAEUu30m97
				</Text>
			</Box>
		</Section>
		<Section
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
			quarkly-title="USP"
			background="#000000"
			color="#ffffff"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				min-height="480px"
				display="flex"
				justify-content="center"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/663cf7db3f24780021f6cc6a/images/wallhaven-6qx916.png?v=2024-05-11T07:36:19.514Z) center center/cover no-repeat"
				lg-min-height="420px"
				sm-min-height="280px"
				padding="36px 24px 36px 24px"
				align-items="center"
				flex-direction="column"
				md-min-height="360px"
			>
				<Text
					margin="10px 0px 15px 0px"
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--indigo"
					md-font="--headline3"
				>
					Join our Community
				</Text>
				<Text
					margin="0px 0px 28px 0px"
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
					color="--light"
					max-width="720px"
				>
					Hop into our Discord Server
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