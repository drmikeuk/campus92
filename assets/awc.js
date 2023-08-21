$(document).ready( function () {
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //"dom": '<"controls"fip>t<"controlsbottom"ip>',   /* ie display info, pagination, table */
        "dom": '<"row"<"col"f><"col"<"filters">><"col right"p>>t<"row"<"col"i><"col right"p>>',
        //"buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ students",
                      "infoFiltered":   "(filtered from _MAX_)",
                      // hide instead "search": "Filter:",
                      search: "_INPUT_",
                      searchPlaceholder: "Filter this list..." },
        "columnDefs": [ { "targets": [5,7], "orderable": false } ]
      });

      // add dropdowns html to .filters
      //var filtersCode = 'stuff';
      //$('.filters').append(filtersCode);

} );
