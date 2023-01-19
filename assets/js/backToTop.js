!(function (s) {
  'use strict'
  s('.switch').on('click', function () {
    s('body').hasClass('light')
      ? (s('body').removeClass('light'), s('.switch').removeClass('switched'))
      : (s('body').addClass('light'), s('.switch').addClass('switched'))
  }),
    s(document).ready(function () {
      const e = document.querySelector('.progress-wrap path');
        const t = e.getTotalLength()
      ;(e.style.transition = e.style.WebkitTransition = 'none'),
        (e.style.strokeDasharray = t + ' ' + t),
        (e.style.strokeDashoffset = t),
        e.getBoundingClientRect(),
        (e.style.transition = e.style.WebkitTransition =
          'stroke-dashoffset 10ms linear')
      const o = function () {
        const o = s(window).scrollTop();
          const r = s(document).height() - s(window).height();
          const i = t - (o * t) / r
        e.style.strokeDashoffset = i
      }
      o(), s(window).scroll(o)
      jQuery(window).on('scroll', function () {
        jQuery(this).scrollTop() > 50
          ? jQuery('.progress-wrap').addClass('active-progress')
          : jQuery('.progress-wrap').removeClass('active-progress')
      }),
        jQuery('.progress-wrap').on('click', function (s) {
          return (
            s.preventDefault(),
            jQuery('html, body').animate({ scrollTop: 0 }, 550),
            !1
          )
        })
    })
})(jQuery)
