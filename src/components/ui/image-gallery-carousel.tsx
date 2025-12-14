"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type ImagePlaceholder } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

interface ImageGalleryCarouselProps {
  images: ImagePlaceholder[];
  /** Tiempo entre slides en ms */
  delay?: number;
  /** Pausar autoplay al interactuar */
  pauseOnInteraction?: boolean;
  /** Clases extra para el contenedor */
  className?: string;
}

export function ImageGalleryCarousel({
  images,
  delay = 3000,
  pauseOnInteraction = true,
  className,
}: ImageGalleryCarouselProps) {
  const autoplay = React.useRef(
    Autoplay({ delay, stopOnInteraction: pauseOnInteraction })
  );

  const [emblaApi, setEmblaApi] = React.useState<EmblaCarouselType | null>(null);

  if (!images?.length) return null;

  return (
    <Carousel
      setApi={setEmblaApi}
      plugins={[autoplay.current]}
      className={cn("w-full max-w-4xl mx-auto", className)}
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.reset()}
      opts={{ loop: true }}
      aria-roledescription="carousel"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.id}>
            <div className="p-1 h-full">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted/20 p-2 shadow-sm">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority={index === 0}
                  className="object-cover rounded"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        aria-label="Imagen anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 md:-left-12 bg-black/20 text-white border-none hover:bg-black/50"
      />
      <CarouselNext
        aria-label="Imagen siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 md:-right-12 bg-black/20 text-white border-none hover:bg-black/50"
      />
    </Carousel>
  );
}
