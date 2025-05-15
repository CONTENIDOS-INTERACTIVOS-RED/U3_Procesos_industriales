<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Estrategias de control y monitoreo de procesos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-4(data-aos="zoom-in")
                img.img-a.img-t(src='@/assets/curso/temas/7.png', alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0              
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p.mt-5 La supervisión y el control de procesos industriales, son fundamentales para garantizar la calidad del producto, optimizar costos y minimizar impactos ambientales. Estas estrategias permiten detectar variaciones en la producción y tomar decisiones basadas en datos en tiempo real.

                p.mb-0 A continuación, se presentan los principales métodos utilizados en la industria, explicando su funcionamiento, aplicación y el papel de la Inteligencia Artificial en cada uno. 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Control Estadístico de Procesos (CEP) y sistemas de análisis predictivo

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .row.align-items-end
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/8.svg")
          .col-lg
            .p-3
              p El CEP #[b actúa como sistema de alerta temprana]. Cuando se identifica que un parámetro comienza a salir de control, los sistemas predictivos analizan las causas y anticipan posibles consecuencias.

              p.mb-0 El CEP #[b monitorea] el presente, mientras que el análisis predictivo, #[b proyecta el futuro.]

        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 En conjunto, forman un sistema robusto de gestión de calidad, capaz de prevenir errores antes de que afecten la producción, mejorando la eficiencia y reduciendo desperdicios.

        .bg-color-4.p-4(data-aos="fade-right")
          p.mb-0 El Control Estadístico de Procesos (CEP) y los Sistemas de análisis predictivo, no compiten, sino que se integran. El primero asegura estabilidad en tiempo real, mientras que el segundo permite anticiparse a posibles fallas, permitiendo a las industrias actuar de manera más inteligente y basada en datos.  

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/9.png", data-aos="zoom-in")       

    p(data-aos="fade-down") Esta relación es clave dentro de un entorno de Industria 4.0, donde la automatización y la toma de decisiones basadas en datos, son indispensables para alcanzar la excelencia operativa.


    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Aspectos importantes

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Aspecto
            th Control Estadístico de Procesos (CEP)
            th Sistemas de análisis predictivo
        tbody
          tr
            td.text-bold Propósito.
            td Detectar y controlar variaciones del proceso en tiempo real.
            td Anticipar futuras desviaciones, antes de que ocurran.

          tr
            td.text-bold Definición.
            td Método que utiliza herramientas estadísticas para monitorear y controlar la variabilidad de los procesos de producción, en tiempo real.
            td Sistema que usa datos históricos y algoritmos estadísticos, para anticipar fallos o desviaciones en los procesos industriales.

          tr
            td.text-bold Características.
            td 
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Usa gráficos de control.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Detecta desviaciones a tiempo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Permite acciones correctivas rápidas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Basado en datos actuales.

            td 
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Utiliza modelos de predicción.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Se apoya en IA y machine #[i learning].
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Predice comportamientos futuros.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Integra múltiples fuentes de datos.

          tr
            td.text-bold Base de datos.
            td Se basa en datos actuales del proceso.
            td Usa grandes volúmenes de datos históricos y en tiempo real.

          tr
            td.text-bold Herramientas principales.
            td Gráficos de control, límites de especificación, análisis de dispersión.
            td Modelos estadísticos, machine #[i learning], algoritmos de predicción.

          tr
            td.text-bold Tipo de acción.
            td Correctiva o preventiva inmediata (actuar ante una desviación).
            td Proactiva (anticipar problemas y evitar que ocurran).

          tr
            td.text-bold Complementariedad.
            td CEP proporciona datos limpios y estructurados para alimentar modelos.
            td Los modelos predictivos utilizan esos datos para identificar patrones futuros.

          tr
            td.text-bold Ejemplo combinado.
            td El CEP detecta un aumento en la variabilidad del diámetro de un pistón.
            td El sistema predictivo anticipa que, si continúa esta tendencia, habrá fallas.                                                                      
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg.text-white 
            h5 Ejemplo con IA.  
            p.mb-0 En una línea de ensamblaje, un algoritmo de Inteligencia Artificial puede identificar patrones en los datos de producción y predecir cuándo una máquina necesita mantenimiento antes de que falle, evitando paradas no planificadas y aumentando la eficiencia del proceso.            
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/10.svg")

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Sistemas SCADA: supervisión y control en tiempo real

    p(data-aos="fade-down") La supervisión en tiempo real de procesos industriales, es fundamental para garantizar eficiencia, seguridad y continuidad operativa.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/11.png', alt='')         
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Sistemas SCADA: supervisión y control en tiempo real 
            p.mb-4(data-aos="fade-right") En el PDF #[b Sistemas SCADA], se explora cómo estas plataformas permiten monitorear, automatizar y optimizar procesos mediante sensores, análisis de datos y tecnologías de Inteligencia Artificial, aplicadas en sectores como energía, manufactura y tratamiento de agua. A través de ejemplos prácticos, se ilustra cómo implementar y aprovechar un sistema SCADA para tomar decisiones informadas, en entornos industriales complejos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Sistemas SCADA: supervisión y control en tiempo real 
 

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Sensores IoT para la industria

    p(data-aos="fade-down") Los sensores IoT (#[i Internet of Things]) son dispositivos que recopilan datos de variables físicas en tiempo real y los transmiten a sistemas digitales, para su análisis.   

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Características")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Medición en tiempo real de temperatura, humedad, vibraciones, presión, etc.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Comunicación inalámbrica con sistemas de monitoreo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Conectividad con plataformas de Inteligencia Artificial. 
            
          .div(titulo="Aplicación")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Monitoreo de temperatura en hornos industriales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Control de vibraciones en motores para mantenimiento predictivo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Medición del consumo energético en procesos de manufactura. 

          .div(titulo="Paso a paso para implementar sensores IoT")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Seleccionar sensores adecuados para las variables a medir.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Conectar los sensores a una red de comunicación (Wi-Fi, Bluetooth, LoRa).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Integrar los datos en un sistema de gestión como SCADA.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Configurar alertas para detectar valores fuera de rango.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Analizar datos con IA para encontrar patrones y optimizar el proceso. 

          .div(titulo="IA aplicable a sensores IoT")
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Redes neuronales para análisis predictivo de datos, en tiempo real.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Algoritmos de Machine Learning para optimización del consumo energético.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Automatización con IA para ajustar condiciones del proceso sin intervención humana. 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/12.png", alt="")  

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/13.svg")        
          .col-lg.text-white 
            h5 Ejemplo. Control de temperatura en una planta de producción de lácteos.
            p.mb-0 En la producción de leche y yogurt, la temperatura de pasteurización es clave. Si no se mantiene dentro del rango adecuado, los productos pueden contaminarse.

    p(data-aos="fade-down") Aplicación del paso a paso:

    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/13.png", alt="", data-aos="zoom-in")           
      .col-lg-7
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Paso 1") #[b Seleccionar sensores adecuadas.] Se usan sensores de temperatura en los tanques de pasteurización.
          p(numero="2" titulo="Paso 2") #[b Conectar sensores a la red.] Los sensores envían datos en tiempo real, a una plataforma en la nube.
          p(numero="3" titulo="Paso 3") #[b Integrar los datos en un sistema SCADA], Se crea un tablero con las temperaturas registradas.
          p(numero="4" titulo="Paso 4") #[b Configurar alertas.] Si la temperatura baja de 72 °C, se activa una alarma.
          p(numero="5" titulo="Resultado") #[b Analizar datos con IA.] Se identifican tendencias y se ajusta la temperatura automáticamente.

    .bg-color-7.p-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/14.png")
        .col-lg
          h5 Beneficio
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Reducción de desperdicios por temperatura inadecuada.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Mayor seguridad alimentaria.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Cumplimiento de normativas sanitarias.          
    .bg-color-8.p-4.mb-5(data-aos="fade-up")
      h5 IA Aplicable
      p.mb-0 Algoritmos de predicción pueden ajustar la temperatura en función del volumen de producción.


    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/19.svg")           
          .col-lg
            p.mb-0.text-white #[b Ejemplo de uso en la industria.] En la fabricación de automóviles, los sensores IoT se utilizan para medir la temperatura de los hornos de pintura y garantizar que los vehículos reciban el tratamiento térmico adecuado, evitando defectos y reduciendo desperdicios.       
   
    .bg-full-width-2.bg-fondo-2.py-4
      .px-4.px-md-5
        h3(data-aos="fade-down") Aplicabilidad de los sensores IoT en la industria 
        p(data-aos="fade-down") Según un informe de McKinsey & Company (2022), sobre tendencias en la Industria 4.0, el uso de sensores IoT ha aumentado en más del 40 % en los últimos cinco años, debido a su capacidad de reducir costos operativos, minimizar el tiempo de inactividad y mejorar la eficiencia energética. Algunas de sus aplicaciones claves incluyen:           
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/15.svg" alt="" style="width: 90px")
              h5.text-center Mantenimiento predictivo
              p.mb-0.text-center Los sensores detectan signos de desgaste en maquinaria, lo que permite realizar mantenimientos, antes de que ocurra una falla.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/16.svg" alt="" style="width: 90px")
              h5.text-center Gestión de energía
              p.mb-0.text-center Monitorean el consumo eléctrico en tiempo real, identificando oportunidades de ahorro.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/17.svg" alt="" style="width: 90px")
              h5.text-center Optimización de la producción
              p.mb-0.text-center Analizan las condiciones del entorno para ajustar los parámetros del proceso, en tiempo real. 

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/18.svg" alt="" style="width: 90px")
              h5.text-center Seguridad laboral
              p.mb-0.text-center Detectan condiciones peligrosas como la presencia de gases tóxicos o temperaturas extremas.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Mantenimiento predictivo con IA

    p(data-aos="fade-down") El mantenimiento predictivo se ha convertido en una estrategia clave dentro de la gestión industrial moderna, al permitir anticipar fallos en equipos antes de que ocurran y reducir costos operativos.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/11.png', alt='')         
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Mantenimiento predictivo con IA 
            p.mb-4(data-aos="fade-right") En el PDF #[b Mantenimiento predictivo con IA], se explican paso a paso las fases de implementación, desde la recolección de datos hasta la generación de alertas automáticas, integrando tecnologías como sensores IoT y algoritmos de Machine Learning. A través de ejemplos prácticos, el estudiante comprenderá cómo aplicar la Inteligencia Artificial para optimizar la vida útil de los equipos y garantizar la continuidad de los procesos industriales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Mantenimiento predictivo con IA

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/127847" target="_blank" rel="noopener noreferrer") López Garzón, W. F. & Cárdenas López, J. C. (2019). Tecnología internet of things (IoT) y el big data. Mare Ingenii. Ingenierías, 1(1), 74-79. Fundación Universitaria San Mateo. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.sydle.com/es/blog/control-de-procesos-industriales-66461620ecd02b4ed13563dd?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer") Alecrim, M. (2024). Control de procesos industriales: ¿Qué es y cómo hacerlo? Skydle. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=kToEZ-EoCD0" target="_blank" rel="noopener noreferrer") PROMPERÚ Oficial. (2021). ¿Cómo optimizar tus procesos para una mejor gestión de la liquidez en tu empresa? 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
