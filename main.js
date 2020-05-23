import TurndownService from './turndown.js'
import turndownPluginGfm from './turndownPluginGfm.js'
const gfm = turndownPluginGfm.gfm 
const turndownService = new TurndownService({ headingStyle: 'atx'})
turndownService.use(gfm)
console.log("start text")

let trixOutput =  document.getElementById('trix-output')
let turndownOutput = document.getElementById('turndown-output')
turndownOutput.innerHTML = turndownService.turndown(trixOutput.value)
console.log(trixOutput.value)

// turndownOutput.textContent = turndownService.turndown('<h2>hello world</h2>')
//
// const { turndown } = new TurnDown({headingStyle: 'atx'})
// actions: [
//   'bold',    
//   'italic',
//   'strikethrough',
//   'heading1',
//   'heading2',
//   // 'paragraph'  - from github You can create a new paragraph by leaving a blank line between lines of text.
//   'quote',
//   'olist',
//   'ulist',
//   'code',
//   'line', // horizontal lines
//   'link', 
//   // to be looked into 'image'
// ],
