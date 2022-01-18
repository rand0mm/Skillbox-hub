// -запустить таймер
// - поставить на паузу
// - сбросить таймер

 export default class TimerDisplay {
  constructor(seconds) {
    if(typeof seconds !== 'number' || seconds < 1) {
      throw new TypeError('Кол-во секунд должно быть числом больше 1')
    }
    this.startTIme = seconds;
    this.currentTime = seconds;
  }

  set currentTime(time) {
    this._currentTime = time;
    if (this.displayElement)
    this.displayElement.textContent = time;
  }

  get currentTime() {
    return this._currentTime;
  }

  get elapsedTime() {
    return this.startTIme - this.currentTime;
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  pause() {
    clearInterval(this.interval)
  }

  reset() {
    this.pause();
    this.currentTime = this.startTIme;
  }

  tick() {
    if (this.currentTime <= 0) {
      this.currentTime = 0;
      this.pause();
      return;
    }
    --this.currentTime;
  }

  getComponentElement() {
    if(this.rootElement) return this.rootElement;
    const root = document.createElement('div')
    const currentTimeDisplay = document.createElement('div')
    const startButton = document.createElement('button')
    const pauseButton = document.createElement('button')
    const resetButton = document.createElement('button')
    root.classList.add('time-display');
    currentTimeDisplay.classList.add('timer-display__current')
    pauseButton.classList.add('time-display__pause')
    resetButton.classList.add('time-display__reset')
    root.append(currentTimeDisplay)
    root.append(startButton)
    root.append(pauseButton)
    root.append(resetButton)
    startButton.textContent = 'Старт'
    pauseButton.textContent = 'Пауза'
    resetButton.textContent = 'Сброс'
    startButton.addEventListener('click', () => this.start());
    pauseButton.addEventListener('click', () => this.pause());
    resetButton.addEventListener('click', () => this.reset());
    this.rootElement = root;
    this.displayElement = currentTimeDisplay;
    this.displayElement.textContent = this.currentTime;
    return root;
  }
}
