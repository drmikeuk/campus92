
<table class="table table-sm table-hover">
<thead>
  <tr>
    <th>Category</th>
    <th>Sub-Category</th>
    <th>Subject</th>
    <th>Assigned to</th>
    <th>Status</th>
    <th>Action items</th>
    <th>Student note access</th>
    <th>Last updated</th>
    <th> </th>
  </tr>
</thead>
{% assign notes = site.data.awc-notes %}
<tbody>
{% for note in notes %}
  <tr>
    <td>{{note.Category}}</td>
    <td>{{note.SubSategory}}</td>
    <td><a href="" class="stretched-link">{{note.Subject}}</a></td>
    <td>{{note.AssignedTo}}</td>
    <td>{{note.Status}}</td>
    <td>{{note.ActionItems}}</td>
    <td>{{note.StudentAccess}}</td>
    <td>{{note.Updated}}</td>
    <td class="right"><span class="material-symbols-sharp">expand_circle_right</span></td>
  </tr>
{% endfor %}
</tbody>
</table>
