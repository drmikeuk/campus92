---
layout: bluecastle
title: "RNY NOT"
bluecastlenav: "yes"
sortTitle: "d"
css:
  - bluecastle.css
---

<div class="container">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">

<h2>Fail then resit next year NOT in attendance</h2>

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
 {% assign marks = site.data.bluecastlemarks-mod1-fail  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>4: Reassessment: All marks + progression</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-fail-fail  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>5: Start next session: No new modules + previous modules with marks</h2>
 <h3>2025/26</h3>
 <p>hide current year if no modules?</p>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-fail-fail  %}{% include bluecastleMarks.html %}
</div>


<div class="marksDivider">
 <h2>6: All marks (against original year) + progression</h2>
 <h3>2025/26</h3>
 <p>hide current year if no modules?</p>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-fail-fail-rny  %}{% include bluecastleMarks.html %}
</div>


<div class="marksDivider">
 <h2>7: Start next session: List new modules + previous modules with marks</h2>

 <h3>2026/27</h3>
 {% assign marks = site.data.bluecastlemarks-mod2  %}{% include bluecastleMarks.html %} 
 <h3>2025/26</h3>
 <p>hide year if no modules?</p>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-fail-fail-rny  %}{% include bluecastleMarks.html %}
</div>




    </div>
  </div>
</div>
