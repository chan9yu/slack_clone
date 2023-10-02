import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			core: {
				/** #3A123E */ primary: `#${string}`;
				/** #4A154B */ primary_brand: `#${string}`;
				/** #000000 */ black: `#${string}`;
				/** #FFFFFF */ white: `#${string}`;
				/** #36C5F0 */ blue: `#${string}`;
				/** #2EB67D */ green: `#${string}`;
				/** #ECB22E */ yellow: `#${string}`;
				/** #E01E5A */ red: `#${string}`;
			};
			secondary: {
				/** #1E328F */ cobalt: `#${string}`;
				/** #2F8AB7 */ skyblue: `#${string}`;
				/** #0096A2 */ teal: `#${string}`;
				/** #78D7DD */ pool: `#${string}`;
				/** #185F34 */ evergreen: `#${string}`;
				/** #779846 */ moss: `#${string}`;
				/** #FFA100 */ yolk: `#${string}`;
				/** #FFD57E */ sandbar: `#${string}`;
				/** #FED4BE */ peach: `#${string}`;
				/** #F2606A */ salmon: `#${string}`;
				/** #F6BBC1 */ bubblegum: `#${string}`;
				/** #921D21 */ crimson: `#${string}`;
				/** #DE8969 */ terracotta: `#${string}`;
				/** #7C2852 */ berry: `#${string}`;
				/** #C05B8C */ mauve: `#${string}`;
			};
			gray: {
				/** #1D1C1D */ darker: `#${string}`;
				/** #616061 */ dark: `#${string}`;
				/** #868686 */ medium: `#${string}`;
				/** #BBBBBB */ light: `#${string}`;
				/** #DDDDDD */ lighter: `#${string}`;
				/** #F8F8F8 */ lightest: `#${string}`;
			};
			hover: {
				/** #1364A3 */ default: `#${string}`;
				/** #0C4C8C */ dark: `#${string}`;
			};
			highlight: {
				/** #1C9BD1 */ accent: `#${string}`;
				/** #F3C845 */ secondary: `#${string}`;
			};
			overlay: {
				/** #0000007f */ black: `#${string}`;
			};
			nav: {
				/** #C4B8C5 */ unselected_text: `#${string}`;
				/** #522653 */ divider_line: `#${string}`;
			};
			background: {
				/** #301034 */ top_nav: `#${string}`;
				/** #4F3452 */ top_search: `#${string}`;
			};
		};
		typography: {
			size: {
				/** 12px */ caption2: string;
				/** 13px */ caption1: string;
				/** 15px */ subheading: string;
				/** 18px */ body: string;
				/** 22px */ heading4: string;
				/** 32px */ heading3: string;
				/** 40px */ heading2: string;
				/** 48px */ heading1: string;
			};
			weight: {
				/** 400 */ regular: string;
				/** 400 */ semibold: string;
				/** 700 */ bold: string;
				/** 900 */ black: string;
			};
		};
	}
}
