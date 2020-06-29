$(document).ready(function() {
    $(".delete-icon").click(function() {
        swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this article.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "The article has been deleted.",
                        icon: "success",
                    });
                }
            });
    });
    $(".signout-icon").click(function() {
        swal({
                title: "Are you sure you want to Log Out?",
                text: "You will be redirected back to the Admin Login page",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "You have successfully been logged out",
                        icon: "success",
                    });
                }
            });

    });
});