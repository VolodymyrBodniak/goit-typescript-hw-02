/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfTheWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

type Days = {
  [DayOfTheWeek.Monday]: {
    workingDay: () => string;
  };
  [DayOfTheWeek.Thursday]: {
    workingDay: () => string;
  };
  [DayOfTheWeek.Wednesday]: {
    workingDay: () => string;
  };
  [DayOfTheWeek.Thursday]: {
    workingDay: () => string;
  };
  [DayOfTheWeek.Friday]: {
    workingDay: () => string;
  };
  [DayOfTheWeek.Saturday]: {
    weekend: () => string;
  };
  [DayOfTheWeek.Sunday]: {
    weekend: () => string;
  };
};

function isWeekend(day: DayOfTheWeek): boolean {
  return day === DayOfTheWeek.Saturday || day === DayOfTheWeek.Sunday;
}

const today = DayOfTheWeek.Saturday;

if (isWeekend(today)) {
  console.log("Сьогодні вихідний день!");
} else {
  console.log("Сьогодні робочий день.");
}
