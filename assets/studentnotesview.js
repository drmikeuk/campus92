$(document).ready( function () {
    //alert("pause")
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //        "dom": '<"row filterRow"<"col col-md-auto search"f><"col col-md-auto"<"filters">><"col right"p>>t<"row"<"col"i><"col right"p>>',
        "dom": '<"row filterRow"<"col col-md-3 search"f><"col col-md-auto"<"filters">><"col right"p>><"row filterRow" <"col col-md-3"><"col col-md-auto"<"filters2">>>t<"row"<"col"i><"col right"p>>',
        // <"row filterRow" <"col col-md-auto"<"filters2">>>
        //"buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ notes",
                      "infoFiltered":   "(filtered from _MAX_)",
                      // hide instead "search": "Filter:",
                      search: "_INPUT_",
                      searchPlaceholder: "Filter ..." },
        // dont want its width calcs as incorrect and force wider table
        "autoWidth": false
      });

      //add dropdowns html to .filters
      var filtersCode = '<form class="form-inline extrafilters"> <label class="label mr-sm-2">Filter for:</label> <select class="form-control form-control-sm mr-sm-2" id="UGPG"> <option value="">UG/PG...</option> <option value="UG">UG</option> <option value="PGT">PGT</option> </select> <select class="form-control form-control-sm mr-sm-2" id="yos"> <option value="">Year...</option> <option value="1">Year 1</option> <option value="2">Year 2</option> <option value="3">Year 3</option> <option value="4">Year 4</option> </select>    &nbsp; Active students&nbsp;<label class="switch"><input type="checkbox" checked><span class="slider round"></span></label> Yes  </form> ';
      $('.filters').append(filtersCode);


      // add search action to UG/PG career select #UGPG
      $('#UGPG').on('change', function() {
        var career = $(this).val();
        //console.log ("Filter for UGPG: " + career);
        $('#DataTable').DataTable().column(2).search(career).draw();
      });

      // add search action to year select #yos
      $('#yos').on('change', function() {
        var year = $(this).val();
        //console.log ("Filter for year: " + year);
        $('#DataTable').DataTable().column(3).search(year).draw();
      });






} );
