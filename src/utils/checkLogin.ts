const checkLogin = () => {
  let user = localStorage.getItem("user") || null;

  if (user && JSON.parse(user).id) {
    alert("You are already logged in");
    return true;
  }
  return false;
};

export default checkLogin;
