"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type ImagePlaceholder } from "@/lib/placeholder-images";

interface ImageGalleryCarouselProps {
  images: ImagePlaceholder[];
}

export function ImageGalleryCarousel({ images }: ImageGalleryCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="embla__fade">
        {images.map((image) => (
          <CarouselItem key={image.id} className="embla__fade-item">
            <div className="p-1">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted/20 p-2 shadow-sm">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover w-full h-full rounded"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
