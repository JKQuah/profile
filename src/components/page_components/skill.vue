<template>
  <Titles
    title="Skill Proficiency"
    subtitle="Favourite programming languages and frameworks"
  />
  <div class="row">
    <small class="remarks">
      *All rating are based on my knowledge scope and rated accordingly.
    </small>
    <div class="col-6 col-md-3 my-4" v-for="skill in skills" :key="skill.id">
      <div class="icon-holder">
        <img
          v-bind:src="skill.image"
          class="card-img-top"
          :class="skill.imagealt"
          :alt="skill.imagealt"
        />
      </div>
      <h6 class="skill-title">
        {{ skill.name }}
        <span class="recommended" v-if="skill.id == 3"
          ><i class="fas fa-thumbs-up"></i
        ></span>
        <span class="recommended" v-if="skill.id == 4 || skill.id == 7"
          ><i class="fas fa-star"></i
        ></span>
      </h6>

      <div class="skill-content">
        <div
          :style="{ width: skill.rating + '%' }"
          :class="[skill.rating >= 80 ? 'green' : 'yellow', 'bar bar-striped']"
        >
          {{ skill.rating }} %
        </div>
      </div>
      <div class="skill-footer">
        <small class="skill-project">
          <span>Number of projects: </span>
          <span class="text-end">{{ skill.project_count }}</span>
        </small>
        <small class="skill-updated">
          Last project at {{ skill.updated_at }}
        </small>
      </div>
    </div>
    <small class="mt-2">
      <i class="fas fa-thumbs-up pe-1"></i>
      indicates good proficiency | Keen to learn
    </small>
    <small class="mb-5">
      <i class="fas fa-star pe-1"></i>
      indicates learning in process | Keen to learn
    </small>
  </div>
</template>

<script>
import Titles from "./titles.vue";

export default {
  data() {
    return {
      skills: [
        // {
        //   id: 1,
        //   name: "HTML | CSS | JS",
        //   image: "http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        //   imagealt: "htmlcssjs",
        //   rating: 85,
        //   project_count: 8,
        //   updated_at: "May 2021",
        // },
        {
          id: 1,
          name: "Vue",
          image: "https://vuejs.org/images/logo.png",
          imagealt: "vue",
          rating: 80,
          project_count: 5,
          updated_at: "recently",
        },
        {
          id: 2,
          name: "React",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          imagealt: "react",
          rating: 65,
          project_count: 2,
          updated_at: "recently",
        },
        {
          id: 3,
          name: "Laravel",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
          imagealt: "laravel",
          rating: 75,
          project_count: 5,
          updated_at: "recently",
        },
        {
          id: 4,
          name: "Python",
          image:
            "https://files.realpython.com/media/python-logo.8eb72ea6927b.png",
          imagealt: "python",
          rating: 55,
          project_count: 2,
          updated_at: "May 2021",
        },
        // {
        //   id: 5,
        //   name: "Java",
        //   image:
        //     "https://i.pinimg.com/originals/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.png",
        //   imagealt: "java",
        //   rating: 60,
        //   project_count: 3,
        //   updated_at: "Feb 2021",
        // },
        {
          id: 6,
          name: "Nodejs",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
          imagealt: "node",
          rating: 70,
          project_count: 2,
          updated_at: "May 2021",
        },
        {
          id: 7,
          name: "Flutter",
          image:
            "https://miro.medium.com/max/1000/1*ilC2Aqp5sZd1wi0CopD1Hw.png",
          imagealt: "flutter",
          rating: 50,
          project_count: 1,
          updated_at: "Feb 2021",
        },
        {
          id: 8,
          name: "Adobe",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31f642uvQY5kzRK8xpxEDfDdQE_QRJtuHVNzCAG_sv6xSWZKOPJtHmLfVO3eckwRhh84&usqp=CAU",
          imagealt: "adobe",
          rating: 85,
          project_count: "-",
          updated_at: "Mar 2021",
        },
      ],
    };
  },
  components: { Titles },
};
</script>

<style lang="scss" scoped>
.icon-holder {
  text-align: center;
  img {
    width: auto;
    height: 80px;
  }
}

.skill-content {
  width: 100%;
  background-color: $bg-grey;
  border-radius: 2rem;

  .bar {
    border-radius: 2rem;
    text-align: right;
    color: white;
    padding: 0 5px 0 0;
    height: 20px;
    font-size: 14px;
  }

  .green {
    background-color: $accent-green;
  }

  .yellow {
    background-color: $alert;
    color: $dark-blue;
  }
}

.skill-title,
.skill-updated,
.skill-project {
  padding: 0 1rem;
}

.skill-title {
  font-weight: bold;
  .recommended {
    font-size: 16px;
    float: right;
  }
}

.skill-project {
  display: flex;
  justify-content: space-between;
}

.bar-striped {
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  animation: barstripes 2s linear infinite;
}

small.remarks {
  text-align: end;
}

@keyframes barstripes {
  0% {
    background-position-x: 32px;
  }
}

@media screen and (max-width: $mobile-L) {
  .htmlcssjs,
  .vue,
  .laravel,
  .python,
  .java,
  .node,
  .flutter,
  .adobe {
    padding: 1rem;
  }

  .skill-content {
    .skills {
      padding: 0 10px;
      font-size: 14px;
    }
  }

  .skill-title {
    font-size: 1rem;
    padding: 0 0.275rem;
  }

  .skill-updated {
    font-size: 0.675rem;
    padding: 0 0.275rem;
  }

  .remarks {
    text-align: left;
  }
}
</style>