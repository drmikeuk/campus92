---
layout: awc
title: "My Students"
nav: "no"
back: "Back"
backurl: "home.html"
page: listExams
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/awc.js
---

{% assign students = site.data.awc2000 %}
{% include awc-resultslist.html %}
