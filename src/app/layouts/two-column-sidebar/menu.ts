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
    collapseid: 'sidebarDashboards',
    icon: 'ri-dashboard-2-line',
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
        parentId: 2
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
    collapseid: 'sidebarApps',
    icon: 'ri-apps-2-line',
    subItems: [
      {
        id: 36,
        label: 'MENUITEMS.APPS.LIST.WNBA',
        parentId: 8,
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
      }
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
    collapseid: 'sidebarPages',
    subItems: [
      {
        id: 90,
        label: 'MENUITEMS.PAGES.LIST.PRICING',
        link: '/pages/pricing',
        parentId: 82
      }
    ]
  },
  {
    id: 97,
    label: 'MENUITEMS.LANDING.TEXT',
    collapseid: 'sidebarUI',
    icon: 'ri-rocket-line',
    subItems: [
      {
        id: 86,
        label: 'MENUITEMS.LANDING.LIST.COLLEGE_SPORTSLANDING',
        link: '/landing/college-sports',
        parentId: 84
      }
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
    collapseid: 'sidebarTables',
    icon: 'ri-layout-grid-line',
    subItems: [
      {
        id: 147,
        label: 'MENUITEMS.TABLES.LIST.GRIDJS',
        link: '/tables/gridjs',
        parentId: 145
      }
    ]
  },
  {
    id: 149,
    label: 'MENUITEMS.CHARTS.TEXT',
    collapseid: 'sidebarCharts',
    icon: 'ri-pie-chart-line',
    subItems: [
      {
        id: 150,
        label: 'MENUITEMS.CHARTS.LIST.APEXCHARTS',
        parentId: 149,
        subItems: [
          {
            id: 151,
            label: 'MENUITEMS.CHARTS.LIST.LINE',
            link: '/charts/apex-line',
            parentId: 150
          },
          {
            id: 152,
            label: 'MENUITEMS.CHARTS.LIST.AREA',
            link: '/charts/apex-area',
            parentId: 150
          },
          {
            id: 153,
            label: 'MENUITEMS.CHARTS.LIST.COLUMN',
            link: '/charts/apex-column',
            parentId: 150
          },
          {
            id: 154,
            label: 'MENUITEMS.CHARTS.LIST.BAR',
            link: '/charts/apex-bar',
            parentId: 150
          },
          {
            id: 155,
            label: 'MENUITEMS.CHARTS.LIST.MIXED',
            link: '/charts/apex-mixed',
            parentId: 150
          },
          {
            id: 156,
            label: 'MENUITEMS.CHARTS.LIST.TIMELINE',
            link: '/charts/apex-timeline',
            parentId: 150
          },
          {
            id: 157,
            label: 'MENUITEMS.CHARTS.LIST.RANGEAREA',
            link: '/charts/range-area',
            badge: {
              variant: 'bg-success',
              text: 'MENUITEMS.DASHBOARD.BADGE',
            },
            parentId: 150
          },
          {
            id: 157,
            label: 'MENUITEMS.CHARTS.LIST.FUNNEL',
            link: '/charts/funnel',
            badge: {
              variant: 'bg-success',
              text: 'MENUITEMS.DASHBOARD.BADGE',
            },
            parentId: 150
          },
          {
            id: 157,
            label: 'MENUITEMS.CHARTS.LIST.CANDLSTICK',
            link: '/charts/apex-candlestick',
            parentId: 150
          },
          {
            id: 158,
            label: 'MENUITEMS.CHARTS.LIST.BOXPLOT',
            link: '/charts/apex-boxplot',
            parentId: 150
          },
          {
            id: 159,
            label: 'MENUITEMS.CHARTS.LIST.BUBBLE',
            link: '/charts/apex-bubble',
            parentId: 150
          },
          {
            id: 160,
            label: 'MENUITEMS.CHARTS.LIST.SCATTER',
            link: '/charts/apex-scatter',
            parentId: 150
          },
          {
            id: 161,
            label: 'MENUITEMS.CHARTS.LIST.HEATMAP',
            link: '/charts/apex-heatmap',
            parentId: 150
          },
          {
            id: 162,
            label: 'MENUITEMS.CHARTS.LIST.TREEMAP',
            link: '/charts/apex-treemap',
            parentId: 150
          },
          {
            id: 163,
            label: 'MENUITEMS.CHARTS.LIST.PIE',
            link: '/charts/apex-pie',
            parentId: 150
          },
          {
            id: 164,
            label: 'MENUITEMS.CHARTS.LIST.RADIALBAR',
            link: '/charts/apex-radialbar',
            parentId: 150
          },
          {
            id: 165,
            label: 'MENUITEMS.CHARTS.LIST.RADAR',
            link: '/charts/apex-radar',
            parentId: 150
          },
          {
            id: 166,
            label: 'MENUITEMS.CHARTS.LIST.POLARAREA',
            link: '/charts/apex-polar',
            parentId: 150
          },
          {
            id: 168,
            label: 'MENUITEMS.CHARTS.LIST.SLOPE',
            link: '/charts/slope',
            badge: {
              variant: 'bg-success',
              text: 'MENUITEMS.DASHBOARD.BADGE',
            },
            parentId: 150
          }
        ]
      },
      {
        id: 167,
        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
        link: '/charts/chartjs',
        parentId: 149
      },
      {
        id: 168,
        label: 'MENUITEMS.CHARTS.LIST.ECHARTS',
        link: '/charts/echarts',
        parentId: 149
      }
    ]
  }
];
