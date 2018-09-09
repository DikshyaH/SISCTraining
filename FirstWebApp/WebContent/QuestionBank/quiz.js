var check=0;
var questionTotalCount=2;
questionCount=0
var ansList="";
correctCount=0;
optionSelectFlag=0;

fetch('quiz.json')
  .then(response => response.json())
  .then(jsonResponse => logging(jsonResponse))
  
function logging(m){
       quesObj=m;
       console.log(quesObj);
       startQuiz();
}
  
function startQuiz(){
       if(questionCount<questionTotalCount){
              kelvis=("kelvi"+(questionCount+1));
              document.getElementById("questionNum").innerHTML="Question "+(questionCount+1)+":";
              question=quesObj[kelvis]["question"];
              document.getElementById("kelvi").innerHTML=question
              optCount=Number(quesObj[kelvis]["count"])
              correctAnswer=quesObj[kelvis]["answer"];
           
              for(var j=0;j<optCount;j++){
                     optNumber='option'+(j+1)
                     ansList+='<br>'+'<input type="radio" value=option'+(j+1)+' name="options">'+quesObj[kelvis][optNumber];
              }
       document.getElementById("quizSheet").innerHTML=ansList
       checkAnswer()
       }
       else{
           quizEndFunc();
    }

              
       }

function checkAnswer(){
       console.log(correctAnswer);
       document.getElementById("answerSubmit").onclick=function(){
              console.log(document.getElementById("quizSheet").options.value)
              if(correctAnswer==document.getElementById("quizSheet").options.value){
                     alert('Correct answer :D');
                     correctCount+=1;
              }
              else if(document.getElementById("quizSheet").selectedIndex = -1){
            	  		alert('Please enter an option');
            	  		return;
              }
              else
                  alert('Sorry! Wrong answer :(');

              document.getElementById("quizSheet").innerHTML="";
              ansList="";
              questionCount+=1;
              startQuiz();
       }
}
function quizEndFunc(){
    document.getElementById("questionNum").innerHTML="Result";
    document.getElementById("kelvi").innerHTML="Your Score : "+correctCount+"/"+questionTotalCount;
    document.getElementById("quizSheet").innerHTML="";
    
}


