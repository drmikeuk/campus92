---
layout: awcNoSide
title: "Student notes"
nav: "no"
back: "Back"
backurl: "home.html"
page: listTutees
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/studentnotes.js
---

{% assign students = site.data.awc150 %}
{% include studentnotes-addlist.html %}
