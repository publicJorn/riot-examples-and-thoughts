<tn-input-text-defaults> <!-- attributes="label name type placeholder status inputInfo focus" -->

  <label>
    {label}<br />
    <input name="{name}" type="{opts.type || 'text'}" placeholder="{placeholder}" />
  </label>

  <style>
    .invalid {
      border: 1px solid red;
    }
  </style>

  <script>
    var defaults = {
      label: 'Default text input label',
      name: 'defaultName',
      placeholder: 'Type thy will'
    }

    // Initialise
    this.on('mount', function() {
      for (var key in defaults) {
        this[key] = opts[key] || defaults[key]
      }
      this.update()
      this.initValidator()
    }.bind(this))


    // Observable demo using a stupid
    initValidator() {
      this.input = this.root.querySelector('input')
      this.validator = new Validator(this.input)

      this.input.addEventListener('blur', function() {
        this.validator.trigger('validate')
      }.bind(this))
    }

  </script>
</tn-input-text-defaults>
