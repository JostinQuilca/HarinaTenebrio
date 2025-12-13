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
    storytelling: "Este primer tiempo simboliza el inicio de la vida universitaria, el momento en que el estudiante abandona lo conocido para adentrarse en un nuevo entorno académico. El azahar, flor asociada al comienzo de los ciclos, representa el primer contacto con el conocimiento formal, mientras que la focaccia remite a lo familiar y reconfortante del hogar que se deja atrás.",
    characteristics: [
      "Preparación panaria contemporánea y sostenible.",
      "Combinación de sabores dulces y salados.",
      "Alto valor proteico gracias a la harina de Tenebrio.",
    ],
    steps: [
      "Preparación de la masa de focaccia con harina de trigo y Tenebrio molitor.",
      "Hidratación y amasado.",
      "Fermentación controlada.",
      "Incorporación de arándanos y jamón.",
      "Horneado.",
      "Elaboración de mantequilla saborizada.",
      "Montaje final.",
    ],
    techniques: "Amasado, fermentación, horneado, cremado, montaje.",
    sensoryProfile: "Notas tostadas, frutales y salinas; textura esponjosa y miga densa.",
    ods: [
      "ODS 2: Hambre cero, promoviendo fuentes de proteína alternativas y sostenibles.",
      "ODS 12: Producción y consumo responsables, mediante el uso de ingredientes de bajo impacto ambiental.",
    ],
    academicSustenance: "La entomofagia, o consumo de insectos, es una práctica ancestral que actualmente se investiga como solución a la crisis alimentaria global, ofreciendo una fuente de proteína de alta calidad con una baja huella ecológica (van Huis et al., 2013).",
    image: { id: "focaccia-bread" },
  },
  {
    id: 2,
    courseNumber: "Segundo Tiempo",
    title: "FLOR DE MANGO SILVESTRE",
    description: "Sorbet de mango con espuma de uvilla, gel de mora y crumble de cacao con harina de Tenebrio molitor.",
    storytelling: "Representa la etapa de exploración y adaptación en los primeros semestres. La frescura del sorbet simboliza la curiosidad intelectual y la experimentación constante, mientras que el crumble, enriquecido con Tenebrio, aporta una estructura sólida y nutritiva, reflejando el inicio del pensamiento académico organizado.",
    characteristics: [
      "Preparación fría y refrescante.",
      "Contraste de texturas y acidez.",
      "Crumble proteico y sostenible.",
    ],
    steps: [
      "Base de sorbet de mango natural.",
      "Congelación y turbinar.",
      "Espuma de uvilla.",
      "Gelificación de mora.",
      "Elaboración del crumble con harina de Tenebrio.",
      "Emplatado.",
    ],
    techniques: "Sorbetización, gelificación, espumado, horneado.",
    sensoryProfile: "Ácido-dulce, fresco, crujiente, con un fondo a nuez.",
    ods: [
      "ODS 3: Salud y bienestar, por el uso de preparaciones ligeras y basadas en fruta.",
      "ODS 13: Acción por el clima, al priorizar ingredientes de bajo impacto hídrico y de carbono.",
    ],
    academicSustenance: "El uso de harinas de insectos en la panadería y repostería no solo mejora el perfil nutricional del producto final, sino que también reduce la dependencia de harinas tradicionales con mayor impacto ambiental (Duda et al., 2019).",
    image: { id: "mango-sorbet" },
  },
  {
    id: 3,
    courseNumber: "Tercer Tiempo",
    title: "CRISANTEMO UMAMI",
    description: "Gyoza de cerdo y verduras con masa enriquecida con harina de Tenebrio molitor, servidas con salsa de soja y ajonjolí.",
    storytelling: "Simboliza la consolidación académica, cuando el estudiante comienza a dominar conceptos complejos. La gyoza, con su técnica precisa de plegado, representa la estructura del pensamiento analítico, y la masa con Tenebrio añade una capa de innovación y sostenibilidad a la tradición.",
    characteristics: [
      "Cocina asiática sostenible.",
      "Masa con mayor aporte de nutrientes.",
      "Técnica de cocción mixta (sellado y vapor).",
    ],
    steps: [
      "Elaboración de masa para gyoza con harina de trigo y Tenebrio.",
      "Preparación del relleno de cerdo y verduras.",
      "Plegado artesanal de las piezas.",
      "Sellado a la plancha y cocción al vapor.",
      "Preparación de la salsa.",
      "Servicio inmediato.",
    ],
    techniques: "Amasado, plegado, vaporización, reducción.",
    sensoryProfile: "Umami intenso, jugoso y crujiente en la base, con un matiz terroso.",
    ods: [
      "ODS 11: Ciudades y comunidades sostenibles, promoviendo la diversidad cultural y la innovación alimentaria.",
      "ODS 15: Vida de ecosistemas terrestres, al reducir la presión sobre la agricultura convencional.",
    ],
    academicSustenance: "La integración de ingredientes sostenibles en recetas tradicionales es una forma de preservar la cultura gastronómica mientras se adapta a los desafíos ambientales del siglo XXI (UNESCO, 2020).",
    image: { id: "gyoza-dumplings" },
  },
  {
    id: 4,
    courseNumber: "Cuarto Tiempo",
    title: "MAGNOLIA DE MESA",
    description: "Ravioles caseros de pollo con masa fresca de harina de Tenebrio molitor, bañados en una delicada salsa aurora y aceite de cebollín.",
    storytelling: "Representa la vida universitaria colaborativa. Así como cada raviol encierra un relleno, los estudiantes guardan conocimientos que, al unirse en trabajos grupales (la salsa que los une), crean un resultado más completo. La masa innovadora simboliza la sinergia entre tradición y nuevas ideas.",
    characteristics: [
      "Pasta fresca artesanal y proteica.",
      "Salsa clásica de la cocina francesa.",
      "Plato reconfortante con un giro innovador.",
    ],
    steps: [
      "Elaboración de la masa fresca con harina de trigo y Tenebrio.",
      "Reposo y laminado.",
      "Preparación del relleno de pollo.",
      "Cocción de los ravioles.",
      "Elaboración de la salsa aurora.",
      "Emulsión con aceite de cebollín y montaje.",
    ],
    techniques: "Pastificación, laminado, hervor, emulsión.",
    sensoryProfile: "Suave, lácteo, herbal, con un sutil sabor a frutos secos en la pasta.",
    ods: [
      "ODS 4: Educación de calidad, fomentando el aprendizaje colaborativo y la innovación.",
      "ODS 9: Industria, innovación e infraestructura, aplicando nuevas tecnologías alimentarias.",
    ],
    academicSustenance: "La adición de harinas alternativas a la pasta fresca puede mejorar su valor nutricional, especialmente en términos de proteínas y minerales, sin alterar significativamente sus propiedades reológicas (Bonomi et al., 2016).",
    image: { id: "ravioli-pasta" },
  },
  {
    id: 5,
    courseNumber: "Quinto Tiempo",
    title: "RAÍZ DE DALIA",
    description: "Croqueta de yuca rellena de queso, empanizada en panko y harina de Tenebrio molitor, acompañada de salsa de aguacate y hebras de pollo.",
    storytelling: "Simboliza la construcción de la identidad profesional. La yuca, una raíz profunda, representa las bases culturales del estudiante. El empanizado con Tenebrio es la capa de innovación y resiliencia que adquiere en la universidad, una 'coraza' que lo prepara para el mundo profesional.",
    characteristics: [
      "Fritura profunda y controlada.",
      "Inspiración en la cocina latinoamericana.",
      "Textura extra crujiente y mayor valor nutritivo.",
    ],
    steps: [
      "Cocción y triturado de la yuca.",
      "Formado de la masa con el relleno de queso.",
      "Empanizado con panko y harina de Tenebrio.",
      "Fritura hasta obtener un dorado perfecto.",
      "Preparación de la salsa de aguacate.",
      "Montaje con hebras de pollo.",
    ],
    techniques: "Triturado, empanizado, fritura, emulsión.",
    sensoryProfile: "Extra crujiente, cremoso, con notas tostadas y frescas.",
    ods: [
      "ODS 1: Fin de la pobreza, al revalorizar ingredientes locales y accesibles.",
      "ODS 8: Trabajo decente y crecimiento económico, fomentando la innovación en la cadena de valor alimentaria.",
    ],
    academicSustenance: "El uso de insectos en la alimentación no solo es sostenible, sino que también puede mejorar la seguridad alimentaria en comunidades vulnerables, al ser una fuente de ingresos y nutrientes de fácil acceso (FAO, 2013).",
    image: { id: "yuca-croquette" },
  },
  {
    id: 6,
    courseNumber: "Sexto Tiempo",
    title: "PEONÍA DULCE",
    description: "Tarta Fraisier con bizcocho genovés de harina de Tenebrio molitor, crema muselina a la vainilla, fresas frescas y gel de maracuyá.",
    storytelling: "Representa los logros académicos. La complejidad técnica de la tarta Fraisier simboliza el esfuerzo y la dedicación. El bizcocho, enriquecido y con un matiz de sabor único, es el valor añadido que la formación universitaria aporta al perfil del estudiante.",
    characteristics: [
      "Pastelería clásica francesa reinventada.",
      "Bizcocho con un perfil nutricional mejorado.",
      "Equilibrio entre dulzor, acidez y notas a nuez.",
    ],
    steps: [
      "Elaboración del bizcocho genovés con harina de Tenebrio.",
      "Preparación de la crema muselina.",
      "Gelificación del maracuyá.",
      "Montaje de la tarta con fresas frescas.",
      "Refrigeración y acabado final.",
    ],
    techniques: "Batido, emulsión, gelificación, montaje en capas.",
    sensoryProfile: "Dulce, ácido, cremoso y fresco, con un bizcocho de sabor profundo.",
    ods: [
      "ODS 12: Producción y consumo responsables, al innovar con ingredientes sostenibles en la alta pastelería.",
      "ODS 13: Acción por el clima, reduciendo la huella de carbono de los postres.",
    ],
    academicSustenance: "La innovación en pastelería mediante el uso de ingredientes no convencionales como la harina de insectos permite crear productos con perfiles de sabor novedosos y un menor impacto ambiental, respondiendo a las demandas del consumidor consciente (Orkusz et al., 2020).",
    image: { id: "fraisier-cake" },
  },
  {
    id: 7,
    courseNumber: "Séptimo Tiempo",
    title: "ROSA PERSISTENTE",
    description: "Cheesecake invertido con base de galleta de Tenebrio molitor, compota de frutos rojos y cobertura de chocolate rosado.",
    storytelling: "Simboliza el cierre del ciclo académico. La inversión del cheesecake representa una nueva perspectiva. La base, hecha con harina de insecto, es el fundamento sólido e innovador sobre el cual el recién graduado construirá su futuro, dejando una impresión duradera.",
    characteristics: [
      "Postre de vanguardia y sostenible.",
      "Presentación visual innovadora.",
      "Base de galleta crujiente y nutritiva.",
    ],
    steps: [
      "Elaboración de la base de galleta con harina de Tenebrio.",
      "Preparación de la mezcla de cheesecake.",
      "Gelificación y congelación en molde invertido.",
      "Preparación de la compota de frutos rojos.",
      "Desmolde y decoración con chocolate.",
    ],
    techniques: "Cremado, horneado, gelificación, inversión.",
    sensoryProfile: "Cremoso, dulce equilibrado, con acidez frutal y una base de sabor a cereal tostado.",
    ods: [
      "ODS 9: Industria, innovación e infraestructura, por la aplicación de técnicas modernas y materiales sostenibles.",
      "ODS 17: Alianzas para lograr los objetivos, al conectar gastronomía, ciencia y sostenibilidad.",
    ],
    academicSustenance: "La cocina de vanguardia busca constantemente desafiar los límites de la gastronomía, no solo en la técnica y presentación, sino también en el origen y la sostenibilidad de sus ingredientes, abriendo camino a una nueva era culinaria (Aduriz, 2012).",
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
