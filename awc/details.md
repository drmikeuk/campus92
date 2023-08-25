---
layout: awcNoSide
title: "Student details"
nav: "no"
back: "Back"
backurl: "listTutees.html"
---

{% assign photo = 36 %}

<div class="container-fluid details" markdown="1">

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

  <div class="row" markdown="1">
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
    <h2>22-23: BSc Hons Accounting and Business <span class="material-symbols-sharp outline">file_copy</span></h2>
    <div class="codes">Plan code: <b>U6UACCBU</b><br>UCAS code: <b>NN41</b></div>
  </div>

{% include awc-plan1.md %}
  </div>
</div>


<div class="row space" markdown="1">
  <div class="col" markdown="1">
   <!-- PLAN -->
  <div class="d-flex flex-row">
    <h2>22-23: BSc Hons Accounting and Business <span class="material-symbols-sharp outline">file_copy</span></h2>
    <div class="codes">Plan code: <b>U6UACCBU</b><br>UCAS code: <b>NN41</b></div>
  </div>

{% include awc-plan1.md %}
  </div>
</div>


<div class="row space" markdown="1">
  <div class="col" markdown="1">
   <!-- PLAN -->
  <div class="d-flex flex-row">
    <h2>20-21: MSci Hons Medicinal and Biological Chemistry with an Assessed Year in Industry <span class="material-symbols-sharp outline">file_copy</span></h2>
    <div class="codes">Plan code: <b>U6UACCBU</b><br>UCAS code: <b>NN41</b></div>
  </div>

{% include awc-plan1.md %}
  </div>
</div>



</div>
