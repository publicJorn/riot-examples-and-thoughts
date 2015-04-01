<tn-input-text> <!-- attributes="label name type placeholder status inputInfo focus" -->

  <label>
    {opts.label}<br />
    <input class="status-info-border" id="tn-input" name="{opts.name}" type="{opts.type || 'text'}" onkeyup={ typing } />
    <span>{ text }</span>
  </label>

  <style>
    input {
      border: 1px dashed darkblue;
    }
  </style>

  <script>
    typing(e) {
      this.text = e.currentTarget.value
    }

//    console.log(this.root)

//    this.on('mount', function() {
//      console.info(this.root.querySelector('label'))
//      console.info(this.root.getElementsByTagName('label')[0])
//    });
  </script>
</tn-input-text>
