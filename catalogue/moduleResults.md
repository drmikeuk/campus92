---
layout: cat
title: "Modules: Search"
nav: "no"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/modules.js
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
      <th scope="col">Code</th>
      <th scope="col">Title</th>
      <th scope="col">Level</th>
      <th scope="col">Taught</th>
      <th scope="col"> </th>
    </tr>
  </thead>
  <tbody>
    {% assign modules = site.data.modules %}
    {% for module in modules %}
    <tr style="position: relative">
      <td>{{ module.code }}</td>
      <td><a href="module1.html" class="stretched-link">{{ module.title }}</a></td>
      <td>{{ module.level }}</td>
      <td>{{ module.semester }}</td>
      <td class="right"><i class="fas fa-chevron-circle-right"></i></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
