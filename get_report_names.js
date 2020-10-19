var fs = require('fs');
var files = fs.readdirSync('backstop_data/bitmaps_test');

var html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<script type="text/javascript" src="configure_report.js"></script>
<title>Get Backstop Report</title>
</head>
<body>
<h1>Reportes de BackstopJS Disponibles</h1>
<ul>[LIST_DIRECTORIES]</ul>
</body>
</html>
`;

var lis = '\n';

files.forEach(element => {
    if (!element.includes('.DS_Store'))
        lis = lis + '<li>' + element + '</li>\n'
});

html = html.replace('[LIST_DIRECTORIES]', lis);

fs.writeFileSync('get_backstop_report.html', html);