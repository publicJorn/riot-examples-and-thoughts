riot.tag('tn-input-text-defaults', ' <label> {label}<br ><input name="{name}" type="{opts.type || \'text\'}" placeholder="{placeholder}"></label>', '.invalid { border: 1px solid red; }', function(opts) {
    var defaults = {
      label: 'Default text input label',
      name: 'defaultName',
      placeholder: 'Type thy will'
    }

    this.on('mount', function() {
      for (var key in defaults) {
        this[key] = opts[key] || defaults[key]
      }
      this.update()
      this.initValidator()
    }.bind(this))

    this.initValidator = function() {
      this.input = this.root.querySelector('input')
      this.validator = new Validator(this.input)

      this.input.addEventListener('blur', function() {
        this.validator.trigger('validate')
      }.bind(this))
    }.bind(this);

  
});
