<!-- <dl class="d-flex flex-row inline">
  <dt>Plan code:</dt>
  <dd>U6UACCBU</dd>
  <dt>UCAS code:</dt>
  <dd>NN41</dd>
</dl> -->

<dl class="d-flex flex-row inline">
  <dt>Year of study:</dt>
  <dd>2 Undergraduate Fulltime</dd>
  <dt>Academic shift:</dt>
  <dd>APRIL</dd>
  <dt>Form of study:</dt>
  <dd>Mobility</dd>
</dl>

<dl class="d-flex flex-row inline">
  <dt>Progression stage average:</dt>
  <dd>59</dd>
  <dt>Stage average:</dt>
  <dd> </dd>
  <dt>Stage outcome:</dt>
  <dd>Satisfactory - compensated optional 1st sits (ECs)</dd>
</dl>

<p class="space"><span class="material-symbols-sharp hilight">error</span> All marks are <b><i>provisional</i></b> and should not be shared with students until approved by an Exam Board.</p>

<table class="table table-sm">
<thead>
  <tr>
    <th>Code</th>
    <th>Module title</th>
    <th>Semester</th>
    <th>Credits</th>
    <th>Enrolled?</th>
    <th>Repeating?</th>
    <th>Mark</th>
    <th>1st resit</th>
    <th>2nd resit</th>
    <th>Outcome</th>
  </tr>
</thead>
{% assign modules = site.data.awc-marks %}
<tbody>
{% for module in modules %}
  <tr>
    <td>{{module.Code}}</td>
    <td>{{module.Moduletitle}}</td>
    <td>{{module.Semester}}</td>
    <td>{{module.Credits}}</td>
    <td>{{module.Enrolled}}</td>
    <td>{{module.Repeating}}</td>
    <td>{{module.Mark}}</td>
    <td>{{module.1stresit}}</td>
    <td>{{module.2ndresit}}</td>
    <td>{{module.Outcome}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
