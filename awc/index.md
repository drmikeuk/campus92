---
layout: awcNoSide
title: "Nottingham Hub"
nav: "no"
css:
  - blueredwood7.css
  - 2extras.css
---
<div class="nuilpcont pt_homepage ">

  <!-- grid -->
  <div class="ps_box-group psc_layout nuitilegrid" gx="4.064" gy="3.081218274111675">
    <div class="ps_box-grid-div psc_grid-noheaderbar" >
      <div class="ps_box-gridc">
        <div class="ps_box-gridc-right">
          <div class="ps_box-grid">
            <div class="ps_grid-div ps_grid-body">

{% assign tiles = site.data.staff  %}
{% for tile in tiles %}
<!-- tile -->
<div class="ps_grid-row nuitile {{ tile.width }} rsz_h1 nuidflt {{ tile.class }}" tx="3.064" ty="1.0812182741116751" gx=".3.064." gy=".1.0812182741116751.">
<a href="home.html">
  <div class="ps_grid-cell">
    <div class="ps_box-group psc_layout psc_rowact nuilp" tabindex="0" draggable="true" role="link" droppable="true" aria-labelledby="PTNUI_LAND_REC_GROUPLET_LBL$1" aria-describedby="pt_dnd" onclick="#">

      <!-- label -->
      <div class="ps_groupleth">
        <span class="ps-label">{{ tile.title }}</span>
      </div>

      <!-- group  -->
      <div class="ps_box-grouplet">

        <!-- google material design icon -->
        <div class="ps_box-group psc_layout">
          <div class="ps_box-group psc_layout psc_tile_content  psc_tile_content-center psc_tile-box-img">
            <div class="ps_box-grouplet">

              <span class="material-icons-sharp">
              {{ tile.materialicon }}
              </span>

              {{ tile.text }}

            </div>
          </div>
        </div>

      </div> <!-- /group  -->

    </div> <!-- /nuilp  -->
  </div> <!-- /grid-cell  -->
</a>
</div> <!-- /tile  -->
{% endfor %}

            </div>
          </div>
        </div >
      </div >
		</div >
  </div >
	<!-- end grid -->

</div>