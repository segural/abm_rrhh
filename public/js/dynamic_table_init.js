function fnFormatDetails ( oTable, nTr)
{
    var aData = oTable.fnGetData( nTr );
    var sOut = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    sOut += '<tr><td>Orden de Compra:</td><td>'+aData[5]+'</td></tr>';
    sOut += '<tr><td>Aprob. de Impuestos:</td><td>'+aData[6]+'</td></tr>';
    sOut += '<tr><td>Sponsor(s) Asociado(s):</td><td>'+aData[7]+'</td></tr>';
    sOut += '</table>';

    return sOut;
    
}

$(document).ready(function() {

    $('#dynamic-table').dataTable( {
        "aaSorting": [[ 0, "desc" ]],
    } );
    $('#report-table').DataTable({
        autoWidth: false,
        columns: [
            { "width": "8%" },
            { "width": "6%" },
            { "width": "6%" },
            { "width": "6%" },
            { "width": "7%" },
            { "width": "5%" },
            { "width": "7%" },
            { "width": "15%" },
            { "width": "7%" },
            { "width": "6%" },
            { "width": "6%" },
            { "width": "8%" },
            { "width": "7%" },
            { "width": "6%" },
            { "width": "0%" },
            { "width": "0%" },
            { "width": "0%" },
        ],
        "dom": 'B<"float-right"f>t<"float-left"l><"float-right"p><"clearfix">',
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
        },
        "order": [[ 0, "desc" ]],
        "initComplete": function () {
            this.api().columns().every( function () {
                var that = this;

                $( 'input', this.footer() ).on( 'keyup change', function () {
                    if ( that.search() !== this.value ) {
                        that
                            .search( this.value )
                            .draw();
                        }
                });
            })
        }
    });
    $('#invoice-pending').dataTable( {
        "aaSorting": [[ 0, "asc" ]]
    } );
    $('#supplier-logs').dataTable( {
        "aaSorting": [[ 4, "desc" ]]
    } );
    $('#invoices-logs').dataTable( {
        "aaSorting": [[ 4, "desc" ]]
    } );
    $('#users-logs').dataTable( {
        "aaSorting": [[ 4, "desc" ]]
    } );

    /*
     * Insert a 'details' column to the table
     */
    var nCloneTh = document.createElement( 'th' );
    var nCloneTd = document.createElement( 'td' );
    nCloneTd.innerHTML = '<img src="/img/details_open.png">';
    nCloneTd.className = "center";

    $('#hidden-table-info thead tr').each( function () {
        this.insertBefore( nCloneTh, this.childNodes[0] );
    } );

    $('#hidden-table-info tbody tr').each( function () {
        this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
    } );

    /*
     * Initialse DataTables, with no sorting on the 'details' column
     */
    var oTable = $('#hidden-table-info').dataTable( {
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0 ] }
        ],
        "aaSorting": [[1, 'asc']]
    });

    /* Add event listener for opening and closing details
     * Note that the indicator for showing which row is open is not controlled by DataTables,
     * rather it is done here
     */
    $(document).on('click','#hidden-table-info tbody td img',function () {
        var nTr = $(this).parents('tr')[0];
        if ( oTable.fnIsOpen(nTr) )
        {
            /* This row is already open - close it */
            this.src = "/img/details_open.png";
            oTable.fnClose( nTr );
        }
        else
        {
            /* Open this row */
            this.src = "/img/details_close.png";
            oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
        }
    } );
} );