const checkLogin = () => {
  let user = localStorage.getItem("user") || null;

  if (user && JSON.parse(user).id) {
    return true;
  }
  return false;
};

export default checkLogin;
