"use client";

import IncrementalInput from "@/components/form/IncrementalInput";
import { useState } from "react";
import clsx from "clsx";
import { useCartActions, useCartItems } from "@/stores/CartStore";
import { Product } from "@/types/product";
import { getVariantSingleProducts } from "@/domain/cms/cms.actions";
import Button from "@/components/Button";
import {
  isProductConfigurable,
  isProductSellableByStatus,
} from "@/domain/product/product.rules";

interface Props {
  product: Product;
  defaultQty?: number;
  maxQty?: number;
}

export default function ProductConfigure({
  product,
  defaultQty = 1,
  maxQty = 99,
}: Props) {
  const { addItem } = useCartActions();
  const cartItems = useCartItems();
  const [productEntity, setProductEntity] = useState<Product | undefined>(
    !isProductConfigurable(product) ? product : undefined
  );
  const [showCartStatus, setShowCartStatus] = useState(false);
  const [productQty, setProductQty] = useState(defaultQty);

  const handleDecrement = () => {
    setProductQty(prevQty => (prevQty > defaultQty ? prevQty - 1 : defaultQty));
  };

  const handleIncrement = () => {
    setProductQty(prevQty => (prevQty !== maxQty ? prevQty + 1 : maxQty));
  };

  const handleAddToCart = () => {
    if (isSellable && productEntity) {
      addItem(productEntity, productQty);
      setShowCartStatus(true);
    }
  };

  const handleVariantSelection = (product: Product) => {
    setProductEntity(product);
  };

  const handleCloseCartNotice = () => {
    setProductQty(defaultQty);
    setShowCartStatus(false);
  };

  const cartItem = cartItems.find(item => item.id === product.id);
  const isInCart = !!cartItem;
  const quantityInCart = cartItem?.quantity || 0;
  const isSellable = isProductSellableByStatus(product);
  const productVariants = getVariantSingleProducts(product);

  return (
    <div className="flex flex-col items-center align-middle rounded-md p-4 relative overflow-hidden gap-x-10">
      {productVariants.length > 0 && (
        <div>
          <div>Select {product.variants[0].variant_type}</div>
          <div className="flex gap-x-3 mt-4">
            {productVariants.map(variantProduct => {
              const middleIndex = Math.floor(productVariants.length / 2);
              const isMiddle =
                productVariants.indexOf(variantProduct) === middleIndex;
              const isSelected = productEntity
                ? productEntity.uid === variantProduct.uid
                : isMiddle;

              if (isMiddle && !productEntity) {
                setProductEntity(variantProduct);
              }

              return (
                <div
                  key={variantProduct.uid}
                  aria-label={variantProduct.variants[0].variant_value}
                  onClick={() => handleVariantSelection(variantProduct)}
                  className={clsx(
                    "group relative flex items-center justify-center rounded-md border border-gray-300 p-3 cursor-pointer",
                    isSelected && "border-indigo-600 bg-indigo-600",
                    !isSelected && "bg-white hover:bg-gray-200"
                  )}
                >
                  <span
                    className={clsx(
                      "text-sm font-medium  uppercase group-has-checked:text-white",
                      isSelected && "text-white",
                      !isSelected && "text-gray-900 group-hover:text-gray-800"
                    )}
                  >
                    {variantProduct.variants[0].variant_value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <div>Select quantity</div>
        <IncrementalInput
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          quantity={productQty}
        />
        {isInCart && quantityInCart}
      </div>

      <button
        onClick={handleAddToCart}
        type="submit"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
      >
        Add to cart
      </button>

      <div
        className={clsx(
          "bg-red-600 w-full h-full absolute left-0 transition-transform duration-300 ease-in-out p-4",
          !showCartStatus && "translate-y-full"
        )}
      >
        <button
          className={"absolute right-2 top-2"}
          onClick={handleCloseCartNotice}
        >
          ⤫
        </button>
        Added to cart
        <Button size={"medium"} href={"/store/checkout"}>
          View cart
        </Button>
      </div>
    </div>
  );
}
