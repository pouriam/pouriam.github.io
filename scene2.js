function callScene2(minValueDeath, maxValueDeath, minValueHospitalized, maxValueHospitalized, data_combined) {

    d3.select("#scene2").append("svg").attr("width", 960).attr("height", 600);

    var path = d3.geoPath();

    Promise.all([
        d3.csv('https://raw.githubusercontent.com/pouriam/pouriam.github.io/main/state_code.txt')
    ]).then(function([stateCodes]) {
        console.log(stateCodes);
    });

    Promise.all([
        d3.json('https://d3js.org/us-10m.v1.json')
    ]).then(function([us]) {

        d3.select("#scene2").select("svg").append("g")
            .attr("class", "states")
            .selectAll("path")
            .data(topojson.feature(us, us.objects.states).features)
            .enter().append("path")
            .attr("d", path);

        d3.select("#scene2").select("svg").append("path")
            .attr("class", "state-borders")
            .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

        console.log(us.objects.states);
    });

}