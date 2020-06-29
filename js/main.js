import TurndownService from '../dist/turndown.min.js'
import turndownPluginGfm from '../dist/turndownPluginGfm.min.js'
const gfm = turndownPluginGfm.gfm
const turndownService = new TurndownService({ headingStyle: 'atx'})
turndownService.use(gfm)

// addEventListener('trix-change', () => {
//     let trixOutput =  document.getElementById('trix-output')
//     let turndownOutput = document.getElementById('turndown-output')
//     turndownOutput.innerHTML = turndownService.turndown(trixOutput.value)
//     console.log(trixOutput.value)
// })

let toolbarOptions = [
  ['bold', 'italic', 'strike'],
  [{ 'header': 1 }, { 'header': 2 }],
  ['code', 'blockquote', 'code-block'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
   ['link', 'image']]

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
