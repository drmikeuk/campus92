---
layout: cat
title: "Modules: Search"
nav: "no"
---

<h1 class="padTitle">Modules: Malaysia</h1>

<form action="moduleResults.html">

  <div class="form-group row">
    <label for="AcademicYear" class="col-sm-2 col-form-labelXX">Academic Year</label>
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

  <div class="form-group row noPad">
    <label for="Title" class="col-sm-2 col-form-labelXX">Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="Title" placeholder="Title keywords...">
    </div>
  </div>

<div><i>or</i></div>

  <div class="form-group row noPad">
    <label for="School" class="col-sm-2 col-form-labelXX">School</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="School" >
    </div>
  </div>

<div><i>or</i></div>

  <div class="form-group row">
    <label for="Modulecode" class="col-sm-2 col-form-labelXX">Module code</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="Modulecode" >
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-10 offset-sm-2">
      <button type="submit" class="btn btn-primary">Search</button>
    </div>
  </div>

</form>
