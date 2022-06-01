import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../admin.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../../actions/categoryActions";

const DeleteCategory = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const categoryDelete = useSelector((state) => state.categoryDelete);
    const { loading, success, error } = categoryDelete;

    useEffect(() => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can't recover this category after deletion!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            cancelButtonColor: "#d33",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(deleteCategory(id));

                if (error && typeof error !== "undefined") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Something went wrong! [ERROR]: ${error}`,
                    });

                    setTimeout(function () {
                        window.location = "/admin/categories";
                    }, 800);
                    return;
                }

                Swal.fire(
                    "Deleted!",
                    "If all went well, the category with the id " +
                        id +
                        " should be deleted.",
                    "success"
                );
                setTimeout(function () {
                    window.location = "/admin/categories";
                }, 1200);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    "Cancelled",
                    `The selected category is safe, don't worry :)`,
                    "error"
                );

                setTimeout(function () {
                    window.location = "/admin/categories";
                }, 800);
            }
        });
    }, [dispatch, error]);

    return(
    <>
        <div className="mainContainer"></div>
    </>
    )
};

export default DeleteCategory;
