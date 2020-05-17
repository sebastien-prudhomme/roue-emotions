<template>
  <q-carousel-slide class="column items-center justify-center" :name="name">
    <div class="text-center">Sébastien Prud'homme</div>
    <div class="text-center text-half">
      <q-icon left name="fab fa-twitter" />@sebasprud
    </div>
  </q-carousel-slide>
</template>

<script>
export default {
  name: 'CarouselSlideEditor',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
