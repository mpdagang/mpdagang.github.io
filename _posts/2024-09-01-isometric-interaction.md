---
title: Isometric Visuals
---

Visualization with Rotations.

<script src="/assets/js/iso.js"></script>

Great tutorials this weekend on builing 3D looking elements with 
CSS and HTML, with a little help from JS to switch it around.

I think this is a more _materially honest_ approach compared to doing
most of it in javascript and a canvas. Start by establishing
the object (html) and style it (css), and then add interactions (js).

<div class="d-pground">
  <div id="test-scene" class="scene">
      <div class="cube" id="main-cube">
        <div></div>
      </div>  
      <div class="cube blue">
        <div></div>
      </div>    
      <div class="cube green">
        <div></div>
      </div>  
  </div>
</div>

<button id="view-top">view top</button>
<button id="view-front">view front</button>
<button id="reveal">reveal</button>