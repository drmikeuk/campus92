$(document).ready( function () {
    $('#DataTable').DataTable({
        "pageLength": 50,
        // "order": [[ 3, 'des' ], [ 2, 'asc' ]],
        //"dom": '<"controls"fip>t<"controlsbottom"ip>',   /* ie display info, pagination, table */
        "dom": '<"row"<"col"f><"col"<"levels">><"col right"p>>t<"row"<"col"i><"col right"p>>',
        //"buttons": ['copy', 'csv'],
        "language": { "info": "Showing _START_ to _END_ of _TOTAL_ programmes",
                      "infoFiltered":   "(filtered from _MAX_)",
                       "search": "Filter:" },
        "columnDefs": [ { "targets": 5, "orderable": false } ]
      });

      // add buttons html to .levels
      var levelCode = '<label for="levelfilters" class="label">Level:</label><div class="btn-group btn-group-toggle" id="levelfilters" data-toggle="buttons"><label class="btn btn-outline-primary active" for="ALL"><input type="radio" name="level" id="ALL" value="ALL" autocomplete="off" checked=""> All</label><label class="btn btn-outline-primary" for="UG"><input type="radio" name="year" id="UG" value="1" autocomplete="off">Undergraduate</label><label class="btn btn-outline-primary" for="UG"><input type="radio" name="year" id="PG" value="1" autocomplete="off">Postgraduate</label></div>';
      $('.levels').append(levelCode);

} );
