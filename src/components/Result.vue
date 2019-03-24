<template>
  <div id="result">
    <h1>Você acertou {{this.$route.params.result}} perguntas</h1>
    <button class="restart-button" @click="restartQuiz()">Tentar novamente</button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  methods:{
    restartQuiz(){
      this.$router.push({name: 'Quiz'})
    }
  }
}
</script>

<style scoped>
#result{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #55E6C1;
  padding: 0 1rem;
}
h1{
  font-size: 4rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1;
}
.restart-button{
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
  transition: background-color 0.1s;
}
.restart-button:hover{
  background-color:#55E6C1;
  color: #FFF;
  cursor: pointer;
}
</style>
