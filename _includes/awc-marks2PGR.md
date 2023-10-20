

<dl class="d-flex flex-row inline">
  <dt>Progression stage average:</dt>
  <dd>59</dd>
  <dt>Stage average:</dt>
  <dd> </dd>
  <dt>Stage outcome:</dt>
  <dd>Modules Satisfactory</dd>
</dl>

<table class="table table-sm">
<thead>
  <tr>
    <th>Code</th>
    <th>Module title</th>
    <th>Semester</th>
    <th>Credits</th>
    <th>Repeating?</th>
    <th>Mark</th>
    <th>1st resit</th>
    <th>2nd resit</th>
    <th>Outcome</th>
  </tr>
</thead>
{% assign modules = site.data.awc-marks2PGR %}
<tbody>
{% for module in modules %}
  <tr>
    <td>{{module.Code}}</td>
    <td>{{module.Moduletitle}}</td>
    <td>{{module.Semester}}</td>
    <td>{{module.Credits}}</td>
    <td>{{module.Repeating}}</td>
    <td>{{module.Mark}}</td>
    <td>{{module.1stresit}}</td>
    <td>{{module.2ndresit}}</td>
    <td>{{module.Outcome}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
