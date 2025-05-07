export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Gestión y control de procesos industriales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias de control y monitoreo de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Control Estadístico de Procesos (CEP) y sistemas de análisis predictivo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistemas SCADA: supervisión y control en tiempo real',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sensores IoT para la industria',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Mantenimiento predictivo con IA',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación del desempeño y calidad en procesos industriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Metodología clave 1: Lean Manufacturing',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodología clave 2: Six Sigma',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Metodología clave 3: TPM (Mantenimiento Productivo Total)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Principios de sostenibilidad y mejora continua en la gestión de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Optimización del consumo de recursos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Reducción de emisiones y residuos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Economía circular y reciclaje de materiales',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Implementación de tecnologías sostenibles',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Impacto de la sostenibilidad en la industria moderna',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alegre, M. L. M. (Il.), Castro Puyana, M. (Il.) & Plaza del Moral, M. (Il.). (2021). <i>Estrategias avanzadas para la mejora de la calidad, la seguridad y la funcionalidad de los alimentos</i>. Editorial Universidad de Alcalá. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175878',
    },
    {
      referencia:
        'Gregolinska, E (Et al) (2022). Capturando el verdadero valor de la Industria 4.0. McKinsey & Company.',
      link:
        'https://www.mckinsey.com/capabilities/operations/our-insights/capturing-the-true-value-of-industry-four-point-zero',
    },
    {
      referencia:
        'Uribe Gómez, J. A. (2021). <i>Fundamentos de control estadístico de procesos para gestores y administradores tecnológicos</i>. Instituto Tecnológico Metropolitano. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/188150 ',
    },
    {
      referencia:
        'Socconini, L. (2021). <i>Lean Six Sigma White Belt: aplica las herramientas que están transformando el mundo empresarial</i>. Marge Books. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/198577',
    },
    {
      referencia:
        'Gómez-Zorrilla, J. & Sánchez Piña, D. (2022). <i>Guía práctica de analítica digital: ROI, KPI y Métricas. Cómo medir y optimizar tu estrategia digital para potenciar tu negocio</i>. LID Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/270603',
    },
    {
      referencia:
        'Hodson de Jaramillo, E. (Il.), Henry, G. (Il.) & Trigo, E. (Il.). (2019). <i>La bioeconomía: nuevo marco para el crecimiento sostenible en América Latina</i>. Editorial Pontificia Universidad Javeriana. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/167770',
    },
    {
      referencia:
        'Elkington, J.  (1997) Triple Bottom Line and Sustainability. ',
      link: 'https://johnelkington.com/archive/TBL-elkington-chapter.pdf',
    },
    {
      referencia:
        'Montoya Torres, J. (2020). <i>Gestión ambiental básica orientada a procesos: fundamentos para la mejora del desempeño ambiental en procesos productivos</i>. Corporación Universitaria Minuto de Dios. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/198388 ',
    },
    {
      referencia:
        'Guggenber, P (Et al) (2023) El estado de las organizaciones 2023: Diez cambios que transforman las organizaciones. McKinsey & Company.',
      link:
        'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-state-of-organizations-2023',
    },
  ],
  glosario: [
    {
      termino: 'Control Estadístico de Procesos (CEP)',
      significado:
        'Método de control que usa herramientas estadísticas para supervisar y mejorar los procesos productivos.',
    },
    {
      termino: 'Eficiencia Global de los Equipos (OEE)',
      significado:
        'Métrica que mide la efectividad de la maquinaria en términos de disponibilidad, rendimiento y calidad.',
    },
    {
      termino: 'Indicador Clave de Desempeño (KPI)',
      significado:
        'Medidas cuantificables utilizadas para evaluar el desempeño de un proceso o sistema.',
    },
    {
      termino: 'Industria 4.0',
      significado:
        'Revolución tecnológica basada en la automatización, interconectividad y análisis de datos en la industria.',
    },
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'Simulación de procesos de inteligencia humana por máquinas, especialmente sistemas informáticos.',
    },
    {
      termino: 'Internet de las Cosas (IoT)',
      significado:
        'Red de dispositivos conectados que recopilan y comparten datos en tiempo real.',
    },
    {
      termino: 'Lean Manufacturing',
      significado:
        'Metodología que busca eliminar desperdicios y mejorar la eficiencia en la producción.',
    },
    {
      termino: 'Mantenimiento predictivo',
      significado:
        'Estrategia basada en el uso de datos y algoritmos para anticipar fallas en equipos industriales.',
    },
    {
      termino: 'Metodología Six Sigma',
      significado:
        'Enfoque basado en el análisis estadístico para reducir la variabilidad y mejorar la calidad.',
    },
    {
      termino: 'Optimización de procesos',
      significado:
        'Proceso de mejorar el rendimiento, eficiencia y costos de un sistema productivo.',
    },
    {
      termino: 'Productividad',
      significado:
        'Capacidad de una empresa para maximizar la producción con los recursos disponibles.',
    },
    {
      termino: 'SCADA (<i>Supervisory Control and Data Acquisition</i>)',
      significado:
        'Sistema que permite supervisar y controlar procesos industriales en tiempo real.',
    },
    {
      termino: 'Sostenibilidad Industrial',
      significado:
        'Prácticas que buscan reducir el impacto ambiental y mejorar la eficiencia en la industria.',
    },
    {
      termino: 'Tiempo de Ciclo',
      significado:
        'Tiempo total requerido para completar una operación o un proceso.',
    },
    {
      termino: 'TPM (Mantenimiento Productivo Total)',
      significado:
        'Sistema de gestión que busca maximizar la efectividad del mantenimiento en una planta.',
    },
  ],
}
