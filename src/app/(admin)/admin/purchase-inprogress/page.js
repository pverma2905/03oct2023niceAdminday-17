'use client'
import DataTable from 'react-data-table-component';
// import React, { useState, useMemo } from 'react';

export default function Home() {

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'FK Account',
            selector: row => row.fk_account,
            sortable: true,
        },
        {
            name: 'Product Link',
            selector: row => row.product_link,
            sortable: true,
        },
        {
            name: 'CC Holder Name',
            selector: row => row.cc_holder_name,
            sortable: true,
        },
        {
            name: 'CC Account',
            selector: row => row.cc_account,
            sortable: true,
        },
        {
            name: 'Gift Amount',
            selector: row => row.gift_amount,
            sortable: true,
        },
        {
            name: 'TSX Amount',
            selector: row => row.tsx_amount,
            sortable: true,
        },
        {
            name: 'Final Price',
            selector: row => row.final_price,
            sortable: true,
        },
        {
            name: 'GiftCard Otp',
            selector: row => row.gift_otp,
            sortable: true,
        },
        {
            name: 'Purchase OTP',
            selector: row => row.purchase_otp,
            sortable: true,
        },
        {
            name: 'Remark',
            selector: row => row.remark,
            sortable: true,
        },
        {
            name: 'Purchase Started At',
            selector: row => row.purchase_start_at,
            sortable: true,
        },
        {
            name: 'Status',
            // button: true,
            cell: (row) => (
                <button
                    className="btn btn-success btn-xs"
                    onClick={(e) => handleButtonClick(e, row.id)}
                >
                    Pending
                </button>
            )
        },
        {
            name: 'Action',
            // button: true,
            cell: (row) => (
                <button
                    className="btn btn-danger btn-xs"
                    onClick={(e) => handleButtonClick(e, row.id)}
                >
                    Delete
                </button>
            )
        }

    ];

    const data = [

        {
            id: 1,
            fk_account: 'pranav-1111111111',
            product_link: 'EYEBOGLER Round Neck Full Sleeve Striped T Shirt for Men',
            cc_holder_name: 'PRANAV VERMA',
            cc_account: '6666 6788 5678 8996',
            gift_amount: '500',
            tsx_amount: '1000',
            final_price: '1500',
            gift_otp: '123456',
            purchase_otp: '123456',
            remark: 'This Product Is purchased',
            purchase_start_at: 'Mon, 02 Oct 2023 04:40:53 GMT',
            status: '',
            action: ''
        },
        {
            id: 1,
            fk_account: 'pranav-1111111111',
            product_link: 'EYEBOGLER Round Neck Full Sleeve Striped T Shirt for Men',
            cc_holder_name: 'PRANAV VERMA',
            cc_account: '6666 6788 5678 8996',
            gift_amount: '500',
            tsx_amount: '1000',
            final_price: '1500',
            gift_otp: '123456',
            purchase_otp: '123456',
            remark: 'This Product Is purchased',
            purchase_start_at: 'Mon, 02 Oct 2023 04:40:53 GMT',
            status: '<span class="badge bg-secondary">Pending</span>',
            action: '<button class="badge bg-danger">Delete</button>'
        },
        {
            id: 1,
            fk_account: 'pranav-1111111111',
            product_link: 'EYEBOGLER Round Neck Full Sleeve Striped T Shirt for Men',
            cc_holder_name: 'PRANAV VERMA',
            cc_account: '6666 6788 5678 8996',
            gift_amount: '500',
            tsx_amount: '1000',
            final_price: '1500',
            gift_otp: '123456',
            purchase_otp: '123456',
            remark: 'This Product Is purchased',
            purchase_start_at: 'Mon, 02 Oct 2023 04:40:53 GMT',
            status: '<span class="badge bg-secondary">Pending</span>',
            action: '<button class="badge bg-danger">Delete</button>'
        },
        {
            id: 1,
            fk_account: 'pranav-1111111111',
            product_link: 'EYEBOGLER Round Neck Full Sleeve Striped T Shirt for Men',
            cc_holder_name: 'PRANAV VERMA',
            cc_account: '6666 6788 5678 8996',
            gift_amount: '500',
            tsx_amount: '1000',
            final_price: '1500',
            gift_otp: '123456',
            purchase_otp: '123456',
            remark: 'This Product Is purchased',
            purchase_start_at: 'Mon, 02 Oct 2023 04:40:53 GMT',
            status: '<span class="badge bg-secondary">Pending</span>',
            action: '<button class="badge bg-danger">Delete</button>'
        },
        {
            id: 1,
            fk_account: 'pranav-1111111111',
            product_link: 'EYEBOGLER Round Neck Full Sleeve Striped T Shirt for Men',
            cc_holder_name: 'PRANAV VERMA',
            cc_account: '6666 6788 5678 8996',
            gift_amount: '500',
            tsx_amount: '1000',
            final_price: '1500',
            gift_otp: '123456',
            purchase_otp: '123456',
            remark: 'This Product Is purchased',
            purchase_start_at: 'Mon, 02 Oct 2023 04:40:53 GMT',
            status: '<span class="badge bg-secondary">Pending</span>',
            action: '<button class="badge bg-danger">Delete</button>'
        },
        {
            id: 1,
            fk_account: 'pranav-1111111111',
            product_link: 'EYEBOGLER Round Neck Full Sleeve Striped T Shirt for Men',
            cc_holder_name: 'PRANAV VERMA',
            cc_account: '6666 6788 5678 8996',
            gift_amount: '500',
            tsx_amount: '1000',
            final_price: '1500',
            gift_otp: '123456',
            purchase_otp: '123456',
            remark: 'This Product Is purchased',
            purchase_start_at: 'Mon, 02 Oct 2023 04:40:53 GMT',
            status: '<span class="badge bg-secondary">Pending</span>',
            action: '<button class="badge bg-danger">Delete</button>'
        },


    ]

    return (
        <>
            <section className="section dashboard">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <DataTable showLabel={true}
                                columns={columns}
                                data={data}
                                selectableRows
                                pagination
                            />
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
