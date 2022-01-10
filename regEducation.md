---
layout: registration
title: "Education details"
nav: "no"
sortTitle: "z"
previous: regEmergencyContact.html
next: regImmigration.html
this: 7
---

## Education details

Please provide details of your previous eduction.

### Previous Education

<label for="previous">Have you previously taken another Higher Education course in the UK for 6 months or more (even if you did not complete it)?</label>
<select name="previous" id="previous" class="custom-select">
  <option value=""></option>
  <option value="">No</option>
  <option value="">Yes</option>
</select>


### Your Highest Qualification

_Typically entrants to undergraduate courses will have **level 3** qualifications as their highest current qualification_

<label for="category">Category</label>
<select name="category" id="category" class="custom-select">
  <option value="" selected="selected">&nbsp; </option>
  <option value="SFE">Schools / Further Education</option>
  <option value="HE">Higher Education</option>
  <option value="PGL">Postgraduate Level</option>
  <option value="OTH">Other</option>
</select>


<label for="level">Level</label>
<select name="level" id="level" class="custom-select">
  <option value="" selected="selected">&nbsp; </option>
  <option value="P51">14-19 Advanced Diploma (level 3)</option>
  <option value="R51">14-19 Foundation Diploma (level 1)</option>
  <option value="Q51">14-19 Higher Diploma (level 2)</option>
  <option value="P50">A/AS level</option>
  <option value="P47">AQA Baccalaureate (Bacc)</option>
  <option value="P46">Award at level 3</option>
  <option value="P65">Cambridge Pre-U Certificate</option>
  <option value="P64">Cambridge Pre-U Diploma</option>
  <option value="P42">Certificate at level 3</option>
  <option value="P41">Diploma at level 3</option>
  <option value="P63">International Baccalaureate (IB) Certificate</option>
  <option value="P62">International Baccalaureate (IB) Diploma</option>
  <option value="P93">Level 3 qualifications of which all are subject to UCAS Tariff</option>
  <option value="P92">Level 3 qualifications of which none are subject to UCAS Tariff</option>
  <option value="P94">Level 3 qualifications of which some are subject to UCAS Tariff</option>
  <option value="R80">Other qualification at level 1</option>
  <option value="Q80">Other qualification at level 2</option>
  <option value="P80">Other qualification at level 3</option>
  <option value="P53">Scottish Baccalaureate</option>
  <option value="P54">Scottish Highers/Advanced Highers</option>
  <option value="P68">Welsh Baccalaureate Advanced Diploma (level 3)</option>
  <option value="R52">Welsh Baccalaureate Foundation Diploma (level 1)</option>
  <option value="Q52">Welsh Baccalaureate Intermediate Diploma (level 2)</option>
</select>





### Your Parents' education

<label for="parents">Do any of your parents (including adoptive parents, step-parents or guardians) have any higher education qualifications, such as a degree, diploma or certificate of higher education?</label>
<select name="parents" id="parents" class="custom-select">
  <option value=""></option>
  <option value="">Don't know</option>
  <option value="">No</option>
  <option value="">Yes</option>
    <option value="" disabled>&nbsp;</option>
  <option value="">I'd rather not say</option>
</select>



<div id="buttons">
  <a class="btn btn-outline-secondary" href="{{page.previous}}">Cancel</a>
  <a class="btn btn-primary" type="submit" href="{{page.next}}">Save and continue</a>
</div>
