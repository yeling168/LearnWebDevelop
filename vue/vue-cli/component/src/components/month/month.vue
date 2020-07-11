<template>
  <div class="month">
    <div class="header">{{ monthName }} {{ year }}</div>
    <div class="week">
      <div v-for="(item, i) in week" :key="i" class="weekIndex">
        {{ item }}
      </div>
    </div>
    <div class="day">
      <div
        v-for="(item, index) in days"
        :key="index"
        class="dayIndex"
        @click="choose(index)"
        :class="{ choose: chooseIndex === index }"
      >
        <div v-if="typeof item == 'string'">
          {{ item }}
        </div>
        <div v-else class="setGrey">
          {{ item[0] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "month",
  props: {
    monthName: {
      type: String,
      required: true
    },
    monthIndex: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    day: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      week: ["S", "M", "T", "W", "T", "F", "S"],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      days: [],
      monthLastDay: {
        0: 31,
        1: 28,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        11: 31
      },
      chooseIndex: -1,
      leapyear: false,
      firstDayIndex: 0
    };
  },
  mounted() {
    this.firstDayIndex = new Date(
      this.year + "/" + (this.monthIndex + 1) + "/" + "01"
    ).getDay();
    this.judgeDays();
    this.leapyear = this.isLeapYear();
    if (new Date().getMonth() == this.monthIndex) {
      this.chooseIndex = this.day + this.firstDayIndex;
    }
  },
  methods: {
    choose(index) {
      this.chooseIndex = index;
    },
    judgeDays() {
      let lastMonthIndex = this.monthIndex - 1 <= 0 ? 11 : this.monthIndex - 1;
      let lastDay = this.getMonthLastDay(this.year, lastMonthIndex);
      this.generateDays(lastDay, this.firstDayIndex);
    },
    getMonthLastDay(year, month) {
      if (month != 1) {
        return this.monthLastDay[month];
      } else {
        if (this.leapyear) {
          return 29;
        } else {
          return 28;
        }
      }
    },
    generateDays(index, lastDayNum) {
      console.log("index", index);
      console.log("lastDayNum", lastDayNum);
      let k = 0;
      let temp = 1;
      //这个for循环是push上个月的剩余日期，
      for (let i = lastDayNum; i > 0; i--) {
        this.days.push([(index - i + 1).toString()]);
        k++;
      }
      index = 1;
      for (let i = 0; i < 42 - lastDayNum; i++) {
        //闰年二月
        if (this.leapyear) {
          if (index <= 29) {
            this.days.push(index.toString());
          }
          //非闰年月份
        } else if (index <= this.monthLastDay[this.monthIndex]) {
          this.days.push(index.toString());
          //这个else是push下个月的日期
        } else {
          this.days.push([temp.toString()]);
          temp++;
        }
        index++;
        k++;
      }
    },
    isLeapYear() {
      return (
        (0 == this.year % 4 && this.year % 100 != 0) || this.year % 400 == 0
      );
    }
  }
};
</script>
<style scoped lang="less">
* {
  font-weight: 600;
  font-family: "Microsoft YaHei";
}
.month {
  .header {
    color: rgb(88, 93, 108);
    padding: 0.3rem 0;
    font-size: 1rem;
  }
  .week {
    text-align: center;
    width: 15rem;
    color: rgb(120, 136, 178);
    .weekIndex {
      display: inline-block;
      margin: 0.3rem;
      line-height: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      font-size: 0.8rem;
    }
  }
  .day {
    text-align: center;
    width: 15rem;
    .dayIndex {
      display: inline-block;
      margin: 0.3rem;
      line-height: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      font-size: 0.8rem;
      .setGrey {
        color: grey;
      }
    }
    .choose {
      background: rgb(0, 115, 227);
      border-radius: 50%;
      color: white;
    }
  }
}
</style>
