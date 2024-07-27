var data;
var stateAbvr = "";
function initializeScene4(dt) {
    data = dt;
}

function setState(st) {
    stateAbvr = st;
}

function callScene4() {

    d3.select('#scene4').html("");

    var table = d3.select('#scene4').append('table')
                .attr("width", "400px")
                .style("margin", "0 auto")
                .style("border-collapse", "collapse")
                .style("border", "1px black solid");

    // headers
    table.append("thead").append("tr")
        .selectAll("th")
        .data(["Date", "State", "Death", "Hospitalized"])
        .enter().append("th")
        .text(function(d) { return d; })
        .style("border", "1px black solid")
        .style("padding", "5px")
        .style("background-color", "lightgray")
        .style("font-weight", "bold")
        .style("text-transform", "uppercase");
    

    // data :  {date, state, death, hospitalized}
    table.append("tbody")
        .selectAll("tr")
        .data(data.filter(function(d) { return stateAbvr === "" ? true : d.state === stateAbvr}))
        .enter().append("tr")
        .selectAll("td")
        .data(function(d){ return new Array(d.date, d.state, d.death, d.hospitalizedCurrently) ;})
        .enter().append("td")
        .style("border", "1px black solid")
        .style("padding", "5px")
        .on("mouseover", function(){
            d3.select(this).style("background-color", "powderblue");
        })
        .on("mouseout", function(){
            d3.select(this).style("background-color", "#f5f7fa");
        })
        .text(function(d){return d;})
        .style("font-size", "12px");
    

}