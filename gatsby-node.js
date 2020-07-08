const path = require("path")

// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      categories: allContentfulPost {
        distinct(field: category)
      }

      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })

  result.data.allContentfulPost.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    })
  })
}
