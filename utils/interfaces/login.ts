export const login = async (creds: {
	email: string;
	password: string;
	isAdmin: boolean;
}): Promise<void> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (creds.email === 'harry' && creds.password === 'password') {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
};
