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
import { cn } from "@/lib/utils";

interface ImageGalleryCarouselProps {
  images: ImagePlaceholder[];
}

export function ImageGalleryCarousel({ images }: ImageGalleryCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaApi, setEmblaApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial index
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);


  return (
    <Carousel
      setApi={setEmblaApi}
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="relative h-auto aspect-video">
        {images.map((image, index) => (
          <CarouselItem 
            key={image.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === selectedIndex ? "opacity-100" : "opacity-0"
            )}
           >
            <div className="p-1 h-full">
              <div className="relative h-full overflow-hidden rounded-lg bg-muted/20 p-2 shadow-sm">
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
