import React from "react";

const EditContent = React.createContext({
  btnStatus: false,
  onBtnForm: "",
  onSetJsonData: {},
  onGetJsonData: {},
  loginStatus: false,
  onLogoutStatus: {},
  onLoginStatus: {},
  loginName: "",
  activateTotoList: false,
  onActivateTotoList: "",
});

export default EditContent;
