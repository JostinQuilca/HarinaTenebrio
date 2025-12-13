import Image from "next/image";
import { menuData } from "@/lib/data";
import type { Course } from "@/lib/types";
import { BookHeart, FlaskConical, Leaf, ListOrdered, School, Smile, ChefHat } from "lucide-react";

const CourseCard = ({ course }: { course: Course }) => (
  <div className="bg-card rounded-xl shadow-sm overflow-hidden border border-border/80 group transition-all duration-300 hover:shadow-lg hover:border-accent/50 flex flex-col">
    <div className="relative w-full h-56">
      <Image 
        src={course.image.src} 
        alt={course.image.alt} 
        fill 
        className="object-cover transition-transform duration-300 group-hover:scale-105" 
        data-ai-hint={course.image.aiHint}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-xs font-bold text-accent uppercase tracking-widest">{course.courseNumber}</p>
      <h3 className="font-headline text-2xl md:text-3xl text-primary mt-1">{course.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground text-pretty flex-grow">{course.description}</p>
      
      <div className="mt-6 pt-6 border-t border-border/60 space-y-6 text-sm">
        <div className="space-y-3">
          <h4 className="flex items-center gap-3 font-headline text-base text-primary"><BookHeart className="w-4 h-4 text-accent flex-shrink-0"/>Storytelling</h4>
          <p className="text-muted-foreground text-pretty leading-relaxed text-xs">{course.storytelling}</p>
        </div>

        <div className="space-y-3">
          <h4 className="flex items-center gap-3 font-headline text-base text-primary"><ListOrdered className="w-4 h-4 text-accent flex-shrink-0"/>Pasos Clave</h4>
          <ol className="list-decimal list-outside pl-4 space-y-1.5 text-muted-foreground text-xs marker:text-primary/80 marker:font-semibold">
            {course.steps.slice(0, 3).map((step, i) => <li key={i}>{step}</li>)}
             {course.steps.length > 3 && <li className="italic">y más...</li>}
          </ol>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 font-headline text-primary"><FlaskConical className="w-3.5 h-3.5 text-accent flex-shrink-0"/>Técnicas</h4>
            <p className="text-muted-foreground">{course.techniques}</p>
          </div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 font-headline text-primary"><Smile className="w-3.5 h-3.5 text-accent flex-shrink-0"/>Perfil</h4>
            <p className="text-muted-foreground">{course.sensoryProfile}</p>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-border/60">
            <h4 className="flex items-center gap-3 font-headline text-base text-primary"><Leaf className="w-4 h-4 text-accent flex-shrink-0"/>Sostenibilidad (ODS)</h4>
            <ul className="list-disc list-outside pl-4 space-y-1 text-muted-foreground text-xs">
              {course.ods.map((ods, i) => <li key={i}>{ods}</li>)}
            </ul>
        </div>
        
        <div className="space-y-3 bg-muted/50 p-3 rounded-lg">
            <h4 className="flex items-center gap-3 font-headline text-base text-primary"><School className="w-4 h-4 text-accent flex-shrink-0"/>Sustento Académico</h4>
            <blockquote className="border-l-2 border-accent pl-3 italic text-muted-foreground text-pretty text-xs">
              {course.academicSustenance}
            </blockquote>
        </div>
      </div>
    </div>
  </div>
);

export default function OchoTiemposPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="py-16 md:py-24 bg-muted/50 border-b border-border/60">
        <div className="container mx-auto text-center px-4">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight">Aplicación de harina de Tenebrio Molitor en un menú de 8 tiempos</h1>
          <p className="mt-4 text-lg md:text-xl text-primary/80 tracking-wide">Ocho Tiempos</p>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-headline text-2xl text-primary">Un Viaje Culinario a través de la Vida Universitaria</h2>
            <div className="flex justify-center my-6">
                <div className="w-24 h-px bg-accent"></div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Una travesía que narra las etapas de la vida universitaria, fusionando tradición e innovación sostenible. Cada plato es una historia; cada bocado, una lección. Descubra cómo la harina de Tenebrio molitor redefine la gastronomía.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {menuData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      
      <footer className="py-10 mt-16 bg-muted/50 border-t border-border/60">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p className="font-headline text-lg text-primary mb-2">Ocho Tiempos</p>
          <p>&copy; {new Date().getFullYear()} Un concepto gastronómico innovador.</p>
        </div>
      </footer>
    </div>
  );
}
