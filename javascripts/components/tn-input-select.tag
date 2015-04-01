<tn-input-select>
  <select>
    <option>yada</option>
    <!-- SELECTs don't seem to allow us the use of the custom inner-html tag like we did before -->
  </select>

  <!-- using inner-html as a placeholder to copy options from -->
  <inner-html name="options" />

  <script>
    var root = this.root

    // Since DOM is not ready yet, we need to wrap all this in a 'mount' event
    this.on('mount', function() {
      [].slice.call(this.tags.options.root.querySelectorAll('option')).forEach(function(option) {
        root.querySelector('select').appendChild(option)
      })
    })

    /*
    Other method is to fill the select using the passed option object
    Then this should be put under the default <option> in the template above:

    <option each={ name, i in opts.options }>{ name }</option>
    */
  </script>
</tn-input-select>
