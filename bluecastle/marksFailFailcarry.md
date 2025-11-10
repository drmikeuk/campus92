---
layout: bluecastle
title: "Carry"
bluecastlenav: "yes"
sortTitle: "e"
css:
  - bluecastle.css
---

<div class="container">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">

<h2>Fail then carry 20 credits</h2>

<div class="marksDivider">
 <h2>1: Start session: List modules</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>2: Assessment 1: Some marks</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-marks  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>3: Assessment 2: All marks + progression</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failcarry  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>4: Reassessment: All marks + progression</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failcarry-fail  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>5: Start next session: New modules + carry module + previous modules with marks</h2>
 <h3>2025/26</h3>
 {% assign marks = site.data.bluecastlemarks-mod2  %}{% include bluecastleMarks.html %} 
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failcarry-fail  %}{% include bluecastleMarks.html %}
</div>



<div class="marksDivider">
 <h2>6: All marks (against original year) + progression</h2>
 <h3>2025/26</h3>
 {% assign marks = site.data.bluecastlemarks-mod2-pass  %}{% include bluecastleMarks.html %} 
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failcarry-pass  %}{% include bluecastleMarks.html %}
</div>


<div class="marksDivider">
 <h2>7: Start next session: List new modules + previous modules with marks</h2>
 <p>Y3 modules...</p>

</div>




    </div>
  </div>
</div>
