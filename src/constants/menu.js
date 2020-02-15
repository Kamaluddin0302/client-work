const data = [{
    id: "dashboards",
    icon: "simple-icon-chart",
    label: "menu.dashboards",
    to: "/app/dashboards",
    subs: [{
        icon: "simple-icon-briefcase",
        label: "menu.default",
        to: "/app/dashboards/default"
      },
      {
        icon: "simple-icon-pie-chart",
        label: "menu.analytics",
        to: "/app/dashboards/analytics"
      },
      {
        icon: "simple-icon-basket-loaded",
        label: "menu.ecommerce",
        to: "/app/dashboards/ecommerce"
      },
      {
        icon: "simple-icon-doc",
        label: "menu.content",
        to: "/app/dashboards/content"
      }
    ]
  },
  {
    id: "pages",
    icon: "simple-icon-user-following",
    label: "Authorization",
    to: "/app/pages",
    subs: [{
        id: "pages-authorization",
        label: "menu.authorization",
        to: "/user",
        subs: [{
            icon: "simple-icon-user-following",
            label: "menu.login",
            to: "/user/login",
            newWindow: true
          },
          {
            icon: "simple-icon-user-follow",
            label: "menu.register",
            to: "/user/register",
            newWindow: true
          },
          {
            icon: "simple-icon-user-following",
            label: "menu.forgot-password",
            to: "/user/forgot-password",
            newWindow: true
          },
          {
            icon: "simple-icon-user-unfollow",
            label: "menu.reset-password",
            to: "/user/reset-password",
            newWindow: true
          }
        ]
      },
     
    ]
  },
 
  {
    id: "channel-profile",
    icon: "iconsminds-monitor",
    label: "My Channel",
    to: "/app/channel-profile",
  },

  {
    id: "showinsertion",
    icon: "simple-icon-control-play",
    label: "menu.show-insertion",
    to: "/app/show-insertion-page"
  },


  {
    id: "ui",
    icon: "simple-icon-calendar",
    label: "menu.fullschudle",
    to: "/app/ui",
    
  },
  
  
  
];
export default data;