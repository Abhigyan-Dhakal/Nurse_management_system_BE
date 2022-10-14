import Knex from "knex";
import KnexConfig from "./knexfile";

// @ts-ignore
import * as knexStringCase from "knex-stringcase";

const knex = Knex(KnexConfig.production);

export default knex;
