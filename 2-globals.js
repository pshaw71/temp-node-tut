// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
//console.log(__filename)
//console.log('require :', require)
//console.log('module: ', module)
//console.log('process: ', process)
setInterval(() => {
  console.log('hello world')
}
, 1000)
// ^^^^ this will print 'hello world' every second until you stop the process
// to stop the process, press ctrl + c in the terminal
// you can also use process.exit() to stop the process
// process.exit() will stop the process immediately
// process.exit(0) will stop the process immediately with a success code
// process.exit(1) will stop the process immediately with a failure code  