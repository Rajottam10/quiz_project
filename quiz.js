const correctAnswers= ['B','C','B','B'];
const form= document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e=>{
    e.preventDefault();
    let score=0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value,form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) =>{
        if (answer === correctAnswers[index]){
            score += 25;
        }
    });
    //console.log(score);
    //show result in page
    scrollTo(0,0);
    result.classList.remove('d-none'); 

    /*if(score===100){
        alert('Congratulations, les goooo')
    }*/
    let output = 0;
    const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;
    if (output === score){
        clearInterval(timer);
    }else {
        output++;
    }
},10);
});

//widow object (global object)
(document.querySelector('form'));

/*setTimeout( ()=>{
    alert('Just here to Thank you for playing, hope you get it all correct')
} ,5000);*/



