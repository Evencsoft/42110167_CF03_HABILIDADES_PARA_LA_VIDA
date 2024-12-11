<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La Ciudadanía y los diferentes contextos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='')
      .col-lg-7
        p En este componente formativo, la categoría "contextos" se comprende como los diferentes escenarios en los que las personas interactúan, impulsadas por propósitos y metas que buscan comunicar y negociar significados compartidos de las situaciones que experimentan. Estos significados suelen haber sido construidos previamente por otras personas y reflejan dinámicas sociales acumuladas.
        .cajon.color-primario.p-4.mb-4
          p El contexto está constituido por un entorno físico, todos los objetos, las realizaciones humanas materiales e inmateriales, que se viven y que son modificadas y determinadas por los actos en sociedad y con las cuales se interactúan y a las cuales se asignan determinados valores.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para entender el concepto de ciudadanía, es esencial reconocer que esta se materializa en la ciudad, concebida como un espacio histórico de interacción donde las personas conviven bajo un pacto social. Este pacto regula la convivencia a través de principios que los individuos aceptan y transforman. La ciudadanía se manifiesta en procesos como la formación de alianzas, el reconocimiento mutuo, la gestión de conflictos y la construcción compartida de significados, tanto a nivel individual como colectivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
            .col-lg-10
              p Según Raciti y Vivaldi (2020), es fundamental diferenciar entre los espacios público y privado en este contexto. El espacio público, íntimamente vinculado con la ciudad, es el ámbito donde se expresan y negocian los derechos, deberes y responsabilidades de los ciudadanos, consolidando su relación con la ciudadanía y los valores colectivos.
    
    p En la siguiente figura, se establecen claramente las diferencias de estos dos espacios: 
    
    .titulo-sexto.color-acento-contenido.offset-2(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i Características de los espacios privados y públicos ]
    
    .row.justify-content-center.mb-4
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='En la figura 1, se presentan las características de los espacios basada en Raciti & Vivaldi (2020), donde se compara el espacio privado y el espacio público. El espacio privado se caracteriza por ser familiar, cómodo, con reglas internas y enfoque individual, mientras que el espacio público es desconocido, requiere adaptación, fomenta el interés colectivo y privilegia el diálogo.')
          figcaption Nota. adaptado de Raciti & Vivaldi (2020).
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img3_1.svg', alt='En la figura 1, se presentan las características de los espacios basada en Raciti & Vivaldi (2020), donde se compara el espacio privado y el espacio público. El espacio privado se caracteriza por ser familiar, cómodo, con reglas internas y enfoque individual, mientras que el espacio público es desconocido, requiere adaptación, fomenta el interés colectivo y privilegia el diálogo.')
          figcaption Nota. adaptado de Raciti & Vivaldi (2020).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Siendo el espacio privado el espacio de lo familiar y conocido, se relaciona directamente con los contextos personal y familiar. En el contexto personal el ser humano a través de la vida va adquiriendo una estructura que le da la identidad personal y va configurando su carácter de acuerdo con sus propias estructuras físicas, mentales y psicológicas y con la interacción con su entorno en los procesos de socialización. Vivaldi, (2020).
        p En el proceso de desarrollo se va definiendo una trayectoria de vida desde los gustos, deseos y aspiraciones y dentro de las posibilidades que el entorno brinda. Se pueden fijar metas que se pueden o no cumplir, de acuerdo con las circunstancias personales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img4.png', alt='')
      .col-lg-7
        p Hay que tomar conciencia de la realidad y de aquello que genere disgusto del entorno, fortaleciendo la capacidad de autodeterminación, la cual puede aprovechar en pro de sí mismo y de la comunidad en la que se vive.
        p Hay que compartir con personas que permiten fortalecer la autoestima en entornos familiares, sociales, laborales, educativos y ciudadanos y utilizar herramientas de identificación y manejo de emociones en la vida personal y en la interacción con los otros. Desarrollando procesos de autoconocimiento que permiten identificar las emociones y la manera en que las se pueden regular.
        p Además, se deben desarrollar capacidades para identificar diferentes perspectivas reconociendo al otro, sus pensamientos y sentimientos; reconocer los sentimientos y la perspectiva o punto de vista u opinión de otras personas y respetarlas.
        .cajon.color-primario.p-4.mb-4
          p En el contexto familiar por otra parte, provee un espacio en el que los seres humanos obtienen los elementos distintivos de la cultura y las normas sociales que les permiten su integración en la sociedad. Se puede poner en funcionamiento las Competencias Socioemocionales (CSE), para interactuar con los miembros de la familia y para construir relaciones familiares armónicas. (Isaza, 2012). 
    
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Interacción y competencias ciudadanas
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
