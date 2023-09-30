import { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Flex, Input } from '../../components';

interface LoginForm {
	email: string;
	password: string;
}

const LoginPage = () => {
	const { register, setFocus, handleSubmit, watch, getValues } = useForm<LoginForm>();

	const handleSignUpSubmit = handleSubmit(data => {
		console.log('### data', data);
	});

	const handleSignUpKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
		if (e.key !== 'Enter') return;
		e.preventDefault();
		const email = getValues('email');
		const password = getValues('password');

		console.log('### data', {
			email,
			password
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
			<Input placeholder="비밀번호" type="password" autoComplete="off" {...register('password')} />
			<Button fullWidth type="submit">
				로그인
			</Button>
		</Flex>
	);
};

export default LoginPage;
