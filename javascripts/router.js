/**
 * Simple example for riots' simple router system
 */
(function(undefined) {
  var sections = [].slice.call(document.querySelectorAll('section'));
  var visibleStyle = 'block';

  // On route change show the number of sections indicated
  riot.route(showSections);

  // On pageload show right nr of sections or default to 1
  riot.route.exec(function(show) {
    if (show) {
      showSections(show)
    } else {
      riot.route(''+ sections.length);
    }
  })

  // Show more sections
  document.getElementById('next-section-btn').addEventListener('click', nextSection);
  // Reset sections
  document.getElementById('reset-sections-btn').addEventListener('click', resetSections);


  /**
   * Display
   * @param {string} show
   */
  function showSections(show) {
    show = parseInt(show);

    if (show) {
      hideSections();

      for (var i = 0, l = sections.length; i < l; i++) {
        if (i == show) break;
        sections[i].style.display = visibleStyle;
      }
      //window.scrollTo(0, document.body.scrollHeight);
    }
  }

  /**
   * Update route on button click
   */
  function nextSection() {
    var visible = 1;
    sections.forEach(function(el) {
      if (window.getComputedStyle(el).getPropertyValue('display') === visibleStyle) {
        visible++;
      }
    })

    riot.route(''+visible);
  }

  function hideSections() {
    sections.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  function resetSections() {
    hideSections();
    riot.route('1');
  }
})()