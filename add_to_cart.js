(function() {
    // Vytvoření kontejnerového divu
    var container = document.createElement("div");
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.right = "20px";
    container.style.padding = "10px";
    container.style.backgroundColor = "white";
    container.style.border = "2px solid #ccc";
    container.style.borderRadius = "5px";
    container.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
    container.style.zIndex = "1000";

    // Vytvoření tlačítka
    var button = document.createElement("button");
    button.setAttribute("data-lb-action", "buy");
    button.setAttribute("rel", "nofollow");
    button.className = "btn btn-cart ajax";
    button.setAttribute("data-target", "/kosik?do=addProduct&id=1660802");
    button.setAttribute("data-nette-modal-tpl", "modal-basket-product-add");
    button.setAttribute("data-ga-track", '{"event":"elements","pageType":"detailProduct","blockOnPage":"product-detail-essential","blockName":"modal-basket-product-add","brand":"Apple"}');
    button.setAttribute("data-gtm-event", "add_to_cart");
    button.innerHTML = "<span>Vložit do košíku</span>";

    // Přidání tlačítka do divu
    container.appendChild(button);

    // Přidání divu na stránku
    document.body.appendChild(container);
})();
