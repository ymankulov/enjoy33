import React from "react";
import { useSelector } from "react-redux";

import BasketCart from "../basketCart.jsx";

const Basket = () => {
  const { basket, quantity } = useSelector((s) => s.bas);
  return (
    <div>
      <div className="container">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-16 py-3">
                  <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
          </table>
          {basket.map((el) => (
            <BasketCart el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
