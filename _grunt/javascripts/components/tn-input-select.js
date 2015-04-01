riot.tag('tn-input-select', '<select><option>yada</option>  </select>  <inner-html name="options"></inner-html>', function(opts) {
    var root = this.root

    this.on('mount', function() {
      [].slice.call(this.tags.options.root.querySelectorAll('option')).forEach(function(option) {
        root.querySelector('select').appendChild(option)
      })
    })

    
  
});
