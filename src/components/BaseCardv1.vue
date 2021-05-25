<template>
  <div :class="cardStyle">

    <div class="chip-logo">
      <!-- <img src="@/assets/chip-dark.svg" alt="chip image"> -->
      <img :src="require(`@/assets/${chipImg}`)" alt="chip image">
      <!-- <img src="@/assets/vendor-evil.svg" alt="evil"> -->
      <img :src="require(`@/assets/${logoImg}`)" alt="">
    </div>

    <div class="number-name-date">

      <div class="number">
        <p>{{number}}</p>
      </div>

      <div class="name-date">
        <div class="name">
          <h6>CARDHOLDER NAME</h6>
          <p>{{name}}</p>
        </div>

        <div class="date">
          <h6>VALID UNTIL</h6>
          <p> {{month}}/{{year}} </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
props:[
  'number', 'name', 'year', 'month', 'cardStyle', 'chipImg', 'logoImg'
],
  data(){
    return{
    }
  }
}
</script>

<style lang="scss">
@mixin base-card {

  height: 230px;
  width: 380px;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 12px rgba(20, 20, 20, 0.603);
  
  color: black;
  z-index: 1;
  text-transform: uppercase;

  .chip-logo{
      height: 95px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
  }
  .chip-logo img:nth-child(2){
      align-self: flex-start;
      opacity: 0.8;     
  }
  .name-date{
      display: flex;
      justify-content: space-between;
  }
  .number p{
      height: 37px;
      font-size: 2.006rem;
      letter-spacing: 1px;
      margin: 0.9rem 0;
  }
  .date{
      text-align: end;
  }
  .name h6,
  .date h6{
    margin-bottom: 5px;
    text-align: left;
  }
    
}

.base-card{  
  @include base-card();
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #dbdbdb;
  .chip-logo img:nth-child(2){
    display: none
  }
}

.bitcoin{
  @include base-card();
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #eb9b1b;
}

.evil{
  @include base-card();
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #ec2742;
  color: white;
}

.ninja{
  @include base-card();
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #2e2e2e;
  color: white;
}

.blockchain{
  @include base-card();
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #7e2adf;
  color: white;
}
    



</style>