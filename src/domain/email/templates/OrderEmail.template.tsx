import * as React from "react";
import { MainLayout } from "@/domain/email/templates/Main.layout";
import { Order } from "@prisma/client";
import { Img, Text } from "@react-email/components";
import { formatPrice } from "@/lib/formatting";
import { CustomStripeLineItem } from "@/types/checkout";

interface Props {
  order: Order;
}

export default function OrderEmailTemplate({ order }: Props) {
  const orderItems = JSON.parse(
    order.items as string
  ) as CustomStripeLineItem[];

  return (
    <MainLayout>
      <div>
        <h1>
          Your Order for {order.id} {order.totalAmount}
        </h1>
        <div>Thank you for shopping at endemit</div>

        <table className="mb-4 w-full">
          <thead>
            <tr>
              <th className="border-b border-gray-200 py-2">&nbsp;</th>
              <th
                align="left"
                className="border-b border-gray-200 py-2 text-gray-500"
                colSpan={6}
              >
                <Text className="font-semibold">Product</Text>
              </th>
              <th
                align="center"
                className="border-b border-gray-200 py-2 text-gray-500"
              >
                <Text className="font-semibold">Quantity</Text>
              </th>
              <th
                align="center"
                className="border-b border-gray-200 py-2 text-gray-500"
              >
                <Text className="font-semibold">Price</Text>
              </th>
              <th
                align="center"
                className="border-b border-gray-200 py-2 text-gray-500"
              >
                <Text className="font-semibold">Total</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {orderItems &&
              orderItems.length > 0 &&
              orderItems.map((item, index) => {
                return (
                  <tr key={`order-item-${index}`}>
                    <td className="border-b border-gray-200 py-2">
                      <Img
                        alt={item.price_data?.product_data?.name}
                        className="rounded-lg object-cover"
                        height={110}
                        src={
                          item.price_data?.product_data?.images &&
                          item.price_data?.product_data?.images[0]
                        }
                      />
                    </td>
                    <td
                      align="left"
                      className="border-b border-gray-200 py-2"
                      colSpan={6}
                    >
                      <Text>{item.price_data?.product_data?.name}</Text>
                    </td>
                    <td
                      align="center"
                      className="border-b border-gray-200 py-2"
                    >
                      <Text>{item.quantity}</Text>
                    </td>
                    <td
                      align="center"
                      className="border-b border-gray-200 py-2"
                    >
                      <Text>
                        {item.price_data?.unit_amount &&
                          formatPrice(item.price_data?.unit_amount)}
                      </Text>
                    </td>
                    <td
                      align="center"
                      className="border-b border-gray-200 py-2"
                    >
                      <Text>
                        {item.price_data?.unit_amount &&
                          item.quantity &&
                          formatPrice(
                            item.quantity * item.price_data?.unit_amount
                          )}
                      </Text>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
