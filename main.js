import TurndownService from './turndown.js'
import turndownPluginGfm from './turndownPluginGfm.js'
const gfm = turndownPluginGfm.gfm 
const turndownService = new TurndownService({ headingStyle: 'atx'})
turndownService.use(gfm)

addEventListener('trix-change', () => {
    let trixOutput =  document.getElementById('trix-output')
    let turndownOutput = document.getElementById('turndown-output')
    turndownOutput.innerHTML = turndownService.turndown(trixOutput.value)
    console.log(trixOutput.value)
})