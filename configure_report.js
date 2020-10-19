const { exception } = require('console');
var fs = require('fs');
let reportName = process.argv[2];
if (!reportName) {
    throw exception('No report name provided');
}
else {
    let reportConfiguration = fs.readFileSync('backstop_data/bitmaps_test/' + reportName + '/report.json');
    fs.writeFileSync('backstop_data/html_report/config.js', 'report(' + reportConfiguration + ');');
}