const { checkWinner, updateTurn, updateMessage } = require('../src/tictactoe');

describe('checkWinner', () => {
  test('перемога по горизонталі', () => {
    const board = ['X','X','X',null,null,null,null,null,null];
    expect(checkWinner(board)).toBe('X');
  });

  test('нічия', () => {
    const board = ['X','O','X','X','O','O','O','X','X'];
    expect(checkWinner(board)).toBe('D');
  });

  test('гра триває', () => {
    const board = ['X','O','X',null,'O',null,null,null,null];
    expect(checkWinner(board)).toBe(null);
  });
});

describe('UI оновлення', () => {
  test('оновлення ходу', () => {
    const el = { textContent: '' };
    updateTurn(el, 'O');
    expect(el.textContent).toBe('O');
  });

  test('оновлення повідомлення', () => {
    const el = { textContent: '' };
    updateMessage(el, 'Перемога!');
    expect(el.textContent).toBe('Перемога!');
  });
});
