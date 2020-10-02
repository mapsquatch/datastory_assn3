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
*/

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
  
svg.append('path')
  .attr('fill','lightgrey')
  .attr('d',"M292.16,194.41a101.43,101.43,0,0,0-187.45-3.13L200,286.57Z")
  .attr('transform',"translate(-75.43 -129.65)");
  
svg.append('path')
  .attr('class','7')
  .attr('d',"M319.15,195.9a77.52,77.52,0,0,0-6.48-22l-20.51,20.51-1.81,1.81A97.56,97.56,0,0,0,319.15,195.9Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','4')
  .attr('d',"M104.89,191.46c-9.31,1.25-18.76,1.57-28.06,4A85.72,85.72,0,0,0,94.47,261l9.78,9.78,6,6.05c14-12.33,29.85-23.73,43-36.9Z")
  .attr('transform',"translate(-75.43 -129.65)");
  
svg.append('path')
  .attr('class','2')
  .attr('d',"M153.32,239.89c-13.17,13.17-29,24.57-43,36.9l29.92,29.92a92.12,92.12,0,0,0,21.45,13.63c9.1-15.11,14.47-32.34,26.59-45.51Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','1')
  .attr('d',"M200,286.57l-11.74-11.74c-12.12,13.17-17.49,30.4-26.59,45.51a92.42,92.42,0,0,0,78-.72c-6.7-16.74-16.43-31.27-26.3-46.46Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','5')
  .attr('d',"M275,269c3.11,4.1,6.09,8.22,9,12.35l4.53-4.53,12.37-12.37c14.93-20.91,21.49-45.61,18.26-68.55a97.56,97.56,0,0,1-28.8.32l-42,42C258.37,247.11,266.69,257.36,275,269Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','3')
  .attr('d',"M275,269c-8.31-11.64-16.63-21.89-26.67-30.76L213.4,273.16c9.87,15.19,19.6,29.72,26.3,46.46a89.21,89.21,0,0,0,15.44-9.42L284,281.35C281.09,277.22,278.11,273.1,275,269Z")
  .attr('transform',"translate(-75.43 -129.65)");

svg.append('path')
  .attr('class','6')
  .attr('d',"M104.71,191.28l-20.1-20.1a78,78,0,0,0-7.78,24.28c9.3-2.43,18.75-2.75,28.06-4Z")
  .attr('transform',"translate(-75.43 -129.65)");
  
//bases
svg.append('rect')
  .attr('class','cls-3')
  .attr('fill','darkseagreen')
  .attr('x',180.08)
  .attr('y',230.41)
  .attr('width',39.83)
  .attr('height',39.83) 
  .attr('transform','translate(160.16 -197.75) rotate(45)');

svg.append('rect')  
  .attr('class',"cls-2")
  .attr('fill','white')
  .attr('x',197.26)
  .attr('y',223.3)
  .attr('width',5.49)
  .attr('height',5.49) 
  .attr('transform',"translate(142.99 -204.86) rotate(45)");
  
svg.append('rect')
  .attr('class',"cls-2")
  .attr('fill','white')
  .attr('x',172.97) 
  .attr('y',247.58)
  .attr('width',5.49)
  .attr('height',5.49) 
  .attr('transform',"translate(153.05 -180.58) rotate(45)");
  
svg.append('rect')
  .attr('class',"cls-2") 
  .attr('fill','white')
  .attr('x',221.54)
  .attr('y',247.58) 
  .attr('width',5.49) 
  .attr('height',5.49) 
  .attr('transform',"translate(167.27 -214.92) rotate(45)");
  
/*
  
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.03 199.47"><defs><style>.cls-1{fill:none;}.cls-1,.cls-2,.cls-3{stroke:#000;stroke-miterlimit:10;}.cls-2{fill:#fff;}.cls-3{fill:#8cc63f;}</style></defs><title>baseballdiamond</title>
<path class="cls-1" d="M292.16,194.41a101.43,101.43,0,0,0-187.45-3.13L200,286.57Z" transform="translate(-75.43 -129.65)"/>
<path class="cls-2" d="M319.15,195.9a77.52,77.52,0,0,0-6.48-22l-20.51,20.51-1.81,1.81A97.56,97.56,0,0,0,319.15,195.9Z" transform="translate(-75.43 -129.65)"/>
<path class="cls-2" d="M104.89,191.46c-9.31,1.25-18.76,1.57-28.06,4A85.72,85.72,0,0,0,94.47,261l9.78,9.78,6,6.05c14-12.33,29.85-23.73,43-36.9Z" transform="translate(-75.43 -129.65)"/>
<path class="cls-2" d="M153.32,239.89c-13.17,13.17-29,24.57-43,36.9l29.92,29.92a92.12,92.12,0,0,0,21.45,13.63c9.1-15.11,14.47-32.34,26.59-45.51Z" transform="translate(-75.43 -129.65)"/>
<path class="cls-2" d="M200,286.57l-11.74-11.74c-12.12,13.17-17.49,30.4-26.59,45.51a92.42,92.42,0,0,0,78-.72c-6.7-16.74-16.43-31.27-26.3-46.46Z" transform="translate(-75.43 -129.65)"/>
<path class="cls-2" d="M275,269c3.11,4.1,6.09,8.22,9,12.35l4.53-4.53,12.37-12.37c14.93-20.91,21.49-45.61,18.26-68.55a97.56,97.56,0,0,1-28.8.32l-42,42C258.37,247.11,266.69,257.36,275,269Z" transform="translate(-75.43 -129.65)"/>
<path class="cls-2" d="M275,269c-8.31-11.64-16.63-21.89-26.67-30.76L213.4,273.16c9.87,15.19,19.6,29.72,26.3,46.46a89.21,89.21,0,0,0,15.44-9.42L284,281.35C281.09,277.22,278.11,273.1,275,269Z" transform="translate(-75.43 -129.65)"/>
<path class="cls-2" d="M104.71,191.28l-20.1-20.1a78,78,0,0,0-7.78,24.28c9.3-2.43,18.75-2.75,28.06-4Z" transform="translate(-75.43 -129.65)"/>

<rect class="cls-3" x="180.08" y="230.41" width="39.83" height="39.83" transform="translate(160.16 -197.75) rotate(45)"/>
<rect class="cls-2" x="197.26" y="223.3" width="5.49" height="5.49" transform="translate(142.99 -204.86) rotate(45)"/>
<rect class="cls-2" x="172.97" y="247.58" width="5.49" height="5.49" transform="translate(153.05 -180.58) rotate(45)"/>
<rect class="cls-2" x="221.54" y="247.58" width="5.49" height="5.49" transform="translate(167.27 -214.92) rotate(45)"/></svg>
  
  */