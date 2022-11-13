import { INavDashboard } from "./interfaces/INavDashboard";

export var arrayNavCadastros: INavDashboard[] = [
    {
        name: 'Suplementos',
        icon: 'bi bi-capsule',
        subMenu: [
            {
                name: 'Cadastrar Suplementos',
                path: ''
            },
            {
                name: 'Consultar Suplementos',
                path: ''
            }
        ]
    },
    {
        name: 'Produtos',
        icon: 'bi bi-inboxes-fill',
        subMenu: [
            {
                name: 'Cadastrar Produtos',
                path: '/dashboard/cadastrar-produto'
            },
            {
                name: 'Consultar Produtos',
                path: ''
            }
        ]
    },
    {
        name: 'Fornecedores',
        icon: 'bi bi-people-fill',
        subMenu: [
            {
                name: 'Cadastrar Fornecedores',
                path: ''
            },
            {
                name: 'Consultar Fornecedores',
                path: ''
            }
        ]
    },
    {
        name: 'Roupas',
        icon: 'bi bi-binoculars',
        subMenu: [
            {
                name: 'Cadastrar Roupas',
                path: ''
            },
            {
                name: 'Consultar Roupas',
                path: ''
            }
        ]
    },
    {
        name: 'Equipamentos',
        icon: 'bi bi-bicycle',
        subMenu: [
            {
                name: 'Cadastrar Equipamentos',
                path: ''
            },
            {
                name: 'Consultar Equipamentos',
                path: ''
            }
        ]
    },
]

export var arrayNavPerfis: INavDashboard[] = [
    {
        name: 'Admin',
        icon: 'bi bi-person-fill-gear',
        subMenu: [
            {
                name: 'Cadastrar Admin',
                path: ''
            },
            {
                name: 'Consultar Admin',
                path: ''
            }
        ]
    },
    {
        name: 'Clientes',
        icon: 'bi bi-person-vcard-fill',
        subMenu: [
            {
                name: 'Cadastrar Clientes',
                path: ''
            },
            {
                name: 'Consultar Clientes',
                path: ''
            }
        ]
    },
]