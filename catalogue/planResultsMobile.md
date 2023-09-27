---
layout: cat
title: "Programmes: Search"
nav: "no"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/planMobile.js
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
      <th scope="col">Title / Code</th>
      <th scope="col">1st&nbsp;entry</th>
    </tr>
  </thead>
  <tbody>
    {% assign plans = site.data.plans %}
    {% for plan in plans %}
    <tr style="position: relative">
      <td><a href="plan1.html" class="stretched-link"><b>{{ plan.Title }}</b></a><br/>{{ plan.planCode }} <i>(UCAS: {{ plan.ucasCode }})</i></td>
      <td>{{ plan.yearEntry }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
