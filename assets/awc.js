$(document).ready( function () {
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //"dom": '<"controls"fip>t<"controlsbottom"ip>',   /* ie display info, pagination, table */
        "dom": '<"row"<"col col-md-auto"f><"col col-md-auto"<"filters">><"col right"p>>t<"row"<"col"i><"col right"p>>',
        //"buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ students",
                      "infoFiltered":   "(filtered from _MAX_)",
                      // hide instead "search": "Filter:",
                      search: "_INPUT_",
                      searchPlaceholder: "Filter this list..." },
        "columnDefs": [ { "targets": [5,7], "orderable": false } ]
      });

      //add dropdowns html to .filters
      var filtersCode = '<form class="form-inline extrafilters"> <label class="label mr-sm-2">Filter for:</label> <select class="form-control-sm mr-sm-2" id="UGPG"> <option value="">UG/PG...</option> <option value="1">UG</option> <option value="2">PGT</option> <option value="3">PGR</option> </select> <select class="form-control-sm mr-sm-2" id="yos"> <option value="">Year...</option> <option value="1">Year 1</option> <option value="2">Year 2</option> <option value="3">Year 3</option> <option value="4">Year 4</option> </select> <select class="form-control-sm mr-sm-2" id="course"> <option value="">Course...</option> <option value="1">BA Hons Geography with Business</option> <option value="2">BSc Hons Agricultural Business Management</option> <option value="3">BSc Hons Accounting and Business</option> <option value="4">MSc Business and Management</option> <option value="5">MBA Business Administration</option> <option value="6">MSc International Business</option> </select> </form>';
      $('.filters').append(filtersCode);




      // run photogrid filter from filter box
      // keyup so do as typing + onsearch so runs if click X
      $("#filter").on("keyup search", function() {
        var value = $(this).val().toLowerCase();
        //console.log(value);
        $("#photos div").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });


} );
