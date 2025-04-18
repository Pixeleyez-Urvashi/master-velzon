import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ri-dashboard-2-line',
    isCollapsed: true,
    subItems: [
      {
        id: 3,
        label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
        link: '/analytics',
        parentId: 2
      },
      {
        id: 4,
        label: 'MENUITEMS.DASHBOARD.LIST.NBA',
        link: '/nba',
        parentId: 2
      },
      {
        id: 5,
        label: 'MENUITEMS.DASHBOARD.LIST.NFL',
        link: '/',
        parentId: 2
      },
      {
        id: 6,
        label: 'MENUITEMS.DASHBOARD.LIST.WNBA',
        link: '/wnba',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.LIST.CRICKET',
        link: '/cricket',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.LIST.COLLEGE_SPORTS',
        link: '/college-sports',
        parentId: 2,
      },
      {
        id: 8,
        label: 'MENUITEMS.DASHBOARD.LIST.JOB',
        link: '/job',
        parentId: 2,
      },
      {
        id: 9,
        label: 'MENUITEMS.PAGES.LIST.BLOG',
        link: '/dashboard-blog',
        parentId: 2,
      }
    ]
  },
  {
    id: 8,
    label: 'MENUITEMS.APPS.TEXT',
    icon: 'ri-apps-2-line',
    isCollapsed: true,
    subItems: [
      {
        id: 36,
        label: 'MENUITEMS.APPS.LIST.WNBA',
        parentId: 8,
        isCollapsed: true,
        subItems: [
          {
            id: 37,
            label: 'MENUITEMS.APPS.LIST.TRANSACTIONS',
            link: '/wnba/transactions',
            parentId: 36
          },
          {
            id: 38,
            label: 'MENUITEMS.APPS.LIST.BUY&SELL',
            link: '/wnba/buy-sell',
            parentId: 36
          },
          {
            id: 38,
            label: 'MENUITEMS.APPS.LIST.ORDERS',
            link: '/wnba/orders',
            parentId: 36
          },
          {
            id: 39,
            label: 'MENUITEMS.APPS.LIST.MYWALLET',
            link: '/wnba/wallet',
            parentId: 36
          },
          {
            id: 40,
            label: 'MENUITEMS.APPS.LIST.ICOLIST',
            link: '/wnba/ico',
            parentId: 36
          },
          {
            id: 41,
            label: 'MENUITEMS.APPS.LIST.KYCAPPLICATION',
            link: '/wnba/kyc',
            parentId: 36
          }
        ]
      },
    ]
  },
  {
    id: 54,
    label: 'MENUITEMS.PAGES.TEXT',
    isTitle: true
  },
  {
    id: 82,
    label: 'MENUITEMS.PAGES.TEXT',
    icon: 'ri-pages-line',
    isCollapsed: true,
    subItems: [
      {
        id: 90,
        label: 'MENUITEMS.PAGES.LIST.PRICING',
        link: '/pages/pricing',
        parentId: 82
      },
    ]
  },
  {
    id: 131,
    label: 'MENUITEMS.LANDING.TEXT',
    icon: 'ri-rocket-line',
    isCollapsed: true,
    subItems: [
      {
        id: 86,
        label: 'MENUITEMS.LANDING.LIST.COLLEGE_SPORTSLANDING',
        link: '/landing/college-sports',
        parentId: 84,
      },
    ]
  },
  {
    id: 96,
    label: 'MENUITEMS.COMPONENTS.TEXT',
    isTitle: true
  },
  {
    id: 145,
    label: 'MENUITEMS.TABLES.TEXT',
    icon: 'ri-layout-grid-line',
    isCollapsed: true,
    subItems: [
      {
        id: 147,
        label: 'MENUITEMS.TABLES.LIST.GRIDJS',
        link: '/tables/gridjs',
        parentId: 145
      },
    ]
  },
];
