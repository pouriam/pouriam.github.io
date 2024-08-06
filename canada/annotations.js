function updateCAAnnotations(svg, lblVal, lblTitle) {

    const typeA = d3.annotationCustomType(
        d3.annotationLabel, 
        {"className":"custom",
          "connector":{"type":"elbow"},
          "note":{"align":"left"}});

    const annotations1 = [
        {
        note: {
            title: lblTitle,
            label: d3.format(",")(lblVal)
        },
        disable: ["connector"],
        color: ["#000080"],
        x: 200,
        y: -50,
        dy: 0,
        dx: 0
        }
    ]

    const makeAnnotations1 = d3.annotation().type(typeA).annotations(annotations1);

    svg.select(".caCount").remove();

    svg.append("g")
        .call(makeAnnotations1)
        .attr("class", "caCount")
        .attr("style", "font-size: 22;")
        .attr("transform", "translate(500,100)");
}


function updateBCAnnotations(svg, titleVal) {
    const annotations1 = [
        {
        note: {
            title: d3.format(",")(titleVal)
        },
        connector: { lineType : "horizontal" },
        x: 220,
        y: 250,
        dy: 30,
        dx: -20
        }
    ]

    const makeAnnotations1 = d3.annotation().annotations(annotations1);

    svg.select(".bcCount").remove();

    svg.append("g")
        .call(makeAnnotations1)
        .attr("class", "bcCount")
        .attr("transform", "translate(100,100)");
}

function updateABAnnotations(svg, titleVal) {
    const annotations1 = [
        {
        note: {
            title: d3.format(",")(titleVal)
        },
        connector: { lineType : "horizontal" },
        x: 275,
        y: 270,
        dy: 30,
        dx: -20
        }
    ]

    const makeAnnotations1 = d3.annotation().annotations(annotations1);

    svg.select(".abCount").remove();

    svg.append("g")
        .call(makeAnnotations1)
        .attr("class", "abCount")
        .attr("transform", "translate(100,100)");
}

function updateSKAnnotations(svg, titleVal) {
    const annotations1 = [
        {
        note: {
            title: d3.format(",")(titleVal)
        },
        connector: { lineType : "horizontal" },
        x: 325,
        y: 280,
        dy: 70,
        dx: -20
        }
    ]

    const makeAnnotations1 = d3.annotation().annotations(annotations1);

    svg.select(".skCount").remove();

    svg.append("g")
        .call(makeAnnotations1)
        .attr("class", "skCount")
        .attr("transform", "translate(100,100)");
}

function updateONAnnotations(svg, titleVal) {
    const annotations1 = [
        {
        note: {
            title: d3.format(",")(titleVal)
        },
        connector: { lineType : "horizontal" },
        x: 500,
        y: 280,
        dy: 70,
        dx: -20
        }
    ]

    const makeAnnotations1 = d3.annotation().annotations(annotations1);

    svg.select(".onCount").remove();

    svg.append("g")
        .call(makeAnnotations1)
        .attr("class", "onCount")
        .attr("transform", "translate(100,100)");
}

function updateQCAnnotations(svg, titleVal) {
    const annotations1 = [
        {
        note: {
            title: d3.format(",")(titleVal)
        },
        connector: { lineType : "horizontal" },
        x: 170,
        y: -130,
        dy: 100,
        dx: -20
        }
    ]

    const makeAnnotations1 = d3.annotation().annotations(annotations1);

    svg.select(".qcCount").remove();

    svg.append("g")
        .call(makeAnnotations1)
        .attr("class", "qcCount")
        .attr("transform", "translate(500,500)");
}