const checkLogin = async () => {
  let user = localStorage.getItem("user") || null;

  let resp = await fetch("http://localhost:3094/users/checklogin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user}`,
    },
  }).then(function (resp) {
    return resp.json();
  });

  return !resp.error;
};

export default checkLogin;
