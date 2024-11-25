class AlarmClock {
  constructor() {
    this.alarmCollection = []; 
    this.intervalId = null; 
  }


  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.some((alarm) => alarm.time === time)) {
      console.log("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      time,
      callback,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.time !== time
    );
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
const alarm = new AlarmClock();

alarm.addClock("07:30", () => console.log("Подъём, пора вставать!"));
alarm.addClock("07:31", () => {
  console.log("Скоро опоздаешь на пары!");
  alarm.stop();
});
alarm.addClock("07:30", () => console.log("Повторный звонок!"));

alarm.start();

setTimeout(() => {
  alarm.resetAllCalls();
  console.log("Звонки сброшены.");
}, 5000);

setTimeout(() => {
  alarm.clearAlarms();
  console.log("Все звонки удалены.");
}, 10000);
