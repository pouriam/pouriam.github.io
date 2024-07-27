# pouriam.github.io

Data Visualization report on COVID19 death and hospitalization cases.

## Source Data
Covid19 data source:
https://covidtracking.com/data/download/all-states-history.csv

United States TOPO Json source:
https://d3js.org/us-10m.v1.json


## Visualization
This report contains 4 scenes.

### Scene1
Scene 1 is a scatterplot of the cumulative number of death and hospitalized for each state. The first scene gives overall understanding of each state's situation for death and hospitalized cases.

### Scene2
Scene2 is the heatmap of the united states for the overall number of death cases. Darker the color, higher the number. The map is interactive, which means by hovering the mouse over each state, users can see a tooltip to popup and provide the name of the state and the number of deaths in that state. Also by clicking on the state, user will be redirected to scene4, which will be explained later. From the map can easily understand that the State of the New York had the most number of death cases, followed by California and Texas.

### Scene3
Scene3 is the heatmap of the united states for the overall number of hospitalized. Darker the color, higher the number. The map is interactive, which means by hovering the mouse over each state, users can see a tooltip to popup and provide the name of the state and the number of hospitalized in that state. Also by clicking on the state, user will be redirected to scene4, which will be explained next. From the map can easily understand that the State of the California had the most number of hospitalized cases, followed by Texas and New York.

### Scene4
Scene4 is a table containing the number of deaths and hospitalized cases for a selected state by the date. 