let me = {
  birthDate: { year: 1991, month: 3, day: 14 },
  getAge: function () {
    let now = new Date();
    let born = new Date(
        this.birthDate.year,
        this.birthDate.month + 1,
        this.birthDate.day
    );
    let diffinMilleseconds = now.getTime() - born.getTime();
    return Math.floor(diffinMilleseconds / 1000 / 60 / 60 / 24 / 365.25);
  }

}

let me = {
  birthDate: { year: 1991, month: 3, day: 14 },
  getAge() { // короткая запись функции
    let now = new Date();
    let born = new Date(
        this.birthDate.year,
        this.birthDate.month + 1,
        this.birthDate.day
    );
    let diffinMilleseconds = now.getTime() - born.getTime();
    return Math.floor(diffinMilleseconds / 1000 / 60 / 60 / 24 / 365.25);
  }

}

console.log(me.getAge());