---
layout: awcNoSide
title: "PGR Supervisions"
nav: "no"
back: "Back"
backurl: "index.html"
page: listTutees
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/pgr-dashboard1.js
---
<style>
h1 {padding: 12px 0}
.filters select {max-width:15em}
.table a { color: #007bff;}
.table td, .table th { vertical-align: middle; }
#xxxDataTable input {width: 3em}
.green {padding-right: 0.2em; color: #005F36 /* uon Forest Green 8*/}
.amber {padding-right: 0.2em; color: #F98109/* uon Mandarin Orange  */}
.red   {padding-right: 0.2em; color: #B91C2E /* uon Jubilee Red */}
.grey   {padding-right: 0.2em; color: #9FA8B1 /* uon blue tint */}
</style>

# PGR supervision status

{% assign students = site.data.pgr-dashboard1test %}
{% include pgr-dashboard1-list.html %}
