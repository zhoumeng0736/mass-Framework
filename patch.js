var fs = require("fs")
function getAllFiles(root) {
  var result = [], files = fs.readdirSync(root)
  files.forEach(function(file) {
    var pathname = root+ "/" + file
      , stat = fs.lstatSync(pathname)
    if (stat === undefined) return


    if (!stat.isDirectory()) {
      result.push(pathname)
    } else {
      result = result.concat(getAllFiles(pathname))
    }
  });
  return result
}
var arr = getAllFiles("doc")
arr.forEach(function(name){
  console.log(name)
  fs.readFile(name,function(e,fd){
     var text = ( fd+"").replace(/\<meta charset="utf-8" \/>\r?\n/,'<meta charset="utf-8" />');
     fs.writeFile(name,text, function(e){
     })
  })

})
