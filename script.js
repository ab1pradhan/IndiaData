


      function draw(data) {
      
      /*
        D3.js setup code
      */
          "use strict";
          var margin = 75,
              width = 700 - margin,
              height = 400 - margin;


          var TargetBtnNames = ['Airports & Aircraft', 'Business', 'Educational Institution',
                                 'Food or Water Supply', 'Government (Diplomatic)',
                                 'Government (General)', 'Journalists & Media', 'Maritime',
                                 'Military', 'NGO', 'Other', 'Police', 'Private Citizens & Property',
                                 'Religious Figures/Institutions', 'Telecommunication',
                                 'Terrorists/Non-State Militia', 'Tourists', 'Transportation',
                                 'Unknown', 'Utilities', 'Violent Political Party']

          var AttackBtnNames = ['All','Armed Assault', 'Assassination', 'Bombing/Explosion',
                                'Facility/Infrastructure Attack', 'Hijacking',
                                 'Hostage Taking (Barricade Incident)','Hostage Taking (Kidnapping)',
                                 'Unarmed Assault', 'Unknown']

    
   
      d3.select('body')
        .append('h2')
        .text('Terrorists  Attacks')

      var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');

      /*
        Dimple.js Chart construction code
      */
      

          var myChart = new dimple.chart(svg,data);
          var x = myChart.addCategoryAxis("x", "Year"); 
          
          var y = myChart.addMeasureAxis("y", "count");
          myChart.addSeries(null, dimple.plot.line);
          
          
          myChart.draw();

        
          d3.select("#TargetBtn")
            .selectAll("input")
            .data(TargetBtnNames)
            .enter()
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("id", function(d) {
                return d;
            })
            .attr("value", function(d) {
                return d;
            })

        
        d3.select("#AttackBtn")
            .selectAll("input")
            .data(AttackBtnNames)
            .enter()
            .append("input")
            .attr("type", "button")
            .attr("class", "button2")
            .attr("id", function(d) {
                return d;
            })
            .attr("value", function(d) {
                return d;
            })
 /* 
 FILTTERS AND ON CLICK         
------------------------------------------------------------------------------------
  */       

var filter1 = dimple.filterData(data, "attack type", 'Armed Assault');
var filter2 = dimple.filterData(data, "attack type", 'Assassination');
var filter3 = dimple.filterData(data, "attack type", 'Bombing/Explosion');
var filter4 = dimple.filterData(data, "attack type", 'Facility/Infrastructure Attack');
var filter5 = dimple.filterData(data, "attack type", 'Hijacking');
var filter6 = dimple.filterData(data, "attack type", 'Hostage Taking (Barricade Incident)');
var filter7 = dimple.filterData(data, "attack type", 'Hostage Taking (Kidnapping)');
var filter8 = dimple.filterData(data, "attack type", 'Unarmed Assault');
var filter9 = dimple.filterData(data, "attack type", 'Unknown');


var data_select;
var current_data;



d3.select("#All").on("click", function(d) {
            data_select = d;
            myChart.data = data
            myChart.draw(1000);

             });


d3.select("#Armed Assault").on("click", function(d){
  data_select = d;
  myChart.data = filter1;
  myChart.draw(1000);
});

d3.select("#Assassination").on("click", function(d){
  data_select =d;
  myChart.data= filter2;
  myChart.draw(1000);
});

d3.select("#Bombing/Explosion").on("click", function(d){
  data_select =d;
  myChart.data= filter3;
  myChart.draw(1000);
});

d3.select("#Facility/Infrastructure Attack").on("click", function(d){
  data_select =d;
  myChart.data= filter4;
  myChart.draw(1000);
});

d3.select("#Hijacking").on("click", function(d){
  data_select =d;
  myChart.data= filter5;
  myChart.draw(1000);
});

d3.select("#Hostage Taking (Barricade Incident)").on("click", function(d){
  data_select =d;
  myChart.data= filter6;
  myChart.draw(1000);
});

d3.select("#Hostage Taking (Kidnapping)").on("click", function(d){
  data_select =d;
  myChart.data= filter7;
  myChart.draw(1000);
});

d3.select("#Unarmed Assault").on("click", function(d){
  data_select =d;
  myChart.data= filter8;
  myChart.draw(1000);
});

d3.select("#Unknown").on("click", function(d){
  data_select =d;
  myChart.data= filter9;
  myChart.draw(1000);
});










/*------------------------------------------------------------------------------------
         
*/
        };