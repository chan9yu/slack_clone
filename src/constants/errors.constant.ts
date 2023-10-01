export enum AUTH_ERROR_TEXT {
	EMPTY_EMAIL = '이메일을 입력해 주세요.',
	EMPTY_NICKNAME = '닉네임을 입력해 주세요.',
	EMPTY_PASSWORD = '비밀번호를 입력해 주세요.',
	EMPTY_CONFIRM_PASSWORD = '비밀번호 확인을 입력해 주세요.',
	INVALID_EMAIL_FORMAT = '이메일 형식에 맞지 않는 메일 주소입니다. 다시 입력해 주세요.',
	EXISTING_EMAIL = '이미 사용 중인 이메일입니다.',
	NICKNAME_MIN_LENGTH = '닉네임은 최소 2글자 이상 입력해 주세요.',
	PASSWORD_MISMATCH = '비밀번호가 일치하지 않습니다.',
	PASSWORD_MIN_LENGTH = '비밀번호는 최소 6글자 이상 입력해 주세요.',
	LOGIN_SERVER_ERROR = '일시적인 오류로 로그인을 할 수 없습니다. 잠시 후 다시 이용해 주세요.',
	LOGIN_FAILED = '등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.'
}
