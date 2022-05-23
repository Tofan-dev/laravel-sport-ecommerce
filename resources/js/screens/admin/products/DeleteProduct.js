import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./deleteproduct.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../actions/productActions";

const DeleteProduct = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const productDelete = useSelector((state) => state.productDelete);
    const { loading, success, error } = productDelete;

    useEffect(() => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can't recover this product after deletion!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            cancelButtonColor: "#d33",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(deleteProduct(id));

                if (error && typeof error !== "undefined") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Something went wrong! [ERROR]: ${error}`,
                    });

                    setTimeout(function () {
                        window.location = "/admin/products";
                    }, 800);
                    return;
                }

                Swal.fire(
                    "Deleted!",
                    "The product with the id " + id + " has been deleted.",
                    "success"
                );
                setTimeout(function () {
                    window.location = "/admin/products";
                }, 800);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    "Cancelled",
                    `The selected product is safe, don't worry :)`,
                    "error"
                );

                setTimeout(function () {
                    window.location = "/admin/products";
                }, 800);
            }
        });
    }, [dispatch, error]);

    return (
        <>
            <div className="productDelete"></div>
        </>
    );
};

export default DeleteProduct;
