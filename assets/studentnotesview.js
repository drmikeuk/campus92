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








} );
