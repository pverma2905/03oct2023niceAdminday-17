"use client"
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import 'primeicons/primeicons.css';
// import { ProductService } from './service/ProductService';
export default function page() {
    const [products, setProducts] = useState([
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            description: 'Product Description',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Blue Band',
            description: 'Product Description',
            image: 'blue-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Blue T-Shirt',
            description: 'Product Description',
            image: 'blue-t-shirt.jpg',
            price: 29,
            category: 'Clothing',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'Bracelet',
            description: 'Product Description',
            image: 'bracelet.jpg',
            price: 15,
            category: 'Accessories',
            quantity: 73,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1005',
            code: 'av2231fwg',
            name: 'Brown Purse',
            description: 'Product Description',
            image: 'brown-purse.jpg',
            price: 120,
            category: 'Accessories',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1006',
            code: 'bib36pfvm',
            name: 'Chakra Bracelet',
            description: 'Product Description',
            image: 'chakra-bracelet.jpg',
            price: 32,
            category: 'Accessories',
            quantity: 5,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1007',
            code: 'mbvjkgip5',
            name: 'Galaxy Earrings',
            description: 'Product Description',
            image: 'galaxy-earrings.jpg',
            price: 34,
            category: 'Accessories',
            quantity: 23,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1008',
            code: 'vbb124btr',
            name: 'Game Controller',
            description: 'Product Description',
            image: 'game-controller.jpg',
            price: 99,
            category: 'Electronics',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 4
        },
        {
            id: '1009',
            code: 'cm230f032',
            name: 'Gaming Set',
            description: 'Product Description',
            image: 'gaming-set.jpg',
            price: 299,
            category: 'Electronics',
            quantity: 63,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1010',
            code: 'plb34234v',
            name: 'Gold Phone Case',
            description: 'Product Description',
            image: 'gold-phone-case.jpg',
            price: 24,
            category: 'Accessories',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1011',
            code: '4920nnc2d',
            name: 'Green Earbuds',
            description: 'Product Description',
            image: 'green-earbuds.jpg',
            price: 89,
            category: 'Electronics',
            quantity: 23,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1012',
            code: '250vm23cc',
            name: 'Green T-Shirt',
            description: 'Product Description',
            image: 'green-t-shirt.jpg',
            price: 49,
            category: 'Clothing',
            quantity: 74,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1013',
            code: 'fldsmn31b',
            name: 'Grey T-Shirt',
            description: 'Product Description',
            image: 'grey-t-shirt.jpg',
            price: 48,
            category: 'Clothing',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 3
        },
        {
            id: '1014',
            code: 'waas1x2as',
            name: 'Headphones',
            description: 'Product Description',
            image: 'headphones.jpg',
            price: 175,
            category: 'Electronics',
            quantity: 8,
            inventoryStatus: 'LOWSTOCK',
            rating: 5
        },
        {
            id: '1015',
            code: 'vb34btbg5',
            name: 'Light Green T-Shirt',
            description: 'Product Description',
            image: 'light-green-t-shirt.jpg',
            price: 49,
            category: 'Clothing',
            quantity: 34,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1016',
            code: 'k8l6j58jl',
            name: 'Lime Band',
            description: 'Product Description',
            image: 'lime-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 12,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1017',
            code: 'v435nn85n',
            name: 'Mini Speakers',
            description: 'Product Description',
            image: 'mini-speakers.jpg',
            price: 85,
            category: 'Clothing',
            quantity: 42,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1018',
            code: '09zx9c0zc',
            name: 'Painted Phone Case',
            description: 'Product Description',
            image: 'painted-phone-case.jpg',
            price: 56,
            category: 'Accessories',
            quantity: 41,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1019',
            code: 'mnb5mb2m5',
            name: 'Pink Band',
            description: 'Product Description',
            image: 'pink-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 63,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1020',
            code: 'r23fwf2w3',
            name: 'Pink Purse',
            description: 'Product Description',
            image: 'pink-purse.jpg',
            price: 110,
            category: 'Accessories',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1021',
            code: 'pxpzczo23',
            name: 'Purple Band',
            description: 'Product Description',
            image: 'purple-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 6,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1022',
            code: '2c42cb5cb',
            name: 'Purple Gemstone Necklace',
            description: 'Product Description',
            image: 'purple-gemstone-necklace.jpg',
            price: 45,
            category: 'Accessories',
            quantity: 62,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1023',
            code: '5k43kkk23',
            name: 'Purple T-Shirt',
            description: 'Product Description',
            image: 'purple-t-shirt.jpg',
            price: 49,
            category: 'Clothing',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 5
        },
        {
            id: '1024',
            code: 'lm2tny2k4',
            name: 'Shoes',
            description: 'Product Description',
            image: 'shoes.jpg',
            price: 64,
            category: 'Clothing',
            quantity: 0,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1025',
            code: 'nbm5mv45n',
            name: 'Sneakers',
            description: 'Product Description',
            image: 'sneakers.jpg',
            price: 78,
            category: 'Clothing',
            quantity: 52,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1026',
            code: 'zx23zc42c',
            name: 'Teal T-Shirt',
            description: 'Product Description',
            image: 'teal-t-shirt.jpg',
            price: 49,
            category: 'Clothing',
            quantity: 3,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1027',
            code: 'acvx872gc',
            name: 'Yellow Earbuds',
            description: 'Product Description',
            image: 'yellow-earbuds.jpg',
            price: 89,
            category: 'Electronics',
            quantity: 35,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1028',
            code: 'tx125ck42',
            name: 'Yoga Mat',
            description: 'Product Description',
            image: 'yoga-mat.jpg',
            price: 20,
            category: 'Fitness',
            quantity: 15,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1029',
            code: 'gwuby345v',
            name: 'Yoga Set',
            description: 'Product Description',
            image: 'yoga-set.jpg',
            price: 20,
            category: 'Fitness',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 8
        }
    ]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const dt = useRef(null);
    const cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];
    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }))

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        name: { value: null, matchMode: FilterMatchMode.IN },
        category: { value: null, matchMode: FilterMatchMode.EQUALS },
        quantity: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },

            code: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },

            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.IN }] },

            category: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },

            quantity: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },

        });
        setGlobalFilterValue('');
    };

    useEffect(() => {
        //ProductService.getProductsMini().then(data => setProducts(data));
        initFilters();
    }, []);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    // const header = renderHeader();
    const header = (
        <>
            <div className="flex float-end align-items-center justify-content-end gap-2">
                <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />

            </div>
            {renderHeader()}
        </>
    );
    return (
        <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />
            <DataTable
                value={products} ref={dt} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} dataKey="id" header={header} emptyMessage="No customers found." tableStyle={{ minWidth: '50rem' }}
                filters={filters} filterDisplay="row" globalFilterFields={['code', 'name', 'category', 'quantity']}>
                <Column field="code" sortable header="Code"
                    // filter
                    filterPlaceholder="Search by code"
                    style={{ minWidth: '12rem' }}></Column>
                <Column field="name" sortable header="Name"
                    //filter 
                    filterPlaceholder="Search by name"
                    style={{ minWidth: '12rem' }}></Column>
                <Column field="category" sortable header="Category"
                    //filter 
                    filterPlaceholder="Search by category"
                    style={{ minWidth: '12rem' }}></Column>
                <Column field="quantity" sortable header="Quantity"
                    // filter 
                    filterPlaceholder="Search by quantity"
                    style={{ minWidth: '12rem' }}></Column>
            </DataTable>
        </div>
    )
}
