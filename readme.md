# Vue Mo.js
A Vue JS wrapper for the awesome Mo.js

## Limitations
This wrapper currently only supports the burst mo.js component. I may look to add more in the future. It makes it simple to add mojs burst animations to a clickable element in your Vue.js application by adding the vue directive `v-mojs`

## Installation 

`npm install vue-mo-js --save`

Then add the following to your main vue file 

```javascript
import VueMoJS from 'vue-mo-js'
Vue.use(VueMoJS)
```

## Usage

Add this to any element that you want the burst to appear on once it has been clicked.

```html
<a href="/" v-mojs="mojsOptions">Burst Element<a>
```

Then in your Vue template data options add the mo-js options.

```javascript
data : function(){
        return {
          mojsOptions : {
            count : 6,
            radius: { 15: 100 },
            origin: '100% 100%',
            degree: 360,
            children: {
              shape: 'polygon',
              fill: ['black','white'],
              isSwirl:true,
              swirlSize: 10,
              swirlFrequency: 2,
              delay: 'stagger(0, 30)'
            }
          }
        }
      }
```

Now when you click on the html anchor tag it will display the mojs burst. 

_Please note that there is no need to add the `parent` mojs option to the data option as the wrapper will pick this up automatically._

A full list of Mo.js Burst options can be found [here](https://github.com/legomushroom/mojs/blob/master/api/burst.md)



