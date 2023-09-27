---
layout: cat
title: "Modules: Search"
nav: "no"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/modulesMobile.js
---

# Modules: Malaysia
<!-- <p class="strapline">ACADEMIC YEAR <b>2022-23</b></p> -->

<form style="padding-bottom: 18px">
<select id="AcademicYear" class="form-control notFullWidth strapline">
  {% assign years = site.data.years %}
  {% for year in years %}
  <option>{{ year.AcademicYearLong }}</option>
  {% endfor %}
</select>
</form>


<table id="DataTable" class="table table-sm notXFullWidth table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Title / Code</th>
      <th scope="col">Level</th>
      <th scope="col">Taught</th>
    </tr>
  </thead>
  <tbody>
    {% assign modules = site.data.modules %}
    {% for module in modules %}
    <tr style="position: relative">
      <td><a href="module1.html" class="stretched-link"><b>{{ module.title }}</b></a><br/>{{ module.code }}</td>
      <td>{{ module.level | remove: "Level " }}</td>
      <td>{{ module.semester }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
