---
layout: widetables
title: "Default Table"
widestablenav: "yes"
sortTitle: "a"
css:
  - widetables.css
---

<div class="container-fluid">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">

{% assign rows = site.data.widetable  %}

<table class="table table-sm table-hover">
  <thead class="thead">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Year</th>
      <th scope="col">School</th>
      <th scope="col">Campus</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Date&nbsp;of&nbsp;birth</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Postcode</th>
      <th scope="col">Country</th>
      <th scope="col">Phone</th>
      <th scope="col">Preferred&nbsp;airport</th>
    </tr>
  </thead>
  <tbody>
    {% for row in rows %}
    <tr>
      <td>{{ row.id }}</td>
      <td>{{ row.name }}</td>
      <td>{{ row.year }}</td>
      <td>{{ row.school }}</td>
      <td>{{ row.campus }}</td>
      <td>{{ row.email }}</td>
      <td>{{ row.gender }}</td>
      <td>{{ row.DOB }}</td>
      <td>{{ row.address1 }}</td>
      <td>{{ row.city }}</td>
      <td>{{ row.state }}</td>
      <td>{{ row.postcode }}</td>
      <td>{{ row.country }}</td>
      <td>{{ row.phone }}</td>
      <td>{{ row.preferredairport }}</td>                  
    </tr>
    {% endfor %}
  </tbody>
</table>


    </div>
  </div>
</div>
