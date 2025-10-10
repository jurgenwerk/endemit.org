"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ProductImage } from "@/types/product";
import clsx from "clsx";
import ChevronPrevIcon from "@/components/icon/ChevronPrevIcon";
import ChevronNextIcon from "@/components/icon/ChevronNextIcon";

interface Props {
  images: ProductImage[];
  altFallbackText: string;
  width?: number;
  height?: number;
}

export default function ImageGallery({
  images,
  altFallbackText,
  width = 800,
  height = 800,
}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(newIndex);
  };

  return (
    <div className="mx-auto mt-6 group select-none">
      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
        <Image
          width={width}
          height={height}
          alt={images[0]?.alt ?? altFallbackText}
          src={images[0].src}
          className={clsx(
            "row-span-2 aspect-3/4 size-full rounded-lg object-cover",
            images.length === 1 && "col-span-3",
            (images.length === 2 || images.length === 3) && "col-span-2"
          )}
        />
        {images[1] && (
          <Image
            width={width}
            height={height}
            alt={images[1]?.alt ?? altFallbackText}
            src={images[1].src}
            className={clsx(
              "col-start-2 aspect-3/2 size-full rounded-lg object-cover",
              images.length === 2 && "col-start-3 row-span-2",
              images.length === 3 && "col-start-3"
            )}
          />
        )}
        {images[2] && (
          <Image
            width={width}
            height={height}
            alt={images[2]?.alt ?? altFallbackText}
            src={images[2].src}
            className={clsx(
              "col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover",
              images.length === 3 && "col-start-3"
            )}
          />
        )}
        {images[3] && (
          <Image
            width={width}
            height={height}
            alt={images[3]?.alt ?? altFallbackText}
            src={images[3].src}
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover"
          />
        )}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden relative">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          onScroll={e => {
            const slideIndex = Math.round(
              e.currentTarget.scrollLeft / e.currentTarget.offsetWidth
            );
            setCurrentSlide(slideIndex);
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full snap-center">
              <Image
                width={width}
                height={height}
                alt={image?.alt ?? altFallbackText}
                src={image.src}
                className="aspect-4/5 w-full rounded-lg object-cover h-full"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 bg-opacity-20 text-opacity-50 group-hover:text-opacity-90 hover:scale-110 active:scale-95 group-hover:bg-opacity-50  rounded-full p-2 shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ChevronPrevIcon />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 bg-opacity-20 text-opacity-50 group-hover:text-opacity-90 hover:scale-110 active:scale-95 group-hover:bg-opacity-50  rounded-full p-2 shadow-lg transition-all"
              aria-label="Next image"
            >
              <ChevronNextIcon />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        <div className="-mt-6 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-gray-900 w-4"
                  : "bg-gray-300 bg-opacity-70 group-hover:bg-opacity-100 transition-opacity hover:scale-125 active:scale-95"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
