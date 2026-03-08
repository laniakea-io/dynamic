let data =
  "3, ,2, ,3, ,2,   ,32,  ,56\n ,2, ,2, ,2, ,122,  ,44,  ,6\n ,333,  ,55,    ,333,  ,55,     ,5,   ,56,\n4,   ,34,  ,5556,   ,34,  ,55565, ,443,  ,6\n2, ,3,  ,56\n ,2, ,43,  ,6";

let lines = data.split("\n"),
output = [], i;

output.push(
  "<tr><th>" + lines[0].slice().split(",").join("</th><th>") + "</th></tr>",
);
for (i = 1; i < lines.length; i++)
  output.push(
    "<tr><td>" + lines[i].slice().split(",").join("</td><td>") + "</td></tr>",
  );
output = "<table><tbody>" + output.join("") + "</tbody></table>";

console.log(output);
