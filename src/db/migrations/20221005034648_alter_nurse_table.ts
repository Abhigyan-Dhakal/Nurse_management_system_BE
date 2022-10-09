import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("nurse", (table) => {
    table.string("email");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("nurse", (table) => {
    table.dropColumn("email");
  });
}
