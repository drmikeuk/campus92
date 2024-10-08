$(document).ready( function () {
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //"dom": '<"controls"fip>t<"controlsbottom"ip>',   /* ie display info, pagination, table */
        "dom": '<"row"<"col col-md-2"f><"col col-md-8"<"filters">><"col col-md-2 right"p>>t<"row"<"col"i><"col right"p>>',
        //"buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ students",
                      "infoFiltered":   "(filtered from _MAX_)",
                      // hide instead "search": "Filter:",
                      search: "_INPUT_",
                      searchPlaceholder: "Filter this list..." }
      });

      // add dropdowns html to .filters
      var filtersCode = '<form class="form-inline">  <label class="label mr-sm-2" for="year">Filter for:</label>    <select class="form-control form-control-sm mr-sm-2" id="Meeting">   <option value="">Meeting...</option>   <option value="Y">Met</option> <option value="N">No meeting</option> </select>  <select class="form-control form-control-sm mr-sm-2" id="Engagement">   <option value="">Engagement...</option>   <option value="meets">Meets expectations</option> <option value="concern">Cause for concern</option> </select>  <select class="form-control form-control-sm mr-sm-2" id="Progress"> <option value="">Progress...</option>   <option value="meets">Meets expectations</option> <option value="concern">Cause for concern</option> </select>  <select class="form-control form-control-sm mr-sm-2" id="FTPT"> <option value="">Full / part time...</option>   <option value="FT">Full time</option> <option value="PT">Part time</option> </select> </form>';
      $('.filters').append(filtersCode);

      // add search action to Meeting select #Meeting col5
      $('#Meeting').on('change', function() {
        var Meeting = $(this).val();
        console.log ("Filter for Meeting: " + Meeting);
        if (Meeting == "Y") {
          $('#DataTable').DataTable().column(5).search('^$',true,false).draw(); // ie empty
        } else if (Meeting == "N") {
          $('#DataTable').DataTable().column(5).search('^.+$',true,false).draw(); // ie any character
        } else {
          $('#DataTable').DataTable().column(5).search('',true,false).draw(); // ie ALL (empty / numeral)
        }
      });

      // add search action to Engagement select #Engagement col6
      $('#Engagement').on('change', function() {
        var Engagement = $(this).val();
        //console.log ("Filter for Engagement: " + Engagement);
        if (Engagement == "meets") {
          $('#DataTable').DataTable().column(6).search('^$',true,false).draw(); // ie empty
        } else if (Engagement == "concern") {
          $('#DataTable').DataTable().column(6).search('^.+$',true,false).draw(); // ie any character
        } else {
          $('#DataTable').DataTable().column(6).search('',true,false).draw(); // ie ALL (empty / numeral)
        }
      });

      // add search action to Progress select #Progress col7
      $('#Progress').on('change', function() {
        var Progress = $(this).val();
        //console.log ("Filter for Progress: " + Progress);
        if (Progress == "meets") {
          $('#DataTable').DataTable().column(7).search('^$',true,false).draw(); // ie empty
        } else if (Progress == "concern") {
          $('#DataTable').DataTable().column(7).search('^.+$',true,false).draw(); // ie any character
        } else {
          $('#DataTable').DataTable().column(7).search('',true,false).draw(); // ie ALL (empty / numeral)
        }
      });

      // add search action to FTPT select #FTPT col2
      $('#FTPT').on('change', function() {
        var FTPT = $(this).val();
        console.log ("Filter for FTPT: " + FTPT);
        if (FTPT == "FT") {
          $('#DataTable').DataTable().column(2).search('FT').draw();
        } else if (FTPT == "PT") {
          $('#DataTable').DataTable().column(2).search('Part').draw();
        } else {
          $('#DataTable').DataTable().column(2).search('',true,false).draw(); // ie ALL (FT/Part)
        }
      });
} );
