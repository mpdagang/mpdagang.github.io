---
title: Web Components
---

...are HTML tags on steroids.

<script src="https://unpkg.com/two-up-element@1"></script>

Javascript framework come in handy when creating interactive websites. 
However, it's rather difficult to learn and relearn multiple components 
that function similarly across frameworks but are implemented/instantiated 
differently. 

> The whole point of design systems is not to redo work so having multiple libraries of competing components that all really do the same thing seems, well, wrong. 
>
> -- Robin Rendle, _[The Cascade: The Universal Library](https://buttondown.com/cascade/archive/004-the-universal-library/)_

To deviate from this common approach, we can utilize what's known as Web Components. Think of it as 
a custom html object/tag that does one task be it simple or complex which you can use/declare anywhere
on your html pages. You can checkout an overview on Web Components at the [Codepen Blog](https://blog.codepen.io/2023/05/15/chris-corner-lets-talk-web-components/){: .b-link }.

Let's learn web components by building one!

I'm inspired by the `<two-up>` component. The way it works is that it takes 
two images and overlays it on top of one another and let's the user interact 
with a slider that shows the images above and under. Think of it as an 
interactive GIF you can control the _before-and-after_ animation manually.

<two-up>
	<div><img class="two-up-cmp-img" src="/assets/img/circle-01.jpg" alt="Dangerous and Congested roundabout"></div>
	<div><img class="two-up-cmp-img" src="/assets/img/circle-02.jpg" alt="Traffic Calmed roundabout"></div>
</two-up>

I followed instructions from [TheCascade's](https://buttondown.com/cascade/archive/005-why-web-components/){: .b-link } blog, resulting to the simple component below. Notice when you inspect 
this page that it uses a custom tag name.

<spooky-button size="large" color="red">
  <button>Click Me</button>
</spooky-button>

