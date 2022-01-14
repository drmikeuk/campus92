---
layout: registration
title: "Disability (v2)"
nav: "no"
sortTitle: "z"
previous: regDemographics.html
next: regAddresses.html
this: 3
---

## Disability (v2 checkboxes)

Please check the details below and complete any additional fields.

<p>The University is strongly committed to equality of opportunity in its provision for all of its students. We offer a range of support services for students who have a disability, dyslexia or long term medical condition. If you indicate a disability or long term medical condition, we will send you information about our services.</p>

<p><b>Do you have an impairment, health condition or learning difference that has substantial and long-term impact on your ability to carry out normal day-to-day activities?</b></p>

<p><i>Please select all that apply</i></p>

{% for item in site.data.disability %}
<div class="form-group form-check">
  <input type="checkbox" class="form-check-input" id="{{ item.id }}">
  <label class="form-check-label" for="{{ item.id }}">{{ item.label }}</label>
</div>
{% endfor %}



<label for="allowance">Do you receive Disabled  Student's Allowance</label>
<select name="allowance" id="allowance" class="custom-select">
  <option value=""></option>
  <option value="">Yes</option>
  <option value="">No</option>
    <option value="" disabled>&nbsp;</option>
  <option value="">I'd rather not say</option>
</select>



<div id="buttons">
  <a class="btn btn-outline-secondary" href="{{page.previous}}">Cancel</a>
  <a class="btn btn-primary" type="submit" href="{{page.next}}">Save and continue</a>
</div>
