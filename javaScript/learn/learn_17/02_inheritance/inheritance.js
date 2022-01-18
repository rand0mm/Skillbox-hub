class Human {
  constructor(name, surname, birthDate) {
    this.name = name
    this.surname = surname
    this.birthDate = birthDate
  }

  getFullName() {
    return `${this.name} ${this.surname}`
  }

  printBirthDate() {
    console.log(this.birthDate)
  }
}

class student extends Human {
  constructor(name, surname, birthDate, grage) {
    super(name, surname, birthDate);
    this.grade = grage;
  }

  getRemainGrades() {
    return 4 - this.grade;
  }
}
