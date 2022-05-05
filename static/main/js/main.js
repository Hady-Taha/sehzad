if (window.location.pathname == "/") {
    let today = new Date();
    let date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    document.getElementsByClassName("date")[0].innerHTML = date
}

let value = $(".value");
let plus = $(".plus");
let mins = $(".mins");
let deletCart = $(".deletCart");

for (let p = 0; p < plus.length; p++) {
    const element = plus[p];
    $(element).on("click", function () {
        $(value[p]).attr("value", parseFloat($(value[p]).attr("value")) + parseFloat($(value[p]).attr("data-upTo")));
        data = {
            productId: $(value[p]).attr("data-productId"),
            quantity: $(value[p]).attr("value"),
            add: "add",
        }
        send_data(data, window.location.href, (res) => {

            $(".total").text(res.total)
            $(".countCart").text(res.cartCount)

            if (res.inCart) {
                let comp = `<h5 id="itemsId${res.data.product.id}"class="item d-flex justify-content-start align-items-center">${res.data.product.title}<span class="btn btn-lg deletCart ms-1" data-productId="${res.data.product.id}"><i class="bi bi-x-square-fill text-danger" style="font-size: larger;"></i></span></h5>`
                $(".itemsCart").prepend(comp)
            }

        });
    });
}


for (let m = 0; m < mins.length; m++) {
    const element = mins[m];
    $(element).on("click", function () {
        $(value[m]).attr("value", parseFloat($(value[m]).attr("value")) - parseFloat($(value[m]).attr("data-upTo")));
        data = {
            productId: $(value[m]).attr("data-productId"),
            quantity: $(value[m]).attr("value"),
            mins: "mins"
        }
        if (parseFloat($(value[m]).attr("value")) <= 0.0) {
            $(value[m]).attr("value", 0);
        }
        send_data(data, window.location.href, (res) => {
            $(".countCart").text(res.cartCount)
            $(".total").text(res.total)
            if (res.data.quantity == 0) {
                $(`#itemsId${res.data.product.id}`).remove();
            }
        });
    });
}

//استخدمت الطريقة دي عشان لما احط عنصر جديد الزرار يشتغل
$('body').on('click', '.deletCart', function () {

    data = {
        productId: $(this).attr("data-productId"),
        deletCart: "deletCart"
    }
    send_data(data, window.location.href, (res) => {
        $(".countCart").text(res.cartCount)
        $(".total").text(res.total)
        $(`#itemsId${res.data.product.id}`).remove();
        $(`[data-productId="${res.data.product.id}"]`).attr('value', 0);
    });
});




$(".Redeem").on("click", function (e) {

    e.preventDefault();
    var data = {
        PromoCode: "PromoCode",
        poromoText: $(".poromoText")[0].value,
    };
    send_data(data, window.location.href, (res) => {
        $("#codeing").attr("value", data.poromoText);
        let new_price = res.price.toFixed(2);
        $(".total_price").text(new_price);
        if (res.message == false) {
            $(".poromoText").addClass("is-invalid");
        } else {
            $(".poromoText").addClass("is-valid");
            $(".poromoText").attr("disabled", "");
            $(".poromoText").removeClass("is-invalid");
        }
    });
});


$('#id_region').on('change', function () {
    if (this.value) {
        var data = {
            id_region: this.value,
        };
        send_data(data, window.location.href, (res) => {
            let region_price = parseFloat(res.region_price)
            let price = parseFloat(res.price)
            $(".region_price").text(region_price)
            $(".region_price").addClass("text-dark");
            $(".price_and_region").text(region_price + price)
        });
    }
});




setTimeout(function () {
    let checkout_btn = $("#checkout_btn")
    checkout_btn.removeClass("disabled btn-secondary");
    checkout_btn.addClass("btn-success")
    checkout_btn.text("اتم عملية الشراء");
}, 4000)







//دي الطريقة القديمة بتنقع للحاجت اللي مش بتعوز شغل live
// for (let d = 0; d < deletCart.length; d++) {
//     const element = deletCart[d];
//     $(element).on("click", function () {

//         data = {
//             productId: $(this).attr("data-productId"),
//             deletCart: "deletCart"
//         }
//         send_data(data, window.location.href, (res) => {
//             $(".total").text(res.total)
//             $(`#itemsId${res.data.product.id}`).remove();
//             document.querySelector(`[data-productId="${res.data.product.id}"]`).value = 0
//         });
//     });
// }