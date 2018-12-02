<template lang="html">
  <div class="game-list-item" :class="'game-list-item-' + name">
    <template v-if="isArcade">
      <v-game-avatar :name="name" mode="arcade"/>
      <div class="game-avatar-info">
        <v-text>Position</v-text>
        <v-text>{{ranking}}</v-text>
        <v-text>{{score}}pts</v-text>
      </div>
    </template>
    <template v-else>
  <v-game-avatar :name="name" :progress="getProgress"/>
  <div class="game-avatar-info">
    <v-text class="name">{{name}}</v-text>
    <v-text v-if="getProgress == -1">Locked</v-text>
    <v-text v-else-if="getProgress >= 100">Complete</v-text>
    <v-text v-else-if="getProgress == 66">Lvl 3</v-text>
    <v-text v-else-if="getProgress == 33">Lvl 2</v-text>
    <v-text v-else-if="getProgress == 0">Lvl 1</v-text>
  </div>
</template>
    <v-button tag="button" to="/map" :disabled="!isArcade && getProgress<=-1">
      Play
    </v-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

const progressSteps = [0, 33, 66, 100];

export default {
  props: {
    name: String,
    // locked: Boolean,
    score: Number,
    progress: { type: Number, default: -1 },
    ranking: Number,
    isArcade: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["avatar", "user", "game"]),
    isUnlocked() {
      if (!this.isArcade) return true;

      if (this.isSia) {
        return true;
      }
    },
    getProgress() {
      if (this.isLabrinth) {
        return this.getLabrinthProgress;
      } else if (this.isSia) {
        return this.getSiaProgress;
      } else {
        return this.getDiploProgress; 
      }
      return -1;
    },
    isLabrinth() {
      return this.name === "labrinth";
    },
    isSia() {
      return this.name === "sia";
    },
    isDiplo() {
      return this.name === "diplo";
    },
    getLabrinthProgress() {
      switch (this.progress) {
        case 1:
          return progressSteps[0];
          break;
        case 2:
          return progressSteps[1];
          break;
        case 3:
          return progressSteps[2];
          break;
        case 4:
          return progressSteps[3];
          break;

        default:
          return progressSteps[3];
          break;
      }
    },
    getSiaProgress() {
      if(this.progress < 5) return -1;
      switch (this.progress) {
        case 5:
          return progressSteps[0];
          break;
        case 6:
          return progressSteps[1];
          break;
        case 7:
          return progressSteps[2];
          break;
        case 8:
          return progressSteps[3];
          break;

        default:
          return progressSteps[3];
          break;
      }
    },
    getDiploProgress() {
      if(this.progress < 9) return -1;
      switch (this.progress) {
        case 9:
          return progressSteps[0];
          break;
        case 10:
          return progressSteps[1];
          break;
        case 11:
          return progressSteps[2];
          break;
        case 12:
          return progressSteps[3];
          break;

        default:
          return progressSteps[3];
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.game-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.8rem;

  &.game-list-item-labrinth {
    .game-avatar-info {
      color: #41b0ff;
    }
  }
  &.game-list-item-sia {
    .game-avatar-info {
      color: #d3188d;
    }
  }
  &.game-list-item-diplo {
    .game-avatar-info {
      color: #f57f00;
    }
  }

  & > .button {
    width: 20rem;
    flex-basis: 0;
    font-size: 1rem;
  }
  & > .game-avatar {
    font-size: 0.8rem;
  }
  .game-avatar-info {
    width: 100%;
    text-align: left;
    padding-left: 1.4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
}
</style>
