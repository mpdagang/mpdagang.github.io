---
title: A Better Web Dev.
---

Learning _Fundamentals_ by heart.

Thanks to CSS-Tricks' [Almanac page](https://css-tricks.com/almanac/){: .b-link }, I've been slowly making my way in learning CSS attributes.

I started making web pages with the help of browser developer tools and VScode suggesting
attributes while showing the results in real-time. At that time I was only adding styles and markup 
to match the appearance and responsiveness our client needed for their website, but I didn't code it
as if I knew what `flex` or `grid` actually means. If it shows the result I need, I use it. 

It felt I wasn't in control, like I was only coasting just to meet deadlines. That needed to change.
And for my first true intentional styling I turned to centering an element.

### Keeping it center
This is how I've gone around to center things:
```
text-align: center;
```
Shocking! and then I went about doing:
```
display: block;
width: <px or %>;
margin: 0 auto;
```
Why does it behave like that? I then learn new concepts like `block-levels`. Inline elements can be centered 
with `text-align` as it [targets inline elements](https://drafts.csswg.org/css-text/#text-align-property){: .b-link } \
through setting it to the parent block.
Block-level elements on the other hand can be centered using `auto` value set to margin left and right as long as the 
element has a fixed with less than the whole width of its container. No width set and it'll max out and there's nothing
to center after that. Further references to this:
- [Sums up](https://www.shecodes.io/athena/137125-what-does-margin-auto-mean-in-css){: .b-link } what's happening with `margin: 0 auto`
- auto is a [computed value](https://www.w3.org/TR/css-cascade/#computed){: .b-link } used on margin attribute
- margins from the [csswg drafts](https://drafts.csswg.org/css-box-3/#margins){: .b-link }

### Ongoing Series
Looks like I'll be doing a series of these kinds of explanation so that what I learned imprints longer.
Ultimately, I believe it's best to learn the fundamentals of web design/styling and it starts with powerfull CSS.

Corporate-pushed abstracted frameworks can wait (or not touch on them at all haha).