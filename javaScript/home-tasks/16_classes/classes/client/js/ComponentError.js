//ошибка при инстансе класса по селектору
export default class ComponentError extends Error {
  constructor(ErrorElement) {
    super('По данному селектору элемент на странице не найден');
    this.ErrorElement = ErrorElement;
  }
}
