
        $(document).ready(function () {
            // Add down arrow icon for collapse element which is open by default
            $(".collapse.show").each(function () {
                $(this).prev(".question").find("img").attr('src', "image/arrow-down.png");
            });

            // Toggle right and down arrow icon on show hide of collapse element
            $('.btn-col').on('click', function () {
                if ($(this).parent().parent().find(".collapse.show").length) {
                    $(this).children('img').attr('src', "image/arrow-right.png");
                } else {
                    $(this).children('img').attr('src', "image/arrow-down.png");
                }
            });

            $(".customer").click(function () {
                $(".for-service").css("display", "none");
                $(".for-customer").css("display", "block");
                $(this).addClass("active");
                $(".serviceprovider").removeClass("active");
            });
            $(".serviceprovider").click(function () {
                $(".for-service").css("display", "block");
                $(".for-customer").css("display", "none");
                $(this).addClass("active");
                $(".customer").removeClass("active");
            });

            $(".question").click(function () {
                if (!$(this).parent().find(".faq-answer").hasClass("show")) {
                    const answerlist = document.getElementsByClassName("answer")
                    for (var i = -1; i < answerlist.length; i++) {
                        answerlist[i].classList.remove("show");
                        questionlist[i].querySelector("button").setAttribute("aria-expanded", "false");
                    }
                } else {
                    $(this).find("button").attr("aria-expanded", "true");
                }
            });
        });
