<template>
  <div class="heading">
    <h1>{{msgPrimary}} </h1>
    <h6>{{msgSecondary}} </h6>
  </div>
</template>

<script>
export default {
props:[
  'msgPrimary', 'msgSecondary'
]
}
</script>

<style lang="scss">
    .heading{
        text-align: center;
        text-transform: uppercase;
    }
</style>