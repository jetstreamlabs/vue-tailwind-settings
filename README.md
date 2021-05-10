# Vue-Tailwind Settings Scaffold

Initial set up package for adding [Vue-Tailwind](https://github.com/alfonsobries/vue-tailwind) easily into your **Vue** or **Nuxt** application.

Download the package and then drop the `vue-tailwind` folder into the same directory as your `main.js` file for **Vue-cli** apps, or into your plugins directory for a **Nuxt** app.

Then simply require the `vue-tailwind/index.js` file into your `main.js`:


```
require('./vue-tailwind')
```

> You can also just copy the code from that file into your `main.js` if you prefer.

For Nuxt, load the `index.js` file as a plugin:

```
plugins: [
	'~/plugins/vue-tailwind/index.js',
]
```

Each included file in the `settings` directory imports the corresponding Vue-Tailwind component and sets the default config per the [Vue-Tailwind website.](https://www.vue-tailwind.com)

This aids in the startup time of the vast configuration needed for using the package and also makes it super easy to find your config for a given component.

Here's an example using the `TCard` component.

> Filepath: `vue-tailwind/settings/card.js`

```
import TCard from 'vue-tailwind/dist/t-card'

export default {
    component: TCard,
    props: {
        fixedClasses: {
            wrapper: 'border rounded shadow-sm ',
            body: 'p-3',
            header: 'border-b p-3 rounded-t',
            footer: 'border-t p-3 rounded-b'
        },
        classes: {
            wrapper: 'bg-white border-gray-100',
            body: '',
            header: 'border-gray-100',
            footer: 'border-gray-100'
        },
        variants: {
            danger: {
            wrapper: 'bg-red-50 text-red-700 border-red-200',
            header: 'border-red-200 text-red-700',
            footer: 'border-red-200 text-red-700'
            }
        }
    }
}
```

`settings/index.js` imports this config file, then exports it as a properly named **Vue-Tailwind** setting to pass in to **VueTailwind.**

```
import Card from './card'

export default {
	't-card': Card,
	...
}
```

Then back in `vue-tailwind/index.js` we put it all together:

```
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import Settings from './settings'

Vue.use(VueTailwind, Settings)
```

As I said, if using just **Vue**, you probably will want to import directly in `main.js` changing the path to `settings` like so:

```
import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import Settings from './vue-tailwind/settings'

Vue.use(VueTailwind, Settings)
```

Then you can delete the `vue-tailwind/index.js` file or move the settings folder wherever you like.

Of course you're free to set it up however you like =)

### Use Vue-Tailwind!

Alfonso has spent a great deal of time to create these amazing components for Vue 2 / Tailwind users so please support him and take advantage of this amazing package in your apps.

I hope this helps make things a little quicker for you guys and gals.

