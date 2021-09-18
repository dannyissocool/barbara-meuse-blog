export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61456088730b2c8a8f6de635",
                  title: "Sanity Studio",
                  name: "barbara-meuse-blog-studio",
                  apiId: "d89c1cac-2445-405b-9e05-49bcb725edd0",
                },
                {
                  buildHookId: "61456088af6c82973650df16",
                  title: "Blog Website",
                  name: "barbara-meuse-blog",
                  apiId: "d6f1e165-5e68-4571-a226-37a8ebd2add4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dannyissocool/barbara-meuse-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://barbara-meuse-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
