import { yupResolver } from '@hookform/resolvers/yup';
import { KeyboardEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button, Flex, Input } from '../../components';
import { AUTH_ERROR_TEXT } from '../../constants';

const schema = yup.object().shape({
	email: yup
		.string()
		.email(AUTH_ERROR_TEXT.INVALID_EMAIL_FORMAT)
		.required(AUTH_ERROR_TEXT.EMPTY_EMAIL),
	nickname: yup
		.string()
		.min(2, AUTH_ERROR_TEXT.NICKNAME_MIN_LENGTH)
		.required(AUTH_ERROR_TEXT.EMPTY_NICKNAME),
	password: yup
		.string()
		.min(6, AUTH_ERROR_TEXT.PASSWORD_MIN_LENGTH)
		.required(AUTH_ERROR_TEXT.EMPTY_PASSWORD),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], AUTH_ERROR_TEXT.PASSWORD_MISMATCH)
		.required(AUTH_ERROR_TEXT.EMPTY_CONFIRM_PASSWORD)
});

const SignupPage = () => {
	const {
		formState: { errors, submitCount },
		handleSubmit,
		register
	} = useForm<yup.InferType<typeof schema>>({
		resolver: yupResolver(schema)
	});

	const handleSignUpSubmit = handleSubmit(data => {
		console.log('### data', data);
		alert('회원가입 테스트');
	});

	const handleSignUpKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key !== 'Enter') return;
		e.preventDefault();
		handleSignUpSubmit();
	};

	return (
		<>
			<Helmet>
				<title>회원가입 | Slack</title>
			</Helmet>
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
					placeholder="닉네임"
					type="text"
					errorMsg={errors.nickname?.message}
					isError={!!errors.nickname?.message}
					isSussess={submitCount !== 0 && !errors.nickname?.message}
					{...register('nickname')}
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
				<Input
					placeholder="비밀번호 확인"
					type="password"
					autoComplete="off"
					errorMsg={errors.confirmPassword?.message}
					isError={!!errors.confirmPassword?.message}
					isSussess={submitCount !== 0 && !errors.confirmPassword?.message}
					{...register('confirmPassword')}
				/>
				<Button fullWidth type="submit">
					회원가입
				</Button>
			</Flex>
		</>
	);
};

export default SignupPage;
