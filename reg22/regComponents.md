---
layout: registration
title: "(Example components)"
nav: "no"
sortTitle: "z"
---

## Page title

Instructions eg Please check the details below and complete any additional fields.


<label for="religion">Your religion</label>
<select name="religion" id="religion" class="custom-select">
  <option value=""></option>
  <option value="Buddhist">Buddhist</option>
  <option value="Christian">Christian</option>
  <option value="Christian - Church of Ireland">Christian - Church of Ireland</option>
  <option value="Christian - Church of Scotland">Christian - Church of Scotland</option>
  <option value="Christian - Methodist Church in Ireland">Christian - Methodist Church in Ireland</option>
  <option value="Christian - Other denomination">Christian - Other denomination</option>
  <option value="Christian - Presbyterian Church in Ireland">Christian - Presbyterian Church in Ireland</option>
  <option value="Christian - Roman Catholic">Christian - Roman Catholic</option>
  <option value="Hindu">Hindu</option>
  <option value="Jewish">Jewish</option>
  <option value="Muslim">Muslim</option>
  <option value="Sikh">Sikh</option>
  <option value="Spiritual">Spiritual</option>
  <option value="" disabled>&nbsp;</option>
  <option value="Any other religion or belief">Any other religion or belief</option>
  <option value="No religion">No religion</option>
  <option value="Not known">Not known</option>
  <option value="I'd rather not say">I'd rather not say</option>
</select>

### Simple data list in a table

<table class="table table-sm notFullWidth">
  <tbody>
    <tr>
      <th scope="row">Student ID</th>
      <td>20260661</td>
    </tr>
    <tr>
      <th scope="row">Gender</th>
      <td>Female</td>
    </tr>
    <tr>
      <th scope="row">Date of birth</th>
      <td>25/02/1996</td>
    </tr>
    <tr>
      <th scope="row">Country of birth</th>
      <td>Cambodia</td>
    </tr>    
  </tbody>
</table>



### Table and action buttons

<table class="table table-sm notFullWidth">
  <thead>
    <tr>
      <th scope="col">Address type </th>
      <th scope="col">Address</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Term</th>
      <td>Room 123,<br/>Florence Boot Hall,<br/>University Park,<br/>Nottingham. NG7 2RD.</td>
      <td><a class="btn btn-outline-primary" href="#"><i class="fas fa-edit"></i> Edit</a></td>
    </tr>
  </tbody>
</table>

<a class="btn btn-outline-primary" href="#"><i class="fas fa-plus-square"></i> Add new address</a>



### Secondary form eg edit address


<form class="secondary">
<table class="table table-borderless">
  <tbody>
    <tr>
      <th scope="row"><label for="country">Country</label></th>
      <td><input type="text" class="form-control" id="country" value="UK"></td>
    </tr>

    <tr>
      <th scope="row"><label for="Address1">Address1</label></th>
      <td><input type="text" class="form-control" id="Address1" value="Room 123"></td>
    </tr>

    <tr>
      <th scope="row"><label for="Address2">Address2</label></th>
      <td><input type="text" class="form-control" id="Address2" value="Florence Boot Hall"></td>
    </tr>

    <tr>
      <th scope="row"><label for="City">City</label></th>
      <td><input type="text" class="form-control" id="City" value="Nottingham"></td>
    </tr>

    <tr>
      <th scope="row"><label for="County">County</label></th>
      <td>

      <select class="custom-select">
      <option value=""></option>
      <option value="Bath and North East Somerset">Bath and North East Somerset</option>
      <option value="Bedfordshire">Bedfordshire</option>
      <option value="Berkshire">Berkshire</option>
      <option value="Bristol">Bristol</option>
      <option value="Buckinghamshire">Buckinghamshire</option>
      <option value="Cambridgeshire">Cambridgeshire</option>
      <option value="Cheshire">Cheshire</option>
      <option value="Cornwall">Cornwall</option>
      <option value="County Durham">County Durham</option>
      <option value="Cumbria">Cumbria</option>
      <option value="Derbyshire">Derbyshire</option>
      <option value="Devon">Devon</option>
      <option value="Dorset">Dorset</option>
      <option value="East Riding of Yorkshire">East Riding of Yorkshire</option>
      <option value="East Sussex">East Sussex</option>
      <option value="Essex">Essex</option>
      <option value="Gloucestershire">Gloucestershire</option>
      <option value="Greater London">Greater London</option>
      <option value="Greater Manchester">Greater Manchester</option>
      <option value="Hampshire">Hampshire</option>
      <option value="Herefordshire">Herefordshire</option>
      <option value="Hertfordshire">Hertfordshire</option>
      <option value="Isle of Wight">Isle of Wight</option>
      <option value="Isles of Scilly">Isles of Scilly</option>
      <option value="Kent">Kent</option>
      <option value="Lancashire">Lancashire</option>
      <option value="Leicestershire">Leicestershire</option>
      <option value="Lincolnshire">Lincolnshire</option>
      <option value="Merseyside">Merseyside</option>
      <option value="Norfolk">Norfolk</option>
      <option value="North Somerset">North Somerset</option>
      <option value="North Yorkshire">North Yorkshire</option>
      <option value="Northamptonshire">Northamptonshire</option>
      <option value="Northumberland">Northumberland</option>
      <option value="Nottinghamshire" selected>Nottinghamshire</option>
      <option value="Oxfordshire">Oxfordshire</option>
      <option value="Rutland">Rutland</option>
      <option value="Shropshire">Shropshire</option>
      <option value="Somerset">Somerset</option>
      <option value="South Gloucestershire">South Gloucestershire</option>
      <option value="South Yorkshire">South Yorkshire</option>
      <option value="Staffordshire">Staffordshire</option>
      <option value="Suffolk">Suffolk</option>
      <option value="Surrey">Surrey</option>
      <option value="Tyne & Wear">Tyne & Wear</option>
      <option value="Warwickshire">Warwickshire</option>
      <option value="West Midlands">West Midlands</option>
      <option value="West Sussex">West Sussex</option>
      <option value="West Yorkshire">West Yorkshire</option>
      <option value="Wiltshire">Wiltshire</option>
      <option value="Worcestershire">Worcestershire</option>
      </select>

      </td>
    </tr>

    <tr>
      <th scope="row"><label for="Postcode">Postcode</label></th>
      <td><input type="text" class="form-control" id="Postcode" value="NG7 2RD"></td>
    </tr>    

  </tbody>
</table>
</form>




### Primary action

<div id="buttons">
  <a class="btn btn-outline-secondary" href="{{page.previous}}">Cancel</a>
  <a class="btn btn-primary" type="submit" href="{{page.next}}">Save and continue</a>
</div>
