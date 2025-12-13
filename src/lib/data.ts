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
    description: "Focaccia de arándanos y jamón serrano, acompañada de mantequilla saborizada y queso crema.",
    storytelling: "Este primer tiempo simboliza el inicio de la vida universitaria, el momento en que el estudiante abandona lo conocido para adentrarse en un nuevo entorno académico. El azahar, flor asociada al comienzo de los ciclos, representa el primer contacto con el conocimiento formal, mientras que la focaccia remite a lo familiar y reconfortante del hogar que se deja atrás.",
    characteristics: [
      "Preparación panaria contemporánea.",
      "Combinación de sabores dulces y salados.",
      "Ideal para abrir el apetito.",
    ],
    steps: [
      "Preparación de la masa de focaccia con harina de trigo.",
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
      "ODS 4: Educación de calidad, al promover la creatividad y el aprecio por la tradición.",
      "ODS 12: Producción y consumo responsables, mediante el uso de ingredientes locales y de temporada.",
    ],
    academicSustenance: "El pan como elemento cultural ha sido un pilar en la dieta mediterránea, y su elaboración artesanal representa una conexión con la historia y la tierra (Morell, 2009).",
    image: { id: "focaccia-bread" },
  },
  {
    id: 2,
    courseNumber: "Segundo Tiempo",
    title: "FLOR DE MANGO SILVESTRE",
    description: "Sorbet de mango con espuma de uvilla, gel de mora y crumble de cacao.",
    storytelling: "Representa la etapa de exploración y adaptación en los primeros semestres. La frescura del sorbet simboliza la curiosidad intelectual y la experimentación constante, mientras que el crumble aporta estructura, reflejando el inicio del pensamiento académico organizado y las primeras bases sólidas de conocimiento.",
    characteristics: [
      "Preparación fría y refrescante.",
      "Contraste de texturas y acidez.",
      "Enfoque en frutas exóticas.",
    ],
    steps: [
      "Base de sorbet de mango natural.",
      "Congelación y turbinar.",
      "Espuma de uvilla.",
      "Gelificación de mora.",
      "Elaboración del crumble de cacao tradicional.",
      "Emplatado.",
    ],
    techniques: "Sorbetización, gelificación, espumado, horneado.",
    sensoryProfile: "Ácido-dulce, fresco, crujiente.",
    ods: [
      "ODS 3: Salud y bienestar, por el uso de preparaciones ligeras y basadas en fruta.",
      "ODS 13: Acción por el clima, al priorizar técnicas de bajo impacto energético y productos de cercanía.",
    ],
    academicSustenance: "El uso de frutas locales y técnicas de cocina de bajo impacto energético contribuye a la soberanía alimentaria y a la reducción de la huella de carbono en la gastronomía (Garnett, 2011).",
    image: { id: "mango-sorbet" },
  },
  {
    id: 3,
    courseNumber: "Tercer Tiempo",
    title: "CRISANTEMO UMAMI",
    description: "Gyoza de cerdo y verduras con masa tradicional, servidas con salsa de soja y ajonjolí.",
    storytelling: "Simboliza la consolidación académica, cuando el estudiante comienza a dominar conceptos complejos. La gyoza, con su técnica precisa de plegado, representa la estructura y el orden del pensamiento analítico, mientras que el sabor umami profundo refleja la profundidad del conocimiento adquirido.",
    characteristics: [
      "Cocina asiática clásica.",
      "Enfoque en el sabor umami.",
      "Técnica de cocción mixta (sellado y vapor).",
    ],
    steps: [
      "Elaboración de masa tradicional para gyoza.",
      "Preparación del relleno de cerdo y verduras.",
      "Plegado artesanal de las piezas.",
      "Sellado a la plancha y cocción al vapor.",
      "Preparación de la salsa.",
      "Servicio inmediato.",
    ],
    techniques: "Amasado, plegado, vaporización, reducción.",
    sensoryProfile: "Umami intenso, jugoso y crujiente en la base.",
    ods: [
      "ODS 8: Trabajo decente y crecimiento económico, al valorar técnicas artesanales.",
      "ODS 11: Ciudades y comunidades sostenibles, promoviendo la diversidad cultural a través de la comida.",
    ],
    academicSustenance: "La cocina asiática ha influido globalmente, introduciendo técnicas y sabores que enriquecen la gastronomía contemporánea. El umami es reconocido como el quinto sabor básico, fundamental para la complejidad sensorial (Ikeda, 2002).",
    image: { id: "gyoza-dumplings" },
  },
  {
    id: 4,
    courseNumber: "Cuarto Tiempo",
    title: "MAGNOLIA DE MESA",
    description: "Ravioles caseros de pollo con masa fresca tradicional, bañados en una delicada salsa aurora y aceite de cebollín.",
    storytelling: "Representa la vida universitaria colaborativa. Así como cada raviol encierra un relleno, los estudiantes guardan conocimientos que, al unirse en trabajos grupales (la salsa que los une), crean un resultado más completo y enriquecedor. Simboliza el trabajo en equipo y los aprendizajes compartidos.",
    characteristics: [
      "Pasta fresca artesanal.",
      "Salsa clásica de la cocina francesa.",
      "Plato reconfortante y elegante.",
    ],
    steps: [
      "Elaboración de la masa fresca de pasta.",
      "Reposo y laminado.",
      "Preparación del relleno de pollo.",
      "Cocción de los ravioles.",
      "Elaboración de la salsa aurora.",
      "Emulsión con aceite de cebollín y montaje.",
    ],
    techniques: "Pastificación, laminado, hervor, emulsión.",
    sensoryProfile: "Suave, lácteo, herbal.",
    ods: [
      "ODS 4: Educación de calidad, fomentando el aprendizaje colaborativo.",
      "ODS 17: Alianzas para lograr los objetivos, como metáfora de la colaboración.",
    ],
    academicSustenance: "La gastronomía es reconocida como una herramienta de cohesión social y transmisión cultural, donde las recetas y técnicas se comparten y evolucionan en comunidad (Contreras & Gracia, 2005).",
    image: { id: "ravioli-pasta" },
  },
  {
    id: 5,
    courseNumber: "Quinto Tiempo",
    title: "RAÍZ DE DALIA",
    description: "Croqueta de yuca rellena de queso, acompañada de una suave salsa de aguacate y hebras de pollo.",
    storytelling: "Simboliza la construcción de la identidad profesional. La yuca, una raíz profunda y fuerte, representa las bases culturales y familiares del estudiante. El relleno de queso y pollo es el nuevo conocimiento adquirido, que se fusiona con sus raíces para crear una identidad única y sólida.",
    characteristics: [
      "Fritura profunda y controlada.",
      "Inspiración en la cocina latinoamericana.",
      "Contraste de texturas: crujiente por fuera, cremoso por dentro.",
    ],
    steps: [
      "Cocción y triturado de la yuca.",
      "Formado de la masa con el relleno de queso.",
      "Empanizado tradicional.",
      "Fritura hasta obtener un dorado perfecto.",
      "Preparación de la salsa de aguacate.",
      "Montaje con hebras de pollo.",
    ],
    techniques: "Triturado, empanizado, fritura, emulsión.",
    sensoryProfile: "Crujiente, cremoso, con notas tostadas y frescas.",
    ods: [
      "ODS 1: Fin de la pobreza, al revalorizar ingredientes accesibles y nutritivos.",
      "ODS 10: Reducción de las desigualdades, al celebrar la diversidad cultural culinaria.",
    ],
    academicSustenance: "La revalorización de tubérculos y raíces en la alta cocina es una tendencia que busca rescatar la biodiversidad y fortalecer las economías locales, conectando la innovación con el patrimonio alimentario (UNESCO, 2021).",
    image: { id: "yuca-croquette" },
  },
  {
    id: 6,
    courseNumber: "Sexto Tiempo",
    title: "PEONÍA DULCE",
    description: "Tarta Fraisier con bizcocho genovés, crema muselina a la vainilla, fresas frescas y un delicado gel de maracuyá.",
    storytelling: "Representa los logros académicos y las celebraciones. La estructura elegante y la complejidad técnica de la tarta Fraisier simbolizan el esfuerzo, la dedicación y la precisión requeridos para alcanzar metas importantes, como culminar un proyecto o aprobar un semestre difícil.",
    characteristics: [
      "Pastelería clásica francesa.",
      "Técnicas de precisión y montaje estratificado.",
      "Equilibrio entre dulzor y acidez.",
    ],
    steps: [
      "Elaboración del bizcocho genovés.",
      "Preparación de la crema muselina.",
      "Gelificación del maracuyá.",
      "Montaje de la tarta con fresas frescas.",
      "Refrigeración y acabado final.",
    ],
    techniques: "Batido, emulsión, gelificación, montaje en capas.",
    sensoryProfile: "Dulce, ácido, cremoso y fresco.",
    ods: [
      "ODS 8: Trabajo decente y crecimiento económico, al resaltar la importancia de la habilidad y la técnica profesional.",
      "ODS 12: Producción y consumo responsables, al utilizar frutas de temporada.",
    ],
    academicSustenance: "La pastelería clásica, como la Fraisier, es un ejemplo de cómo la técnica y la ciencia (química de los alimentos) se combinan para crear resultados estéticos y sensoriales predecibles y de alta calidad (This, 2006).",
    image: { id: "fraisier-cake" },
  },
  {
    id: 7,
    courseNumber: "Séptimo Tiempo",
    title: "ROSA PERSISTENTE",
    description: "Cheesecake invertido con base de galleta, compota de frutos rojos y cobertura de chocolate rosado.",
    storytelling: "Simboliza el cierre del ciclo académico. La inversión del cheesecake representa una nueva perspectiva: el conocimiento adquirido ahora se ve desde el otro lado, el del profesional. Es un postre que deja una impresión duradera, como los aprendizajes que permanecen para toda la vida.",
    characteristics: [
      "Postre de vanguardia.",
      "Presentación visual innovadora.",
      "Juego de temperaturas y texturas.",
    ],
    steps: [
      "Elaboración de la base de galleta horneada.",
      "Preparación de la mezcla de cheesecake.",
      "Gelificación y congelación en molde invertido.",
      "Preparación de la compota de frutos rojos.",
      "Desmolde y decoración con chocolate.",
    ],
    techniques: "Cremado, horneado, gelificación, inversión.",
    sensoryProfile: "Cremoso, dulce equilibrado, con acidez frutal.",
    ods: [
      "ODS 4: Educación de calidad, representando la consolidación final del aprendizaje.",
      "ODS 9: Industria, innovación e infraestructura, por la aplicación de técnicas modernas.",
    ],
    academicSustenance: "La deconstrucción e inversión de postres clásicos es una técnica de la cocina molecular y de vanguardia que busca sorprender al comensal y desafiar sus expectativas sensoriales (Aduriz, 2012).",
    image: { id: "cheesecake-dessert" },
  },
  {
    id: 8,
    courseNumber: "Octavo Tiempo",
    title: "VIOLETA FINAL",
    description: "Licor cremoso artesanal de pétalos de rosa, acompañado de una rodaja de naranja deshidratada para perfumar.",
    storytelling: "Representa la graduación y la transición al mundo profesional. Es el brindis final, un momento de celebración y reflexión. Su sabor floral y persistente es como el recuerdo de la experiencia universitaria: algo que perdura y acompaña en el nuevo camino que se emprende.",
    characteristics: [
      "Bebida digestiva y aromática.",
      "Cierre elegante y sensorial del menú.",
      "Elaboración por maceración.",
    ],
    steps: [
      "Maceración de pétalos de rosa en alcohol.",
      "Filtrado y clarificación.",
      "Emulsión con una base láctea.",
      "Deshidratación de rodajas de naranja.",
      "Servicio frío.",
    ],
    techniques: "Maceración, emulsión, deshidratación.",
    sensoryProfile: "Floral, dulce, cremoso y persistente.",
    ods: [
      "ODS 17: Alianzas para lograr los objetivos, simbolizando la red de contactos que se lleva al mundo profesional.",
      "ODS 12: Consumo responsable, promoviendo la elaboración artesanal.",
    ],
    academicSustenance: "La elaboración de licores artesanales mediante maceración es una práctica histórica que permite extraer compuestos aromáticos y medicinales de plantas, siendo una forma de conservación y valorización de recursos botánicos (Jackson, 2008).",
    image: { id: "rose-liqueur" },
  },
].map(course => ({
  ...course,
  image: getImage(course.image.id)
}));
