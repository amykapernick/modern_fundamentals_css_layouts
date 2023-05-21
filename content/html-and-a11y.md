# Semantic HTML

## Landmark Elements

- `[header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)` - for the header section of a page or article, encompassing items such as the title, search bar or navigation
- `[footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)` - for the footer section of a page or article, encompassing items such as the author information, copyright data or related pages and files
- `[main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)` - the main content of the page and dominant content of the `body`
- `[article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)` - a self contained piece of content which makes complete sense on it’s own without any of the other page content
- `[section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)` - a generic standalone section that doesn’t meet another element, with at least one heading inside
- `[nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)` - contains the navigational links to other pages or within the current page
- `[aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)` - a section of the page that is indirectly related to the main content, likely presented as a sidebar or callout box

# Forms

## Form Fields and Labels

When adding fields to a form, we need to add labels to let users and assistive technologies (like screen readers) know what the field is for. We can do this using the `[label` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), which not only provides a nice description for the input, we can specify that the input and label are linked and relate to one another using the `id` and `for` attributes.

```html
<form>	
	<label for="name">What is the Quokka's name</label>
	<input type="text" name="quokka_name" id="name" />

	<fieldset>
		<legend>Do you like Quokkas?</legend>

		<input type="radio" name="like_quokkas" value="Yes" id="yes" />
		<label for="yes">Yes, I like Quokkas</label>

		<input type="radio" name="like_quokkas" value="No" id="no" />
		<label for="no">No, I do not like Quokkas</label>

	</fieldset>
</form>
```

<aside>
👩🏾‍💻 Write a simple contact form that takes a full name, email address and phone number. Each field should have a label which is linked to it.

</aside>

## Datalists

There’s a special type of form input called a `[datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)`, which allows users to type in a text field and have the options be autofilled from a list of predefined options.

```html
<label for="aussie_animals">
	Which Australian animal do you think is the best?
</label>
<input 
	type="text" 
	list="animals" 
	id="aussie_animals" 
	name="best_animal" 
/>
<datalist id="animals">    
	<option value="Quokka" />    
	<option value="Koala" />    
	<option value="Platypus" />    
	<option value="Echidna" />    
	<option value="Kangaroo" />    
	<option value="Camel" />
</datalist>
```

<aside>
👩🏾‍💻 Add a `datalist` field to the form that asks for the method of transport to get here today.

</aside>

## Range Sliders

In a form we often want to get a value from a particular range (eg. somewhere between 1 and 10), this can be done using a number field but a range field gives a more visual experience. With this input field, we can define the `max`, `min` values and the different `step`s available (eg. this has a step of `1` so every whole number).

```html
<label for="quokka_coolness">How cool are Quokkas?</label>
<input 
	type="range" 
	name="coolness"
	id="quokka_coolness" 
	max="10" 
	step="1" 
/>
```

To make it easier for people to know what value they’re supplying, we can provide labels using the `datalist` element to provide labels to display along the slider. These labels don’t necessarily have to correspond with each step/point on the slider, but it’s best if they’re equally spaced. The `value` of each option should correspond the the value from the range slider, eg. in this case it’s going from 0 to 10.

```html
<label for="quokka_coolness">How cool are Quokkas?</label>
<input 
	type="range" 
	name="coolness"
	id="quokka_coolness" 
	max="10" 
	step="1" 
	list="quokka_coolness_list"
/>
<datalist id="quokka_coolness_list">
	<option value="0">Not at all cool</option>
	<option value="5">Moderately cool</option>
	<option value="10">Coolest animal ever</option>
</datalist>
```

<aside>
👩🏾‍💻 Add a range field to find out how important Semantic HTML is in web development, ranging from *******************Not at all important******************* to *******************Most important part*******************, with a description in the middle for neutral views

</aside>

# Media

## Text Alternatives

We can use the `[alt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt)` attribute to define a text alternative in case someone is unable to see the image. This could either be as a result of the user using a screen reader or assistive technology, or could be due to the image failing to load for performance issues or a broken/incorrect link.

```html
<img 
	src="/img/rottnest.jpg" 
	alt="Rottnest Island in Western Australia, with white sandy beach and the clear blue water dotted with small rocky reef sections along the edge" 
/>
```

<aside>
👩🏾‍💻 Choose one of the images below and add it to the page with appropriate alt text. You can use your own image URL if you like

- [https://assets.codepen.io/707165/image_300.jpg](https://assets.codepen.io/707165/image_300.jpg)
- [https://assets.codepen.io/707165/image_600.jpg](https://assets.codepen.io/707165/image_600.jpg)
- [https://assets.codepen.io/707165/image_900.jpg](https://assets.codepen.io/707165/image_900.jpg)
- [https://assets.codepen.io/707165/image_1200.jpg](https://assets.codepen.io/707165/image_1200.jpg)

🏆 *****Best alt text*****

</aside>

## Figures

Using the `[figure` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), we can give images and other media items a caption, and give additional information to the user. As opposed to the `alt` attribute, this content is shown visually and to all users, rather than being communicated by assistive technology

```html
<figure>
	<img src="/img/rottnest.jpg" />
	<figcaption>Rottnest Island, WA</figcaption>
</figure>
```

The `figure` and `figcaption` element isn’t just for images either, it can be used for a variety of other media types.

<aside>
👩🏾‍💻 Add a figure element around our image and give it a caption for people to see. The caption doesn’t need to describe the image but should be an add-on to it.

</aside>

## Picture

The `[picture` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) allows us to serve different image files depending on the size of the screen and capabilities of the browser.

The element also allows us to provide a fallback in case the source queries aren’t met, to display a regular image.

### Different Image sizes

We can define different media queries and the image file to use, depending on the size of the screen the site will load a different image size. Any attributes added to the fallback `img` element are then passed on to whichever is being rendered, eg. the `alt` attribute set there will be used regardless of the image source being rendered

The browser steps through each of the `source` elements until it finds one that matches, then it stops (similar to an `if/else` statement). If you’re using `min-width` for your media queries that means you need to list the biggest one first and vice-versa for `max-width`.

```html
<picture>
	<source
		srcset="/img/rottnest-900_x_500.jpg"
		media="(min-width: 900px)"    
	/>     
	<source        
		srcset="/img/rottnest-400_x_300.jpg"        
		media="(min-width: 600px)"    
	/>     
	<source        
		srcset="/img/rottnest-200_x_150.jpg"        
		media="(min-width: 400px)"    
	/>    
	<img src="/img/rottnest.jpg" alt="" />
</picture>
```

<aside>
👩🏾‍💻 Add a `picture` element to service the following images (in order, smallest to widest) at the following screen sizes: `400px`, `600px`, `900px` (one of them will be a fallback). The `picture` should be enclosed in a `figure` with a caption

- [https://assets.codepen.io/707165/image_300.jpg](https://assets.codepen.io/707165/image_300.jpg)
- [https://assets.codepen.io/707165/image_600.jpg](https://assets.codepen.io/707165/image_600.jpg)
- [https://assets.codepen.io/707165/image_900.jpg](https://assets.codepen.io/707165/image_900.jpg)
- [https://assets.codepen.io/707165/image_1200.jpg](https://assets.codepen.io/707165/image_1200.jpg)
</aside>

### Different Image Formats

The same as checking for the size of the screen, we can check the capabilities of the browser and whether it can handle a newer image format.

```html
<picture>
	<source        
		srcset="/img/rottnest.avif"        
		type="image/avif"    
	/>    
	<source        
		srcset="/img/rottnest.webp"        
		type="image/webp"    
	/> 
	<img src="/img/rottnest.jpg" />
</picture>
```

<aside>
👩🏾‍💻 Add new file formats to the `picture` element, `avif` should be rendered if it’s supported, otherwise `webp` and `jpg` if those aren’t supported. There’s some additional images to use:

- [https://assets.codepen.io/707165/image_300.webp](https://assets.codepen.io/707165/image_300.webp)
- [https://assets.codepen.io/707165/image_600.webp](https://assets.codepen.io/707165/image_600.webp)
- [https://assets.codepen.io/707165/image_900.webp](https://assets.codepen.io/707165/image_900.webp)
- [https://assets.codepen.io/707165/image_1200.webp](https://assets.codepen.io/707165/image_1200.webp)
- [https://assets.codepen.io/707165/image_300.avif](https://assets.codepen.io/707165/image_300.avif)
- [https://assets.codepen.io/707165/image_600.avif](https://assets.codepen.io/707165/image_600.avif)
- [https://assets.codepen.io/707165/image_900.avif](https://assets.codepen.io/707165/image_900.avif)
- [https://assets.codepen.io/707165/image_1200.avif](https://assets.codepen.io/707165/image_1200.avif)
</aside>

********Note********: Normally the picture element is used to render different sizes/formats of the same image, we’re just using different images here to make it easier to see the different images being loaded in.

## Image Maps

One commonly overlooked set of elements are the `[map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)` and `[area](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)` elements. These are used to create a clickable image/infographic, defining clickable areas over the top of an image. The map is linked to an image through the `name` and `usemap` attributes, and the `area` elements have fixed coordinates for their boundaries

This method isn’t overly responsive as the image must be a fixed size and the method is mostly replaced by SVG use.

```html
<img 
	src="https://assets.codepen.io/707165/Layout+Map.png" 
	width="540" 
	height="540"
	usemap="#image_map"
/>
<map name="image_map">
	<area 
		alt="Header Section" 
		title="header" 
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header" 
		target="_blank" 
		coords="0,0,540,100" 
		shape="rect" 
	/>
	<area 
		alt="Content Section"
		title="main" 
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" 
		target="_blank" 
		coords="79,100,540,488.5" 
		shape="rect" 
	/>
	<area 
		alt="Sidebar Section" 
		title="aside" 
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside" 
		target="_blank" 
		coords="0,100,79,488.5" 
		shape="rect" 
	/>
	<area 
		alt="Footer Section" 
		title="footer" 
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer" 
		target="_blank" 
		coords="0,488.5,540,540" 
		shape="rect" 
	/>
</map>
```

<aside>
👩🏾‍💻 Add the above image map to the page and see how it works, try adjusting the coordinates or removing the fixed `width` on the image to see how that changes it.

</aside>

## Other Figures

The `figure` element can be used for a wide range of other elements and content that uses a caption, like a quote, a poem, a block of code or a chart.

## Video

Using the `[video` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), we can load a video file on the page, using browser native features and getting access to video controls.

The element has various attributes to set whether there are controls, if the video loops, if the video is automatically muted and more. You can also provide HTML for a fallback (similar to the picture element), so that if the browser doesn’t support it the users are aware.

```html
<video
	controls    
	muted    
	loop
>    
	<source        
		src="/img/video.mp4"        
		type="video/mp4"    
	/>    
	<p>Sorry, your browser doesn't support this video.</p>
</video>
```

<aside>
👩🏾‍💻 Add a `video` to the page, inside a `figure` element, with a fallback linking to download the video

- [https://assets.codepen.io/707165/video.mp4](https://assets.codepen.io/707165/video.mp4)
</aside>

### Subtitles, Captions and Descriptions

Similarly to adding `alt` text to an image, we can add a text alternative to videos and audio files that are part of our page using the `track` element. This incudes the following different text alternatives (and some others):

- ************Subtitles************: provide translation, eg. into another language and may contain additional content like extra background information
- ****************Captions****************: provide a transcription of the audio and may include important non-verbal information, an alternative for no sound or users who are deaf, this may be in another language to the video
- ************************Descriptions************************: provides a text description of the video, for users who are blind or when the video can’t be seen. This may be available in different languages and won’t be relevant for audio files.

Whichever of these text alternatives we’re using (we can include multiple), we can link the file to a video or audio file using the `[track` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track). This allows us to define the file (or specify multiple files in different languages) to allow users to enable it on the media.

```html
<video
	controls    
	muted    
	loop
>    
	<source        
		src="/img/video.mp4"        
		type="video/mp4"    
	/>    
	<track        
		default        
		kind="captions"        
		srclang="en-AU"        
		src="/img/subtitles.vtt"    
	/>
	<p>Sorry, your browser doesn't support this video.</p>
</video>
```

<aside>
👩🏾‍💻 Add a captions track to the video, these are in British/Australian English. You’ll also have to add the `crossorigin` attribute to the `video` element to get them to load in to the Codepen (this may or may not be needed when you use this elsewhere).

- [https://assets.codepen.io/707165/subtitles.vtt](https://assets.codepen.io/707165/subtitles.vtt)
</aside>

# Other

## Definition List

The [definition list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) (`dl`) is often used for key value pairs, like dictionaries or glossaries, where there is a **term** (`dt`) and a **description/definition** (`dd`)

```html
<dl>
	<dt>Size</dt>    
	<dd>40 to 54 cm</dd>    

	<dt>Weight</dt>    
	<dd>2.5 to 5kg</dd>    

	<dt>Lifespan</dt>    
	<dd>About 10 years in the wild and up to 15 years in captivity.</dd>
</dl>
```

<aside>
👩🏾‍💻 Add a definition list of some of the HTML tags you’ve learnt and what they’re used for. ****Hint****: you can use the `code` tag for the element name in the `dt`

</aside>

## Collapsible Sections

The `[details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)` and `[summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)` elements are used to provide collapsible sections, similar to FAQs, and have a summary which is always visible and main content section that is only visible when expanded.

```html
<details>
	<summary>Are Quokkas real?</summary>
	<p>Is Australia real? Are we even real? What is real? Are we all just a figment of someone's imagination? Or part of the matrix?</p>
	<p>Yes, Quokkas are real. They seem too good to be true, and a bit too weird (like most animals in Australia, I'm still convinced that platypus' are a myth), but they do genuinely exist.</p>
</details>

<details>    
	<summary>Can I have one?</summary>    
	<p>Quokkas are only native to one island in Australia, and don't do well outside of their natural habitat. They're not great as pets, it would be similar to keeping a squirrel as a pet.</p>
</details>
```

## Addresses

You can use the `[address` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) to provide a more semantic wrapper around address details. This isn’t limited to physical location addresses, but can also be used for email addresses and phone numbers as well.

```html
<address>    
	1 Henderson Ave<br/>    
	Rottnest Island, WA<br/>    
	Australia 6161
</address>

<address>    
	<a href="tel:+61893729730">(08) 9372 9730</a>
</address>
```