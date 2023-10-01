import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';
import { Flex } from '..';

const meta = {
	title: 'Component/Common/Text',
	component: Text,
	tags: ['autodocs']
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Typography'
	}
};

export const Color: Story = {
	args: {
		children: 'Typography'
	},
	render: args => (
		<Flex direction="column" gap="8px">
			<Text color="black" {...args} />
			<Text color="gray" {...args} />
			<Text color="unselected" {...args} />
			<Text color="white" {...args} />
		</Flex>
	)
};

export const NoWrap: Story = {
	args: {
		children: 'Typography'
	},
	render: args => (
		<Flex direction="column" gap="8px">
			<Text color="black" {...args} />
			<Text color="gray" {...args} />
			<Text color="unselected" {...args} />
			<Text color="white" {...args} />
		</Flex>
	)
};

export const Size: Story = {
	args: {
		children: 'Typography'
	},
	render: args => (
		<Flex direction="column" gap="8px">
			<Text size="heading1" {...args} />
			<Text size="heading2" {...args} />
			<Text size="heading3" {...args} />
			<Text size="heading4" {...args} />
			<Text size="body" {...args} />
			<Text size="subheading" {...args} />
			<Text size="caption1" {...args} />
			<Text size="caption2" {...args} />
		</Flex>
	)
};

export const Weight: Story = {
	args: {
		children: 'Typography'
	},
	render: args => (
		<Flex direction="column" gap="8px">
			<Text weight="black" {...args} />
			<Text weight="bold" {...args} />
			<Text weight="regular" {...args} />
			<Text weight="semibold" {...args} />
		</Flex>
	)
};
