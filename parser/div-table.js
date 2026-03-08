// Based on './html-table.js'
let data = "3, ,2, ,3, ,2,   ,32,  ,56\n ,2, ,2, ,2, ,122,  ,44,  ,6\n ,333,  ,55,    ,333,  ,55,     ,5,   ,56,\n4,   ,34,  ,5556,   ,34,  ,55565, ,443,  ,6\n2, ,3,  ,56\n ,2, ,43,  ,6";

let lines = data.split("\n"),
output = [],i;

output.push(
  "<div><div>" + lines[0].slice().split(",").join("</div><div>") + "</div></div>",
);
for (i = 1; i < lines.length; i++)
  output.push(
    "<div><div>" + lines[i].slice().split(",").join("</div><div>") + "</div></div>",
  );
output = "<div><div>" + output.join("") + "</div></div>";

console.log(output);
