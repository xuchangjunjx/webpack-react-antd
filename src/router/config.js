import Root from "@/layout";
import Home from "@/views/company";
import Child from "@/views/applications";
import Bus from "@/views/applications/bus";
import Cart from "@/views/applications/cart";
import hook from "@/views/applications/hook";

export default [
  {
    component: Root,
    childrens: [
      {
        path: "/",
        exact: true,
        meta: {
          title: "Home"
        },
        component: Home
      },
      {
        path: "/application",
        component: Child,

        meta: {
          title: "Application"
        },
        childrens: [
          {
            path: "/application/cart",
            component: Cart
          },
          {
            path: "/application/bus",
            component: Bus
          },
          {
            path: "/application/hook",
            component: hook
          }
        ]
      }
    ]
  }
];
