---
layout: awcNoSide
title: "Student details"
nav: "no"
back: "Back"
backurl: "listTutees.html"
customjs:
  - /assets/awcDetails.js
---

{% assign photo = 36 %}

<div class="container-fluid details" markdown="1">

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="Academic-tab" data-toggle="tab" href="#Academic" role="tab" aria-controls="Academic" aria-selected="true">Academic</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="Notes-tab" data-toggle="tab" href="#Notes" role="tab" aria-controls="Notes" aria-selected="false">Notes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="Personal-tab" data-toggle="tab" href="#Personal" role="tab" aria-controls="Personal" aria-selected="false">Personal details and address</a>
  </li>
</ul>


<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="Academic" role="tabpanel" aria-labelledby="Academic-tab">
<div class="row" markdown="1">
  <div class="col-md-8" markdown="1">

  <div class="row" markdown="1">
   <div class="col-sm-3 col-md-2 ">
    <img src="{{ photo | prepend: "photos/128-" | append: ".jpg"}}" alt="{{ student.name }} photo" class="detailsphoto">
   </div>
   <div class="col-sm-9 col-md-10" markdown="1">
{% include awc-details.md %}
   </div>
  </div>

  <div class="row space" markdown="1">
   <div class="col" markdown="1">
{% include awc-tutors.md %}
   </div>
  </div>

  </div>


  <div class="col-md-4">
    <!-- COMPLETED PLANS -->
    <h2 class="completed">Completed programmes</h2>
    <h3>BSc Hons Accounting and Business</h3>
    <p>Awarded <b>2:1</b>  (31.8.2019)</p>
  </div>
</div>


<div class="row space" markdown="1">
  <div class="col" markdown="1">
   <!-- PLAN -->
  <div class="d-flex flex-row">
    <h2>22-23: BSc Hons Accounting and Business <span class="material-symbols-sharp secondary outline">file_copy</span></h2>
    <div class="codes">Plan code: <b>U6UACCBU</b><br>UCAS code: <b>NN41</b></div>
  </div>
{% include awc-plan1.md %}
{% include awc-marks1.md %}
  </div>
</div>


<div class="row space" markdown="1">
  <div class="col" markdown="1">
   <!-- PLAN -->
  <div class="d-flex flex-row">
    <h2>21-22: BSc Hons Accounting and Business <span class="material-symbols-sharp secondary outline">file_copy</span></h2>
    <div class="codes">Plan code: <b>U6UACCBU</b><br>UCAS code: <b>NN41</b></div>
  </div>
{% include awc-plan1.md %}
{% include awc-marks1.md %}
  </div>
</div>


<div class="row space" markdown="1">
  <div class="col" markdown="1">
   <!-- PLAN -->
  <div class="d-flex flex-row">
    <h2>20-21: MSci Hons Medicinal and Biological Chemistry with an Assessed Year in Industry <span class="material-symbols-sharp secondary outline">file_copy</span></h2>
    <div class="codes">Plan code: <b>U6UACCBU</b><br>UCAS code: <b>NN41</b></div>
  </div>
{% include awc-plan1.md %}
{% include awc-nomarks1.md %}
  </div>
</div>



</div>
<div class="tab-pane fade" id="Notes" role="tabpanel" aria-labelledby="Notes-tab">

{% include awc-slimheader.md %}

<h2>Notes</h2>

<p><b>NB: look at current/new delivered functionality + do we really need sub-cats?</b> start by replicating what we have currently?</p>

{% include awc-notes.md %}

<p><a class="btn btn-outline-primary" href="#" role="button"><span class="material-symbols-sharp solid">add_circle</span>Add a new note</a></p>



</div>
<div class="tab-pane fade" id="Personal" role="tabpanel" aria-labelledby="Personal-tab">

{% include awc-slimheader-nosupport.md %}

{% include awc-personal.md %}


</div>
</div>
