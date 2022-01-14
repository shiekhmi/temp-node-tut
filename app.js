// npm - globa; command , comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global depenency -use it in any project
//npm install -g <packageName>
// sudo npm install -g<packageName> (mac)

//package.json - mainfest file (stores important info about project/package)
//manual approach (Create package.json in the root, create properties etc)
//npm init (Step by step, press enter to skip)
//npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2,[3,[4]]]]
const newItems =_.flattenDeep(items)
console.log(newItems)