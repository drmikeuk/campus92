---
layout: bluecastle
title: "d1"
bluecastlenav: "yes"
sortTitle: "x"
css:
  - bluecastle.css
---

<div class="container">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">

<div class="marksDivider">
 <h2>A: Flexible columns</h2>
 {% assign marks = site.data.bluecastlemarks  %}
 {% include bluecastleMarksDesktop1.html %}
</div>

<div class="marksDivider">
 <h2>B: Fixed width columns (aka GT default)</h2>
 <div class="fixedCols">
 {% assign marks = site.data.bluecastlemarks  %}
 {% include bluecastleMarksDesktop1.html %}
 </div>
</div>

    </div>
  </div>
</div>
