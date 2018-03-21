import mojs from 'mo-js'
const VueMoJS = {
  install(Vue, options) {
    
  

  	Vue.mixin({
      mounted() {
      //  console.log('Mounted!');
      }
    });
    
    Vue.directive('mojs', {
      bind: function (el,binding) {
        
        binding.value.parent = el;
            
        var burst = new mojs.Burst(binding.value)
        
      
        burst.el.style.zIndex = 10;
        el.style.position = 'relative';
        //el.style.display = 'inline-block';
      
        el.addEventListener("click", function(){
          console.log();
            burst.replay()
        });
      }
    })

  }
};

export default VueMoJS;