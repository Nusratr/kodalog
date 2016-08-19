$(function () {
    $("#dragdrop").draggable({ containment: "window" });
    $("#dragdrop").click(function () {
        $(this).toggleClass('acik');
        $('#kodalog').toggleClass('acik');
    });
    console.log('evet!');
    console.log('ww!');
    $('#dragdrop').attr('data-sayi', $("#kodalog-ul li").length);
});