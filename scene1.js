function callScene1(minValueDeath, maxValueDeath, minValueHospitalized, maxValueHospitalized, data_combined) {

// X Axis
x = d3.scaleLinear().domain([minValueDeath[1], maxValueDeath[1]]).range([0, 500]);
// x = d3.scaleLog().domain([minValueDeath[1], maxValueDeath[1]]).range([0, 500]).base(2);

d3.select("#scene1").append("svg").attr("width", 600).attr("height", 600)
    .append("g")
    .attr("transform", "translate(100,550)")
    .call(d3.axisBottom(x));

// Y axis
var y = d3.scaleLinear().domain([minValueHospitalized[1], maxValueHospitalized[1]]).range([500, 0]);
// var y = d3.scaleLog().domain([minValueHospitalized[1], maxValueHospitalized[1]]).range([500, 0]).base(2);

d3.select("#scene1").select("svg").append("g")
    .attr("transform", "translate(100,50)")
    .call(d3.axisLeft(y));

let sequentialScale = d3.scaleSequential()
  .domain([0, 56])
  .interpolator(d3.interpolateRainbow);

var tooltip = d3.select("#scene1")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("position", "fixed")

const mouseover = function(event, d) {
    tooltip.style("opacity", 1)
}

const mousemove = function(event, d) {
    tooltip
      .html("<strong>State:</strong> " + d[0] + 
            "<br><strong>Death</strong>: " + d3.format(",.2r")(d[1].death) + 
            "<br><strong>Hospitalized</strong>: " + d3.format(",.2r")(d[1].hospitalized))
      .style("left", (parseInt(d3.select(this).attr("cx")) + (window.innerWidth / 3)) + "px") 
      .style("top", (parseInt(d3.select(this).attr("cy"))+70) + "px")
}

const mouseleave = function(event, d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
}

d3.select("#scene1").select("svg").append('g')
    .attr("transform", "translate(100,100)")
    .selectAll()
    .data(data_combined)
    .enter()
    .append("circle")
      .attr("cx", function (d, i) { return x(d[1].death); } )
      .attr("cy", function (d, i) { return y(d[1].hospitalized)-50; } )
      .attr("r", 4)
      .style("fill", function(d,i) {return sequentialScale(i);})
      .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )

}