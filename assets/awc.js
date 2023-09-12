$(document).ready( function () {
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //        "dom": '<"row filterRow"<"col col-md-auto search"f><"col col-md-auto"<"filters">><"col right"p>>t<"row"<"col"i><"col right"p>>',
        "dom": '<"row filterRow"<"col col-md-3 search"f><"col col-md-auto"<"filters">><"col right"p>><"row filterRow" <"col col-md-3"><"col col-md-auto"<"filters2">>>t<"row"<"col"i><"col right"p>>',
        // <"row filterRow" <"col col-md-auto"<"filters2">>>
        //"buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ students",
                      "infoFiltered":   "(filtered from _MAX_)",
                      // hide instead "search": "Filter:",
                      search: "_INPUT_",
                      searchPlaceholder: "Filter this list..." },
        "columnDefs": [ { "targets": [5,7], "orderable": false } ]
      });

      //add year dropdowns html to .filters
      var filtersCode = '<form class="form-inline"> <label class="label mr-sm-2" for="year">Academic year:</label> <select class="form-control" id="year"> <option value="2022-23">2022-23</option> <option value="2021-22">2021-22</option> <option value="2021-22">2020-21</option> <option value="2021-22">2019-20</option> </select> </form>';
      $('.filters').append(filtersCode);

      //add extra dropdowns html to .filters2 (2nd row)
      var filtersCode = '<form class="form-inline extrafilters"> <label class="label mr-sm-2">Filter for:</label> <select class="form-control form-control-sm mr-sm-2" id="UGPG"> <option value="">UG/PG...</option> <option value="1">UG</option> <option value="2">PGT</option> <option value="3">PGR</option> </select> <select class="form-control form-control-sm mr-sm-2" id="yos"> <option value="">Year...</option> <option value="1">Year 1</option> <option value="2">Year 2</option> <option value="3">Year 3</option> <option value="4">Year 4</option> </select> <select class="form-control form-control-sm mr-sm-2" id="course"> <option value="">Course...</option> <option value="1">BA Hons Geography with Business</option> <option value="2">BSc Hons Agricultural Business Management</option> <option value="3">BSc Hons Accounting and Business</option> <option value="4">MSc Business and Management</option> <option value="5">MBA Business Administration</option> <option value="6">MSc International Business</option> </select> <select class="form-control form-control-sm mr-sm-2" id="course"> <option value="">Tutor...</option> <option value="1">Andrew Allen</option> <option value="2">Kate Beard</option> <option value="3">Kevin Berry</option> <option value="4">Susan Burke</option> <option value="5">Allison Chan</option> <option value="6">Simon Chew</option> <option value="7">Joshua Clarke</option> <option value="8">Frances Coady</option> <option value="9">Patricia Collins</option> </select> <select class="form-control form-control-sm mr-sm-2" id="flags"> <option value="">Flags...</option> <option value="1">Support plan</option> <option value="2">Mobility</option> <option value="3">etc</option> <option value="4">etc</option> </select> </form>';
      $('.filters2').append(filtersCode);




      // run photogrid filter from filter box
      // keyup so do as typing + onsearch so runs if click X
      $("#filter").on("keyup search", function() {
        var value = $(this).val().toLowerCase();
        //console.log(value);
        $("#photogrid .card").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });


} );
