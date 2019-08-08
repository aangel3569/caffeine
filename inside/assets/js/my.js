$(function () {

    var arr = ["u1/U1-1.png", "u1/U1-2.png", "u1/U1-3.png", "u1/U1-4.png", "u1/U1-5.png", "u1/U1-6.png"]
    var src = $(".classp").attr("src");
    var index = arr.indexOf(src);

    $(".a2").click(function () {

        if (index < 5) {
            index += 1;
            $(".classp").fadeOut(function () {
                $(".classp").attr("src", arr[index]);
            });
            $(".classp").fadeIn();
        }

    });

    $(".a1").click(function () {

        if (index > 0) {
            index -= 1;
            $(".classp").fadeOut(function () {
                $(".classp").attr("src", arr[index]);
            });
            $(".classp").fadeIn();
        }
        
    });

});