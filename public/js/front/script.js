window.addEvent('domready', function(){
		
				      
  /*
   * bg per iphone
   */
  try {
      if (Browser.Platform.ipod) {
          document.body.addClass('iphone');
      }
  } 
  catch (err) {
  }
  /*
   * lightbox
   *
   */
  try {
  
      ReMooz.assign('.lightbox', {
          'origin': 'img',
          'shadow': 'onOpenEnd', // fx is faster because shadow appears after resize animation
          'resizeFactor': 0.8, // resize to maximum 80% of screen size
          'cutOut': false, // don't hide the original
          'opacityResize': 0.4, // opaque resize
          'dragging': false, // disable dragging
          'centered': true // resize to center of the screen, not relative to the source element
      });
  } 
  catch (err) {
  }
  
  
  /*
   *
   *overlay
   *
   */
  try {
  
      $$('.overlay').each(function(el){
          el.addEvent('mouseenter', function(){
              el.fade(0.01);
          });
          
          el.addEvent('mouseleave', function(){
              el.fade(1);
          });
      });
  } 
  catch (err) {
  }
  
  /*
   *
   * slideshow
   *
   */
  var mySlideShow;
  
  try {
  
      // instance with a few options
      mySlideShow = new SlideShow('slides', {
          delay: 4000,
          autoplay: true
      });
      
      /*
       $$('.showIndex').addEvent('click',function(el){
       
       mySlideShow.pause();
       var index = el.getProperty('id').split('_');
       
       mySlideShow.show(index[1]);
       });
       */
      $('showNext').addEvent('click', function(){
          mySlideShow.removeEvent('show', highlight);
          mySlideShow.pause();
          mySlideShow.showNext();
      });
      
      $('showPrevious').addEvent('click', function(){
          mySlideShow.removeEvent('show', highlight);
          mySlideShow.pause();
          mySlideShow.showPrevious();
      });
      
      var highlight = function(){
          var effect = new Fx.Tween('showNext', {
              link: 'chain'
          })
          
          effect.start('color', '#ffffff').start('color', '#666666');
      }
      
      mySlideShow.addEvent('show', highlight);
      
      $('showNext').addEvent('mouseenter', function(el){
          this.tween('color', '#ffffff');
      });
      
      $('showPrevious').addEvent('mouseenter', function(el){
          this.tween('color', '#ffffff');
      });
      
      $('showNext').addEvent('mouseleave', function(el){
          this.tween('color', '#666666');
      });
      
      $('showPrevious').addEvent('mouseleave', function(el){
          this.tween('color', '#666666');
      });
      
  } 
  catch (err) {
  }
  
  /*
   *
   * target links
   *
   */
  try {
  
      links = $$('a');
      
      links.each(function(link){
      
          var href = link.getProperty('href');
          if (href != null && (href.substring(0, 7) == 'http://' || link.getProperty('href').test("^.+\.((pdf)|(zip))$"))) {
              link.setProperty('onclick', 'window.open(this.href); return false;');
          }
          
      });
      
  } 
  catch (err) {
  }
  
  
  /*
   *
   * hover categorie
   *
   */
  try {
      if (!Browser.Engine.trident) {
          $$('.nav_primary a').each(function(nav){
              var id = nav.getProperty('id');
              id = id.replace(/nav_/, '');
              var cat_items = $$('.' + id);
              nav.addEvent('mouseenter', function(){
                  $$('.item').each(function(item){
                      item.fade(0.1);
                  });
                  cat_items.each(function(item){
                      item.fade(1);
                  });
              });
              nav.addEvent('mouseleave', function(){
                  $$('.item').each(function(item){
                      item.fade(1);
                  });
              });
          });
      }
      
  } 
  catch (err) {
  }
  
  /*
   *
   *featured
   *
   */
  try {
      if (!Browser.Engine.trident) {
          $$('.feat').each(function(el){
              el.fade(0.1);
              
              (function(){
                  el.fade(1);
              }).delay(4000);
          });
      }
  } 
  catch (err) {
  }
  
});
