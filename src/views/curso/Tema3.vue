<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Principios de sostenibilidad y mejora continua en la gestión de procesos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p(data-aos="fade-down") En la era moderna, la gestión de procesos industriales no solo debe enfocarse en la eficiencia y la rentabilidad, sino también en la sostenibilidad. Elkington (1997) introdujo el concepto del Triple Resultado o impacto (Triple Bottom Line, TBL), que establece que las empresas deben equilibrar tres dimensiones claves:


    .row.justify-content-center.mb-5
      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/47.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-0 Rentabilidad económica

      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/48.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-0 Responsabilidad social

      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-right")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/49.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-0 Sostenibilidad Ambiental

    .bg-full-width.bg-color-2.mb-5(data-aos="fade-up")
      .px-4.px-md-5.py-4
        .text-white 
          p.mb-0  Este enfoque ha llevado a que las industrias adopten estrategias para optimizar el uso de recursos, reducir su impacto ambiental y contribuir al bienestar social, manteniendo al mismo tiempo su competitividad en el mercado.             

    p(data-aos="fade-down") En la industria moderna, la sostenibilidad y la mejora continua, son pilares fundamentales para la competitividad. Se analizan:

    .bg-color-7.p-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg
          h5 Sostenibilidad en procesos industriales
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Optimización del consumo de recursos (agua, energía, materiales).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Minimización de residuos y economía circular.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Uso de energías renovables en procesos industriales.
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/50.png")                      
    .bg-color-8.p-4.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/51.png")
        .col-lg
          h5 Modelos de mejora continua
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 PDCA (#[i Plan-Do-Check-Act]): método cíclico para mejorar procesos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Benchmarking: comparación con líderes de la industria para identificar mejores prácticas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Análisis costo-beneficio de mejoras: evaluación económica de estrategias sostenibles.  

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Optimización del consumo de recursos
    .row.align-items-center
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/52.png")       
      .col-lg
        p(data-aos="fade-down") #[b ¿Qué implica?] Reducir el uso de materias primas, energía y agua en los procesos industriales.

        h5(data-aos="fade-down") Ejemplo:       


    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.text-center.mb-4
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/53.png" alt="" data-aos="zoom-in")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Industria textil
                p.mb-0 Implementación de sistemas de reciclaje de agua en el teñido de telas para reducir el consumo hídrico.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/54.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Manufactura
                p.mb-0 Uso de #[b sensores IoT] para monitorear el consumo energético en tiempo real y optimizar su uso.  

    .bg-color-7.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg
          h5 Beneficio
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Disminución de costos operativos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Reducción del impacto ambiental.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Mayor eficiencia en la producción.
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/55.png")

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Reducción de emisiones y residuos
    .row.align-items-center.mb-5
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/56.png")       
      .col-lg
        p(data-aos="fade-down") #[b ¿Qué implica?] Minimizar la generación de desechos y emisiones de CO₂ mediante tecnologías limpias y procesos más eficientes.

        h5(data-aos="fade-down") Ejemplo:

    .row.justify-content-center.mb-5
      .col-lg-6
        .bg-color-5.h-100.p-3.text-white.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/57.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Industria automotriz
              p.mb-0 Uso de #[b energías renovables] en plantas de ensamblaje para reducir la huella de carbono.

      .col-lg-6
        .bg-color-5.h-100.p-3.text-white.mb-3(data-aos="fade-right")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/58.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Plantas de producción
              p.mb-0 Implementación de filtros y sistemas de captura de CO₂ en procesos de combustión.  

    .bg-color-14.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/59.png")            
        .col-lg
          h5 Beneficio
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Cumplimiento con normativas ambientales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Mejora de la imagen corporativa.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Menor impacto en el cambio climático.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Economía circular y reciclaje de materiales
    .row.align-items-center
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/52.png")       
      .col-lg
        p(data-aos="fade-down") #[b ¿Qué implica?] Reutilizar y reciclar materiales para reducir el desperdicio y la dependencia de materias primas vírgenes.

        h5(data-aos="fade-down") Ejemplo:       


    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.text-center.mb-4
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/63.png" alt="" data-aos="zoom-in")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Industria electrónica
                p.mb-0 Recuperación y reutilización de metales preciosos en la fabricación de nuevos dispositivos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/64.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Construcción
                p.mb-0 Uso de materiales reciclados como el hormigón reciclado para nuevas edificaciones. 

    .bg-color-6.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg
          h5 Beneficio
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Reducción de costos de producción.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Menos generación de residuos industriales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Mayor sostenibilidad en la cadena de suministro.
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/65.png") 

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Implementación de tecnologías sostenibles
    .row.align-items-center
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/66.png")       
      .col-lg
        p(data-aos="fade-down") #[b ¿Qué implica?] Incorporación de herramientas digitales e innovaciones tecnológicas para mejorar la sostenibilidad.

        h5(data-aos="fade-down") Ejemplo:  

    .bg-full-width-2.bg-fondo-2.py-4
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/67.svg" alt="" style="width: 90px")
              h5.text-center Industria alimentaria
              p.mb-0.text-center Uso de #[b inteligencia artificial] para reducir el desperdicio de alimentos ajustando la producción a la demanda real.

          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/68.svg" alt="" style="width: 90px")
              h5.text-center Sector energético
              p.mb-0.text-center Aplicación de #[b sistemas SCADA] para gestionar en tiempo real el consumo de energía en fábricas.

    .bg-color-14.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg
          h5 Beneficio
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Procesos más eficientes y automatizados.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Reducción del desperdicio de recursos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Producción más limpia y sostenible.
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/69.png")              
                                            
                      
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Impacto de la sostenibilidad en la industria moderna

    .row.mb-5.align-items-center 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/70.png", data-aos="zoom-in")    
      .col-lg-8
        p(data-aos="fade-down") Según un informe de McKinsey & Company (2023), las empresas que han adoptado principios de sostenibilidad han logrado: 
        .bg-color-7(data-aos="fade-down")
          .row.align-items-end
            .col-lg
              .p-4
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.color-1
                    p.mb-0 Reducción del consumo de energía en un 30 %.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.color-1
                    p.mb-0 Disminución de residuos industriales en un 40 %.

                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.color-1
                    p.mb-0 Aumento de la eficiencia operativa en un 20 %.
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/71.png")                      
        .bg-color-8.p-4(data-aos="fade-up")
          p.mb-0 La sostenibilidad ya no es una opción, sino una necesidad en la gestión de procesos industriales. Empresas que integran estos principios en su producción, no solo cumplen con normativas ambientales, sino que también logran mayor eficiencia operativa, reducción de costos y una ventaja competitiva en el mercado global. La clave está en la innovación tecnológica, la optimización de recursos y la transición hacia una economía circular. 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274734" target="_blank" rel="noopener noreferrer") Rinaudo Mannucci, M. E. (2024). Sostenibilidad para el emprendimiento. Guía para agentes de cambio que diseñan presentes y futuros posibles para todos. Editorial Universidad EAN. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mundosinresiduos.com/empezar-zero-waste/mis-10-blogs-favoritos-sobre-sostenibilidad-zero-waste/" target="_blank" rel="noopener noreferrer") Cintia. (2022). Mis 10 blogs sobre zero waste y sostenibilidad favoritos. Mundo Sin Residuos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=We17CJuZwFI" target="_blank" rel="noopener noreferrer") Profe de Economía. (2024). Economía circular y lineal.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Procesos Industriales',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el objetivo principal del Control Estadístico de Procesos (CEP) en la industria?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Asegurar que los productos tengan la misma apariencia visual.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Identificar y corregir defectos una vez que el producto ha sido terminado.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Monitorear la variabilidad de los procesos para detectar y prevenir defectos antes de que ocurran.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Automatizar por completo el proceso de producción sin intervención humana.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es la función principal de un sistema SCADA en la gestión de procesos industriales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Generar informes financieros sobre costos de producción.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Supervisar y controlar en tiempo real los procesos industriales.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Realizar mantenimiento preventivo en equipos de producción.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Determinar la calidad del producto en función de parámetros físicos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué aspectos evalúa el indicador de Eficiencia Global de los Equipos (OEE)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Disponibilidad, rendimiento y calidad.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Costos de producción, consumo energético y desperdicios.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Tiempo de ciclo, defectos y costos operativos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Capacidad de producción, almacenamiento y logística.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes metodologías utiliza el enfoque DMAIC para la mejora de procesos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Lean Manufacturing',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'TPM (Mantenimiento Productivo Total)',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Six Sigma',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'SCADA',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes estrategias está alineada con la sostenibilidad en procesos industriales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Incrementar el uso de materias primas sin restricciones.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Implementar prácticas de economía circular y reciclaje de materiales.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Maximizar la producción sin considerar el impacto ambiental.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Aumentar la velocidad de producción sin reducir desperdicios.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
