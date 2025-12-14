import { menuData, references } from "@/lib/data";
import type { Course } from "@/lib/types";
import { BookHeart, FlaskConical, Leaf, ListOrdered, School, Smile, Wheat, IceCream2, CookingPot, Shell, Bean, CakeSlice, Dessert, GlassWater, MoveRight, Users, University, Droplets } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CourseCard = ({ course }: { course: Course }) => {
  const icons: { [key: number]: React.ReactNode } = {
    1: <Wheat className="w-12 h-12 text-accent" strokeWidth={1} />,
    2: <IceCream2 className="w-12 h-12 text-accent" strokeWidth={1} />,
    3: <CookingPot className="w-12 h-12 text-accent" strokeWidth={1} />,
    4: <Shell className="w-12 h-12 text-accent" strokeWidth={1} />,
    5: <Bean className="w-12 h-12 text-accent" strokeWidth={1} />,
    6: <CakeSlice className="w-12 h-12 text-accent" strokeWidth={1} />,
    7: <Dessert className="w-12 h-12 text-accent" strokeWidth={1} />,
    8: <GlassWater className="w-12 h-12 text-accent" strokeWidth={1} />,
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-card rounded-lg overflow-hidden group cursor-pointer text-left flex flex-col h-full shadow-sm border border-transparent hover:border-accent/50 hover:shadow-md transition-all duration-300">
          <div className="p-6 flex flex-col items-start gap-4 flex-grow">
            <div className="flex items-center gap-6">
              {icons[course.id] || <Dessert className="w-12 h-12 text-accent" strokeWidth={1} />}
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">{course.courseNumber}</p>
                <h3 className="font-headline text-2xl text-primary mt-1">{course.title}</h3>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground text-pretty flex-grow leading-relaxed">{course.description}</p>
          </div>
           <div className="p-6 pt-0 mt-auto">
            <p className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest group-hover:underline">
              Ver más
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-background">
        <DialogHeader>
          <p className="text-sm font-bold text-accent uppercase tracking-widest">{course.courseNumber}</p>
          <DialogTitle className="font-headline text-3xl md:text-4xl text-primary">{course.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-6">
          <div className="space-y-6 text-sm py-4">
            
            <div className="space-y-3">
              <h4 className="flex items-center gap-3 font-headline text-base text-primary"><Users className="w-4 h-4 text-accent flex-shrink-0"/>Storytelling (Amistad)</h4>
              <p className="text-muted-foreground text-pretty leading-relaxed text-xs">{course.storytellingFriendship}</p>
            </div>

            {course.storytellingUniversity && (
              <div className="space-y-3">
                <h4 className="flex items-center gap-3 font-headline text-base text-primary"><University className="w-4 h-4 text-accent flex-shrink-0"/>Storytelling (Vida Universitaria)</h4>
                <p className="text-muted-foreground text-pretty leading-relaxed text-xs">{course.storytellingUniversity}</p>
              </div>
            )}

            <div className="space-y-3">
              <h4 className="flex items-center gap-3 font-headline text-base text-primary"><BookHeart className="w-4 h-4 text-accent flex-shrink-0"/>Características</h4>
              <ul className="list-disc list-outside pl-4 space-y-1 text-muted-foreground text-xs">
                {course.characteristics.map((char, i) => <li key={i}>{char}</li>)}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="flex items-center gap-3 font-headline text-base text-primary"><ListOrdered className="w-4 h-4 text-accent flex-shrink-0"/>Pasos Clave</h4>
              <ol className="list-decimal list-outside pl-4 space-y-1.5 text-muted-foreground text-xs marker:text-accent/80 marker:font-semibold">
                {course.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-headline text-primary"><FlaskConical className="w-3.5 h-3.5 text-accent flex-shrink-0"/>Técnicas</h4>
                <p className="text-muted-foreground">{course.techniques}</p>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-headline text-primary"><Smile className="w-3.5 h-3.5 text-accent flex-shrink-0"/>Perfil Sensorial</h4>
                <p className="text-muted-foreground">{course.sensoryProfile}</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
                <h4 className="flex items-center gap-3 font-headline text-base text-primary"><Leaf className="w-4 h-4 text-accent flex-shrink-0"/>Sostenibilidad (ODS)</h4>
                <ul className="list-disc list-outside pl-4 space-y-1 text-muted-foreground text-xs">
                  {course.ods.map((ods, i) => <li key={i}>{ods}</li>)}
                </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="flex items-center gap-3 font-headline text-base text-primary">
                <Droplets className="w-4 h-4 text-accent flex-shrink-0"/>Huella Hídrica ({course.waterFootprintPercentage}%)
              </h4>
              <p className="text-muted-foreground text-pretty leading-relaxed text-xs">{course.waterFootprintJustification}</p>
            </div>

            <div className="space-y-3 bg-secondary/50 p-4 rounded-lg">
                <h4 className="flex items-center gap-3 font-headline text-base text-primary"><School className="w-4 h-4 text-accent flex-shrink-0"/>Sustento Académico</h4>
                <blockquote className="border-l-2 border-accent pl-3 italic text-muted-foreground text-pretty text-xs">
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
      <header className="py-24 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight">Aplicación de harina de Tenebrio Molitor en un menú de 8 tiempos</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 pb-12 md:pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-headline text-2xl text-primary">La incorporación de ingredientes no convencionales en la cocina profesional representa una oportunidad para replantear los modelos tradicionales de consumo y producción.</h2>
            <div className="flex justify-center my-6">
                <div className="w-24 h-px bg-accent"></div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Una travesía que narra las etapas de la vida universitaria, fusionando tradición e innovación sostenible. Cada plato es una historia; cada bocado, una lección. Descubra cómo la harina de Tenebrio molitor redefine la gastronomía.
            </p>
        </div>

        <section className="mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline text-3xl text-primary">El Ciclo de Vida del Tenebrio Molitor</h2>
              <div className="flex justify-center my-4">
                  <div className="w-20 h-px bg-accent"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Desde el huevo hasta el escarabajo adulto, el Tenebrio molitor ofrece una fuente de proteína sostenible en cada una de sus etapas clave.
              </p>
          </div>
          {tenebrioLifecycleImage && (
            <div className="w-full max-w-3xl mx-auto">
              <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9 bg-muted">
                  <Image
                    src={tenebrioLifecycleImage.imageUrl}
                    alt={tenebrioLifecycleImage.description}
                    width={1200}
                    height={675}
                    className="object-contain w-full h-full"
                    data-ai-hint={tenebrioLifecycleImage.imageHint}
                  />
              </div>
            </div>
          )}
        </section>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {menuData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      
      <footer className="py-10 mt-16 bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p className="font-bold mb-4">Referencias (APA)</p>
          <ul className="space-y-1 text-xs text-muted-foreground/80">
            {references.map((ref, i) => <li key={i}>{ref}</li>)}
          </ul>
          <p className="mt-8">&copy; {new Date().getFullYear()} Un concepto gastronómico innovador.</p>
        </div>
      </footer>
    </div>
  );
}
