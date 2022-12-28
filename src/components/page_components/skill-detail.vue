<template>
  <div class="text-center">
    <div class="row mb-5">
      <div class="col-sm-12 col-md-4 mt-3 skills" v-for="skill in skills" :key="skill.id">
        <h6 class="fw-bold mb-3">{{ skill.name }}</h6>
        <div class="d-flex justify-content-center">
          <div
            class="d-flex flex-column align-items-center w-25"
            v-for="stack in skill.stacks"
            :key="stack.id"
          >
            <img :src="stack.image" alt="" height="25" />
            <p class="mt-3">{{ stack.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          name: "Frontend Stack",
          stacks: [
            {
              id: 1,
              name: "Vue",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png",
            },
            {
              id: 2,
              name: "React",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            },
            {
              id: 3,
              name: "Typescript",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
            },
            {
              id: 4,
              name: "Next.js",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
            },
          ],
        },
        {
          id: 2,
          name: "Styling Stack",
          stacks: [
            {
              id: 1,
              name: "Vuetify",
              image:
                "https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png",
            },
            {
              id: 2,
              name: "Bootstrap",
              image:
                "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
            },
            {
              id: 3,
              name: "Material UI",
              image: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
            },
            {
              id: 4,
              name: "Sass",
              image:
                "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
            },
          ],
        },
        {
          id: 3,
          name: "Backend Stack",
          stacks: [
            {
              id: 1,
              name: "Laravel",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
            },
            {
              id: 2,
              name: "Nodejs",
              image:
                "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
            },
            {
              id: 3,
              name: "Apollo GraphQL",
              image:
                "https://global.discourse-cdn.com/business5/uploads/apollographql/original/1X/25bd5104d61020fe4dc0777a5919cd009bca633e.png",
            },
            {
              id: 4,
              name: "Prisma",
              image:
                "https://www.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png",
            },
          ],
        },
        {
          id: 4,
          name: "Interface Design Tool",
          stacks: [
            {
              id: 1,
              name: "Adobe Photoshop",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png",
            },
            {
              id: 2,
              name: "Adobe Illustrator",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
            },
            {
              id: 3,
              name: "Adobe XD",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
            },
            {
              id: 4,
              name: "Figma",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
            },
          ],
        },
        {
          id: 5,
          name: "Version Control",
          stacks: [
            {
              id: 1,
              name: "Github",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
            },
            {
              id: 2,
              name: "Bitbucket",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bitbucket-blue-logomark-only.svg/1200px-Bitbucket-blue-logomark-only.svg.png",
            },
          ],
        },
        {
          id: 5,
          name: "Database",
          stacks: [
            {
              id: 1,
              name: "MariaDB",
              image:
                "https://cdn.cdnlogo.com/logos/m/6/mariadb.svg",
            },
            {
              id: 2,
              name: "MySQL",
              image:
                "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
            },
            {
              id: 3,
              name: "PostgreSQL",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: $tablet) {
  .skills {
    margin-top: 3rem !important
  }
}
</style>