export const setToLocal = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};
export const getFromLocal = () => {
  const users = localStorage.getItem("users");
  return users === null ? [] : JSON.parse(users);
};
