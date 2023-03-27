<template>
  <div class="h-screen md:h-full p-2 overflow-y-auto md:overflow-clip">
    <div class="my-3 hidden md:block">
      <div class="flex items-center">
        <hr class="grow border-red-500 mr-1" />
        <span>Performance</span>
      </div>
      <div class="flex items-center">
        <hr class="grow border-red-500 mr-1" />
        <span>Search Engine Optimization</span>
      </div>
      <div class="flex items-center">
        <hr class="grow border-red-500 mr-1" />
        <span>Easy Management</span>
      </div>
    </div>
    <div class="top-0 sticky p-2 flex flex-col gap-8 mt-3">
      <img
        class="w-full aspect-video object-contain"
        src="/assets/images/3dAsset 1.png"
      />
      <p class="w-full text-5xl leading-3 dot-separator">
        ········ ········ ·· ···· ······· ······ ··· ·· ···· ·· ··· ·· ·····
        ······ ··· ·· ·
      </p>
      <p class="text-xs hidden md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <nav id="navLinks" class="flex flex-col items-center md:items-start">
        <a href="/">
          <h3 class="text-2xl font-semibold">{{ $t("sidebar.nav.home") }}</h3>
        </a>
        <a href="/our-portfolios">
          <h3 class="text-2xl font-semibold">
            {{ $t("sidebar.nav.portfolio") }}
          </h3>
        </a>
        <a href="/our-crews">
          <h3 class="text-2xl font-semibold">{{ $t("sidebar.nav.crews") }}</h3>
        </a>
        <a href="/contact-us">
          <h3 class="text-2xl font-semibold">
            {{ $t("sidebar.nav.contact") }}
          </h3>
        </a>
      </nav>
      <div
        class="flex flex-col items-start gap-1"
        :class="{ subscribed: subscriptionDone, validated: validated }"
      >
        <div class="flex w-full items-center" id="emailInputLabel">
          <hr
            class="shrink border-red-500 mr-1 duration-300"
            id="emailInputLabelLeft"
          />
          <h3 class="text-sm font-semibold">
            {{ $t("sidebar.subscription.label") }}
          </h3>
          <hr class="grow border-red-500 ml-1 duration-300" />
        </div>
        <input
          type="text"
          id="subscriptionInput"
          name="email"
          @input="watchEmailInput($event)"
          class="text-[#d9d9d9] w-full p-1 bg-black focus:border-red-500 border-gray-500 border outline-none"
        />
        <span id="subscribedMessage" class="self-center">{{
          $t("sidebar.subscription.success")
        }}</span>
        <div class="flex w-full items-center">
          <hr
            class="grow border-red-500 mr-1 duration-300"
            id="emailInputButtonLeft"
          />
          <button
            @click="subscribeClicked($event)"
            id="emailSubscribeButton"
            class="self-end border text-sm px-4 subscribe-button"
          >
            {{ $t("sidebar.subscription.button") }}
          </button>
          <hr
            class="shrink border-red-500 ml-1 duration-300"
            id="emailInputButtonRight"
          />
        </div>
        <p :class="{ hidden: !subscriptionFailed }" class="text-red-500">
          {{ $t("sidebar.subscription.error") }}
        </p>
      </div>
      <div class="flex flex-col">
        <label for="langSelect">언어 선택</label>
        <select
          id="langSelect"
          @change="onLocaleSelected($event)"
          class="bg-[#1a1a1a] border border-[#1a1a1a] focus:border-red-500 px-4 py-1 outline-0 duration-200 ease-in-out"
        >
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
            class="bg-[#1a1a1a]"
            :selected="locale === currentLocale"
          >
            {{ localeToFlag(locale) }}
          </option>
        </select>
      </div>
      <div class="h-[500px] md:hidden"></div>
    </div>
  </div>
</template>
<script>
import { i18n } from "@/localization";
export default {
  name: "SideBar",
  data() {
    return {
      subscriptionDone: false,
      subscriptionFailed: false,
      validated: false,
      currentLocale: i18n.global.locale,
    };
  },
  methods: {
    localeToFlag(locale) {
      let flagTable = {
        ko: "🇰🇷 한국어",
        en: "🇬🇧 English",
      };

      return flagTable[locale];
    },
    onLocaleSelected(e) {
      let locale = e.target.value;
      window.localStorage.setItem("locale", locale);
      window.location.reload();
    },
    addEmailInputListener() {
      var emailInput = document.getElementById("subscriptionInput");
      var leftLine = document.getElementById("emailInputLabelLeft");

      emailInput.addEventListener("focus", () => {
        leftLine.classList.remove("shrink");
        leftLine.classList.add("grow");
      });
      emailInput.addEventListener("focusout", () => {
        leftLine.classList.remove("grow");
        leftLine.classList.add("shrink");
      });
    },
    validateEmail(email) {
      let reg = // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return email.match(reg);
    },
    watchEmailInput(e) {
      let input = e.target.value;

      if (this.validateEmail(input)) {
        this.validated = true;
        document.getElementById("emailInputButtonRight").classList.add("grow");
        return;
      }
      this.validated = false;
      document.getElementById("emailInputButtonRight").classList.remove("grow");
    },
    async subscribeClicked() {
      var emailInput = document.getElementById("subscriptionInput");
      if (!this.validated) {
        emailInput.classList.add("invalid");
        setTimeout(() => {
          emailInput.classList.remove("invalid");
        }, 300);
        return;
      }

      await this.postSubscription();
    },
    async postSubscription() {
      let emailInput = document.getElementById("subscriptionInput");
      var formData = new FormData();

      let data = {
        email: emailInput.value,
      };

      formData.append("data", JSON.stringify(data));
      console.log(formData);
      try {
        await this.$axios.post(
          `${this.$env.VUE_APP_DB_HOST}/api/subscriptions`,
          formData
        );

        this.onSubscriptionSuccess();
      } catch (err) {
        console.log(err);
        this.onSubscriptionFailed();
      }
    },
    onSubscriptionFailed() {
      this.subscriptionDone = false;
      this.subscriptionFailed = true;
    },
    onSubscriptionSuccess() {
      this.subscriptionDone = true;
      this.subscriptionFailed = false;
    },
  },
  mounted() {
    this.addEmailInputListener();
  },
};
</script>
<style>
.dot-separator {
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.subscribe-button {
  border-color: gray;
  color: gray;
}

.validated .subscribe-button {
  color: red;
  border-color: red;
}

.validated .subscribe-button:hover {
  background-color: red;
  color: black;
  transition: 200ms;
}

.subscribed .subscribe-button {
  display: none;
}

#subscriptionInput {
  overflow: hidden;
  max-height: 300px;
  transition: 300ms;
}

#subscriptionInput.invalid {
  animation-name: swingEmailInput;
  animation-duration: 0.15s;
  animation-iteration-count: 2;
}

.subscribed #subscriptionInput {
  border: none;
  padding: 0;
  max-height: 0;
  opacity: 0;
}

.subscribed :is(#emailInputButtonRight, #emailInputButtonLeft) {
  margin: 0;
  flex-grow: 1;
  transition: 300ms;
}

#subscribedMessage {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}

#subscribedMessage::before {
  content: "■";
  color: red;
  margin-right: 5px;
}

.subscribed #subscribedMessage {
  max-height: 300px;
  opacity: 1;
  transition: 300ms;
}

@keyframes swingEmailInput {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(12px);
  }
  80% {
    transform: translateX(-12px);
  }
  100% {
    transform: translateX(0);
  }
}

#navLinks > a:hover {
  display: inline-block;
  color: #ef4444;
  transform: translateX(10px);
  transition: 300ms;
  transition-timing-function: ease-in-out;
}
</style>
