import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';
import * as I from './icons';

const meta: Meta<typeof Icon> = {
	title: 'Components/Common/Icon',
	component: Icon,
	tags: ['autodocs']
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;
type IconName = keyof typeof I;

const iconList = Object.keys(I);

export const Default: Story = {
	args: {
		name: 'Active',
		color: '#616061'
	}
};

export const Icons: Story = {
	args: {
		color: '#616061'
	},
	render: args => (
		<>
			<Heading>{iconList.length} icons</Heading>
			<List>
				{iconList.map((val, key) => (
					<Item key={key}>
						<IconWrapper>
							<Icon {...args} name={val as IconName} />
						</IconWrapper>
						<Name>{val}</Name>
					</Item>
				))}
			</List>
		</>
	)
};

const Heading = styled.h2`
	font-size: 16px;
	margin: 16px;
`;

const List = styled.ul`
	display: flex;
	flex-flow: row wrap;
	list-style: none;
	padding: 0;
	margin: 0;
`;

const Item = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
	flex: 0 1 16%;
	min-width: 120px;
	margin: 16px;
`;

const IconWrapper = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.2) 2px 3px 6px 2px;
	padding: 8px;
`;

const Name = styled.div`
	color: #666;
	font-size: 12px;
	font-weight: 700;
`;
