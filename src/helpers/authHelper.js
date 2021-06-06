export const authHelper = () => {
	const isAuth = localStorage.getItem('token') === 'true';
  return isAuth;
};
