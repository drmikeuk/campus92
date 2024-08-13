$(document).ready( function () {
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //"dom": '<"controls"fip>t<"controlsbottom"ip>',   /* ie display info, pagination, table */
        "dom": '<"row"<"col col-md-2"f><"col col-md-8"<"filters">><"col col-md-2 right"p>>t<"row"<"col"i><"col right"p>>',
        //"buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ modules",
                      "infoFiltered":   "(filtered from _MAX_)",
                      // hide instead "search": "Filter:",
                      search: "_INPUT_",
                      searchPlaceholder: "Filter this list..." }
      });

      // add dropdowns html to .filters
      var filtersCode = '<form class="form-inline"> <label class="label mr-sm-2" for="year">Filter for:</label>   <select class="form-control form-control-sm mr-sm-2" id="level">  <option value="">Level...</option>  <option value="1">1</option>  <option value="2">2</option>  <option value="3">3</option>  <option value="4">4</option>  </select>   <select class="form-control form-control-sm mr-sm-2" id="core">  <option value="">Core...</option>  <option value="Y">Y</option>  <option value="N">N</option>  </select>   <select class="form-control form-control-sm mr-sm-2" id="changes">  <option value="">Changes...</option><option value="Assessment">Assessment</option>  <option value="Educational aims">Educational aims</option>  <option value="Learning outcomes">Learning outcomes</option>  <option value="Method and frequency of class">Method and frequency of class</option>  <option value="Summary of content">Summary of content</option>  <option value="Supplementary assessment">Supplementary assessment</option>  </select>    <select class="form-control form-control-sm" id="program">  <option value="">Program...</option><option value="BSc Pharmaceutical Sciences">BSc Pharmaceutical Sciences</option><option value="2BSc Pharmacology">BSc Pharmacology</option> <option value="BSc Pharmacology with Placement Year">BSc Pharmacology with Placement Year</option> <option value="MSc Drug Discovery">MSc Drug Discovery</option> </select> </form>';
      $('.filters').append(filtersCode);

      // add search action to Level select #level
      $('#level').on('change', function() {
        var level = $(this).val();
        //console.log ("Filter for level: " + level);
        $('#DataTable').DataTable().column(2).search(level).draw();
      });

      // add search action to core select #core
      $('#core').on('change', function() {
        var core = $(this).val();
        //console.log ("Filter for core: " + core);
        if (core == "N") {
          $('#DataTable').DataTable().column(3).search('^$',true,false).draw();
        } else{
          $('#DataTable').DataTable().column(3).search(core).draw();
        }

      });

      // add search action to changes select #changes
      $('#changes').on('change', function() {
        var changes = $(this).val();
        //console.log ("Filter for changes: " + changes);
        $('#DataTable').DataTable().column(7).search(changes).draw();
      });

      // add search action to program select #program
      $('#program').on('change', function() {
        var program = $(this).val();
        //console.log ("Filter for program: " + program);
        $('#DataTable').DataTable().column(6).search(program).draw();
      });
} );
