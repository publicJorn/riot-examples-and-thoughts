riot.tag('tn-input-text', ' <label> {opts.label}<br ><input class="status-info-border" id="tn-input" name="{opts.name}" type="{opts.type || \'text\'}" onkeyup="{typing}"><span>{text}</span></label>', 'input { border: 1px dashed darkblue; }', function(opts) {
    this.typing = function(e) {
      this.text = e.currentTarget.value
    }.bind(this);





  
});
