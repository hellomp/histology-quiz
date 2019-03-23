<template>
  <div id="start">
    <img class="logo" src="@/assets/microscope.svg" alt="">
    <h1>Quiz</h1>
    <h2>Histologia</h2>
    <button class="start-button" @click="startQuiz()">Começar</button>
  </div>  
</template>
<script>
export default {
  name: 'Start',
  methods: {
    startQuiz(){
      this.$router.push('quiz')
    }
  }
}
</script>
<style scoped>
#start{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #55E6C1;
}
h1{
  font-size: 4rem;
  margin-bottom: 0.5rem;
}
h2{
  font-size: 3rem;
  color: #FFF;
  margin-top: 0;
}
.logo{
  height: 200px;;
}
.start-button{
  padding: 0.5rem;
  background-color:#FFF;
  border-style: solid;
  border-width: 4px;
  border-color: #FFF;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #55E6C1;
  margin-bottom: 0.5rem;
}
.start-button:hover{
  background-color:#55E6C1;
  color: #FFF;
  cursor: pointer;
}

</style>
