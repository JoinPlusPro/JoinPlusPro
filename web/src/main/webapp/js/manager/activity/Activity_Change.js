$(function(){
    $("#sidebar ul li:nth-child(7) a").hover(function(){
        $(this).css({
            "background-color":"rgb(78,84,101)"
        });
    },function(){
        $(this).css({
            "background-color":"rgb(78,84,101)"
        });
    });

    $("#change_through1").click(function(){
        $("#change_file1").click();
    });
    $("#photo_address1").focus(function(){
        $("#change_file1").click();
    });
    $("#change_file1").change(function(){
        $("#photo_address1").val($(this).val());
    });
    $("#change_through2").click(function(){
        $("#change_file2").click();
    });
    $("#photo_address2").focus(function(){
        $("#change_file2").click();
    });
    $("#change_file2").change(function(){
        $("#photo_address2").val($(this).val());
    });
    $("#change_through3").click(function(){
        $("#change_file3").click();
    });
    $("#photo_address3").focus(function(){
        $("#change_file3").click();
    });
    $("#change_file3").change(function(){
        $("#photo_address3").val($(this).val());
    });

    $(".choose").click(function(){
        if($(".choose").is(":checked")){
            $(".hidden").val("1");
        }
        else{
            $(".hidden").val("0");
        }
    });

})