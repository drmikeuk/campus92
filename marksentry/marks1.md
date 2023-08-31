---
layout: awcNoSide
title: "Marks entry"
nav: "no"
back: "Back"
backurl: "home.html"
page: listTutees
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/marks.js
---
<style>
#DataTable input {width: 3em}
</style>

# Module title etc

### Element table etc

{% assign students = site.data.marksentry %}
{% include marksentry-list.html %}
