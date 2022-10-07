console.log('RESULTADO DA NOTA:');

const convertGrades = (numericGrade) => {
    let charGrade;

    if (numericGrade >= 90 && numericGrade <= 100) {
        charGrade = 'A';
    } else if (numericGrade >= 80 && numericGrade <= 89) {
        charGrade = 'B';
    } else if (numericGrade >= 70 && numericGrade <= 79) {
        charGrade = 'C';
    } else if (numericGrade >= 60 && numericGrade <= 69) {
        charGrade = 'D';
    } else if (numericGrade <= 59 && numericGrade >= 0){
        charGrade = 'F';
    } else {
        charGrade = 'Nota inválida';
    }
    
    return charGrade;
}

console.log(convertGrades(101));