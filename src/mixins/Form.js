const mixin = {
  /**
   * Mixin initial data.
   */
  data() {
    return {
      form: {},
      busy: false,
      /**
       * Function used to validate if the form can be submitted.
       */
      canSubmitValidator: () => {
        return Object.keys(this.form).every(field => this.form[field] !== null && this.form[field] !== "");
      }
    };
  },
  computed: {
    /**
     * Check if the form can be submitted
     */
    canSubmit() {
      return this.canSubmitValidator.call(this);
    },
    /**
     * Check if the component is available
     */
    isBusy() {
      return !!this.busy;
    }
  },
  methods: {
    /**
     * Set busy status of the componenet.
     * @param {Boolean} busy
     */
    setBusy(busy) {
      this.busy = !!busy;
    }
  }
};

export default mixin;
