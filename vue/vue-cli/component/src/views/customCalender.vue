<template>
  <div class="wrap">
    <div class="switch">
      <div class="back" @click="back">
        &lt;
      </div>
      <div class="forward" @click="forward">
        >
      </div>
    </div>
    <div
      v-for="(items, index) in months"
      :key="index"
      v-if="index === monthIndex"
    >
      <month
        :monthName="items"
        :year="year"
        :monthIndex="index"
        :key="index"
        :day="day"
      ></month>
    </div>
  </div>
</template>
<script>
export default {
  name: "calender",
  mounted() {
    let myDate = new Date();
    this.monthIndex = myDate.getMonth();
    this.year = myDate.getFullYear();
    this.day = myDate.getDate() - 1;
  },
  data() {
    return {
      monthIndex: 0,
      months: [
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
      year: -1,
      day: -1
    };
  },
  methods: {
    back() {
      if (!this.monthIndex) {
        this.monthIndex = 11;
        this.year = this.year - 1;
      } else {
        this.monthIndex = this.monthIndex - 1;
      }
    },
    forward() {
      if (this.monthIndex == 11) {
        this.monthIndex = 0;
        this.year = this.year + 1;
      } else {
        this.monthIndex = this.monthIndex + 1;
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrap {
  position: relative;
  .switch {
    left: 11rem;
    font-weight: 600;
    position: absolute;
    display: flex;
    color: grey;
    font-size: 1.3rem;

    .forward {
      margin-left: 1.5rem;
    }
  }
}
</style>
