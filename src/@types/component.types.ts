import type { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type ChildrenProps = {
	children?: ReactNode;
};

export type AtomComponentProps<T = HTMLElement> = {
	className?: string;
	style?: CSSProperties;
} & DetailedHTMLProps<HTMLAttributes<T>, T>;

export type AtomComponentPropsWithChildren<T> = AtomComponentProps<T> & ChildrenProps;
