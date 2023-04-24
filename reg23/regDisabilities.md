---
layout: registration23
title: "Disability"
nav: "no"
sortTitle: "z"
previous: regPersonal.html
next: regAddresses.html
this: 4
---

## Disability

<p>
<!--The University is strongly committed to equality of opportunity in its provision for all of its students. We offer a range of support services for students who have a disability, dyslexia or long term medical condition.-->
If you indicate a disability or long term medical condition, we will send you information about our services.</p>

<p><b>Please select any that apply to you:</b></p>



{% for item in site.data.disability %}
<div class="form-group form-check">
  <input type="checkbox" class="form-check-input" id="{{ item.id }}">
  <label class="form-check-label" for="{{ item.id }}">{{ item.label }}</label>
</div>
{% endfor %}



<label for="allowance">Do you receive Disabled  Student's Allowance?</label>
<select name="allowance" id="allowance" class="custom-select">
  <option value=""></option>
  <option value="">Yes</option>
  <option value="">No</option>
  <option value="">I'd rather not say</option>
</select>

<p>
<!--The University is strongly committed to equality of opportunity in its provision for all of its students. We offer a range of support services for students who have a disability, dyslexia or long term medical condition.-->



<div id="buttons">
  <a class="btn btn-primary" type="submit" href="{{page.next}}">Confirm</a>
</div>
