var fs = require("fs");
var path = require("path");
var unzip = require("unzipper");
var mkdirp = require("mkdirp");
var protoc = require("../protoc.js");

const protoVersion = "3.18.1";

var zips = {
  "win32_x86_32": `./zip/protoc-${protoVersion}-win32.zip`,
  "win32_x86_64": `./zip/protoc-${protoVersion}-win32.zip`,
  "linux_x86_32": `./zip/protoc-${protoVersion}-linux-x86_32.zip`,
  "linux_x86_64": `./zip/protoc-${protoVersion}-linux-x86_64.zip`,
  "darwin_x86_32": `./zip/protoc-${protoVersion}-osx-x86_64.zip`,
  "darwin_x86_64": `./zip/protoc-${protoVersion}-osx-x86_64.zip`
};

var platform = process.platform;
var arch = process.arch === "x64" ? "x86_64" : "x86_32";
var release = platform + "_" + arch;

if (zips[release]) {
  fs.createReadStream(zips[release])
  // 直接解压到指定的目录下
    .pipe(unzip.Extract({ path: 'protoc/' }))
    .on('close', () => {
      fs.chmod(protoc, 0o755, function(err) {
        if (err) throw err;
      });
    })
  // if (!fs.existsSync(protoc)) {
  //   throw new Error('未找到编译处理器');
  // }
} else {
  throw new Error('未找到平台支持的protoc包');
}
