
<template>
  <div class="base-button">
      <button>{{btnContent}}</button>
  </div>
</template>

<script>
export default {
    props:[
        'btnContent'
    ]
}
</script>

<style lang="scss">
    .base-button{
        button{
            padding: 1rem 1.4rem;
            text-transform: uppercase;
            border-radius: 8px;
            background-color: white;
            margin: 0.4rem 0;
            cursor: pointer;
        }
    }
</style>