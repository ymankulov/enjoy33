import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { adminLogOut } from "../../redux/reducers/productSlice";

const Header = () => {
  const { admin } = useSelector((s) => s.allProduct);
  let nav = useNavigate();
  const dispatch = useDispatch();
  // console.log(Object.keys(admin));

  return (
    <div className="py-[35px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="flex items-center border-2 border-white border-solid rounded-[15px] py-[10px] px-[25px]">
            <div className="text-white text-2xl font-bold flex gap-10">
              <Link to={"/"}>Home</Link>
              <Link to={Object.keys(admin).length ? "/product" : "/"}>
                Product
              </Link>
              <Link to={"/"}>Help Center</Link>
            </div>
            <div className="flex items-center gap-10 ml-[100px]">
              <Link
                to={"/profile"}
                className="text-white text-[30px] border-b-2 border-white border-solid"
              >
                {admin.name}
              </Link>
              <Link
                to={"/admin"}
                className="text-white text-[30px]  cursor-pointer flex gap-10 items-center "
              >
                <div className="">
                  <img
                    className="w-[30px] rounded-[50%] border-2 border-white border-solid"
                    src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex text-white items-center text-[30px] gap-10">
            <a className="">
              <IoSearch />
            </a>
            <Link to="/basket" className="">
              <AiOutlineShoppingCart />
            </Link>
            <Link
              to={"/"}
              onClick={() => {
                dispatch(adminLogOut());
                // nav("/");
              }}
              className="text-white text-[30px] cursor-pointer"
            >
              <IoIosLogOut />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
