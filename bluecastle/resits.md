---
layout: bluecastle
title: "Resits"
bluecastlenav: "no"
sortTitle: "a"
css:
  - bluecastle.css
---

<div class="container">
  <div class="row">
    <!-- CONTENT -->
    <div class="col">

<h2>Resit opportunities</h2>

<div class="marksDivider">
 <h2>A: Row per failed element</h2>
 {% assign marks = site.data.bluecastlemarks-resitA  %}{% include bluecastleResits.html %}

 <p><i class="fas fa-star"></i> Supplementary exam covers multiple elements (eg one exam covers both exam and coursework).</p>
</div>

<div class="marksDivider">
 <h2>B: Row per resit (no elements)</h2>
 {% assign marks = site.data.bluecastlemarks-resitB  %}{% include bluecastleResitsB.html %}

 <p><i class="fas fa-star"></i> Supplementary exam covers multiple elements (eg one exam covers both exam and coursework).</p>
</div>

<div class="marksDivider">
 <h2>C: Row per resit (show failed elements)</h2>
 {% assign marks = site.data.bluecastlemarks-resitB  %}{% include bluecastleResits.html %}

 <p><i class="fas fa-star"></i> Supplementary exam covers multiple elements (eg one exam covers both exam and coursework).</p>
</div>


<div class="marksDivider">
 <h2>D: Row per resit (show failed elements) + attempt column</h2>
 {% assign marks = site.data.bluecastlemarks-resitD  %}{% include bluecastleResitsD.html %}

  <p><i class="fas fa-star"></i> Supplementary exam covers multiple elements (eg one exam covers both exam and coursework).</p>
</div>

<div class="marksDivider">
 <h2>E: Row per resit (show failed elements) + reorder columns</h2>
 {% assign marks = site.data.bluecastlemarks-resitD  %}{% include bluecastleResitsE.html %}

 <p><i class="fas fa-star"></i> Supplementary exam covers multiple elements (eg one exam covers both exam and coursework).</p>
</div>

    </div>
  </div>
</div>
