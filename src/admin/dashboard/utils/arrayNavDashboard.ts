import { INavDashboard } from "./interfaces/INavDashboard";

export const arrayNavCadastros: INavDashboard[] = [
    {
        name: "Fornecedores",
        icon: "bi bi-people-fill",
        subMenu: [
            {
                name: "Cadastrar Fornecedores",
                path: "/dashboard/cadastrar-fornecedor"
            },
            {
                name: "Consultar Fornecedores",
                path: "/dashboard/consultar-fornecedores"
            }
        ]
    },
    {
        name: "Produtos",
        icon: "bi bi-inboxes-fill",
        subMenu: [
            {
                name: "Cadastrar Produtos",
                path: "/dashboard/cadastrar-produto"
            },
            {
                name: "Consultar Produtos",
                path: "/dashboard/consultar-produtos"
            }
        ]
    },
    {
        name: "Suplementos",
        icon: "bi bi-capsule",
        subMenu: [
            {
                name: "Cadastrar Suplementos",
                path: "/dashboard/cadastrar-produto/?categoria=suplemento"
            },
            {
                name: "Consultar Suplementos",
                path: "/dashboard/consultar-produtos/?categoria=suplemento"
            }
        ]
    },
    {
        name: "Roupas",
        icon: "bi bi-binoculars",
        subMenu: [
            {
                name: "Cadastrar Roupas",
                path: "/dashboard/cadastrar-produto/?categoria=roupa"
            },
            {
                name: "Consultar Roupas",
                path: "/dashboard/consultar-produtos/?categoria=roupa"
            }
        ]
    },
    {
        name: "Calçado",
        icon: "",
        subMenu:[
            {
                name: "Cadastrar Calçado",
                path: "/dashboard/cadastrar-produto/?categoria=calcado"
            },
            {
                name: "Consultar Calçados",
                path: "/dashboard/consultar-produtos/?categoria=calcado"
            }
        ]

    },
    {
        name: "Equipamentos",
        icon: "bi bi-bicycle",
        subMenu: [
            {
                name: "Cadastrar Equipamentos",
                path: "/dashboard/cadastrar-produto/?categoria=equipamento"
            },
            {
                name: "Consultar Equipamentos",
                path: "/dashboard/consultar-produtos/?categoria=equipamento"
            }
        ]
    },
];

export const arrayNavPerfis: INavDashboard[] = [
    {
        name: "Admin",
        icon: "bi bi-person-fill-gear",
        subMenu: [
            {
                name: "Cadastrar Admin",
                path: "/dashboard/cadastrar-admin"
            },
            {
                name: "Consultar Admin",
                path: "/dashboard/consultar-admin"
            },
        ]
    },
    // {
    //     name: 'Clientes',
    //     icon: 'bi bi-person-vcard-fill',
    //     subMenu: [
    //         {
    //             name: 'Cadastrar Clientes',
    //             path: ''
    //         },
    //         {
    //             name: 'Consultar Clientes',
    //             path: ''
    //         }
    //     ]
    // },
];