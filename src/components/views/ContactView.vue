<template>
  <div class="">
    <form class="flex flex-col" id="contactForm">
      <label for="authorInput">{{ $t("contact.form.name") }}</label>
      <input type="text" name="author" id="authorInput" />
      <label for="typeSelect">{{ $t("contact.form.contactType") }}</label>
      <select name="type" id="typeSelect">
        <option value="development">Development</option>
        <option value="business">Business</option>
        <option value="recruit">Recruitment</option>
        <option value="question">Questions</option>
        <option value="etc">Etc</option>
      </select>
      <label for="emailInput">{{ $t("contact.form.yourEmail") }}</label>
      <input type="email" name="email" id="emailInput" />
      <label for="phoneInput">{{ $t("contact.form.yourPhone") }}</label>
      <input type="tel" name="phone" id="phoneInput" />
      <label for="descInput">{{ $t("contact.form.description") }}</label>
      <textarea name="description" id="descInput" />
      <label for="attachInput">{{ $t("contact.form.attachments") }}</label>
      <input type="file" name="attachment" id="attachInput" multiple />
      <p class="text-red-700 mb-4" :class="{ hidden: !errorOccured }">
        {{ $t("contact.transfer.error") }}
      </p>
      <span
        class="mx-auto text-red-500 text-lg decoration-red-500 mb-4"
        :class="{ hidden: !transferring }"
      >
        {{ $t("contact.transfer.transferring") }}</span
      >
      <button
        type="submit"
        class="mx-auto border border-red-500 text-red-500 hover:bg-red-500 hover:text-[#1a1a1a] w-fit px-6 py-1 text-md duration-200 ease-in-out"
        :class="{ hidden: transferDone }"
      >
        {{ $t("contact.form.transfer") }}
      </button>
      <span
        class="mx-auto text-red-500 before:content-['■_'] underline decoration-red-500 text-lg"
        :class="{ hidden: !transferDone }"
      >
        {{ $t("contact.transfer.success") }}</span
      >
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactView",
  data() {
    return {
      errorOccured: false,
      transferDone: false,
      transferring: false,
    };
  },
  methods: {
    async initForm() {
      const form = document.getElementById("contactForm");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        this.transferring = true;

        const data = {};
        const formData = new FormData();

        let elems = form.children;
        for (var i = 0; i < elems.length; i++) {
          if (
            !["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(
              elems[i].tagName
            )
          ) {
            continue;
          }
          if (!["submit", "file"].includes(elems[i].type)) {
            data[elems[i].name] = elems[i].value;
          } else if (elems[i].type == "file") {
            // eslint-disable-next-line
            Object.entries(elems[i].files).forEach(([key, file]) => {
              formData.append(`files.${elems[i].name}`, file, file.name);
            });
          }
        }

        formData.append("data", JSON.stringify(data));
        try {
          await this.$axios.post(
            `${this.$env.VUE_APP_DB_HOST}/api/contacts`,
            formData
          );
          this.onTransferSuccess();
        } catch (err) {
          console.log(err);
          this.onTransferFailed();
        }
      });
    },
    onTransferSuccess() {
      this.transferDone = true;
      this.errorOccured = false;
      this.transferring = false;
    },
    onTransferFailed() {
      this.errorOccured = true;
      this.transferring = false;
    },
  },
  mounted() {
    this.initForm();
  },
};
</script>
<style>
#contactForm {
}

#contactForm > label {
}

#contactForm :is(input, textarea, select) {
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #1a1a1a;
  color: #d9d9d9;
  font-size: large;
  outline: none;
  border: 2px gray solid;
  transition: 200ms;
  transition-timing-function: ease-in-out;
}

#contactForm > textarea {
  height: 200px;
  resize: none;
}

#contactForm > :is(input, textarea, select):focus {
  border-color: #ef4444;
}

#contactForm > label + input:focus {
}
</style>
