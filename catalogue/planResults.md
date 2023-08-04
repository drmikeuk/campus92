---
layout: cat
title: "Programmes: Search"
nav: "no"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/plan.js
---

# Programmes: UK
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
      <th scope="col">UCAS</th>
      <th scope="col">Code</th>
      <th scope="col">Title</th>
      <th scope="col">Level</th>
      <th scope="col">First entry</th>
      <th scope="col"> </th>
    </tr>
  </thead>
  <tbody>
    {% assign plans = site.data.plans %}
    {% for plan in plans %}
    <tr style="position: relative">
      <td>{{ plan.ucasCode }}</td>
      <td>{{ plan.planCode }}</td>
      <td><a href="plan1.html" class="stretched-link">{{ plan.Title }}</a></td>
      <td>{{ plan.level }}</td>
      <td>{{ plan.yearEntry }}</td>
      <td class="right"><i class="fas fa-chevron-circle-right"></i></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
