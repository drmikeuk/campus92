---
layout: registration23
title: "Personal details"
nav: "no"
sortTitle: "z"
previous: regDemographics.html
next: regDisabilities.html
this: 3
---

## Personal details

Complete or update the details below.


<label for="religion">What is your religion?</label>
<select name="religion" id="religion" class="custom-select">
  <option value=""></option>
  <option value="No religion">No religion</option>
  <option value="Buddhist">Buddhist</option>
  <option value="Christian">Christian</option>
  <option value="Hindu">Hindu</option>
  <option value="Jewish">Jewish</option>
  <option value="Muslim">Muslim</option>
  <option value="Pagan">Pagan</option>
  <option value="Sikh">Sikh</option>
  <option value="Any other religion or belief">Any other religion or belief</option>
    <!--  <option value="" disabled>&nbsp;</option> -->
  <option value="Prefer not to say">Prefer not to say</option>
</select>





<label for="sexual">Which of the following best describes your sexual orientation?</label>
<select name="sexual" id="sexual" class="custom-select">
  <option value=""></option>
  <option value="Bisexual">Bisexual</option>
  <option value="Gay or lesbian">Gay or lesbian</option>
  <option value="Heterosexual or straight">Heterosexual or straight</option>
  <option value="Other sexual orientation">Other sexual orientation</option>
    <!-- <option value="" disabled>&nbsp;</option> -->
  <option value="Prefer not to say">Prefer not to say</option>
</select>


<label for="gender">Is the gender you identify with the same as your sex registered at birth?</label>
<select name="gender" id="gender" class="custom-select">
  <option value=""></option>
  <option value="">Yes</option>
  <option value="">No</option>
    <!-- <option value="" disabled>&nbsp;</option> -->
  <option value="Prefer not to say">Prefer not to say</option>
</select>


<label for="ethnicity">What is your ethnicity or ethnic group?</label>
<select name="ethnicity" id="ethnicity" class="custom-select">
  <option value=""></option>
  <option value="Arab">Arab</option>
  <option value="Asian - Bangladeshi or Bangladeshi British">Asian - Bangladeshi or Bangladeshi British</option>
  <option value="Asian - Chinese or Chinese British">Asian - Chinese or Chinese British</option>
  <option value="Asian - Indian or Indian British">Asian - Indian or Indian British</option>
  <option value="Asian - Pakistani or Pakistani British">Asian - Pakistani or Pakistani British</option>
  <option value="Any other Asian background">Any other Asian background</option>
  <option value="Black - African or African British">Black - African or African British</option>
  <option value="Black - Caribbean or Caribbean British">Black - Caribbean or Caribbean British</option>
  <option value="Any other Black background">Any other Black background</option>
  <option value="Mixed or multiple ethnic groups - White or White British and Asian or Asian British">Mixed or multiple ethnic groups - White or White British and Asian or Asian British</option>
  <option value="Mixed or multiple ethnic groups - White or White British and Black African or Black African British">Mixed or multiple ethnic groups - White or White British and Black African or Black African British</option>
  <option value="Mixed or multiple ethnic groups - White or White British and Black Caribbean or Black Caribbean British">Mixed or multiple ethnic groups - White or White British and Black Caribbean or Black Caribbean British</option>
  <option value="Any other Mixed or Multiple ethnic background">Any other Mixed or Multiple ethnic background</option>
  <option value="White - English">White - English</option>
  <option value="White - Gypsy or Irish Traveller">White - Gypsy or Irish Traveller</option>
  <option value="White - Irish">White - Irish</option>
  <option value="White - Roma">White - Roma</option>
  <option value="Any other White background">Any other White background</option>
  <option value="Any other ethnic background">Any other ethnic background</option>
  <option value="Not known">Not known</option>
    <!-- <option value="" disabled>&nbsp;</option> -->
  <option value="Prefer not to say">Prefer not to say</option>
</select>


<label for="ethnicity">Which of the following best describes your term-time accommodation?</label>
<select name="accommodation" id="accommodation" class="custom-select">
  <option value=""></option>
  <option value="Halls - private sector">Halls of residence - third party</option>
  <option value="Halls - university maintained">Halls of residence - university maintained</option>
  <option value="Own residence">Own home</option>
  <option value="Parental/guardian home">Parental/guardian home</option>
  <option value="Rented accommodation">Rented accommodation</option>
    <!-- <option value="" disabled>&nbsp;</option> -->
  <option value="Not in attendance">Not in attendance</option>
  <option value="Not known">Not known</option>
  <option value="Other">Other</option>
</select>

<!--
Not in attendance at the provider
Not known
Other
Other rented accommodation
Own residence
Parental/guardian home
Private-sector halls
Provider maintained property

Halls of residence - third party              -- maps to 'Private-sector halls'
Halls of residence - university maintained    -- maps to 'Provider maintained property'
Not in attendance                             -- maps to 'Not in attendance at the provider'
Not known
Other
Own home
Parental/guardian home
Rented accommodation                          -- maps to 'Other rented accommodation'


-->

<div id="buttons">
  <a class="btn btn-primary" type="submit" href="{{page.next}}">Confirm</a>
</div>

<!-- no CONFIRM button
<div id="buttons">
  <a class="btn btn-outline-secondary" href="{{page.previous}}">Cancel</a>
  <a class="btn btn-primary" type="submit" href="{{page.next}}">Save and continue</a>
</div>
-->
