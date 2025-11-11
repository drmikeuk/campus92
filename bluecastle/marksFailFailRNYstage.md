---
layout: bluecastle
title: "RNY stage"
bluecastlenav: "yes"
sortTitle: "e"
css:
  - bluecastle.css
---

<div class="container">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">

<h2>Fail then resit whole <i>stage</i> next year IN attendance</h2>

<div class="marksDivider">
 <h2>1: Start session: List modules</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-stage  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>2: Assessment 1: Some marks</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-marksstage  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>3: Assessment 2: All marks + progression</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failstage  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>4: Reassessment: All marks + progression</h2>
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failstage-fail  %}{% include bluecastleMarks.html %}
</div>

<div class="marksDivider">
 <h2>5: Start next session: List all repeating modules + previous modules with marks</h2>
 <h3>2025/26</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-stagerny  %}{% include bluecastleMarks.html %} 
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failstage-fail  %}{% include bluecastleMarks.html %}
</div>


<div class="marksDivider">
 <h2>6: All marks (against original year) + progression</h2>
 <h3>2025/26</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-stagerny  %}{% include bluecastleMarks.html %} 
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failstage-fail-rny  %}{% include bluecastleMarks.html %}
</div>


<div class="marksDivider">
 <h2>7: Start next session: List new modules + previous modules with marks</h2>

 <h3>2026/27</h3>
 {% assign marks = site.data.bluecastlemarks-mod2  %}{% include bluecastleMarks.html %} 
 <h3>2025/26</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-stagerny  %}{% include bluecastleMarks.html %} 
 <h3>2024/25</h3>
 {% assign marks = site.data.bluecastlemarks-mod1-failstage-fail-rny  %}{% include bluecastleMarks.html %}
</div>




    </div>
  </div>
</div>
