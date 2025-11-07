---
layout: bluecastle
title: "Pass"
bluecastlenav: "yes"
sortTitle: "a"
css:
  - bluecastle.css
---

<div class="container">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">

<h2>Passing / happy path</h2>

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
 {% assign marks = site.data.bluecastlemarks-mod1-pass  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>4: Start next session: List new modules + previous modules with marks</h2>
 <h3>2025/26</h3>
 {% assign marks = site.data.bluecastlemarks-mod2  %}{% include bluecastleMarks.html %} 
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-pass  %}{% include bluecastleMarks.html %}
</div>

    </div>
  </div>
</div>
