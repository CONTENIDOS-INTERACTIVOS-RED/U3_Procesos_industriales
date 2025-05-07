<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Evaluación del desempeño y calidad en procesos industriales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/20.png", data-aos="zoom-in")    
      .col-lg-8
        p(data-aos="fade-down") En la industria, la medición del desempeño es fundamental para garantizar la eficiencia, calidad y sostenibilidad de los procesos productivos. Para lograrlo, se utilizan herramientas de medición denominadas Indicadores Claves de Desempeño (KPIs, Key Performance Indicators).   
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/21.svg")
            .col-lg
              p.mb-0 Los KPI son métricas cuantificables que permiten evaluar el rendimiento de un proceso, máquina o sistema en función de objetivos previamente establecidos. Se les llama “claves” porque están directamente relacionados con el éxito de una organización y permiten la toma de decisiones basada en datos objetivos.

    .row.mb-5 
      .col-lg-9.mb-3.mb-lg-0 
        h3(data-aos="fade-down") ¿Para qué sirven los KPI?     
        p(data-aos="fade-down") Los KPIs tienen múltiples aplicaciones en la industria; entre ellas tenemos: 
        .bg-color-9.p-3(data-aos="fade-left")
          p.mb-0 Medir la eficiencia y productividad de los procesos.
        .bg-color-10.p-3(data-aos="fade-right")
          p.mb-0 Identificar áreas de mejora y oportunidades de optimización.
        .bg-color-11.p-3(data-aos="fade-left")
          p.mb-0 Facilitar la toma de decisiones basada en datos concretos.
        .bg-color-12.p-3(data-aos="fade-right")
          p.mb-0 Detectar problemas antes de que afecten la producción.
        .bg-color-13.p-3(data-aos="fade-left")
          p.mb-0.text-white  Asegurar el cumplimiento de normativas de calidad y seguridad.
      .col-lg-3
        figure
          img.img-a.img-t(src="@/assets/curso/temas/22.png", data-aos="zoom-in")    

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in")    
      .col-lg-8
        h3(data-aos="fade-down") ¿Por qué se utilizan los KPI en la industria? 
        p(data-aos="fade-down") En la era de la Industria 4.0, las empresas buscan maximizar la eficiencia y reducir costos mediante el monitoreo continuo de los procesos. La implementación de KPI permite:
        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Optimizar la producción, sin necesidad de expandir infraestructura.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Reducir desperdicios y mejorar la sostenibilidad de los procesos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Asegurar el cumplimiento de estándares de calidad y seguridad.        

    .row.justify-content-center.mb-5
      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Específico (#[i Specific])
              p.mb-0 Debe medir un aspecto concreto del proceso.

      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Medible (#[i Measurable])
              p.mb-0 Debe poder cuantificarse.

      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Alcanzable (#[i Achievable])
              p.mb-0 Debe ser realista y alcanzable.

      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/27.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Relevante (#[i Relevant])
              p.mb-0 Debe aportar valor a la organización.

      .col-lg-4
        .bg-color-5.p-3.text-white.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/28.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Temporal (#[i Time-bound]) 
              p.mb-0 Debe evaluarse en un periodo determinado.

    h3(data-aos="fade-down") ¿Cómo se construye un KPI?
    p(data-aos="fade-down") Para diseñar un KPI efectivo, se deben seguir los siguientes pasos:

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p #[b Definir el objetivo.] Determinar qué aspecto del proceso se desea medir.
            
          .div(titulo="Paso 2")
            p #[b Seleccionar la métrica.] Establecer la fórmula o método de medición.

          .div(titulo="Paso 3")
            p #[b Definir la frecuencia de medición.] Determinar cada cuánto tiempo se evaluará el KPI.

          .div(titulo="Paso 4")
            p #[b Establecer un punto de referencia (#[i benchmark]).] Comparar los resultados con estándares de la industria o metas internas.

          .div(titulo="Paso 5")
            p #[b Analizar los resultados y tomar decisiones.] Usar la información obtenida para implementar mejoras en los procesos.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/29.png", alt="")  

    p(data-aos="fade-down") Para evaluar de manera integral el desempeño de un proceso industrial, se han seleccionado los siguientes indicadores claves, debido a su impacto en la eficiencia, calidad, costos y sostenibilidad: 

    .bg-full-width-2.bg-fondo-3(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')                        
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Eficiencia Global de los Equipos (OEE).
                p Mide la efectividad de los equipos de producción.

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Tasa de defectos y retrabajos
                p Evalúa la calidad del proceso productivo. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Consumo energético por unidad de producción
                p Controla el uso eficiente de la energía. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Tiempo de ciclo y productividad 
                p Determina la rapidez y rendimiento de la producción.  

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Índices de seguridad y cumplimiento ambiental
                p Garantiza la seguridad de los trabajadores y el impacto ambiental.  

        .row.mb-5
          .col-lg-8.mb-3.mb-lg-0
            .row.align-items-end
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/8.svg")
              .col-lg
                .p-3
                  p Cada uno de estos KPI tiene un rol fundamental en la optimización de los procesos industriales. 

                  p En el ámbito industrial, la eficiencia y calidad de los procesos productivos son esenciales para la competitividad. Para lograrlo, las organizaciones implementan Indicadores Claves de Desempeño (Key Performance Indicators, KPIs), los cuales permiten medir, analizar y mejorar continuamente, el rendimiento de los procesos.

            .bg-color-8.p-4(data-aos="fade-left")
              p.mb-0 Sin embargo, los KPI no funcionan de manera aislada. Para que su implementación sea efectiva, deben integrarse con metodologías de mejora de la calidad, como Lean Manufacturing, Six Sigma, Kaizen y el Ciclo PDCA, que permiten interpretar y actuar sobre los datos obtenidos.

          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/37.png", data-aos="zoom-in")                  


    p(data-aos="fade-down") A continuación, se detallarán cinco KPI claves utilizados en la industria, su relación con las metodologías de calidad y cómo aplicarlos para mejorar el rendimiento operativo.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/38.png', alt='')         
          .col-lg-8
            h2.mb-4(data-aos="flip-up") KPIs
            p.mb-4(data-aos="fade-right") En el PDF #[b KPIs], se estudia la aplicación de herramientas como el OEE, la tasa de defectos, el consumo energético, el tiempo de ciclo y los índices de seguridad, que permiten evaluar eficiencia, calidad y sostenibilidad en los procesos. A través de ejemplos prácticos, se analiza cómo estos KPIs ayudan a detectar oportunidades de mejora y optimizar el funcionamiento de sistemas productivos reales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> KPIs

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1]  Metodología clave 1: Lean Manufacturing     

    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Lean Manufacturing, o manufactura esbelta, es una metodología de gestión enfocada en la eliminación de desperdicios dentro de los procesos de producción, con el objetivo de maximizar el valor para el cliente utilizando la menor cantidad de recursos posible. Esta filosofía tiene su origen en el Sistema de Producción Toyota (TPS), desarrollado en Japón tras la Segunda Guerra Mundial, y ha sido adoptada globalmente por empresas industriales, que buscan mayor eficiencia y competitividad. 
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/39.svg")
            .col-lg
              p.mb-0 El enfoque Lean se basa en identificar y reducir los desperdicios conocidos como #[b Mudas] (actividades que no agregan valor), #[b Muras] (variaciones en la producción) y #[b Muris] (sobrecarga en los procesos). Para ello, emplea herramientas claves como 5S, Kaizen, SMED, VSM, entre otras.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/40.png", data-aos="zoom-in")      

    h3(data-aos="fade-down") Beneficios de Lean Manufacturing

    .bg-color-7.p-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/41.png")
        .col-lg
          h5 Beneficio
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Reducción de costos operativos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Aumento de la productividad y eficiencia.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Mejora de la calidad del producto.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Mayor satisfacción del cliente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Menos desperdicio de materiales y tiempo.         
    .bg-color-8.p-4.mb-5(data-aos="fade-up")
      p.mb-0 El éxito de Lean Manufacturing radica en la participación activa de todos los empleados, la mejora continua (Kaizen) y una cultura organizacional enfocada en la eficiencia y calidad.  

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Cómo aplicar el Lean Manufacturing
            p.mb-4(data-aos="fade-right") En el PDF #[b Cómo aplicar el Lean Manufacturing], se estudia el uso práctico de metodologías como 5S, Kaizen, SMED y VSM, mediante casos reales que ilustran su impacto en la reducción de desperdicios, mejora del flujo y aumento de la productividad. Este enfoque, permite al estudiante comprender cómo implementar mejoras sostenibles y adaptarse a los desafíos de la #[b Industria 4.0] con criterios técnicos y estratégicos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cómo aplicar el Lean Manufacturing        
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/42.png', alt='')  

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Metodología clave 2: Six Sigma 
      
    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/43.png", data-aos="zoom-in")         
      .col-lg-8
        p(data-aos="fade-down") Método basado en reducción de variabilidad y defectos.
        h3(data-aos="fade-down") Metodología DMAIC  
        p(data-aos="fade-down") La metodología DMAIC se llama así porque es un acrónimo que representa las cinco fases que componen este enfoque de mejora continua en Six Sigma. Su nombre proviene de las iniciales en inglés de cada una de estas etapas:      
        .bg-color-7.p-4(data-aos="fade-down")
          .row.align-items-center
            .col-lg
              h5 Beneficio
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b D]efine (Definir).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b M]easure (Medir).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b A]nalyze (Analizar).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b I]mprove (Mejorar).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b C]ontrol (Controlar).          
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/44.png")
        
        .bg-color-8.p-4.mb-5(data-aos="fade-up")
          p.mb-0 Cada una de estas fases sigue una secuencia estructurada y lógica, que permite optimizar procesos industriales, administrativos y de servicios, reduciendo defectos y variabilidad.

    h3(data-aos="fade-down") ¿Qué significa DMAIC?
    p(data-aos="fade-down") DMAIC es el pilar fundamental de Six Sigma y se basa en el uso de datos para mejorar procesos. Cada fase tiene un propósito específico:  

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-acento-contenido
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/45.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="3.1%" y="83.2%" numero="+")
                  h5 Definir (#[i Define]) 
                  p Se identifican los problemas dentro del proceso y se establecen los objetivos del proyecto de mejora.

                  p #[b Ejemplo.] Una fábrica de autopartes detecta que muchas piezas salen defectuosas. Se define el objetivo de reducir el porcentaje de defectos del 5 % al 1 %.  

                .bg-color-white.box-shadow.p-3(x="22.9%" y="94.1%" numero="+")
                  h5 Medir (#[i Measure]) 
                  p Se recopilan datos para conocer la magnitud del problema y entender el desempeño actual del proceso.

                  p #[b Ejemplo.] Se mide la cantidad de piezas defectuosas por semana y se analizan sus causas.      

                .bg-color-white.box-shadow.p-3(x="42.6%" y="83.2%" numero="+")
                  h5 Analizar (#[i Analyze]) 
                  p Se investiga la causa raíz del problema mediante herramientas como diagramas de Ishikawa, Pareto y análisis estadísticos.

                  p #[b Ejemplo.] Se descubre que los defectos ocurren por un mal ajuste de la máquina en el turno nocturno.     

                .bg-color-white.box-shadow.p-3(x="61.5%" y="94.1%" numero="+")
                  h5 Mejorar (#[i Improve]) 
                  p Se implementan soluciones para eliminar las causas raíz del problema.

                  p #[b Ejemplo.] Se ajustan los procedimientos de calibración de las máquinas y se capacita al personal del turno nocturno.     

                .bg-color-white.box-shadow.p-3(x="79.5%" y="83.2%" numero="+")
                  h5 Controlar (#[i Control]) 
                  p Se establecen mecanismos para mantener las mejoras a largo plazo, como monitoreos y auditorías.

                  p #[b Ejemplo.] Se instalan sensores para alertar cuando la calibración de la máquina se desvía de los estándares.      

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Metodología clave 3: TPM (Mantenimiento Productivo Total)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.p-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/46.png", data-aos="zoom-in")
      .col-lg-6
        p(data-aos="fade-left").mb-4 Para el estudio de esta temática, lo invitamos a escuchar el siguiente pódcast.
        
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Metodología clave 3: TPM (Mantenimiento Productivo Total)"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        ) 

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/260274" target="_blank" rel="noopener noreferrer") Socconini, L. (2024). Lean Manufacturing: Step by Step (2 ed.). Marge Books.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.universal-robots.com/mx/blog/control-de-calidad-industrial-entienda-qu%C3%A9-es-y-c%C3%B3mo-hacerlo/" target="_blank" rel="noopener noreferrer") Goldiez, R. (2024). Control de calidad industrial: Entienda qué es y cómo hacerlo. Universal Robots.
              

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=SZtGNrnMD5w" target="_blank" rel="noopener noreferrer") Keisen Consultores. (2022). 189 - Conferencia: Relevancia e importancia de construir un sistema de calidad total.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
