class ChessFigure {
  constructor(position, color) {
    this.position = position;
    this.color = color;
  }

  set position(position) {
    if (!Array.isArray(position) || position.length !== 2) {
      throw new TypeError('Позиция должна быть массивом из 2-х чисел')
    }
    poisiton = position.map(pos => {
      pos = Number(pos);
      if (pos < 0) return 0;
      if (pos > 7) return 7;
      return pos;
    });
    this._x = position[0];
    this._y = position[1]
  }

  get position() {
    return [this._x, this._y]
  }

  move() {}
}

class Pawn extends ChessFigure {
  constructor(x, color) {
    const pos = [x, color === 'white' ? 1 : 6];
    super(pos, color);
  }

  move() {
    const move = this.color === 'white' ? 1 : -1;
    this.poisiton = [this.poisiton[0], this.position[1] + move]

    // если нужно добавить что то из родительского класса
    super.move();
  }
}
