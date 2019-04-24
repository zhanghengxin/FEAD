# Organizing your generators
# 定制你的生成器

@hkk
@from https://yeoman.io/authoring/

## Setting up as a node module
## 与node模块一样的设置

A generator is, at its core, a Node.js module.
生成器的核心是一个Node.js 模块

First, create a folder within which you’ll write your generator. This folder must be named generator-name (where name is the name of your generator). This is important, as Yeoman relies on the file system to find available generators.
1、创建一个文件夹，你将在这里写你的“生成器”，这个文件夹的名字必须是“generator-YOURNAME”，因为Yeoman 依赖于文件系统查找“生成器”。

Once inside your generator folder, create a package.json file. This file is a Node.js module manifest. You can generate this file by running npm init from your command line or by entering the following manually:
一旦找到你的文件夹，创建一个“node清单”，你可以使用“npm init”命令，或者手动输入以下：
~~~json
{
  "name": "generator-name",
  "version": "0.1.0",
  "description": "",
  "files": [
    "generators"
  ],
  "keywords": ["yeoman-generator"],
  "dependencies": {
    "yeoman-generator": "^1.0.0"
  }
}
~~~

The name property must be prefixed by generator-. The keywords property must contain "yeoman-generator" and the repo must have a description to be indexed by our generators page.
“name”属性必须使用“generator-”作为前缀，“keywords”属性必须包含“yeoman-generator”，并且【repo？】必须有一个描述作为生成器页面的索引【？】

You should make sure you set the latest version of yeoman-generator as a dependency. You can do this by running: npm install --save yeoman-generator.
你应该确认你设置了并使用了最新版的“yeoman-generator”，你可以这样做：“npm install --save ”

The files property must be an array of files and directories that is used by your generator.
这个“files”属性必须是你的“生成器”所使用的文件和目录的数组【？】，

Add other package.json properties as needed.
根据需要，添加其他属性到“package.json”

## Folder tree
## 文件树

Yeoman’s functionality is dependent on how you structure your directory tree. Each sub-generator is contained within its own folder.
Yeoman 的【functionality？】取决于你如何构造你的文件目录。每一个子项生成器是被他自己的文件夹中【？】

The default generator used when you call yo name is the app generator. This must be contained within the app/ directory.
当你使用“yo”调用这个app的生成器，这个默认的生成器必须在这个app文件中/目录中【？】

Sub-generators, used when you call yo name:subcommand, are stored in folders named exactly like the sub command.
子项构造器--当你通过“yo APPNAME：subcommand”调用时，使用的是存储在文件，并且名字与其一致的。

In an example project, a directory tree could look like this:

~~~html 
├───package.json
└───generators/
    ├───app/
    │   └───index.js
    └───router/
        └───index.js
~~~

This generator will expose yo name and yo name:router commands.
这个生成器会被“yo name”【暴露】？？？

Yeoman allows two different directory structures. It’ll look in ./ and in generators/ to register available generators.
Yeoman 允许两个不同的目录结构，他会关注当前目录并且在“generators/”目录下注册有效的生成器。

The previous example can also be written as follows:
前一个例子也可以这样写：

~~~html 
├───package.json
├───app/
│   └───index.js
└───router/
    └───index.js
~~~

If you use this second directory structure, make sure you point the files property in your package.json at all the generator folders.
如果你使用了第二个目录结构，你需要确认在你的“package.json”中“files”属性指向所有的生成器文件。

~~~json 
{
  "files": [
    "app",
    "router"
  ]
}
~~~

## Extending generator
## 扩展生成器

Once you have this structure in place, it’s time to write the actual generator.
一旦在合适的时机，你有这个结构，那是时候编写实际的生成器了。

Yeoman offers a base generator which you can extend to implement your own behavior. This base generator will add most of the functionalities you’d expect to ease your task.
Yeoman 提供基础生成器，你可以扩展他来实现你的行为。这个基础的生成器将会添加你希望简化的绝大部分功能。

In the generator’s index.js file, here’s how you extend the base generator:
在入口文件中，这就是如何扩展基础生成器：

~~~js
var Generator = require('yeoman-generator');

module.exports = class extends Generator {};
~~~

We assign the extended generator to module.exports to make it available to the ecosystem. This is how we export modules in Node.js.
我们将扩展生成器i分配给 “module.exports”，是其对生态系统可用，这是我们在node.js导出模块的方法。

## Overwriting the constructor
## 重写构造器

Some generator methods can only be called inside the constructor function. These special methods may do things like set up important state controls and may not function outside of the constructor.
有些生成器方法只能被内部构造方法调用。一些特别的方法可能做类似设置重要的状态控制并且不能再构造外执行使用。

To override the generator constructor, add a constructor method like so:
重写生成器的构造器，添加一个构造器方法：

~~~js
module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
};
~~~

## Adding your own functionality
## 添加专属方法

Every method added to the prototype is run once the generator is called–and usually in sequence. But, as we’ll see in the next section, some special method names will trigger a specific run order.
每一个方法添加在原型中，当被生成器调用通常是【顺序】，但是，下一个环节我们将看到一些特殊的方法名会【trigger 引发】一个特别的运行顺序

Let’s add some methods:

~~~js
module.exports = class extends Generator {
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
};
~~~

When we run the generator later, you’ll see these lines logged to the console.
一会儿，当我们运行生成器，你将看到这些打印记录。

## Running the generator
## 运行生成器

At this point, you have a working generator. The next logical step would be to run it and see if it works.
此时，你拥有了一个进行中的生成器，下一个合乎逻辑的步骤是运行它并查看他，如果他工作起来。

Since you’re developing the generator locally, it’s not yet available as a global npm module. A global module may be created and symlinked to a local one, using npm. Here’s what you’ll want to do:
当你开发一个本地的生成器，他还不是一个有效的npm模块，使用npm创建一个全局的模块并且链接到本地。这有你想要的：

On the command line, from the root of your generator project (in the generator-name/ folder), type:

~~~command
npm link
~~~

That will install your project dependencies and symlink a global module to your local file. After npm is done, you’ll be able to call yo name and you should see the this.log, defined earlier, rendered in the terminal. Congratulations, you just built your first generator!
这将安装项目依赖项，并将全局模块符号链接到本地文件。npm完成后，您将能够调用您的名字，您应该会看到这个。前面定义的日志，在终端中呈现。祝贺您，您刚刚建立了您的第一个生成器!

## Finding the project root
## 查找项目根

While running a generator, Yeoman will try to figure some things out based on the context of the folder it’s running from.

Most importantly, Yeoman searches the directory tree for a .yo-rc.json file. If found, it considers the location of the file as the root of the project. Behind the scenes, Yeoman will change the current directory to the .yo-rc.json file location and run the requested generator there.

The Storage module creates the .yo-rc.json file. Calling this.config.save() from a generator for the first time will create the file.

So, if your generator is not running in your current working directory, make sure you don’t have a .yo-rc.json somewhere up the directory tree.