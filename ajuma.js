var timer = document.getElementById('timer')

function clock() {
    var date = new Date()
    var hours = date.getHours()
    var minute = date.getMinutes()
    var seconds = date.getSeconds()

timer.innerHTML = `${hours}: ${minute}:${seconds}`

}
clock()
setInterval(clock,1000)

var QuestionBank = [
    {
        question:'Q1. who is the CEO of Appclick',
        options:['Seyi Adeleke','Osimhen','Seyi law','Stanley'],
        answer:'Seyi Adeleke'
    },
    {
        question:'Q2. who is the president of Nigeria',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    },
    {
        question:'Q3. who is the president of Nigeria',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    },
    {
        question:'Q4. who is the president of Nigeria',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    },
    {
        question:'Q5. who is the president of Nigeria',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    },
    {
        question:'Q6. who is the president of Nigeria',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    },
    {
        question:'Q7. who is the president of Nigeria',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    },
    {
        question:'Q8. who is the president of Nigeria',
        options: ['Obasanjo','Thomas muller','Bola Ahmed Tinubu','Jumoke Ogungbe'],
        answer:'Bola Ahmed Tinubu'
    }
]
    var question = document.getElementById('question')
    var option0 = document.getElementById('option0')
    var option1 = document.getElementById('option1')
    var option2 = document.getElementById('option2')
    var option3 = document.getElementById('option3')
    var btn = document.getElementById('btn')
    var btn2 = document.getElementById('btn2')
    var stat = document.querySelector('.stat')
    var i = 0

    function DisplayQuestion() {
        question.innerHTML = QuestionBank[i].question
        option0.innerHTML =  QuestionBank[i].options[0]
        option1.innerHTML =  QuestionBank[i].options[1]
        option2.innerHTML =  QuestionBank[i].options[2]
        option3.innerHTML =  QuestionBank[i].options[3]
        stat.innerHTML = `Question ${i+1} of ${QuestionBank.length}`
       
    }

    function nextQuestion(){
    //btn.addEventListener('click', function(){
        if(i < QuestionBank.length -1){
            i++
            console.log(i);
            DisplayQuestion()
        }
    //}
   // else{ scoreBoard.style.display ='block'
    //document.querySelector('.quizcontainer').style.display ='none'

    }

    DisplayQuestion()

btn2.addEventListener('click', function() {
    if (i < QuestionBank.length +1) {
        i--;
        DisplayQuestion();
    }
});

