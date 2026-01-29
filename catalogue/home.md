---
layout: cat
title: "Curriculum catalogue"
nav: "no"
---

<!-- <div class="breadcrumbs">Curriculum catalogue</div> -->

<h1 class="padTitle">Curriculum catalogue</h1>

<div class="row">
  <div class="col-md-6">
    <h2 class="bolder">Courses</h2>
    <p>Find courses for each campus:</p>
    {% assign cards = site.data.programmeCards %}
    {% for card in cards %}
    <div class="card padcard" >
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">Course catalogue
        <a href="planSearch.html" class="stretched-link"><i class="fas fa-chevron-circle-right"></i></a></p>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="col-md-6">
    <h2 class="bolder">Modules</h2>
    <p>Find modules for each campus:</p>
    {% assign cards = site.data.moduleCards %}
    {% for card in cards %}
    <div class="card padcard" >
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">Module catalogue
        <a href="moduleSearch.html" class="stretched-link"><i class="fas fa-chevron-circle-right"></i></a></p>
      </div>
    </div>
    {% endfor %}
  </div>

</div>
