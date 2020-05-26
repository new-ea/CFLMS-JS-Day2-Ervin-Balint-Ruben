console.log('JS runs...')

const averagePoints = [76, 85, 65, 93, 81]

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const averageClassPoints = averagePoints.reduce(reducer) / averagePoints.length

averagePoints.push(averageClassPoints)

console.log(averageClassPoints)


const names = ['Martin', 'Thomas', 'Klaus', 'Maria', 'David', 'Class']

let resultsDiv = document.getElementById('result')


names.map((name, index) => {
    if (averagePoints[index] >=91) {
        resultsDiv.innerHTML += `<p>${name} has a grade of A</p>`
    } else if (averagePoints[index] <= 90 && averagePoints[index] >=81) {
        resultsDiv.innerHTML += `<p>${name} has a grade of B</p>`
    } else if (averagePoints[index] <= 80 && averagePoints[index] >= 71) {
        resultsDiv.innerHTML += `<p>${name} has a grade of C</p>`
    } else if (averagePoints[index] <= 70 && averagePoints[index] >= 61) {
        resultsDiv.innerHTML += `<p>${name} has a grade of D</p>`
    } else {
        resultsDiv.innerHTML += `<p>${name} has a grade of F</p>`
    }
})
