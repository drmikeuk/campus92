$(document).ready( function () {
    //alert("pause")
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
        "columnDefs": [ { "targets": [5,8], "orderable": false} ],
        // dont want its width calcs as incorrect and force wider table
        "autoWidth": false
      });

      //add year dropdowns html to .filters
      var filtersCode = '<form class="form-inline"> <label class="label mr-sm-2" for="year">Academic year:</label> <select class="form-control" id="year"> <option value="2022-23">2022-23</option> <option value="2021-22">2021-22</option> <option value="2021-22">2020-21</option> <option value="2021-22">2019-20</option> </select> </form>';
      $('.filters').append(filtersCode);

      //add extra dropdowns html to .filters2 (2nd row)
      var filtersCode = '<form class="form-inline extrafilters"> <label class="label mr-sm-2">Filter for:</label> <select class="form-control form-control-sm mr-sm-2" id="UGPG"> <option value="">UG/PG...</option> <option value="UG">UG</option> <option value="PGT">PGT</option> <option value="PGR">PGR</option> </select> <select class="form-control form-control-sm mr-sm-2" id="yos"> <option value="">Year...</option> <option value="1">Year 1</option> <option value="2">Year 2</option> <option value="3">Year 3</option> <option value="4">Year 4</option> </select> <select class="form-control form-control-sm mr-sm-2" id="course"> <option value="">Course...</option> <option value="Geography with Business">BA Hons Geography with Business</option> <option value="Agricultural Business Management">BSc Hons Agricultural Business Management</option> <option value="Accounting and Business">BSc Hons Accounting and Business</option> <option value="MSc Business and Management">MSc Business and Management</option> <option value="MBA Business and Management">MBA Business and Management</option> <option value="International Business">MSc International Business</option> </select> <select class="form-control form-control-sm mr-sm-2" id="tutor"> <option value="">Tutor...</option> <option value="Andrew Allen">Andrew Allen</option> <option value="Kate Beard">Kate Beard</option> <option value="Kevin Berry">Kevin Berry</option> <option value="Susan Burke">Susan Burke</option> <option value="Allison Chan">Allison Chan</option> <option value="Simon Chew">Simon Chew</option> <option value="Joshua Clarke">Joshua Clarke</option> <option value="Frances Coady">Frances Coady</option> <option value="Patricia Collins">Patricia Collins</option> </select> <select class="form-control form-control-sm mr-sm-2" id="flags"> <option value="">Flags...</option> <option value="supportPlan">Support plan</option> <option value="mobility">Mobility</option> <option value="">etc</option> <option value="">etc</option> </select> </form> ';
      $('.filters2').append(filtersCode);


      // add search action to UG/PG career select #UGPG
      $('#UGPG').on('change', function() {
        var career = $(this).val();
        //console.log ("Filter for UGPG: " + career);
        $('#DataTable').DataTable().column(3).search(career).draw();
      });

      // add search action to year select #yos
      $('#yos').on('change', function() {
        var year = $(this).val();
        //console.log ("Filter for year: " + year);
        $('#DataTable').DataTable().column(4).search(year).draw();
      });

      // add search action to course select #course
      $('#course').on('change', function() {
        var course = $(this).val();
        //console.log ("Filter for course: " + course);
        $('#DataTable').DataTable().column(1).search(course).draw();
      });

      // add search action to tutor select #tutor
      $('#tutor').on('change', function() {
        var tutor = $(this).val();
        //console.log ("Filter for tutor: " + tutor);
        $('#DataTable').DataTable().column(2).search(tutor).draw();
      });

      // add search action to flags select #flags
      $('#flags').on('change', function() {
        var flags = $(this).val();
        //console.log ("Filter for flags: " + flags);
        $('#DataTable').DataTable().column(7).search(flags).draw();
      });



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
