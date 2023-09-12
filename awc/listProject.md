---
layout: awc
title: "My Students"
nav: "no"
back: "Back"
backurl: "home.html"
page: listProject
customcss:
  - /vendor/datatables.min.css
customjs:
  - /vendor/datatables.min.js
  - /assets/awc.js
---

{% assign students = site.data.awc35 | slice: 15,35 %}
{% include awc-resultslist.html %}
