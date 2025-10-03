"use client";

import { useShoppingCart } from "use-shopping-cart";
import Button from "@/app/(components)/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import ToteBagIcon from "@/app/(components)/TotebagIcon";

interface Props {
  variant?: "compact" | "detailed";
}

const CartOverview = ({ variant = "detailed" }: Props) => {
  const { cartCount, totalPrice } = useShoppingCart();
  const [shouldBounce, setShouldBounce] = useState(false);
  const [prevTotal, setPrevTotal] = useState(totalPrice);

  useEffect(() => {
    if (
      totalPrice !== prevTotal &&
      totalPrice !== undefined &&
      prevTotal !== undefined
    ) {
      setShouldBounce(true);
      const timer = setTimeout(() => setShouldBounce(false), 200);
      return () => clearTimeout(timer);
    }
    setPrevTotal(totalPrice);
  }, [totalPrice, prevTotal]);

  const isEmpty = cartCount === undefined || cartCount === 0;

  return (
    <div
      className={clsx(
        variant === "detailed" &&
          "border-t-[1px] border-t-gray-800  pt-4 flex flex-col items-end px-3 leading-none"
      )}
    >
      <Link
        className="flex items-center space-x-3  h-14 text-md group"
        href="/store/checkout"
      >
        <div
          className={clsx(
            "text-md group-hover:text-gray-400",
            !isEmpty ? "text-blue-400" : "text-gray-400"
          )}
        >
          €{((totalPrice ?? 0) / 100).toFixed(2)}
        </div>
        <div className="text-sm ">
          <span className="text-gray-100 group-hover:text-gray-400 group-hover:scale-105 transition duration-200 inline-block">
            <ToteBagIcon />
            <div
              className={clsx(
                "absolute  rounded-full text-gray-100 px-1 ml-3 -mt-3 inline-block pt-0.5",
                !isEmpty ? "bg-blue-500" : "bg-gray-800",
                shouldBounce ? "animate-ping" : ""
              )}
            >
              {cartCount || 0}
            </div>
          </span>{" "}
        </div>
      </Link>
      {variant === "detailed" && cartCount !== undefined && cartCount > 0 && (
        <>
          <div className="items-center space-x-3 text-white inline-flex">
            <div className="text-sm ">{cartCount || 0} items in your cart</div>
          </div>
          <div className="mt-3">
            <Button
              href="/store/checkout"
              size={"medium"}
              hoverBgColor={"bg-blue-500"}
              borderColor={"border-gray-500"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                color="#000000"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.75 20.75H20C21.5188 20.75 22.75 19.5188 22.75 18V14.5C22.75 14.0858 22.4142 13.75 22 13.75C21.0335 13.75 20.25 12.9665 20.25 12C20.25 11.0335 21.0335 10.25 22 10.25C22.4142 10.25 22.75 9.91421 22.75 9.5V6C22.75 4.48122 21.5188 3.25 20 3.25H9.75V20.75ZM8.25 3.25H4C2.48122 3.25 1.25 4.48122 1.25 6V9.5C1.25 9.91421 1.58579 10.25 2 10.25C2.9665 10.25 3.75 11.0335 3.75 12C3.75 12.9665 2.9665 13.75 2 13.75C1.58579 13.75 1.25 14.0858 1.25 14.5V18C1.25 19.5188 2.48122 20.75 4 20.75H8.25L8.25 3.25Z"
                  fill="#000000"
                ></path>
              </svg>
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartOverview;
