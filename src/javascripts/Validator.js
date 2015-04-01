/**
 * Intended to showcase riot's observable system
 * Used in conjunction with tn-input-text-default
 *
 * @param {object} formComponent
 * @constructor
 */
window.Validator = function(formComponent) {
  this.formComponent = formComponent;

  riot.observable(this); // adds .on() etc

  this.on('validate', function() {
    this.formComponent.classList.toggle('invalid', !this.formComponent.value);
  })
};
