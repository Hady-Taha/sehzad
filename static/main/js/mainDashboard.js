


let stock_check = $(".stock_check")
let stock = $(".stock")
let status_order = $(".order_status")

for (let check = 0; check < stock_check.length; check++) {
    const element = stock_check[check];
    $(element).on("change", function () {
        let data = {
            change_stock: "change_stock",
            product_id: $(this).val(),
        }
        send_data(data, window.location.href, )
    });

}



for (let order = 0; order < status_order.length; order++) {
    const element = status_order[order];
    $(element).change(function (e) { 
        e.preventDefault();
        
        let data = {
            change_status: "change_status",
            id_order:$(this).attr("data-id_order"),
            order_status: $(this).val(),

        }
        send_data(data, window.location.href, )
        
    });
}




$(document).ready(function () {
    $('#example').DataTable();
});

$(document).ready(function () {
    $('#example2').DataTable();
});
