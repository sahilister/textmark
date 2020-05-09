import {init} from 'pell'
init({
  element: document.getElementById('pell-editor'),

  onChange: html => {
    // document.getElementById('pell-output').textContent = html
    document.getElementById('pell-output').textContent = html
  },

  defaultParagraphSeparator: 'div',

  styleWithCSS: false,

  // <Array[string | Object]>, string if overwriting, object if customizing/creating
  // action.name<string> (only required if overwriting)
  // action.icon<string> (optional if overwriting, required if custom action)
  // action.title<string> (optional)
  // action.result<Function> (required)
  // Specify the actions you specifically want (in order)

  actions: [
    'bold',    
    'italic',
    'strikethrough',
    'heading1',
    'heading2',
    // 'paragraph'  - from github You can create a new paragraph by leaving a blank line between lines of text.
    'quote',
    'olist',
    'ulist',
    'code',
    'line', // horizontal lines
    'link', 
    // to be looked into 'image'
  ],

  classes: {
    actionbar: 'pell-actionbar',
    button: 'pell-button',
    content: 'pell-content',
    selected: 'pell-button-selected'
  }
})

const turndownService = new window.TurndownService()
