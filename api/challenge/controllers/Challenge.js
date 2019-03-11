'use strict';

/**
 * Challenge.js controller
 *
 * @description: A set of functions called "actions" for managing `Challenge`.
 */

module.exports = {

  /**
   * Retrieve challenge records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.challenge.search(ctx.query);
    } else {
      return strapi.services.challenge.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a challenge record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.challenge.fetch(ctx.params);
  },

  /**
   * Count challenge records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.challenge.count(ctx.query);
  },

  /**
   * Create a/an challenge record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.challenge.add(ctx.request.body);
  },

  /**
   * Update a/an challenge record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.challenge.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an challenge record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.challenge.remove(ctx.params);
  }
};
