# Modern CSS Layouts

## Flexbox

[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), using the `display: flex` property allows laying out and re-ordering it’s children. This comes along with a bunch of [different properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), and is really useful for laying items out in a flowing direction. Once the container is using flexbox, the `[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)` property defines how the items lay out along the main axis (most of the time this is horizontally across the page) and how the space is allocated between them. In the cross axis (most of the time this is vertical), the `[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)` property will define how the flex children line up against one another.

![[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content)](./img/Untitled.png)

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content)

![[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items)](./img/Untitled%201.png)

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items)

```css
.container {
	display: flex;
	align-items: center;
}
```

<aside>
👩🏾‍💻 Use flexbox to make the logo in the header align with the menu, there should be space between each section and they should be centred vertically.

![Untitled](./img/Untitled%202.png)

</aside>

We can use margins to add spaces between each of the items, and if we add a negative margin to the container it resets the external alignment with the page.

```css
.item {
	margin: 10px;
}

.container {
	margin: -10px;
}
```

<aside>
👩🏾‍💻 Align the menu items next to one another, but ensure there’s a space between each of them.

![Untitled](./img/Untitled%203.png)

</aside>

When there are more items than fit in one row, they will overflow by default. You can use the `[flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)` property to allow wrapping onto one line.

```css
.container {
	display: flex;
	flex-wrap: wrap;
}
```

<aside>
👩🏾‍💻 `/recipes`
Align the categories

![Untitled](./img/Untitled%204.png)

</aside>

By default flex items will adjust size where necessary, growing and shrinking as defined. The `[flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)` and `[flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)` property defines if an item will grow or shrink by giving it a positive number, any additional space is then allocated/removed depending on the value (eg. an item with a `flex-grow` value of `4` will get four times as much space as one with a value of `1`). The `[flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)` property defines the initial size of an item (by default it’ll inherit the item width, or you can give it a pixel value).

![[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow)](./img/Untitled%205.png)

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow)

```css
.item {
	flex-grow: 4;
	flex-shrink: 1;
	flex-basis: 200px;
}
```

<aside>
👩🏾‍💻 `/recipes`
Align the recipe cards and make sure they’re at least 200px wide but will stretch/shrink as required and have space between each item.

![Untitled](./img/Untitled%206.png)

</aside>

<aside>
👩🏾‍💻 `/meals/planning`
Use flexbox to align all the days on the meal planner next to one another.

![Untitled](./img/Untitled%207.png)

</aside>

Flexbox is useful for vertically centring content, like aligning labels next to checkboxes.

<aside>
👩🏾‍💻 `/meals/list`
Align each of items on the shopping list so the checkbox is centred next to the label.

![Untitled](./img/Untitled%208.png)

</aside>

<aside>
👩🏾‍💻 `/tasks`
Now do the same with each of the todo list items

![Untitled](./img/Untitled%209.png)

</aside>

We can change the order the flex children appear on the page without changing their source order using the `[order`](https://developer.mozilla.org/en-US/docs/Web/CSS/order) property. By default each item has an implicit value of `0`, a negative number will bring it to the start and a positive number will put it at the end. Based on these numbers they’ll then be sorted.

![Untitled](./img/Untitled%2010.png)

```css
.container {
	display: flex;
	flex-direction: column;
}

.item {
	order: -1;
}
```

<aside>
👩🏾‍💻 `/tasks`
Use the order property to put any completed items at the end.
****Hint****: the CSS pseudo selector `[:has(input[type="checkbox"]:checked)](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)` will check if the item contains a checked checkbox.

</aside>

## CSS Grid

[CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (`display: grid`) is more powerful than Flexbox and has greater control over items in both vertical and horizontal directions. Using the `grid-template-columns` and `grid-template-rows` properties we can define the columns the grid layout uses, with spaces between each defined size (any CSS unit is valid).

```css
.container {
	display: grid;
	grid-template-columns: 200px 20% 10vw;
}
```

To reduce code, we can use the `[repeat()](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)` function to repeat columns a certain number of times.

```css
.container {
	/* 200px 200px 200px */
	grid-template-columns: repeat(3, 200px);
	/* 100px auto 100px auto */
	grid-template-rows: repeat(2, 100px auto);
}
```

There is a new responsive unit as part of CSS Grid as well, the `[fr](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#the_fr_unit)` unit. This unit allocates empty space between elements (similar to `flex-grow`), eg. twice as much space will be allocated to the `2fr` column than to the `1fr` column.

```css
.container {
	display: grid;
	grid-template-columns: 100px 1fr 50px 2fr;
}
```

<aside>
👩🏾‍💻 `/recipes`
Define a CSS Grid layout for the recipes feed (overwriting the flexbox styles), there should be equal width columns.

</aside>

To automate the layout further, we can use the `[auto-fit` and `auto-fill` properties](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-the-repeat-function-and-keywords) to [create columns depending](https://codepen.io/SaraSoueidan/pen/JrLdBQ) on the screen size:

- `[auto-fill](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fill)`: Create as many columns as it can fit, even if there’s not enough grid-items
- `[auto-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fit)`: Create as many columns as it can fit, but no more than the number of grid items

![[https://codepen.io/SaraSoueidan/pen/JrLdBQ](https://codepen.io/SaraSoueidan/pen/JrLdBQ)](./img/Untitled%2011.png)

[https://codepen.io/SaraSoueidan/pen/JrLdBQ](https://codepen.io/SaraSoueidan/pen/JrLdBQ)

We can also use the `[minmax()](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-sizing-functions)` function to create a flexible column that resizes as needed.

```css
.container {
	display: grid;
	grid-template-columns: 
		repeat(
			auto-fill, 
			minmax(200px, 1fr)
		);
}
```

<aside>
👩🏾‍💻 `/recipes` 
Update the feed to have more responsive columns that are at least 250px wide

</aside>

To add a gap between the items, the `[grid-column-gap` and `grid-row-gap`](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-gapgrid-gap) properties.

```css
.container {
	display: grid;
	grid-column-gap: 20px;
	grid-row-gap: 10px;
}
```

<aside>
👩🏾‍💻 Override the flexbox margins and use the grid gaps instead

</aside>

As well as auto-allocating items to spots on the grid, we can define areas and assign elements manually for greater control. Using the `[grid-template-areas](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-areas)` property we can add name labels to the different areas of the grid, these can spread across different sections to form a larger area. The definition of these areas is fairly forgiving on white space, so it’s good practice to line these up to easier visualise the grid layout. Each row is a separate string inside quotes and each column is separated by at least one space, with any string value being a valid area name (even emojis).

```css
.container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 100px 1fr 50px;
	grid-template-areas:
		'header   header   header   header   header'
		'sidebar  content  content  content   .    '
		'footer   footer   footer   footer   footer';
}
```

![grid-template-areas.gif](./img/grid-template-areas.gif)

Once the areas are named, you can assign items to the areas using the `[grid-area](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-area)` property.

```css
.header_item {
	grid-area: header;
}
```

<aside>
👩🏾‍💻 `/recipes`
Use grid areas to lay out the recipe cards

![Untitled](./img/Untitled%2012.png)

</aside>

If you’re having to support [older browsers that don’t support](https://caniuse.com/css-grid) CSS Grid, you can use the `[@supports` query](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) to check for browser support first, and use flexbox or another layout method.

```css
@supports(grid-template-columns: 20px) {
	/* CSS Grid code goes here */
} 
```

<aside>
👩🏾‍💻 Wrap all the grid code in a `@supports` query, keeping the original flexbox code as a fallback

</aside>

## Floats

Although previously misused for layout techniques, `[float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)` is a useful CSS property to this day, as it allows us to *****float***** an element (typically an image) on one side of the page (`left` or `right`) and to have text content flow around it.

This is often used along with the `[clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)` property to ensure that the floated element doesn’t escape the container you want it to stay within.

```css
.image {
	float: left;
}

.container {
	clear: left;
	overflow: hidden;
}
```

```html
<div class="container">
	<img class="image" src="/img/quokka.jpg" alt="A Quokka smiling at the camera" />
	<p>Quokkas are the happiest animal in Australia that surprisingly isn't trying to kill you. They're Australian marsupials (related to kangaroos and wallabies), only found on a small island called Rottnest Island, off the coast of Perth. They're herbivores (although will eat most food you leave lying around) and have no natural predators therefore aren't afraid of humans.</p>
</div>
```

<aside>
👩🏾‍💻 `/recipes/[slug]`
On one of the recipe pages, float the main image to the right hand side of the page.

![Untitled](./img/Untitled%2013.png)

</aside>

## Columns

Similar to print content, you can make content flow in multiple columns using the `[column-count](https://developer.mozilla.org/en-US/docs/Web/CSS/column-count)` property. Using the `[column-fill](https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill)` property we can also dictate how the columns fill up, or if they will balance the content between each column.

```css
.content {
	column-count: 3;
	column-fill: balance;
}
```

<aside>
👩🏾‍💻 `/meals/list`
The shopping list should be in 3 balanced columns.

![Untitled](./img/Untitled%2014.png)

</aside>

## Calendar

CSS Grid is useful for laying out things like calendars, as it gives the control we need to lay out the days. While until now we’ve explicitly defined the rows using `grid-template-rows`, we can also use `[grid-auto-rows](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-auto-columnsgrid-auto-rows)` to automatically created needed rows at a certain size (an equivalent property exists for columns). The difference between using ********template******** rows and *****auto***** rows results in either explicit (********template********) rows being created or implicit rows created as needed (****auto****). We can use a combination of `grid-template-` and `grid-auto-*` to create both explicit and implicit rows and columns.

```css
.container {
	/* Will create as many rows as needed, all 50px tall */
	grid-auto-rows: 50px;
	/* Will create as many rows as needed, alternating between 20px and 50px tall */
	grid-auto-rows: 20px 50px;
}
```

<aside>
👩🏾‍💻 Use CSS grid to lay out out the dates on the calendar so that the day names get the size row they need and the days are all 100px high. There should also be a gap between everything.
****Hint****: You’ll need to have both implicit and explicit rows to do this

</aside>

Similar to using `grid-template-areas`, we can define where grid items appear on the grid without having to define and name the entire grid layout. This is is done using the `[grid-column-start`, `grid-column-end`, `grid-row-start` and `grid-row-end`](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-column-startgrid-column-endgrid-row-startgrid-row-end) properties and assigning their location based on the grid column and row lines. Each of the lines in the grid is numbered, we can refer to them to define where items sit. 

![Untitled](./img/Untitled%2015.png)

By default an item will only take up one space unless otherwise specified, so if we define just a ******-start****** or ****-end**** value, it’ll move into the correct space.

```css
.item {
	/* This item will sit in the third column and the fifth row */
	grid-column-start: 3;
	grid-row-end: 6;
}
```

<aside>
👩🏾‍💻 Use the **********column/row********** *********start/end********* properties to define where the dates each sit.
****Hint****: To make things easier, there’s a [CSS variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) already calculated for each of them called `--row` and `--column` that you can use to define the start line for each.

</aside>

When explicitly defining the grid space that an item sits in, we can end up with multiple items in the same space. We can further adjust how the items align (similar to flexbox) using `[align-self](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-align-self)` and `[justify-self](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self)`, these work similar to the ******align******-* **********and *********justify-********** properties on the containers in grid and flexbox, but are assigned on the item itself to override the default.

![Untitled](./img/Untitled%2016.png)

```css
.item {
	align-self: end;
}
```

<aside>
👩🏾‍💻 Place the calendar events in the correct spots on the calendar, but make it appear at the bottom of the allocated space.
****Hint****: There are defined CSS variables for `--start`, `--end` and `--row`

</aside>