import { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Flex, Input } from '../../components';

interface SignupForm {
	email: string;
	nickname: string;
	password: string;
	passwordCheck: string;
}

const SignupPage = () => {
	const { register, setFocus, handleSubmit, watch, getValues } = useForm<SignupForm>();

	const handleSignUpSubmit = handleSubmit(data => {
		console.log('### data', data);
	});

	const handleSignUpKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key !== 'Enter') return;
		e.preventDefault();
		const email = getValues('email');
		const nickname = getValues('nickname');
		const password = getValues('password');
		const passwordCheck = getValues('passwordCheck');

		console.log('### data', {
			email,
			nickname,
			password,
			passwordCheck
		});
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
			<Input placeholder="이메일 주소" type="email" {...register('email')} />
			<Input placeholder="닉네임" type="text" {...register('nickname')} />
			<Input placeholder="비밀번호" type="password" autoComplete="off" {...register('password')} />
			<Input
				placeholder="비밀번호 확인"
				type="password"
				autoComplete="off"
				{...register('passwordCheck')}
			/>
			<Button fullWidth type="submit">
				회원가입
			</Button>
		</Flex>
	);
};

export default SignupPage;
