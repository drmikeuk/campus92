---
layout: awcNoSide
title: "Module Review"
nav: "no"
back: "Back"
backurl: "module-agenda.html"
page: listTutees
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/module-agenda.js
---
<style>
h1 {padding: 12px 0}
.filters select {max-width:15em}
.table a { color: #007bff;}
#xxxDataTable input {width: 3em}
</style>

# Modules to approve

{% assign modules = site.data.module-agenda %}
{% include module-agenda-list.html %}
