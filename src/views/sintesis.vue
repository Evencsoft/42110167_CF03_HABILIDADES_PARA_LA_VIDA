<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe una visión general del componente formativo “Las competencias socioemocionales y la transformación social”, el cual ofrece un análisis integral de los contextos ciudadanos y su relación con la interacción y el desarrollo de competencias ciudadanas. Además, aborda la importancia de la agencia como motor de transformación social, destacando su rol en la toma de decisiones y en la generación de cambios significativos. También se presentan los elementos fundamentales del marco lógico, incluyendo sus fases de implementación, desde el diagnóstico inicial hasta el monitoreo y evaluación, y un ejemplo práctico que ilustra su aplicación en la resolución de problemas comunitarios.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen decorativa")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
