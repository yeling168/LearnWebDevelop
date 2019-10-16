var data = [
  { date: new Date(2011, 1, 1), value: 0.5 },
  { date: new Date(2011, 2, 1), value: 0.6 },
  { date: new Date(2011, 3, 1), value: 0.7 },
  { date: new Date(2011, 4, 1), value: 0.8 }
];

var bisectDate = d3.bisector(function(d) {
  return d.date;
}).right;

console.log(bisectDate);
