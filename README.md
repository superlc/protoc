### 背景
- 使用诉求。在前后端开发协作中，将用于协议编写的`proto`文档转换为`ts`的类型定义文件。
- 使用痛点。公司内网或者并未翻墙的开发者，github存在无法访问或者访问速度很差的情况，`https://www.npmjs.com/package/protoc`，原有的protoc包大概率出现安装失败的情况。

### 改进点
- 将支持的protoc版本从`3.11.2`升级到`3.18.1`。
- 使用`本地包`来代替从指定的github下载地址`下载`，避免网络问题导致安装失败。
- 修复现有包对后续版本支持的问题。现有的包在对压缩包遍历时，只能支持单节点目录，假定所有的包里面只有`bin`目录，对于多目录压缩后的包，出现定位执行文件失败。

### 支持`PB`版本
- 3.18.1

### 支持操作系统平台
- darwin
- linux
- windows（在`git bash`下运行`sh`)
 
### 示例
``` js
var protoc = require("protoc");
 
protoc.library(["path/to/file.proto", "path/to/file2.proto"], function(err, files) {
  if (err) return console.error(err);
  // Handle the JavaScript Vinyl files.
  // These files can be used in Google Closure Compiler,
  // but they require the files in
  // https://github.com/google/protobuf/tree/master/js
  // ...
});
```
