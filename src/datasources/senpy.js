const { RESTDataSource } = require("apollo-datasource-rest");

module.exports = class SenpyAPI extends RESTDataSource {
  constructor() {
    super();

    /**
     * We have to use the <workers.dev> domain instead of the custom domain
     * because worker intercommunication still isn't a thing...
     *
     * Tracking: <https://community.cloudflare.com/t/issue-with-worker-to-worker-https-request/94472>
     */
    this.baseURL = "https://senpy-club-api-worker.fuwn.workers.dev/v2/";
  }

  async getRandom() {
    return this.get("random");
  }

  async getBoysRandom() {
    return this.get("boys/random");
  }

  async getLanguages() {
    return this.get("languages");
  }

  async getBoysLanguages() {
    return this.get("boys/languages");
  }

  async getLanguage(language) {
    return this.get(`language/${language}`);
  }

  async getBoysLanguage(language) {
    return this.get(`boys/language/${language}`);
  }

  async getMe() {
    return this.get("me");
  }
};
