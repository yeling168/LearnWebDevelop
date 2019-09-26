//svg

var svg = d3
  .select("#container")
  .append("svg")

  .attr("width", 500)
  .attr("height", 250);

var g=d3.select("svg")
  .append("g")
  .attr("transform", "translate(50,30)");


d3.select('g').append('path').attr('d',line_generator);//d="M1,0L20,40L40,50L100,100L0,200"  d-path data