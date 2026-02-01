frappe.ready(function () {

    document.title = "DCG ERP";

    setTimeout(() => {
        let brand = document.querySelector(".navbar-brand");
        if (brand) {
            brand.innerHTML = "<strong>DCG ERP</strong>";
        }
    }, 700);

});
