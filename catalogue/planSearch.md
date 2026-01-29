---
layout: cat
title: "Courses: Search"
nav: "no"
---

<h1 class="padTitle">Courses: UK</h1>

<form action="planResults.html">

  <div class="form-group row">
    <label for="AcademicYear" class="col-sm-2 col-form-labelXX">Academic year</label>
    <div class="col-sm-10">
      <select id="AcademicYear" class="form-control">
        {% assign years = site.data.years %}
        {% for year in years %}
        <option>{{ year.AcademicYear }}</option>
        {% endfor %}
      </select>
    </div>
  </div>

<!-- <p>Search by keyword <b>or</b> programme <b>or</b> UCAS code:</p> -->

  <div class="form-group row noPadxxx">
    <label for="Title" class="col-sm-2 col-form-labelXX">Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="Title" placeholder="Title keywords...">
    </div>
  </div>

<div><i>or</i></div>

  <div class="form-group row noPadxxx">
    <label for="Programme code" class="col-sm-2 col-form-labelXX">Course code</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="Programme code" >
    </div>
  </div>

<div><i>or</i></div>

  <div class="form-group row">
    <label for="UCAS code" class="col-sm-2 col-form-labelXX">UCAS code</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="UCAS code" >
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-10 offset-sm-2">
      <button type="submit" class="btn btn-primary">Search</button>
    </div>
  </div>

</form>
