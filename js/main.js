import TurndownService from './vendor/turndown.min.js'
import turndownPluginGfm from './vendor/turndownPluginGfm.min.js'
const gfm = turndownPluginGfm.gfm
const turndownService = new TurndownService({ headingStyle: 'atx'})
turndownService.use(gfm)


let toolbarOptions = [
  ['bold', 'italic', 'strike'],
  [{ 'header': 1 }, { 'header': 2 }],
  ['code', 'blockquote'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['link']
]

let quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
})

quill.on('text-change', function(delta, oldDelta, source) {
  let turndownOutput = document.getElementById('turndown-output')
  turndownOutput.innerHTML = turndownService.turndown(quill.root.innerHTML)
  console.log(quill.root.innerHTML);
});
