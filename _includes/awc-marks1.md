<p class="space"><span class="material-symbols-sharp hilight solid">error</span> All marks are <b><i>provisional</i></b> and should not be shared with students until approved by an Exam Board.
<a class="btn btn-sm btn-outline-primary float-right" href="#" role="button"><span class="material-symbols-sharp solid smIcon">expand_circle_right</span>View element marks report</a></p>

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
