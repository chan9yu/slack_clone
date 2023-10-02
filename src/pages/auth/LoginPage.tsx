import { yupResolver } from '@hookform/resolvers/yup';
import { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, Flex, Input } from '../../components';
import { AUTH_ERROR_TEXT } from '../../constants';

const schema = yup.object().shape({
	email: yup
		.string()
		.email(AUTH_ERROR_TEXT.INVALID_EMAIL_FORMAT)
		.required(AUTH_ERROR_TEXT.EMPTY_EMAIL),
	password: yup
		.string()
		.min(6, AUTH_ERROR_TEXT.PASSWORD_MIN_LENGTH)
		.required(AUTH_ERROR_TEXT.EMPTY_PASSWORD)
});

const LoginPage = () => {
	const {
		formState: { errors, submitCount },
		handleSubmit,
		register
	} = useForm<yup.InferType<typeof schema>>({
		resolver: yupResolver(schema)
	});

	const handleSignUpSubmit = handleSubmit(data => {
		console.log('### data', data);
	});

	const handleSignUpKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key !== 'Enter') return;
		e.preventDefault();
		handleSignUpSubmit();
	};

	return (
		<Flex
			tag="form"
			direction="column"
			width="400px"
			gap="16px"
			onSubmit={handleSignUpSubmit}
			onKeyDown={handleSignUpKeyDown}
		>
			<Input
				placeholder="이메일 주소"
				type="email"
				errorMsg={errors.email?.message}
				isError={!!errors.email?.message}
				isSussess={submitCount !== 0 && !errors.email?.message}
				{...register('email')}
			/>
			<Input
				placeholder="비밀번호"
				type="password"
				autoComplete="off"
				errorMsg={errors.password?.message}
				isError={!!errors.password?.message}
				isSussess={submitCount !== 0 && !errors.password?.message}
				{...register('password')}
			/>
			<Button fullWidth type="submit">
				로그인
			</Button>
		</Flex>
	);
};

export default LoginPage;
