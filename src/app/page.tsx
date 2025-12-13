import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { menuData } from "@/lib/data";
import type { Course } from "@/lib/types";
import { BookHeart, ChevronDown, FlaskConical, Leaf, ListOrdered, School, Smile } from "lucide-react";

const CourseDetails = ({ course }: { course: Course }) => (
  <div className="border-t border-border/80 pt-6 space-y-8 text-base">
    <div className="space-y-3">
      <h4 className="flex items-center gap-3 font-headline text-xl text-primary"><BookHeart className="w-5 h-5 text-accent flex-shrink-0"/>Storytelling: La Vida Universitaria</h4>
      <p className="text-muted-foreground text-pretty leading-relaxed">{course.storytelling}</p>
    </div>

    <div className="grid md:grid-cols-5 gap-8">
      <div className="md:col-span-3 space-y-3">
        <h4 className="flex items-center gap-3 font-headline text-xl text-primary"><ListOrdered className="w-5 h-5 text-accent flex-shrink-0"/>Pasos de Elaboración</h4>
        <ol className="list-decimal list-outside pl-5 space-y-2 text-muted-foreground marker:text-primary marker:font-semibold">
          {course.steps.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>

      <div className="md:col-span-2 space-y-6">
        <div className="space-y-3">
          <h4 className="flex items-center gap-3 font-headline text-xl text-primary"><FlaskConical className="w-5 h-5 text-accent flex-shrink-0"/>Técnicas</h4>
          <p className="text-muted-foreground">{course.techniques}</p>
        </div>
        <div className="space-y-3">
          <h4 className="flex items-center gap-3 font-headline text-xl text-primary"><Smile className="w-5 h-5 text-accent flex-shrink-0"/>Perfil Sensorial</h4>
          <p className="text-muted-foreground">{course.sensoryProfile}</p>
        </div>
      </div>
    </div>

    <div className="space-y-3">
        <h4 className="flex items-center gap-3 font-headline text-xl text-primary"><Leaf className="w-5 h-5 text-accent flex-shrink-0"/>Objetivos de Desarrollo Sostenible (ODS)</h4>
        <ul className="list-disc list-outside pl-5 space-y-1.5 text-muted-foreground">
          {course.ods.map((ods, i) => <li key={i}>{ods}</li>)}
        </ul>
    </div>

    <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
        <h4 className="flex items-center gap-3 font-headline text-xl text-primary"><School className="w-5 h-5 text-accent flex-shrink-0"/>Sustento Académico</h4>
        <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground text-pretty">
          {course.academicSustenance}
        </blockquote>
    </div>
  </div>
);

export default function OchoTiemposPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="py-12 md:py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl text-primary/90 leading-tight">Aplicación de harina de Tenebrio Molitor en un menú de 8 tiempos</h1>
          <p className="mt-4 text-xl md:text-2xl text-primary/80">Ocho Tiempos</p>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 pb-12 md:pb-24">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Una travesía culinaria que narra las etapas de la vida universitaria, fusionando tradición e innovación sostenible. Cada plato, una historia. Cada bocado, una lección aprendida.
            </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto space-y-4">
          {menuData.map((course) => (
            <AccordionItem key={course.id} value={`item-${course.id}`} className="border-none">
              <div className="border border-border/70 bg-card rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md focus-within:shadow-md data-[state=open]:shadow-lg data-[state=open]:border-border">
                <AccordionTrigger className="p-4 md:p-6 text-left hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background rounded-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 w-full">
                    <div className="w-full sm:w-32 md:w-40 h-40 sm:h-auto sm:aspect-square flex-shrink-0 rounded-lg overflow-hidden relative group">
                      <Image 
                        src={course.image.src} 
                        alt={course.image.alt} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-105" 
                        data-ai-hint={course.image.aiHint}
                        sizes="(max-width: 640px) 100vw, 10rem"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-accent uppercase tracking-widest">{course.courseNumber}</p>
                      <h3 className="font-headline text-2xl md:text-3xl text-primary mt-1">{course.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground text-pretty line-clamp-2">{course.description}</p>
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-accent transition-transform duration-200 ml-auto hidden sm:block group-data-[state=open]:rotate-180" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <CourseDetails course={course} />
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      
      <footer className="py-8 mt-16 border-t border-border/80">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ocho Tiempos. Un concepto gastronómico innovador.</p>
        </div>
      </footer>
    </div>
  );
}
