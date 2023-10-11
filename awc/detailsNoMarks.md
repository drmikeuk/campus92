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
## Associated staff

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

## Programmes

|Title                                           |Code    |UCAS|Year     |Expected dates||
|------------------------------------------------|--------|----|---------|---------|----|
|**BSc Hons Finance, Accounting and Management** |U6UFAMGT|NN34|2 (UG FT)|20.9.21 &mdash; 31.5.24||
{:.table .table-sm .notFullWidth}


  </div>
</div>



<div class="row space" markdown="1">
  <div class="col" markdown="1">
## Modules and marks
<!-- <p><span class="material-symbols-sharp hilight solid">error</span> All marks are <b><i>provisional</i></b> and should not be shared with students until approved by an Exam Board.</p>-->
<div><a class="btn btn-sm btn-outline-primary padRight" href="#" role="button"><span class="material-symbols-sharp solid smIcon">expand_circle_right</span>Request to view marks</a> <i>some explainer of associations / business need... ...</i></div>
  </div>
</div>

<div class="row" markdown="1">
  <div class="col" markdown="1">
<h3>2022-23 <span class="part2"><span class="material-symbols-sharp spacer">fiber_manual_record</span>Inter-campus exchange Malaysia</span></h3>
{% include awc-nomarksreleased2.md %}
  </div>
</div>

<div class="row " markdown="1">
  <div class="col" markdown="1">
<h3>2021-22</h3>
{% include awc-nomarks2.md %}
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
