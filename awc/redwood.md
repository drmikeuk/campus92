---
layout: awcNoSide
title: "Redwood colours"
nav: "no"
back: "Back"
backurl: "home.html"
---

<h1>Redwood colours</h1>

{% assign colours = site.data.redwood %}
{% for colour in colours %}

<div style="width: 15em; height: 3em; padding: 0.5em; margin: 1em; background: {{colour.colour}}; float: left">
  <span style="font-size: 150%">{{ colour.id }}</span>
  {{ colour.colour }}
</div>

{% endfor %}
