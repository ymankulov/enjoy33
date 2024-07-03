import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminValidate } from "../../redux/reducers/productSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // states
  const [values, setValues] = useState({ name: "", phone: "", password: "" });
  const { mainPassword } = useSelector((s) => s.allProduct);
  const [modal, setModal] = useState(false);

  let count = 4;
  function getAdmin() {
    if (mainPassword !== values.password) {
      count--;
      if (count === 3) {
        alert("U vas ostalos 3 popytki");
      } else if (count === 2) {
        alert("U vas ostalos 2 popytki");
      } else if (count === 1) {
        alert("U vas ostalos 1 popytka");
      } else {
        setModal(true);
        alert("0");
      }
    } else {
      dispatch(adminValidate({ ...values }));
      setValues({ ...values, name: "", phone: "", password: "" });
      navigate("/product");
    }
  }
  function telegramPassword() {
    let my_id = `-1002186973919`;
    let token = `7410734001:AAGFVvz5pZCcei-zCjLjgJxzxN2eKvhaUUM`;
    let api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    let newPass = {
      chat_id: my_id,
      parse_model: "html",
      text: `
        Ваш пароль был: ${mainPassword}
      `,
    };

    axios.post(api_key, newPass);
    setModal(false);
  }
  return (
    <div>
      <div className="container relative">
        <div className="w-[45%] flex items-center justify-center flex-col mx-auto gap-[40px]">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={({ target }) =>
                setValues({ ...values, name: target.value })
              }
              value={values.name}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={({ target }) =>
                setValues({ ...values, phone: target.value })
              }
              value={values.phone}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Phone
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={({ target }) =>
                setValues({ ...values, password: target.value })
              }
              value={values.password}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Password
            </label>
          </div>
          <button
            onClick={getAdmin}
            className="text-2xl py-[10px] px-[30px] text-black bg-white rounded-[10px]"
          >
            Log in
          </button>
        </div>
        {modal ? (
          <div className="flex fixed top-[35%] gap-6 left-[30%] items-center justify-center flex-col w-[550px] h-[300px] bg-white rounded-2xl">
            <h1 className="text-[25px]">
              Esli zabyli parol vy mojete poprosit u nas!
            </h1>
            <button
              onClick={() => telegramPassword()}
              className="text-2xl text-white bg-black font-bold py-[10px] px-[30px] rounded-xl"
            >
              Napomnit
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
