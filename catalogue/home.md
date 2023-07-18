---
layout: cat
title: "Curriculum catalogue"
nav: "no"
---

<h1 class="padTitle">Curriculum catalogue</h1>

<h2>Programmes</h2>

<div class="row">

  {% assign cards = site.data.programmeCards %}
  {% for card in cards %}
  <div class="col-md-4">
    <div class="card" >
      <img class="card-img-top" src="/campus92/images/{{ card.image }}" alt="Campus photo">
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">Programme catalogue
        <a href="planSearch.html" class="stretched-link"><i class="fas fa-chevron-circle-right"></i></a></p>

      </div>
    </div>
  </div>
  {% endfor %}

</div>



<h2 style="padding-top: 30px">Modules</h2>

<div class="row">

  {% assign cards = site.data.moduleCards %}
  {% for card in cards %}
  <div class="col-md-4">
    <div class="card" >
      <img class="card-img-top" src="/campus92/images/{{ card.image }}" alt="Campus photo">
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">Module catalogue
        <a href="planSearch.html" class="stretched-link"><i class="fas fa-chevron-circle-right"></i></a></p>

      </div>
    </div>
  </div>
  {% endfor %}

</div>
