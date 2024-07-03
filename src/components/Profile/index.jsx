import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminChange } from "../../redux/reducers/productSlice";

const Profile = () => {
  const { admin, mainPassword } = useSelector((s) => s.allProduct);
  const dispatch = useDispatch();
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const changePassword = () => {
    if (mainPassword === oldPass) {
      dispatch(adminChange(newPass));
    }
  };
  return (
    <div>
      <div className="container">
        <div className="flex gap-10 items-center justify-center flex-col text-[40px] text-white font-bold">
          <h1>{admin.name}</h1>
          <h1>{admin.phone}</h1>
          <input
            onChange={(e) => setOldPass(e.target.value)}
            type="text"
            placeholder="old password"
            className="text-[30px] text-white py-[10px] px-[20px] outline-none bg-transparent border-2 border-solid border-white rounded-xl"
          />
          <input
            onChange={(e) => setNewPass(e.target.value)}
            type="text"
            placeholder="new password"
            className="text-[30px] text-white py-[10px] px-[20px] outline-none bg-transparent border-2 border-solid border-white rounded-xl"
          />
          <button
            onClick={() => changePassword()}
            className="text-2xl text-black font-bold py-[10px] px-[30px] bg-white border-none rounded-xl"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
