(function() {
  var addNode, drawPath, i, nodes, paper, pathString;

  nodes = [5,10, 8, 4, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];

  paper = Snap(1500, 700);

  pathString = "";

  drawPath = function(i) {
    var path;
    if (i === 0) {
      pathString = "M " + (i * 70) + ", " + (nodes[i] + 300);
    } else {
      pathString += "L " + (i * 70) + ", " + (nodes[i] + 300);
    }
    return path = paper.path("").attr({
      fill: 'transparent',
      strokeWidth: 2,
      stroke: '#000',
      d: pathString
    });
  };

  addNode = function(i) {
    var color, cr, index;
    index = nodes[i];
    if (index > 6 || index < 11) {
      color = '#faff76';
    }
    if (index <= 5) {
      color = '#a3ff72';
    }
    if (index > 10) {
      color = '#ff5555';
    }
    cr = paper.circle(i * 70, index + 300, 15);
    return cr.attr({
      fill: color,
      strokeWidth: 3,
      stroke: '#fff'
    });
  };

  i = 0;

  while (i < nodes.length) {
    addNode(i);
    drawPath(i);
    i++;
  }

}).call(this);
