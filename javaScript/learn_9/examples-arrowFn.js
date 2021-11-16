const me = {
  name: '',
  surname: '',
  getFullName() {
    return `${this.name} ${this.surname}`;
  },
  getFullNameArrow: () => `${this.name} ${this.surname}`,
};

// Работает
console.log(me.getFullName());
// Не сработает, так как в стрелочной функции нет собственного this
console.log(me.getFullNameArrow());
