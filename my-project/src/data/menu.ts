import { createRouter, createWebHistory } from 'vue-router'

const Rule = () => import('../modules/rule/Rule.vue')
const StruckControl = () => import('../modules/struckControl/StruckControl.vue')
const GTCLost = () => import('../modules/GTCLost/GTCLost.vue')
const MissExport = () => import('../modules/missExport/MissExport.vue')
const MissImport = () => import('../modules/missImport/MissImport.vue')
const ImageContainer = () => import('../modules/imageContainer/ImageContainer.vue')


export const menu: any = [
    {
        path: '/*',
        name: '5S và Nội quy',
        component: Rule,
        icon: ''
    },
    {
        path: '/struck-control',
        name: 'Kiểm soát xa tải',
        component: StruckControl,
        icon: ''
    },
    {

        name: 'Kiểm soát chất lượng',
        icon: 'CaretDownOutlined',
        children: [
            {
                path: '/miss-import',
                name: 'Nhập thiếu',
                component: MissImport,
            },
            {
                path: '/miss-export',
                name: 'Xuất thiếu',
                component: MissExport,
            },
            {
                path: '/gtc-lost',
                name: 'Mất hàng STC',
                component: GTCLost,
            },
            
        ]
    },
    {
        path: '/image-container',
        name: 'Ảnh thùng xe',
        component: ImageContainer,
    } 
]

const router = createRouter({
    history: createWebHistory(),
    routes: menu
})

export default router