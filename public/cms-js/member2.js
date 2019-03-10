
var datatable = $('#grvResult').DataTable({
    scrollY: 400,
    scrollX: true,
    scrollCollapse: true,
    select: true,
    dom: 'Bfrtip',
    buttons: [
        {
            extend: 'excelHtml5',
        }
    ],
    ajax: {
        dataType: "json",
        url: "/cms/getMemberTeam",
        data: function (d) {
        },
        error: function (err) {
            if (err.responseText == 'Unauthorized') {
                alert("Bạn đã bị time out");
                window.location.href = '/cms';
            }
        },
        dataSrc: ""
    },
    /*columnDefs: [
        {
            targets: [3],
            visible: false
        }
    ],*/
    columns: [
        { data: 'Name', defaultContent: "" },
        /*{
            data: 'Url1', render: function (data, type, row, meta) {
                return data !== undefined ? '<img class="img-responsive center-block img-rounded" alt="Responsive image" src="' + data + '" height="200" width="200">' : '';
            }
        },*/
        {
            data: 'InsertDate', render: function (data, type, row, meta) {
                return formatDateDetail1(data);
            }
        },
        { data: 'AvatarUrl', defaultContent: "" }
        //{
        //    data: 'Name', render: function (data, type, row, meta) {
        //        return '<a href="#" onclick="ShowDetail(' + row._id + ')">' + data + '</a>';
        //    }
        //},        
        //,
        //{ data: 'Name', defaultContent: "" },
        //{ data: 'Provincial', defaultContent: "" },
        //{ data: 'District', defaultContent: "" },
        //{ data: 'Ward', defaultContent: "" },
        //{ data: 'Phone', defaultContent: "" },
        //{ data: 'Email', defaultContent: "" },
        //{
        //    data: 'BlockStatus', render: function (data, type, row, meta) {
        //        return data === "ACTIVE" ? "Đã duyệt" : "Chưa duyệt";
        //    }
        //}
    ]
});





