// localstorageHelper.js

export const getUserInfoFromLocalStorage = () => {
    const userInfo = localStorage.getItem('user-info');
    return userInfo ? JSON.parse(userInfo) : null;
  };