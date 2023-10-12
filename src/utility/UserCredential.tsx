const UserCredentialFromLocalStorage = () => {
  const localStorageCredential = localStorage.getItem("userCredential");

  let parsedCredential = null;
  if (localStorageCredential !== null) {
    parsedCredential = JSON.parse(localStorageCredential);
  }
  return parsedCredential;
};

export default UserCredentialFromLocalStorage;
