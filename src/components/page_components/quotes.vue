<template>
  <p class="title">Quotes</p>
  <div class="row">
    <div class="col-12 col-md-6" v-for="quote in quotes" :key="quote.id">
      <div class="card-quote">
        <span class="quote-icon-left">
          <i class="fas fa-quote-left"></i>
        </span>
        <blockquote class="blockquote mb-0">
          <p>{{ quote.sentence }}</p>
          <footer class="blockquote-footer" v-if="quote.source">
            {{ quote.author }} famous in <cite :title="quote.source">{{ quote.source }}</cite>
          </footer>
           <footer class="blockquote-footer" v-else>
            {{ quote.author }}
          </footer>
        </blockquote>
        <span class="quote-icon-right">
          <i class="fas fa-quote-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        { id: 1, sentence: "The more you know, the more you realize you don't know.", author: "Aristotle", source: "Dunning-Kruger Effect" },
        { id: 2, sentence: "I have no special talent. I am only passionately curious.", author: "Albert Einstein ", source: "" },
        { id: 3, sentence: "Once in your life, try something. Work hard at something. Try to change. Nothing bad can happen.", author: "Jack Ma", source: "" },
        { id: 4, sentence: "People don't care about what you say, they care about what you build.", author: "Mark Zuckerberg", source: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1.5rem
}
.card-quote {
  margin: 1.5rem 2rem;
  display: flex;
  flex-direction: column;

  blockquote {
    text-align: center;
  }

  .quote-icon-left, .quote-icon-right {
    font-size: 24px;
  }

  .quote-icon-right {
    text-align: right;
  }
}
</style>