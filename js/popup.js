const popup = $('.popupWrapper');
const closeIt = $('.popupClose');
const btn = $('.btn');


for (let i = 0; i < popup.length; i++) {
    $(popup[i]).hide()
    $(btn[i]).click(() => {
        $(popup[i]).fadeIn("slow");
    })

    $(closeIt).click(() => {
        $(popup[i]).fadeOut("slow");
    })

    // $(popup[i]).click((e) => {
    //     $(popup[i]).hide();
    // })
}