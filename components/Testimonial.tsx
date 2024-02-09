import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import testimonials from "@/Utilities/testimonial";

type Props = {};

export default function Testimonial({}: Props) {
  return (
    <>
      <section className="container py-4 mx-auto">
        <h1 className="font-semibold text-3xl pb-6">Our Customer Feedback</h1>
        <Carousel className="w-full max-w-mid">
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-1 md:basis-1/2 lg:basis-2/6"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="p-6 text-sm bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                        <p className="text-gray-500 dark:text-gray-300">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center mt-6">
                          <Image
                            className="object-cover rounded-full w-10 h-10"
                            src={testimonial.imageUrl}
                            alt={`${testimonial.author}'s Image`}
                            width={45}
                            height={45}
                          />
                          <div className="mx-4">
                            <h1 className="font-semibold text-blue-500">
                              {testimonial.author}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
