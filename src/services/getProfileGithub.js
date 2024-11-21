const getProfile = async (name) => {
  const data = await fetch("https://api.github.com/users/:darckis28");
  console.log(data);
};
getProfile();
