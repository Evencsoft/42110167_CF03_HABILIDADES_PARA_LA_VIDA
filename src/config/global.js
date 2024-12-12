export default {
  global: {
    componenteFormativo:
      'Las Competencias Socioemocionales (CSE) y la trasformación social',
    descripcionCurso:
      'El Desarrollo a Escala Humana (DEH) impone retos en el desarrollo de las Competencias Socioemocionales (CSE), desde la construcción de ciudadanías y las posibilidades del agenciamiento para la transformación personal y social en los diferentes contextos de la vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La ciudadanía y los diferentes contextos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Interacción y competencias ciudadanas',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La agencia y la producción de transformaciones sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elementos del marco lógico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fases de implementación del marco lógico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ejemplo práctico de marco lógico',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La ciudadanía y los diferentes contextos',
      referencia:
        'Fundación Ian. (2019). una historia que nos movilizará | Corto Animado.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6dLEO8mwYWQ',
    },
    {
      tema: 'La Agencia y la producción de transformaciones sociales',
      referencia:
        'Sautu, R. (2014). Agencia y estructura en la reproducción y cambio de las clases sociales. Theomai, (29), 100-120.',
      tipo: 'Articulo',
      link: 'https://www.redalyc.org/pdf/124/12431432006.pdf',
    },
    {
      tema: 'Elementos del marco lógico',
      referencia:
        'Ortegón, E., Pacheco, J. F., & Prieto, A. (2005). Metodología del marco lógico para la planificación, el seguimiento y la evaluación de proyectos y programas (Serie Manuales No. 42). Comisión Económica para América Latina y el Caribe (CEPAL).',
      tipo: 'Libro',
      link:
        'https://repositorio.cepal.org/server/api/core/bitstreams/2d86ecfb-f922-49d3-a919-e4fd4d463bd7/content',
    },
    {
      tema: 'Elementos del marco lógico',
      referencia:
        'Sánchez, N. (2007). El marco lógico: Metodología para la planificación, seguimiento y evaluación de proyectos. Visión Gerencial, (2), 328-343.',
      tipo: 'Articulo',
      link: 'https://www.redalyc.org/pdf/4655/465545876012.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agencia',
      significado:
        'capacidad de decidir y actuar libremente en beneficio propio o colectivo.',
    },
    {
      termino: 'Competencias socioemocionales (CSE)',
      significado:
        'habilidades emocionales y sociales que facilitan la adaptación y acción en sociedad.',
    },
    {
      termino: 'Ciudad',
      significado:
        'es el espacio histórico de interrelaciones entre ciudadanos que viven un pacto de convivencia y aceptan y transforman los principios que reglan dicha convivencia.',
    },
    {
      termino: 'Ciudadanía',
      significado:
        'condición que reconoce a una persona una serie de derechos políticos y sociales que le permiten intervenir en la política de un país determinado.',
    },
    {
      termino: 'Ciudadanía activa',
      significado:
        'participación consciente en procesos colectivos para construir una sociedad justa.',
    },
    {
      termino: 'Diagnóstico inicial',
      significado:
        'análisis de necesidades y recursos previo al diseño de un proyecto.',
    },
    {
      termino: 'Empoderamiento',
      significado:
        'proceso de adquirir habilidades para tomar control de la propia vida.',
    },
    {
      termino: 'Espacio público',
      significado:
        'expresa el diálogo entre la administración pública como propietaria jurídica del territorio y la ciudadanía que ejerce un uso real del mismo, otorgándole el carácter de dominio público.',
    },
    {
      termino: 'Espacio privado',
      significado:
        'el lugar donde la persona desarrolla libremente su intimidad y su personalidad en un ámbito reservado e inalienable.',
    },
    {
      termino: 'Indicadores',
      significado: 'parámetros para medir el progreso y éxito de un proyecto.',
    },
    {
      termino: 'Marco lógico',
      significado:
        'herramienta para planificar proyectos, definiendo objetivos, actividades y resultados.',
    },
    {
      termino: 'Objetivos específicos',
      significado:
        'metas concretas que contribuyen al logro del objetivo general.',
    },
    {
      termino: 'Objetivo general',
      significado:
        'meta amplia a largo plazo que guía las acciones del proyecto.',
    },
    {
      termino: 'Resultados esperados',
      significado:
        'beneficios concretos y medibles obtenidos al cumplir los objetivos del proyecto.',
    },
    {
      termino: 'Supuestos',
      significado:
        'condiciones externas que favorecen el éxito de un proyecto.',
    },
    {
      termino: 'Transformación social',
      significado:
        'cambios estructurales que mejoran la calidad de vida en una comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Almonte, E., & Polanco, M. (2006). Ser humano y su contexto. Universidad Abierta para Adultos (UAPA).',
      link: '',
    },
    {
      referencia:
        'Alvarado, L., & García, M. (2008). Características más relevantes del paradigma socio-crítico: Su aplicación en investigaciones de educación ambiental y de enseñanza de las ciencias. Sapiens. Revista Universitaria de Investigación, 9(2), 187-202.',
      link: 'https://www.redalyc.org/articulo.oa?id=41011837011',
    },
    {
      referencia:
        'Banco Interamericano de Desarrollo (BID). (2019). Guía práctica para el uso del marco lógico en proyectos sociales.',
      link: '',
    },
    {
      referencia:
        'Borja, J. (2000). Ciudadanía y espacio público. Laberintos urbanos en América Latina, 9-34.',
      link:
        'https://digitalrepository.unm.edu/cgi/viewcontent.cgi?article=1163&context=abya_yala',
    },
    {
      referencia:
        'Chaux, E. (2012). Educación, convivencia y agresión escolar: Análisis y propuestas desde la psicología. Ediciones Uniandes.',
      link: '',
    },
    {
      referencia:
        'Freire, P. (1970). Pedagogía del oprimido. Siglo XXI Editores.',
      link: '',
    },
    {
      referencia:
        'Gentile, B., Grabe, S., Dolan-Pascoe, B., Twenge, J. M., Wells, B. E., & Maitino, A. (2009). Gender differences in domain-specific self-esteem: A meta-analysis. Review of General Psychology, 13(1), 34-45.',
      link: '',
    },
    {
      referencia:
        'Giddens, A. (1995). La constitución de la sociedad: Bases para la teoría de la estructuración. Amorrortu.',
      link: '',
    },
    {
      referencia:
        'Giroux, H. A. (1992). Teoría y resistencia en educación: Una pedagogía para la oposición. Siglo XXI Editores.',
      link: '',
    },
    {
      referencia:
        'Honneth, A. (1997). La lucha por el reconocimiento: Por una gramática moral de los conflictos sociales. Crítica Grijalbo.',
      link: '',
    },
    {
      referencia:
        'Isaza, L. (s.f.). El contexto familiar: Un determinante en el desarrollo social de los niños y las niñas.',
      link: '',
    },
    {
      referencia:
        'Mora Salas, M., & De Oliveira, O. (2013). Los caminos de la vida: Acumulación, reproducción o superación de las desventajas sociales en México. Revista Mexicana de Ciencias Políticas y Sociales, 59(220).',
      link: 'https://doi.org/10.1016/S0185-1918(14)70802-5',
    },
    {
      referencia:
        'Pérez Luño, A. E. (2002). Ciudadanía y definiciones. Doxa: Cuadernos de Filosofía del Derecho, 25, 177-211.',
      link: '',
    },
    {
      referencia:
        'Raciti, P., & Vivaldi, P. (2020). Propuesta de orientaciones conceptuales, metodológicas y operativas para el fortalecimiento de las competencias transversales (Habilidades para la vida) de los participantes (Jóvenes en Acción, jóvenes en educación secundaria vinculados a Familias en Acción y madres titulares del Programa Familias en Acción) de los programas de la Dirección de Transferencias Monetarias, dentro de las modalidades de implementación virtual y presencial, adoptado e implementado por Prosperidad Social.',
      link: '',
    },
    {
      referencia:
        'Rojas, A., González, C., García, G., González, D., Álvarez, D., Vásquez, J., & Chaustre, A. (2018). La ciudadanía en controversia: Análisis y conceptualización de las competencias ciudadanas. Editorial Los Libertadores.',
      link: '',
    },
    {
      referencia:
        'Rodrigo, M. J. (s.f.). Contexto y desarrollo social. Ed. Síntesis.',
      link: '',
    },
    {
      referencia:
        'Rodrigo, M. J., & Palacios González, J. (2014). Familia y desarrollo humano. Difusora Larousse - Alianza Editorial.',
      link: '',
    },
    {
      referencia:
        'Trianes Torres, M. V., Cardelle-Elawar, M., Blanca Mena, M. J., & Muñoz Sánchez, Á. M. (2003). Contexto social, género y competencia social autoevaluada en alumnos andaluces de 11-12 años. Revista Electrónica de Investigación Psicoeducativa y Psicopedagógica, 1(2).',
      link: '',
    },
    {
      referencia:
        'Unzueta Morales, S. (2011). Algunos aportes de la psicología y el paradigma socio-crítico a una educación comunitaria crítica y reflexiva. Revista Integra Educativa, 4(2), 105-144.',
      link:
        'http://www.scielo.org.bo/scielo.php?script=sci_arttext&pid=S1997-40432011000200006',
    },
    {
      referencia:
        'Zapata, A. D. (2018). Características del contexto educativo y familiar en el desarrollo psicomotor en niños de 6 a 11 años de la Fundación Educativa San Juan Eudes [Trabajo de grado para optar al título de Licenciado en Educación Física y Deportes].',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
