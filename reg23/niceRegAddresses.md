---
layout: registrationNice
title: "Addresses"
nav: "no"
sortTitle: "z"
previous: regPersonal.html
next: regContact.html
this: 5
---

## Addresses

Please check the details below and ensure we have both a term time and a home (outside of term time) address, even if they are the same.

If your term time address is local and you're eligible for a council tax exemption, this will enable us to inform your local authority.

<!-- v1
Please check the details below and ensure we have both a term time and home (outside of term time) address.

Please provide a term time address, even if it is the same as your home address.
-->

<h3>Term time address</h3>

<!-- CANT HAVE TEXT HERE
<p>Please provide a term time address, even if it is the same as your home address.</p>

<p>If your term time address is local and you're eligible for a council tax exemption, this will enable us to inform your local authority.</p>
-->

<a class="btn btn-outline-primary" href="#" ><i class="fas fa-plus-square"></i> Add term time address</a>

<div class="form-group form-check">
  <input type="checkbox" class="form-check-input" id="noTTAddress">
  <label class="form-check-label" for="noTTAddress">I don't yet know my term time address and will provide it later</label>
</div>

<!-- return to the Nottingham Hub after you have completed online registration and use the **Profile** tile to add your address -->

<h3>Home address</h3>
<!-- <p>ie your address outside of term time</p> -->

<table class="table table-striped notFullWidth">
  <thead>
    <tr>
      <th scope="col">Address </th>
      <th scope="col">From</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>123 Some Road,<br/>Edgbaston,<br/>Birmingham. BH7 2DD.</td>
      <td>Current</td>
      <td><a class="btn btn-outline-primary" href="#"><i class="fas fa-edit"></i> Edit</a></td>
    </tr>
    <tr>
      <td>56 New Road,<br/>Stratford,<br/>London. ST1 6GG.</td>
      <td>01/07/2022</td>
      <td><a class="btn btn-outline-primary" href="#"><i class="fas fa-edit"></i> Edit</a></td>
    </tr>
  </tbody>
</table>

<a class="btn btn-outline-primary" href="#" style="margin-bottom:1.5em"><i class="fas fa-plus-square"></i> Add new address</a>


<!--
<div id="buttons">
  <a class="btn btn-outline-secondary" href="{{page.previous}}">Cancel</a>
  <a class="btn btn-primary" type="submit" href="{{page.next}}">Save and continue</a>
</div>

----


<br/>
-->

<!-- Button trigger modal -->

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Continue
</button>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Term time address</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

<p>Please provide a term time address, even if it is the same as your home address.</p>

<p>If you are unable to provide an address now, then select the option to provide it later.</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>
