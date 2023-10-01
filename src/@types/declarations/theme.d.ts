import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			core: {
				/** sidebar color */
				primary: string;
				/** primary color */
				primary_brand: string;
				/** background color */
				bg: string;
				/** primary black */
				black: string;
				/** default white bg */
				white: string;
			};
			secondary: {
				/** cobalt branding & illustration */
				cobalt: string;
				/** sky blue branding & illustration */
				skyblue: string;
				/** teal for illustration */
				teal: string;
				/** pool for illustration */
				pool: string;
				/** evergreen, branding */
				evergreen: string;
				/** moss, branding */
				moss: string;
				/** yolk, branding */
				yolk: string;
				/** sandbar, branding */
				sandbar: string;
				/** peach, branding */
				peach: string;
				/** salmon, branding */
				salmon: string;
				/** bubblegum, branding */
				bubblegum: string;
				/** crimson, branding */
				crimson: string;
				/** terracotta, branding */
				terracotta: string;
				/** berry, branding */
				berry: string;
				/** mauve, branding */
				mauve: string;
			};
			background: {
				/** default background color */
				primary_background: string;
				/** default foreground color */
				invented_foreground: string;
				/** invented background color */
				invented_background: string;
				/** dark max gray */
				max_contrast_gray: string;
				/** medium high gray */
				high_contrast_gray: string;
				/** medium font gray */
				medium_font_gray: string;
				/** low gray (borders) */
				light_contrast_gray: string;
				/** light gray */
				superlight_contrast_gray: string;
				/** overlay */
				overlay: string;
				/** unselected nav text */
				unselected_nav: string;
				/** divider line */
				divider_line_nav: string;
				/** top navigation */
				top_nav_bg: string;
				/** search background */
				top_search_bg: string;
				/** highlight hover color */
				hover: string;
				/** dark highlight color */
				dark_hover: string;
				/** blue accent color, Highlight */
				highlight_accent: string;
				/** yellow accent color, Highlight */
				secondary_highlight: string;
			};
			text: {
				black: string;
				gray: string;
				white: string;
				unselected: string;
			};
		};
		textStyles: {
			size: {
				caption2: string;
				caption1: string;
				Subheading: string;
				body: string;
				heading4: string;
				heading3: string;
				heading2: string;
				heading1: string;
			};
			weight: {
				regular: string;
				semibold: string;
				bold: string;
				black: string;
			};
		};
	}
}
