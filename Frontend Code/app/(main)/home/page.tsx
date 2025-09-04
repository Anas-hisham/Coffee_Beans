"use client";
import Image from "next/image";
import React, { useState } from "react";
import homeImg from "@/public/assets/imgs/Home Page.jpg";
import Input from "@/components/ui/Input";
import { COLORS, TEXT_STYLES } from "@/constants";
import { FaStar } from "react-icons/fa";
import userPic from "@/public/assets/imgs/Peronsal Image.png";
import coffee from "@/public/assets/imgs/7532764.jpg";
import Button from "@/components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  // state to track active tab
  const [activeTab, setActiveTab] = useState<"details" | "drinks">("details");

  const drinksData = [
    { name: "فانيليا سويت كوفي", price: "47.50", quantity: 1, id: 1 },
    { name: "كاراميل ماكياتو", price: "55.00", quantity: 1, id: 2 },
    { name: "موكا مثلج", price: "52.00", quantity: 1, id: 3 },
    { name: "سبانيش لاتيه", price: "60.00", quantity: 1, id: 4 },
    { name: "أمريكانو", price: "35.00", quantity: 1, id: 5 },
    { name: "كابتشينو", price: "45.00", quantity: 1, id: 6 },
    { name: "قهوة تركي", price: "30.00", quantity: 1, id: 7 },
    { name: "إسبريسو", price: "28.00", quantity: 1, id: 8 },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems
    .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);

  const reviews = [
    {
      name: "انس هشام",
      title: "مهندس برمجيات",
      rating: 5,
      comment:
        "كويس للشغل، النت سريع والمقاعد مريحة. في كهربا كتير، بس محتاجين يضيفوا حجز أونلاين للطاولات.",
      id: 1,
    },
    {
      name: "انس هشام",
      title: "مهندس برمجيات",
      rating: 5,
      comment:
        "كويس للشغل، النت سريع والمقاعد مريحة. في كهربا كتير، بس محتاجين يضيفوا حجز أونلاين للطاولات.",
      id: 2,
    },
  ];

  return (
    <div className="px-8 text-right">
      {/* Image */}
      <div className="flex justify-center">
        <Image src={homeImg} alt="Home" height={300} className="rounded-4xl" />
      </div>

      {/* Input */}
      <div className="mt-8">
        <Input
          isLocation
          headline="كافهينو"
          placeholder="المعادي - شارع النصر"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-8">
        <div
          onClick={() => setActiveTab("details")}
          className={`cursor-pointer px-4 py-2  transition w-full text-center
            ${activeTab === "details" ? "border-b-2 font-bold" : ""}`}
          style={{
            ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H6,
            color: COLORS.TEXT,
            ...(activeTab === "details"
              ? {
                  color: COLORS.BRAND_PRIMARY,
                  borderColor: COLORS.BRAND_PRIMARY,
                }
              : {}),
          }}
        >
          تفاصيل الكافيه
        </div>

        <div
          onClick={() => setActiveTab("drinks")}
          className={`cursor-pointer px-4 py-2 transition w-full text-center
    ${activeTab === "drinks" ? "border-b-2 font-bold" : ""}`}
          style={{
            color: COLORS.TEXT,
            ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H6,
            ...(activeTab === "drinks"
              ? {
                  color: COLORS.BRAND_PRIMARY,
                  borderColor: COLORS.BRAND_PRIMARY,
                }
              : {}),
          }}
        >
          المشروبات
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "details" && (
          <div>
            <Input
              headline="وصف الكافيه"
              placeholder="كُوفي شوب أنيق يجمع بين الدفء والحداثة، مصمم بديكور يجمع بين الطابع الكلاسيكي واللمسات العصرية. يتميز بأجواء هادئة تناسب العمل والدراسة، مع موسيقى خفيفة تزيد من استرخاء الزوار."
              isDesciption={true}
            />

            {/* Reviews Section */}
            <div className="mt-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-row-reverse gap-4 mb-6"
                >
                  <div>
                    <Image
                      src={userPic}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover object-top w-12 h-12"
                    />
                  </div>
                  <div className="flex-1 ">
                    <div className="flex items-center justify-between flex-row-reverse">
                      <div>
                        <h4
                          style={{ color: COLORS.TEXT }}
                          className="font-bold text-lg"
                        >
                          {review.name}
                        </h4>
                        <p style={{ color: COLORS.GRAY }} className=" ">
                          {review.title}
                        </p>
                      </div>
                      <div className="flex ">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p
                      className="mt-2"
                      style={{
                        color: COLORS.GRAY,
                        ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                      }}
                    >
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DRINKS TAB */}
        {activeTab === "drinks" && (
          <div>
            {drinksData.map((item) => {
              const cartItem = cartItems.find((ci) => ci.id === item.id);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 p-4 rounded-xl flex-row-reverse"
                  style={{ borderColor: COLORS.STROKE }}
                >
                  <div className="flex flex-row-reverse gap-6 items-center">
                    <Image
                      src={coffee}
                      alt={"Coffee Cup"}
                      width={48}
                      height={48}
                      className="rounded-full object-cover object-top w-12 h-12"
                    />
                    <div className="flex flex-col text-right">
                      {/* Name - switches to primary if in cart */}
                      <span
                        style={{
                          ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H6,
                          color:
                            cartItem && cartItem.quantity > 0
                              ? COLORS.BRAND_PRIMARY
                              : COLORS.TEXT,
                        }}
                      >
                        {item.name}
                      </span>

                      {/* Price */}
                      <span
                        style={{
                          ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                          color:
                            cartItem && cartItem.quantity > 0
                              ? COLORS.BRAND_PRIMARY
                              : COLORS.GRAY,
                        }}
                      >
                        {item.price} جنيه
                      </span>
                    </div>
                  </div>
                  {/* Actions */}
                  {cartItem ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          cartItem.quantity > 1
                            ? dispatch(decreaseQuantity(item.id))
                            : dispatch(removeFromCart(item.id))
                        }
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>

                      <span>{cartItem.quantity}</span>

                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <div className="w-20">
                      <Button
                        isMain
                        text="Add"
                        onClick={() => dispatch(addToCart(item))}
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Total */}
            {cartItems.length > 0 && (
              <div
                className="flex justify-between items-center mt-8 pt-4 border-t"
                style={{ borderColor: COLORS.STROKE }}
              >
                <span
                  style={{
                    ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H5,
                    color: COLORS.TEXT,
                  }}
                  className="mr-6"
                >
                  {totalCost} جنيه
                </span>
                <Button
                  isMain
                  text="اطلب الان"
                  onClick={() => router.push("/payment")}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
