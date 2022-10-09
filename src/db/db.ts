import Knex from "knex";
import KnexConfig from "./knexfile";

// @ts-ignore
import * as knexStringCase from "knex-stringcase";

const knex = Knex(KnexConfig.development);

export default knex;
