const HandleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userCredential");
};

export default HandleLogout;
