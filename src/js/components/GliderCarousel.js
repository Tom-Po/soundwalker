const Glider = require("glider-js/glider");

export default class GliderCarousel {
  constructor($view) {
    this.view = $view;
    this.cards = $view.find(".card");
    this.bind();
  }
  bind() {
    let self = this;
    let show = this.view.data("show");

    if (!show) {
      show = 3;
    }

    this.cards.each((i, el) => {
      $(el).on("click", () => {
        self.cards.each((i, elem) => {
          $(elem).removeClass("active");
        });
        $(el).addClass("active");
      });
    });

    new Glider(this.view[0], {
      // `auto` allows automatic responsive
      // width calculations
      slidesToShow: show,
      slidesToScroll: 1,

      // should have been named `itemMinWidth`
      // slides grow to fit the container viewport
      // ignored unless `slidesToShow` is set to `auto`
      itemWidth: "undefined",

      // if true, slides wont be resized to fit viewport
      // requires `itemWidth` to be set
      // * this may cause fractional slides
      exactWidth: false,

      // speed aggravator - higher is slower
      duration: 0.5,

      // dot container element or selector
      dots: "CSS Selector",

      // arrow container elements or selector
      arrows: {
        prev: "CSS Selector",
        // may also pass element directly
        next: document.querySelector("CSS Selector"),
      },

      // allow mouse dragging
      draggable: true,
      // how much to scroll with each mouse delta
      dragVelocity: 3.3,

      // use any custom easing function
      // compatible with most easing plugins
      easing: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
      },

      // event control
      scrollPropagate: false,
      eventPropagate: true,

      // Force centering slide after scroll event
      scrollLock: false,
      // how long to wait after scroll event before locking
      // if too low, it might interrupt normal scrolling
      scrollLockDelay: 150,

      // Force centering slide after resize event
      resizeLock: true,

      // Glider.js breakpoints are mobile-first
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}
