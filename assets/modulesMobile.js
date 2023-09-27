$(document).ready( function () {
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        // "dom": '<"controls"fip>t<"controlsbottom"ip>',   /* ie display info, pagination, table */
        // 2rows: "dom": '<"row"<"col"f>><"row"<"col right"p>>t<"row"<"col"i>><"row"<"col right"p>>',
        "dom": '<"row"<"col"f><"col right"p>>t<"row"<"col"i>><"row"<"col right"p>>',
        //"buttons": ['copy', 'csv'],
        "language": { "info": "_START_ to _END_ of _TOTAL_ modules",
                      "infoFiltered":   "(filtered from _MAX_)",
                       "search": "Filter:" }
        //,
        //"columnDefs": [ { "targets": 4, "orderable": false } ]
      });


} );
