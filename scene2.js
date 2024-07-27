function callScene2(minValueDeath, maxValueDeath, data_combined) {

    var currentState = "";
    d3.select("#scene2").append("svg").attr("width", 960).attr("height", 600);

    var path = d3.geoPath();
    let statesCodeMap = new Map();
    let statesAbrv = new Map();

    Promise.all([
        d3.csv('https://raw.githubusercontent.com/pouriam/pouriam.github.io/main/state_code.txt')
    ]).then(function([stateCodes]) {
        stateCodes.forEach(element => {
            statesCodeMap.set(element['STATE'], element['STUSAB']);
            statesAbrv.set(element['STATE'], element['STATE_NAME']);
        });
    });

    var tooltip = d3.select("#scene2")
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
        d3.select(this).style("cursor", "pointer");
        currentState = statesCodeMap.get(d["id"]);
        let dt = data_combined.get(statesCodeMap.get(d["id"]));
        tooltip
          .html("<p style='text-align:left;'><strong>State: " + dt.state + "</strong><hr></p>" + 
                "<p style='text-align:left;'>Deaths: " + d3.format(",")(dt.death) + 
                "</p><p> Click to see more details.</p>")
          .style("left", event.pageX + "px") 
          .style("top", (event.pageY-50) + "px")
          
    }

    const mouseleave = function(event, d) {
        tooltip
          .transition()
          .duration(10)
          .style("opacity", 0)
    }

    const mousemove = function(event, d) {
        tooltip.style("opacity", 1)
    }

    const colorAssigment = function (d) {
        const startColor = { r: 255, g: 204, b: 204 }; // Light red
        const endColor = { r: 153, g: 0, b: 0 }; // Dark red
        let deathRate = data_combined.get(statesCodeMap.get(d["id"]));
        
        const normalizedValue = (deathRate.death - minValueDeath[1]) / maxValueDeath[1];
        
        const r = Math.round(startColor.r + normalizedValue * (endColor.r - startColor.r));
        const g = Math.round(startColor.g + normalizedValue * (endColor.g - startColor.g));
        const b = Math.round(startColor.b + normalizedValue * (endColor.b - startColor.b));

        // Convert the components to a hex string
        const hex = (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
        
        return `#${hex}`;
    }

    const clickRedirect = function() {
        setState(currentState);
        callScene4();
        var el = document.getElementById('bc4');
        el.onclick();
        return true;
    }

    Promise.all([
        d3.json('https://d3js.org/us-10m.v1.json')
    ]).then(function([us]) {

        d3.select("#scene2").select("svg").append("g")
            .attr("class", "states")
            .selectAll("path")
            .data(topojson.feature(us, us.objects.states).features)
            .enter().append("path")
            .attr("d", path)
            .attr("state", function(d) { return statesCodeMap.get(d["id"]);})
            .attr("fill", function(d) { return colorAssigment(d);})
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on("click", function(d) { return clickRedirect(); });

        d3.select("#scene2").select("svg").append("path")
            .attr("class", "state-borders")
            .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

    });

}