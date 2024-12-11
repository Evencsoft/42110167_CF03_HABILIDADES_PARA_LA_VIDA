<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-left") Este componente formativo tiene como propósito introducir al aprendiz en la reflexión sobre el Desarrollo a Escala Humana (DEH), considerando la concepción de ciudadanía, la capacidad de agencia del ser humano, tanto individual como colectiva, y su relación con los contextos donde se desarrolla la vida de las personas y las comunidades. El objetivo principal es propiciar intervenciones que conduzcan a cambios sociales significativos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img1.png', alt='')

      .col-lg-7
        p(data-aos="fade-left") Las Competencias Socioemocionales (CSE) constituyen el fundamento del saber que orienta y predispone a la acción. Estas competencias se identifican como satisfactores estratégicos de las necesidades humanas fundamentales, tanto axiológicas como existenciales. Su fortalecimiento es esencial para el desarrollo humano integral y los procesos de transformación social en diversos contextos, asumiendo un papel central en el cambio y la innovación social.
        p(data-aos="fade-left") El componente formativo establece una diferenciación entre el espacio privado y el público. En el espacio privado, cada individuo busca fortalecer sus Competencias Socioemocionales (CSE), para definir su proyecto de vida, guiado por la libertad y la capacidad de autodeterminación. En este ámbito, las necesidades primarias de subsistencia, protección y relaciones personales son prioritarias. Por otro lado, en el espacio público, se reconoce al ser humano como parte de un orden social e institucional regido por normas de convivencia, que afectan tanto a los individuos como a los grupos sociales, con los cuales puede identificarse o no (Chaux, 2012).
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La capacidad de agencia resulta clave para transformar los espacios públicos y privados. Esta capacidad implica la libertad para decidir, actuar y ser efectivo, estableciendo una relación dinámica entre el sujeto-agente y su contexto social. Según Giddens (1995), esta relación se caracteriza por el movimiento, la capacidad de acción y la influencia en la construcción de la realidad. La agencia también posibilita procesos contrahegemónicos y anticoloniales, como los propuestos en la Educación Popular de Freire. En este enfoque, la agencia refleja una tensión dialéctica entre el saber y el actuar para transformar la realidad (Freire, 1970).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-left") La práctica de la agencia se evidencia en diversos roles: como miembro de una familia, en entornos educativos, laborales, comunitarios y ciudadanos. A través de esta capacidad, las personas logran el empoderamiento, entendido como el proceso mediante el cual adquieren competencias para tomar control de sus vidas, influir en su entorno y mejorar la equidad y calidad de las mismas. Este empoderamiento también se extiende al ámbito laboral y educativo.
        p(data-aos="fade-left") En el contexto de la ciudadanía, la agencia, según Chaux (2012), implica asumir un rol político con responsabilidad, reflejado en la participación en proyectos colectivos destinados a construir o reconstruir un orden social justo e incluyente.
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
