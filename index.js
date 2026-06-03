const board = document.getElementbyId('container')
const squares = document.getElementByClassName('cell')
const players = ['X', 'O']
let currentPlayer = players[0]

const endMessage = document.createElement('p')
endMessage.textContent = `X's turn`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign = 'center'
board.after(endMessage)