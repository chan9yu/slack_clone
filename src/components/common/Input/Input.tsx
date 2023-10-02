import { useTheme } from '@emotion/react';
import { InputHTMLAttributes, forwardRef } from 'react';

import { Flex, Icon, Text } from '../../../components';
import * as S from './Input.styles';

interface InputProps extends S.InputStyledProps, InputHTMLAttributes<HTMLInputElement> {
	errorMsg?: string;
	isSussess?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { colors } = useTheme();

	const { errorMsg, isSussess = false, isError = false, ...rest } = props;

	const styleProps: S.InputStyledProps = {
		isError
	};

	return (
		<S.InputWrapper>
			<S.InputInner>
				<S.InputStyled ref={ref} {...styleProps} {...rest} />
				{isSussess && <Icon name="CorrectFill" color={colors.hover.dark} />}
			</S.InputInner>
			{errorMsg && (
				<Flex alignItems="center" gap="4px">
					<Icon name="Info" width={15} height={15} color={colors.core.red} />
					<Text color={colors.core.red} size="subheading">
						{errorMsg}
					</Text>
				</Flex>
			)}
		</S.InputWrapper>
	);
});

export default Input;
