// triangle:
function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("base").value);
    //console.log(base);
    const height = parseFloat(document.getElementById("height").value);
    //console.log(height);
    area = 0.5 * base * height;
    document.getElementById("triangle-area").innerText = area;
  }
  // rectangle:
  function calculateRectangleArea() {
    const width = parseFloat(document.getElementById("width").value);
    //console.log(width);
    const length = parseFloat(document.getElementById("length").value);
    //console.log(length);
    area = width * length;
    //console.log(area = width * length);
    document.getElementById("rectangle-area").innerText = area;
  }
  // paralellogram:
  function calculateParalellogramArea() {
    const base = parseFloat(document.getElementById("para-base").value);
    //console.log(base);
    const height = parseFloat(document.getElementById("para-height").value);
    //console.log(height);
    area = base * height;
    document.getElementById("paralellogram-area").innerText = area;
  }
  // rhombus:
  function calculateRhombusArea() {
    const d1 = parseFloat(document.getElementById("rhombus-d1").value);
    //console.log(base);
    const d2 = parseFloat(document.getElementById("rhombus-d1").value);
    //console.log(height);
    area = 0.5*d1 *d2;
    document.getElementById("rhombus-area").innerText = area;
  }
  // pentagon:
  function calculatePentagonArea(){
      const p=parseFloat(document.getElementById('pentagon-p').value);
      const b=parseFloat(document.getElementById('pentagon-b').value);
      area=0.5*p*b;
      document.getElementById('pentagon-area').innerText=area;
  }
  // ellipse:
  function calculateEllipseArea() {
      const a=parseFloat(document.getElementById('ellipse-a').value);
      const b=parseFloat(document.getElementById('ellipse-b').value);
      area=3.14159*a*b;
      document.getElementById("ellipse-area").innerText=area;
      
  }