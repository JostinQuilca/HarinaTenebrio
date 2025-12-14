"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { ImagePlaceholder } from "@/lib/placeholder-images"

export function ImageGalleryCarousel({ images }: { images: ImagePlaceholder[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 p-2 shadow-sm">
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
    </Carousel>
  )
}
