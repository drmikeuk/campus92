---
layout: bluecastle
title: "Marks (desktop)"
bluecastlenav: "yes"
sortTitle: "a"
css:
  - bluecastle.css
---

<div class="container">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">


<h2>A: Flexible columns</h2>
{% assign marks = site.data.bluecastlemarks  %}
{% include bluecastleMarksDesktop.html %}


<h2>B: Fixed width columns (aka GT default)</h2>
<div class="fixedCols">
{% assign marks = site.data.bluecastlemarks  %}
{% include bluecastleMarksDesktop.html %}
</div>


    </div>
  </div>
</div>
