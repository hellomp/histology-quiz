<template>
  <div id="quiz">
    <div id="image">
      <QuestionImage :image="actualQuestion.image"/>
    </div>
    <div id="options">
      <button class="alternative-button" :class="{correct:alternative1Correct, wrong:alternative1Wrong}" @click="clickAlternative(1)">{{actualQuestion.alternative1}}</button>
      <button class="alternative-button" :class="{correct:alternative2Correct, wrong:alternative2Wrong}" @click="clickAlternative(2)">{{actualQuestion.alternative2}}</button>
      <button class="alternative-button" :class="{correct:alternative3Correct, wrong:alternative3Wrong}" @click="clickAlternative(3)">{{actualQuestion.alternative3}}</button>
      <button class="alternative-button" :class="{correct:alternative4Correct, wrong:alternative4Wrong}" @click="clickAlternative(4)">{{actualQuestion.alternative4}}</button>
      <div id="next">
        <button v-show="showNextButton" @click="loadNextQuestion()" class="next-button"><font-awesome-icon icon="chevron-right" /></button>
      </div>
    </div>
  </div>
</template>
<script>
import QuestionImage from './Image.vue'
import questionsData from '../assets/questions.json'

export default {
  name: 'Quiz',
  data() {
    return{
      correctCount: 0,
      showNextButton: false,
      actualQuestionId: 0,
      actualQuestion: {},
      alternative1Correct: false,
      alternative2Correct: false,
      alternative3Correct: false,
      alternative4Correct: false,
      alternative1Wrong: false,
      alternative2Wrong: false,
      alternative3Wrong: false,
      alternative4Wrong: false,
      questions: []
    }
  },
  methods: {
    clickAlternative(alternativeId){
      if(this.showNextButton){
        return
      }
      if(this.actualQuestion.correct == alternativeId){
        this.correctCount += 1
        switch (alternativeId) {
          case 1:
            this.alternative1Correct = true
            break;
          case 2:
            this.alternative2Correct = true
            break;
          case 3:
            this.alternative3Correct = true
            break;
          case 4:
            this.alternative4Correct = true
            break;        
          default:
            break;
        }
      }else{
        switch (alternativeId) {
          case 1:
            this.alternative1Wrong = true
            break;
          case 2:
            this.alternative2Wrong = true
            break;
          case 3:
            this.alternative3Wrong = true
            break;
          case 4:
            this.alternative4Wrong = true
            break;        
          default:
            break;
        }
        switch (this.actualQuestion.correct) {
          case 1:
            this.alternative1Correct = true
            break;
          case 2:
            this.alternative2Correct = true
            break;
          case 3:
            this.alternative3Correct = true
            break;
          case 4:
            this.alternative4Correct = true
            break;        
          default:
            break;
        }
      }
      this.activateNextButton()
    },
    activateNextButton(){
      this.showNextButton = true
    },
    loadNextQuestion(){
      if(this.actualQuestionId == 2){
        this.$router.push({path: `/result/${this.correctCount}`})
      }else{
        this.alternative1Correct = false;
        this.alternative2Correct = false;
        this.alternative3Correct = false;
        this.alternative4Correct = false;
        this.alternative1Wrong = false;
        this.alternative2Wrong = false;
        this.alternative3Wrong = false;
        this.alternative4Wrong = false;
        this.actualQuestionId += 1
        this.actualQuestion = this.questions[this.actualQuestionId]
        this.showNextButton = false
      }
    }
  },
  created(){
    this.questions = _.shuffle(questionsData.questions)
    this.actualQuestion = this.questions[this.actualQuestionId]
  },
  components:{
    QuestionImage
  }
}
</script>
<style scoped>
  #quiz {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 768px) {
    #quiz {
      grid-template-columns: 1fr 1fr;
    }
  }
  #image{
    padding: 1rem;
    padding-bottom: 0;
  }
  @media only screen and (min-width: 768px) {
    #image{
      padding: 2rem;
    }
  }
  #options{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }
   @media only screen and (min-width: 768px) {
    #options{
      padding: 2rem;
    }
  }
  #next{
    margin-top: 1rem;
    min-height: 52px;
  }
  .alternative-button{
    padding: 0.5rem;
    background-color:#FFF;
    border-style: solid;
    border-width: 3px;
    border-color: #55E6C1;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: #55E6C1;
    margin-bottom: 0.5rem;
    transition: background-color 0.1s;
  }
  @media only screen and (min-width: 768px) {
    .alternative-button{
      font-size: 1.2rem;
    }
  }
  .alternative-button:hover{
    background-color:#55E6C1;
    color: #FFF;
    cursor: pointer;
  }
  .alternative-button:focus{
    outline: none;
  }
  .correct{
    background-color:#55E6C1;
    color: #FFF;
  }
  .wrong{
    background-color: #FD7272 !important;
    border-color: #FD7272 !important;
    color: #FFF;
  }
  .next-button{
    padding: 0.8rem 1.4rem;
    border-radius: 50%;
    background-color: #55E6C1;
    border: none;
    font-size: 2.5rem;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    .next-button{
      font-size: 2rem;
      padding: 0.5rem 1rem;
    }
  }

</style>
