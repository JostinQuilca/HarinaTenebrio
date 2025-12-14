import { menuData, references } from "@/lib/data";
import type { Course } from "@/lib/types";
import { BookHeart, FlaskConical, Leaf, ListOrdered, School, Smile, Wheat, IceCreamBowl, CookingPot, Shell, Bean, CakeSlice, Dessert, GlassWater, MoveRight, Users, University, Droplets, Sprout, Star } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaceHolderImages, traceabilityGallery } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ImageGalleryCarousel } from "@/components/ui/image-gallery-carousel";

const CourseCard = ({ course }: { course: Course }) => {
  const icons: { [key: number]: React.ReactNode } = {
    1: <Wheat className="w-10 h-10 text-accent" strokeWidth={1.5} />,
    2: <IceCreamBowl className="w-10 h-10 text-accent" strokeWidth={1.5} />,
    3: <CookingPot className="w-10 h-10 text-accent" strokeWidth={1.5} />,
    4: <Shell className="w-10 h-10 text-accent" strokeWidth={1.5} />,
    5: <Bean className="w-10 h-10 text-accent" strokeWidth={1.5} />,
    6: <CakeSlice className="w-10 h-10 text-accent" strokeWidth={1.5} />,
    7: <Dessert className="w-10 h-10 text-accent" strokeWidth={1.5} />,
    8: <GlassWater className="w-10 h-10 text-accent" strokeWidth={1.5} />,
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-card rounded-xl overflow-hidden group cursor-pointer text-left flex flex-col h-full shadow-sm border hover:border-accent/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-6 flex flex-col items-start gap-4 flex-grow">
            <div className="flex items-center gap-5">
              {icons[course.id] || <Dessert className="w-10 h-10 text-accent" strokeWidth={1.5} />}
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-widest">{course.courseNumber}</p>
                <h3 className="font-headline text-2xl lg:text-3xl text-primary mt-1">{course.title}</h3>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground text-pretty flex-grow leading-relaxed">{course.description}</p>
          </div>
           <div className="p-6 pt-0 mt-auto">
            <p className="flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-widest group-hover:underline">
              Ver más
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl bg-background">
        <DialogHeader>
          <p className="text-sm font-bold text-accent uppercase tracking-widest">{course.courseNumber}</p>
          <DialogTitle className="font-headline text-3xl md:text-4xl text-primary">{course.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm py-4">
            
            <div className="space-y-3">
              <h4 className="flex items-center gap-3 font-headline text-lg text-primary"><Users className="w-5 h-5 text-accent flex-shrink-0"/>Storytelling (Amistad)</h4>
              <p className="text-muted-foreground text-pretty leading-relaxed">{course.storytellingFriendship}</p>
            </div>

            {course.storytellingUniversity && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-3 font-headline text-lg text-primary"><University className="w-5 h-5 text-accent flex-shrink-0"/>Storytelling (Vida Universitaria)</h4>
                <p className="text-muted-foreground text-pretty leading-relaxed">{course.storytellingUniversity}</p>
              </div>
            )}

            <div className="space-y-3">
              <h4 className="flex items-center gap-3 font-headline text-lg text-primary"><ListOrdered className="w-5 h-5 text-accent flex-shrink-0"/>Pasos Clave</h4>
              <ol className="list-decimal list-outside pl-5 space-y-2 text-muted-foreground marker:text-accent/80 marker:font-semibold">
                {course.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <h4 className="flex items-center gap-3 font-headline text-lg text-primary"><FlaskConical className="w-5 h-5 text-accent flex-shrink-0"/>Técnicas</h4>
                <p className="text-muted-foreground">{course.techniques}</p>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-3 font-headline text-lg text-primary"><Smile className="w-5 h-5 text-accent flex-shrink-0"/>Perfil Sensorial</h4>
                <p className="text-muted-foreground">{course.sensoryProfile}</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
                <h4 className="flex items-center gap-3 font-headline text-lg text-primary"><Leaf className="w-5 h-5 text-accent flex-shrink-0"/>Sostenibilidad (ODS)</h4>
                <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
                  {course.ods.map((ods, i) => <li key={i}>{ods}</li>)}
                </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="flex items-center gap-3 font-headline text-lg text-primary">
                <Droplets className="w-5 h-5 text-accent flex-shrink-0"/>Huella Hídrica ({course.waterFootprintPercentage}%)
              </h4>
              <p className="text-muted-foreground text-pretty leading-relaxed">{course.waterFootprintJustification}</p>
            </div>

            <div className="space-y-3 bg-secondary/70 p-4 rounded-lg">
                <h4 className="flex items-center gap-3 font-headline text-lg text-primary"><School className="w-5 h-5 text-accent flex-shrink-0"/>Sustento Académico</h4>
                <blockquote className="border-l-2 border-accent pl-4 italic text-muted-foreground text-pretty">
                  {course.academicSustenance}
                </blockquote>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default function OchoTiemposPage() {
  const tenebrioLifecycleImage = PlaceHolderImages.find(img => img.id === 'tenebrio-lifecycle-diagram');
  
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="relative py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight mt-2">Harina de Tenebrio Molitor en 8 Tiempos</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 pb-12 md:pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-headline text-2xl md:text-3xl text-primary">Fusionando tradición e innovación sostenible.</h2>
            <div className="flex justify-center my-6">
                <div className="w-24 h-px bg-accent"></div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                La incorporación de ingredientes no convencionales en la cocina profesional representa una oportunidad para replantear los modelos tradicionales de consumo y producción.
            </p>
        </div>

        <section className="mb-16 md:mb-24 max-w-4xl mx-auto bg-card border rounded-xl shadow-sm p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline text-center w-full flex-col gap-4">
                  <h2 className="font-headline text-3xl text-primary">El Ciclo de Vida del Tenebrio Molitor</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm font-normal max-w-2xl mx-auto">
                    Desde el huevo hasta el escarabajo adulto, el Tenebrio molitor ofrece una fuente de proteína sostenible en cada una de sus etapas clave. Haz clic para ver el diagrama.
                  </p>
              </AccordionTrigger>
              <AccordionContent>
                {tenebrioLifecycleImage && (
                  <div className="w-full pt-8">
                    <div className="rounded-lg overflow-hidden bg-secondary/70 p-4">
                        <Image
                          src={tenebrioLifecycleImage.imageUrl}
                          alt={tenebrioLifecycleImage.description}
                          width={1200}
                          height={675}
                          className="object-contain w-full h-full rounded-md"
                          data-ai-hint={tenebrioLifecycleImage.imageHint}
                        />
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl text-primary">Trazabilidad y Sostenibilidad</h2>
            <div className="flex justify-center my-4">
                <div className="w-20 h-px bg-accent"></div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm mb-8 max-w-2xl mx-auto">
              Nuestro Tenebrio molitor se cría en un entorno controlado, garantizando un producto de alta calidad y un impacto ambiental mínimo. La trazabilidad completa desde la cría hasta la cosecha asegura un ingrediente puro y sostenible.
            </p>
          </div>
          <ImageGalleryCarousel images={traceabilityGallery} />
        </section>
        
        <div className="grid md:grid-cols-2 gap-8">
          {menuData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      
      <footer className="py-12 mt-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <h3 className="font-headline text-xl text-primary mb-4">Referencias (Formato APA)</h3>
          <ul className="space-y-2 text-xs max-w-3xl mx-auto">
            {references.map((ref, i) => <li key={i}>{ref}</li>)}
          </ul>
          <div className="flex justify-center my-8">
                <div className="w-16 h-px bg-border"></div>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} HarinaTenebrio. Un concepto gastronómico innovador.</p>
        </div>
      </footer>
    </div>
  );
}
