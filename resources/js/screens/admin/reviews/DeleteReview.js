import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../admin.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../../actions/reviewActions";

const DeleteReview = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const reviewDelete = useSelector((state) => state.reviewDelete);
    const { loading, success, error } = reviewDelete;

    useEffect(() => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can't recover this review after deletion!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            cancelButtonColor: "#d33",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(deleteReview(id));

                if (error && typeof error !== "undefined") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Something went wrong! [ERROR]: ${error}`,
                    });

                    setTimeout(function () {
                        window.location = "/admin/reviews";
                    }, 800);
                    return;
                }

                Swal.fire(
                    "Deleted!",
                    "If all went well, the review with the id " +
                        id +
                        " should be deleted.",
                    "success"
                );
                setTimeout(function () {
                    window.location = "/admin/reviews";
                }, 1200);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    "Cancelled",
                    `The selected review is safe, don't worry :)`,
                    "error"
                );

                setTimeout(function () {
                    window.location = "/admin/reviews";
                }, 800);
            }
        });
    }, [dispatch, error]);

    return (
        <>
            <div className="mainContainer"></div>
        </>
    );
};

export default DeleteReview;
