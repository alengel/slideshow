function updateSlide(slides, current, previous) {
    slides[previous].classList.remove('current');
    slides[previous].classList.add('hidden');
    slides[current].classList.remove('hidden');
    slides[current].classList.add('current');
}

var createCarousel = function(className) {
        
    var Carousel = {

        counter: 0,
        slides: document.getElementsByClassName('slide'),
        
        initialize: function(el) {
            //ToDo
            //Load images in dynamically?
            this.addEventListeners(el);
            this.playCarousel();
        },

        addEventListeners: function(el) {
            var that = this;

            el.querySelector('.forward').addEventListener('click', function() {
                that.showNextImage();
            }, false);

            el.querySelector('.backward').addEventListener('click', function() {
                that.showPreviousImage();
            }, false);
        },

        playCarousel: function() {
            updateSlide(this.slides, this.counter, this.slides.length-1);
        },

        showNextImage: function() {
            var previous = this.counter;
            this.counter++;
            
            if(this.counter === this.slides.length) {
                this.counter = 0;
            }

            updateSlide(this.slides, this.counter, previous);
        },

        showPreviousImage: function() {
            var previous = this.counter;
            this.counter--;
            
            if(this.counter < 0) {
                this.counter = this.slides.length - 1 ;
            }

            updateSlide(this.slides, this.counter, previous);
        }
    };

    var el = document.querySelector(className);
    carousel = Object.create(Carousel);
    carousel.initialize(el);
};