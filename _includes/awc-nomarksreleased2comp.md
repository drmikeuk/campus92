
<!-- no marks released yet -->

<!-- <dl class="d-flex flex-row inline">
  <dt>Year of study:</dt>
  <dd>2 Undergraduate FullTime <span>(14.9.20 - 31.5.23)</span></dd>
</dl> -->

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
{% assign modules = site.data.awc-marks2comp %}
<tbody>
{% for module in modules %}
  <tr>
    <td>{{module.Code}}</td>
    <td>{{module.Moduletitle}}</td>
    <td>{{module.Semester}}</td>
    <td>{{module.Credits}}</td>
    <td>{{module.Repeating}}</td>
    <td>&mdash;</td>
    <td>&mdash;</td>
    <td>&mdash;</td>
    <td>&mdash;</td>
  </tr>
{% endfor %}
</tbody>
</table>
