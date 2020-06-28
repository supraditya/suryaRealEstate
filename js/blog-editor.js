$(document).ready(function() {
    $("#confirm-discard").click(function() {
        swal({
                title: "Are you sure?",
                text: "All your changes will be lost.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "This article edit has been discarded.",
                        icon: "success",
                    });
                }
            });
    });
    $("#confirm-save").click(function() {
        swal({
                title: "Confirm changes?",
                text: "Your changes to this article will be saved.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Changes Saved.",
                        icon: "success",
                    });
                }
            });

    });
});