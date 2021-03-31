
# Pet Store Widget (React Project)
This is a personal React project that contains a function component called '`PetStoreWidget`'. Here is a [demo](https://linusscholander.github.io/petstorewidget/) of it in action.

The component returns the data '`name`', '`id`' and '`tags`' from the [Swagger Petstore API ](http://petstore.swagger.io/#!/pet/findPetsByStatus) (*findPetsByStatus*) and displays the data with the filter options '[`available`](https://petstore.swagger.io/v2/pet/findByStatus?status=available)', '[`pending`](https://petstore.swagger.io/v2/pet/findByStatus?status=pending)' and '[`sold`](https://petstore.swagger.io/v2/pet/findByStatus?status=sold)'.

The `PetStoreWidget`' component folder contains several sub-folders for grouping and splitting the content into more manageble parts.

## NPM
The component uses the following packages:
* [`axios`](https://www.npmjs.com/package/axios)  - Used for retrieving the API content.
* [`react-cool-dimensions`](https://github.com/wellyshen/react-cool-dimensions) - Used for returning the layout verion breakpoints '`small`' and '`large`' based on the component container width.
* [`react-icons`](https://react-icons.github.io/react-icons/) - Used for icons e.g filter option 
* [`sass`](https://www.npmjs.com/package/sass) - Enables the use of the Sass preprocessor scripting language to compiles the CSS.

## HTML Markup
Markup with ARIA is used for making the content more accessibility for e.g screen readers. The following markup is used:
* [`radiogroup` and `radio` role](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html)
* [`table` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role)
* `aria-rowcount`
* `aria-checked`
* `aria-controls`
* `aria-label`

## CSS
CSS is written with Sass and partials are used for e.g widget variables and mixins. 

## Basic usage
The component currently shows 5 pet items per default.
```jsx
import { PetStoreWidget } from "./components/petstorewidget/PetStoreWidget";
function App() {
	return (
		<PetStoreWidget />
	);
}
```

## Usage with optional properties
- `breakpointWidth` (*number*) - Breakpoint for layout width '`small`' and '`large`' 
- `maxItems` (*number*) - Max pet items to be displayed.
```jsx
import { PetStoreWidget } from "./components/petstorewidget/PetStoreWidget";
function App() {
	return (
		<PetStoreWidget breakpointWidth="480" maxItems="5" />
	);
}
```

