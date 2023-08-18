---
layout: awc
title: "My Students"
nav: "no"
back: "Back"
backurl: "home.html"
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/awc.js
---

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#summary" role="tab" aria-controls="summary" aria-selected="true">Summary</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="photos-tab" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false">Photo grid</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="summary" role="tabpanel" aria-labelledby="summary-tab">

    <table id="DataTable" class="table table-sm table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Course / School</th>
          <th scope="col">Personal tutor</th>
          <th scope="col">UG/PG</th>
          <th scope="col">Year</th>
          <th scope="col">Actions</th>
          <th scope="col">Flags</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {% assign students = site.data.awc35 %}
        {% for student in students %}
        {% assign email = student.username | append: "@nottingham.ac.uk" %}
        <tr style="position: relative">
          <td class="name"><div class="media">
          <img class="photo" src="{{ student.photo | prepend: "photos/128-" | append: ".jpg"}}" alt="{{ student.name }} photo">
          <div class="media-body"><a href="details.html" class="stretched-link">{{ student.name }}</a><br/><span class="id">{{ student.id }}</span></div>
          </div></td>
          <td><div class="course">{{ student.course }}</div><span class="school">{{ student.school }}</span></td>
          <td>{{ student.tutor }}</td>
          <td>{{ student.career }}</td>
          <td>{{ student.year }}</td>
          <td><span class="email">{{ email }}</span><a href="mailto:{{ email }}" class="actions"><span class="material-symbols-sharp">mail</span></a>
          <a href="notes.html" class="actions"><span class="material-symbols-sharp">description</span>Notes</a>
          </td>
          <td>{% if student.support == "Y" %}<span class="material-symbols-sharp">flag</span>{% endif %}</td>
          <td class="right"><span class="material-symbols-sharp">expand_circle_right</span></td>
        </tr>
        {% endfor %}
      </tbody>
    </table>

    <div class="fixed-bottom">
      <a class="btn btn-secondary" href="#" role="button"><span class="material-symbols-sharp">download</span>Download</a>

      Download all students in this group...
      plus will include the following extra fields...
    </div>


  </div>
  <div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">

  Photo grid...

  </div>
</div>
