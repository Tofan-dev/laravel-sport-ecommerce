import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./deleteSale.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteSale } from "../../../actions/saleActions";

const DeleteSale = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const saleDelete = useSelector((state) => state.saleDelete);
    const { loading, success, error } = saleDelete;

    useEffect(() => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can't recover this sale after deletion!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            cancelButtonColor: "#d33",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(deleteSale(id));

                if (error && typeof error !== "undefined") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Something went wrong! [ERROR]: ${error}`,
                    });

                    setTimeout(function () {
                        window.location = "/admin/sales";
                    }, 800);
                    return;
                }

                Swal.fire(
                    "Deleted!",
                    "If all went well, the sale with the id " +
                        id +
                        " should be deleted.",
                    "success"
                );
                setTimeout(function () {
                    window.location = "/admin/sales";
                }, 1200);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    "Cancelled",
                    `The selected sale is safe, don't worry :)`,
                    "error"
                );

                setTimeout(function () {
                    window.location = "/admin/sales";
                }, 800);
            }
        });
    }, [dispatch, error]);

    return (
        <>
            <div className="saleDelete"></div>
        </>
    );
};

export default DeleteSale;
