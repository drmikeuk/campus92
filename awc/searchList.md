---
layout: awcNoSide
title: "My Students"
nav: "no"
back: "Back"
backurl: "home.html"
page: searchList
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
---

{% assign students = site.data.awc150 | slice: 130,150 | sort: "forename" %}

## Search results

<!-- DATATABLE LIST -->
<table id="DataTable" class="table table-sm table-hover">
<thead class="thead-dark">
  <tr>
    <th scope="col">First name</th>
    <th scope="col">Last name</th>
    <th scope="col">Student ID</th>
    <th scope="col">UG/PG</th>
    <th scope="col">Year</th>
    <th scope="col">School</th>
    <th scope="col">Course</th>
  </tr>
</thead>
<tbody>
  {% for student in students %}
  <tr style="position: relative">
    <td>{{ student.forename }}</td>
    <td>Smith</td>
    <td>{{ student.id }}</td>
    <td>{{ student.career }}</td>
    <td>{{ student.year }}</td>
    <td>{{ student.school }}</td>
    <td>{{ student.course }}</td>
  </tr>
  {% endfor %}
</tbody>
</table>
