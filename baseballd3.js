// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//

var barHeight = Math.ceil(height / data.length);

/*svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
    .attr('width', function(d) { return d * width; })
    .attr('height', barHeight)
    .attr('y', function(d, i) { return i * barHeight; })
    .attr('fill', 'steelblue');


svg.append('rect')
  .attr('x', 150)
  .attr('y', 150)
  .attr('width', 100)
  .attr('height', 100)
  .attr('fill', 'darkseagreen')
  .attr('transform','rotate(45 200 200)');

svg.append('rect')
  .attr('x', 150)
  .attr('y', 150)
  .attr('width', 100)
  .attr('height', 100)
  .attr('fill', 'darkseagreen')
  //.attr('transform','rotate(45 200 200)')
  ;
  
svg.append('rect')
  .attr('x', 150)
  .attr('y', 150)
  .attr('width', 15)
  .attr('height', 15)
  .attr('fill', 'white')
  .attr('stroke','black')
  .attr('transform','rotate(45 200 200)');
  */
  
  
svg.append('path')
  .attr('fill','lightgrey')
  .attr('d',"M292.16,194.41a101.43,101.43,0,0,0-187.45-3.13L200,286.57Z")
  .attr('transform',"translate(-75.43 -129.65)");
  
svg.append('path')
  .attr('class','7')
  .attr('fill',data[6])
  .attr('stroke','darkseagreen')
  .attr('d',"M319.15,195.9a77.52,77.52,0,0,0-6.48-22l-20.51,20.51-1.81,1.81A97.56,97.56,0,0,0,319.15,195.9Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','4')
  .attr('fill',data[3])
  .attr('stroke','darkseagreen')
  .attr('d',"M104.89,191.46c-9.31,1.25-18.76,1.57-28.06,4A85.72,85.72,0,0,0,94.47,261l9.78,9.78,6,6.05c14-12.33,29.85-23.73,43-36.9Z")
  .attr('transform',"translate(-75.43 -129.65)");
  
svg.append('path')
  .attr('class','2')
  .attr('fill',data[1])
  .attr('stroke','darkseagreen')
  .attr('d',"M153.32,239.89c-13.17,13.17-29,24.57-43,36.9l29.92,29.92a92.12,92.12,0,0,0,21.45,13.63c9.1-15.11,14.47-32.34,26.59-45.51Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','1')
  .attr('fill',data[0])
  .attr('stroke','darkseagreen')
  .attr('d',"M200,286.57l-11.74-11.74c-12.12,13.17-17.49,30.4-26.59,45.51a92.42,92.42,0,0,0,78-.72c-6.7-16.74-16.43-31.27-26.3-46.46Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','5')
  .attr('fill',data[4])
  .attr('stroke','darkseagreen')
  .attr('d',"M275,269c3.11,4.1,6.09,8.22,9,12.35l4.53-4.53,12.37-12.37c14.93-20.91,21.49-45.61,18.26-68.55a97.56,97.56,0,0,1-28.8.32l-42,42C258.37,247.11,266.69,257.36,275,269Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','3')
  .attr('fill',data[2])
  .attr('stroke','darkseagreen')
  .attr('d',"M275,269c-8.31-11.64-16.63-21.89-26.67-30.76L213.4,273.16c9.87,15.19,19.6,29.72,26.3,46.46a89.21,89.21,0,0,0,15.44-9.42L284,281.35C281.09,277.22,278.11,273.1,275,269Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','6')
  .attr('fill',data[5])
  .attr('stroke','darkseagreen')
  .attr('d',"M104.71,191.28l-20.1-20.1a78,78,0,0,0-7.78,24.28c9.3-2.43,18.75-2.75,28.06-4Z")
  .attr('transform',"translate(-75.43 -129.65)");
  
//baseball field
svg.append('rect')
  .attr('class','cls-3')
  .attr('stroke','black')
  .attr('fill','white')
  .attr('x',180.08)
  .attr('y',230.41)
  .attr('width',39.83)
  .attr('height',39.83) 
  .attr('transform','translate(160.16 -197.75) rotate(45)');

// bases
svg.append('rect')  
  .attr('class',"cls-2")
  .attr('fill','white')
  .attr('stroke','black')
  .attr('x',197.26)
  .attr('y',223.3)
  .attr('width',5.49)
  .attr('height',5.49) 
  .attr('transform',"translate(142.99 -204.86) rotate(45)");
  
svg.append('rect')
  .attr('class',"cls-2")
  .attr('fill','white')
  .attr('stroke','black')
  .attr('x',172.97) 
  .attr('y',247.58)
  .attr('width',5.49)
  .attr('height',5.49) 
  .attr('transform',"translate(153.05 -180.58) rotate(45)");
  
svg.append('rect')
  .attr('class',"cls-2") 
  .attr('fill','white')
  .attr('stroke','black')
  .attr('x',221.54)
  .attr('y',247.58) 
  .attr('width',5.49) 
  .attr('height',5.49) 
  .attr('transform',"translate(167.27 -214.92) rotate(45)");
  
// Zone labels
svg.append('text')
  .attr('x',120)
  .attr('y', 180)
  .attr('font-family','Arial')
  .text('1');
svg.append('text')
  .attr('x',70)
  .attr('y', 160)
  .attr('font-family','Arial')
  .text('2');
svg.append('text')
  .attr('x',170)
  .attr('y', 160)
  .attr('font-family','Arial')
  .text('3');
svg.append('text')
  .attr('x',30)
  .attr('y', 105)
  .attr('font-family','Arial')
  .text('4');
svg.append('text')
  .attr('x',210)
  .attr('y', 105)
  .attr('font-family','Arial')
  .text('5');
svg.append('text')
  .attr('x',10)
  .attr('y', 60)
  .attr('font-family','Arial')
  .text('6');
svg.append('text')
  .attr('x',230)
  .attr('y', 60)
  .attr('font-family','Arial')
  .text('7');
  
// Legend
var legend = svg.selectAll(".legendBoxes")
  .data(["#EDF8E9", "#BAE4B3", "#74C476", "#238B45"])
  .enter()
  .append('rect');
  
legend.attr('x', function(d,i){return 20 + i * 50 })
  .attr('y', 230)
  .attr('width',50)
  .attr('height',20)
  .attr('fill',function(d){return d });

var legendLabels = svg.selectAll(".legendLabels")
  .data([10,20,30,40])
  .enter()
  .append('text');
  
legendLabels.attr('x', function(d,i){return 62 + i * 50})
  .attr('y',267)
  .attr('font-family','Arial')
  .text(function(d){return d});
  
// Title at bottom  
svg.append('text')
  .attr('x',10)
  .attr('y',320)
  .attr('font-size','0.9em')
  .attr('font-family','Arial')
  .text('Percentage of Foul Balls by Zone (1-7)');
  