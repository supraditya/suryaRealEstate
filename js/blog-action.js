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
});