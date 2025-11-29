function outerFunction() {
    let outerVariable = 'I am from the outer scope';

    function innerFunction() {
        let innerVariable = 'I am from the inner scope';
        console.log(outerVariable);
    }

    // console.log(innerVariable);
    
    innerFunction();
}

outerFunction();

//block scope

if (true){
    let age = 25;
    const country = 'USA';
    console.log(age, country);
}

