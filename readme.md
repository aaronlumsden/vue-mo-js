# Vue Mo.js


## Limitations
This wrapper currently only supports the burst mo.js component. I may look to add more in the future. It makes it simple to add bursts on click in your Vue.js application by adding the vue directive `v-mojs`

## Installation 

`npm install vue-mo-js --save`

Then add the following to your main vue file 

```javascript
import VueMoJS from 'vue-mo-js'
Vue.use(VueMoJS)```

## Usage

Add this to any element that you want the burst to appear on once it has been clicked.
```html
<a href="/" v-mojs="mojsOptions">Burst Element<a>
```
Then in your Vue template 
```javascript

```



