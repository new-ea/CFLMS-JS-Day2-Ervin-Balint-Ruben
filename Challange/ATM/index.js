console.log('JS is running...')

const noteNames = ['hundred', 'fifties', 'twenties', 'tens']

const stock = {
    hundreds: 20, 
    fifties: 15,
    twenties: 12, 
    tens: 0
}

const calculateBankNotes = (event) => {
    event.preventDefault()
    console.log('Works...')
    document.getElementById('result').innerHTML = ''
    let requestedMoney = event.target.requestedAmount.value
    const bankNotes = [0, 0, 0, 0]
    const stockTotal = stock.hundreds * 100 + stock.fifties * 50 + stock.twenties * 20 + stock.tens * 10

    if (stockTotal < 2000) {
        alert('Machine should be filled')
    } else {
        while (requestedMoney !== 0) {

        if (requestedMoney / 100 >= 1 && stock.hundreds !== 0) {
            const hundreds = Math.floor(requestedMoney / 100)
            requestedMoney = requestedMoney % 100
            console.log(requestedMoney)
            bankNotes[0] = hundreds
            stock.hundreds -= hundreds
        } else if (requestedMoney / 50 >= 1 && stock.fifties !== 0) {
            const fifties = Math.floor(requestedMoney / 50)
            requestedMoney = requestedMoney % 50
            bankNotes[1] = fifties
            stock.fifties -= fifties
            console.log(requestedMoney)
        } else if (requestedMoney / 20 >= 1 && stock.twenties !== 0) {
            const twenties = Math.floor(requestedMoney / 20)
            requestedMoney = requestedMoney % 20
            bankNotes[2] = twenties
            stock.twenties -= twenties
            console.log(requestedMoney)
        } else if (requestedMoney / 10 >= 1 && stock.tens !== 0) {
            const tens = Math.floor(requestedMoney / 10)
            requestedMoney = requestedMoney % 10
            bankNotes[3] = tens
            stock.tens -= tens
            console.log(requestedMoney)
        } else {
            alert('Your withdrawal cannot be processed')
            break
        }
        console.log("MONEY", requestedMoney)
        console.log('STOCK', stock)
    }
    generateDOM(bankNotes, noteNames)
    event.target.requestedAmount.value = ''
    }


    
}

const generateDOM = (arrOfBankNotes, noteNames) => {
    const resultDiv = document.getElementById('result')

    arrOfBankNotes.map((note, i) => {
        const p = document.createElement('p')
        p.innerHTML = `${note} ${noteNames[i]}`
        resultDiv.appendChild(p)
    })
}

