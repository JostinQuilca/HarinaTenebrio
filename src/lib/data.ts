import type { Course } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return { src: "", alt: "Placeholder", aiHint: "" };
  }
  return { src: image.imageUrl, alt: image.description, aiHint: image.imageHint };
};

export const menuData: Course[] = [
  {
    id: 1,
    courseNumber: "Primer Tiempo",
    title: "AZAHAR DEL HORNO",
    description: "Focaccia de arándanos y jamón serrano con harina de Tenebrio molitor, acompañada de mantequilla saborizada y queso crema.",
    storytelling: "Este primer tiempo simboliza el inicio de la vida universitaria, el momento en que el estudiante abandona lo conocido para adentrarse en un nuevo entorno académico. El azahar, flor asociada al comienzo de los ciclos, representa el primer contacto con el conocimiento formal, mientras que la focaccia remite a lo familiar. La harina de Tenebrio molitor introduce la innovación y el pensamiento crítico, elementos fundamentales del proceso formativo universitario.",
    characteristics: [
      "Preparación panaria contemporánea.",
      "Integración de ingredientes alternativos.",
      "Adaptable a menús sostenibles.",
    ],
    steps: [
      "Mezcla de harinas (75 % trigo, 25 % Tenebrio molitor).",
      "Hidratación y amasado.",
      "Fermentación controlada.",
      "Incorporación de arándanos y jamón.",
      "Horneado.",
      "Elaboración de mantequilla saborizada.",
      "Montaje final.",
    ],
    techniques: "Amasado directo, fermentación, horneado, cremado, montaje.",
    sensoryProfile: "Notas tostadas, frutales y salinas; textura esponjosa y miga densa.",
    ods: [
      "ODS 4: Educación de calidad, al promover la innovación y el pensamiento crítico.",
      "ODS 12: Producción y consumo responsables, mediante el uso de ingredientes alternativos sostenibles.",
    ],
    academicSustenance: "El uso de insectos comestibles en productos panarios ha demostrado ser viable tanto sensorial como ambientalmente, favoreciendo modelos alimentarios más sostenibles (Van Huis et al., 2013; FAO, 2013).",
    image: { id: "focaccia-bread" },
  },
  {
    id: 2,
    courseNumber: "Segundo Tiempo",
    title: "FLOR DE MANGO SILVESTRE",
    description: "Sorbet de mango con espuma de uvilla, gel de mora y crumble de cacao elaborado con 25 % de harina de Tenebrio molitor.",
    storytelling: "Representa la etapa de exploración y adaptación en los primeros semestres universitarios. La frescura del sorbet simboliza la curiosidad intelectual y la experimentación constante, mientras que el crumble aporta estructura, reflejando el inicio del pensamiento académico organizado.",
    characteristics: [
      "Preparación fría.",
      "Contraste de texturas.",
      "Enfoque sensorial.",
    ],
    steps: [
      "Base de sorbet.",
      "Congelación y turbinar.",
      "Espuma de uvilla.",
      "Gelificación de mora.",
      "Crumble con harina de insecto.",
      "Emplatado.",
    ],
    techniques: "Sorbetización, gelificación, espumado, horneado.",
    sensoryProfile: "Ácido-dulce, fresco, crujiente.",
    ods: [
      "ODS 3: Salud y bienestar, por el uso de preparaciones ligeras y balanceadas.",
      "ODS 13: Acción por el clima, al priorizar técnicas de bajo impacto ambiental.",
    ],
    academicSustenance: "Diversos estudios indican que las preparaciones frías y el uso de ingredientes de bajo impacto reducen la huella ambiental de los alimentos (Oonincx & de Boer, 2012).",
    image: { id: "mango-sorbet" },
  },
  {
    id: 3,
    courseNumber: "Tercer Tiempo",
    title: "CRISANTEMO UMAMI",
    description: "Gyoza de cerdo y verduras con masa al 25 % de harina de Tenebrio molitor, salsa de soja y ajonjolí.",
    storytelling: "Simboliza la consolidación académica, cuando el estudiante comienza a dominar conceptos complejos. El crisantemo representa profundidad y perseverancia, asociadas al desarrollo del pensamiento analítico.",
    characteristics: [
      "Cocina asiática reinterpretada.",
      "Enfoque en umami.",
      "Cocción mixta.",
    ],
    steps: [
      "Masa con harina mixta.",
      "Relleno.",
      "Plegado.",
      "Sellado y vapor.",
      "Salsa.",
      "Servicio.",
    ],
    techniques: "Amasado, plegado, vaporización, reducción.",
    sensoryProfile: "Umami intenso, jugoso y crujiente.",
    ods: [
      "ODS 2: Hambre cero, al promover fuentes alternativas de proteína.",
      "ODS 12: Producción responsable, por la integración de insectos como recurso eficiente.",
    ],
    academicSustenance: "La harina de Tenebrio molitor ha sido ampliamente reconocida como una alternativa sostenible a proteínas tradicionales, con menor huella hídrica y ambiental (Rumpold & Schlüter, 2013).",
    image: { id: "gyoza-dumplings" },
  },
  {
    id: 4,
    courseNumber: "Cuarto Tiempo",
    title: "MAGNOLIA DE MESA",
    description: "Ravioles de pollo con masa fresca al 25 % de harina de Tenebrio molitor, salsa aurora y aceite de cebollín.",
    storytelling: "Representa la vida universitaria colaborativa, el trabajo en equipo y los aprendizajes compartidos, fundamentales en la formación profesional.",
    characteristics: [
      "Pasta fresca artesanal.",
      "Servicio inmediato.",
      "Técnica clásica reinterpretada.",
    ],
    steps: [
      "Masa fresca.",
      "Reposo y laminado.",
      "Relleno.",
      "Cocción.",
      "Salsa aurora.",
      "Emulsión y montaje.",
    ],
    techniques: "Pastificación, laminado, hervor, emulsión.",
    sensoryProfile: "Suave, lácteo, herbal.",
    ods: [
      "ODS 4: Educación de calidad.",
      "ODS 11: Comunidades sostenibles, al fomentar prácticas colaborativas y culturales.",
    ],
    academicSustenance: "La gastronomía es reconocida como una herramienta de cohesión social y transmisión cultural (Contreras & Gracia, 2005).",
    image: { id: "ravioli-pasta" },
  },
  {
    id: 5,
    courseNumber: "Quinto Tiempo",
    title: "RAÍZ DE DALIA",
    description: "Croqueta de yuca con masa al 25 % de harina de Tenebrio molitor, rellena de queso, salsa de aguacate y pollo.",
    storytelling: "Simboliza la construcción de la identidad profesional, integrando raíces culturales con innovación académica.",
    characteristics: [
      "Fritura controlada.",
      "Producto de contraste.",
      "Inspiración ancestral.",
    ],
    steps: [
      "Cocción y triturado de yuca.",
      "Mezcla con harina de insecto.",
      "Relleno.",
      "Empanizado.",
      "Fritura.",
      "Salsas.",
    ],
    techniques: "Triturado, empanizado, fritura, emulsión.",
    sensoryProfile: "Crujiente, cremoso, tostado.",
    ods: [
      "ODS 9: Industria, innovación e infraestructura.",
      "ODS 12: Consumo responsable.",
    ],
    academicSustenance: "La integración de ingredientes tradicionales y alternativos fortalece la sostenibilidad alimentaria y cultural (FAO, 2013).",
    image: { id: "yuca-croquette" },
  },
  {
    id: 6,
    courseNumber: "Sexto Tiempo",
    title: "PEONÍA DULCE",
    description: "Tarta Fraisier con bizcocho al 25 % de harina de Tenebrio molitor, crema pastelera y gel de maracuyá.",
    storytelling: "Representa los logros académicos y celebraciones, simbolizando el esfuerzo acumulado durante la carrera.",
    characteristics: [
      "Pastelería estratificada.",
      "Técnicas de precisión.",
    ],
    steps: [
      "Bizcocho.",
      "Crema pastelera.",
      "Gelificación.",
      "Montaje.",
    ],
    techniques: "Batido, emulsión, gelificación.",
    sensoryProfile: "Dulce-ácido, suave.",
    ods: [
      "ODS 8: Trabajo decente y crecimiento económico.",
      "ODS 12: Producción responsable.",
    ],
    academicSustenance: "La reformulación de productos de pastelería con ingredientes alternativos permite innovar sin perder aceptación sensorial (Caparros Megido et al., 2014).",
    image: { id: "fraisier-cake" },
  },
  {
    id: 7,
    courseNumber: "Séptimo Tiempo",
    title: "ROSA PERSISTENTE",
    description: "Cheesecake invertido con base al 25 % de harina de Tenebrio molitor, frutos rojos y chocolate rosado.",
    storytelling: "Simboliza el cierre del ciclo académico, cuando los aprendizajes se consolidan y permanecen.",
    characteristics: [
      "Postre contemporáneo.",
      "Juego visual y sensorial.",
    ],
    steps: [
      "Base horneada.",
      "Mezcla de queso.",
      "Gelificación.",
      "Inversión.",
      "Decoración.",
    ],
    techniques: "Cremado, horneado, inversión.",
    sensoryProfile: "Cremoso, dulce equilibrado.",
    ods: [
      "ODS 4: Educación de calidad.",
      "ODS 12: Producción responsable.",
    ],
    academicSustenance: "La aceptación sensorial es clave para la incorporación de nuevos ingredientes en la gastronomía contemporánea (Hartmann & Siegrist, 2017).",
    image: { id: "cheesecake-dessert" },
  },
  {
    id: 8,
    courseNumber: "Octavo Tiempo",
    title: "VIOLETA FINAL",
    description: "Licor cremoso de pétalos de rosa con 25 % de harina de Tenebrio molitor, acompañado de naranja deshidratada.",
    storytelling: "Representa la graduación y transición al mundo profesional, cerrando la experiencia universitaria como un recuerdo persistente.",
    characteristics: [
      "Preparación líquida.",
      "Cierre aromático del menú.",
    ],
    steps: [
      "Maceración.",
      "Filtrado.",
      "Emulsión.",
      "Deshidratación.",
      "Servicio.",
    ],
    techniques: "Maceración, emulsión, deshidratación.",
    sensoryProfile: "Floral, dulce, persistente.",
    ods: [
      "ODS 17: Alianzas para lograr los objetivos, al promover investigación y transferencia de conocimiento.",
      "ODS 12: Consumo responsable.",
    ],
    academicSustenance: "El desarrollo de productos innovadores a partir de insectos contribuye al avance científico y gastronómico sostenible (Van Huis, 2020).",
    image: { id: "rose-liqueur" },
  },
].map(course => ({
  ...course,
  image: getImage(course.image.id)
}));
