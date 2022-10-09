import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("nurse", (table) => {
    table.increments("nurse_id");
    table.string("name").notNullable();
    table.string("photograph").notNullable();
    table.boolean("isRoundingManager").defaultTo(false);
    table.string("workingDays").notNullable();
    table.string("dutyStartTime").notNullable();
    table.string("dutyEndTime").notNullable();
    table.string("address").notNullable();
    table.string("contact").notNullable();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("user_id").inTable("user_account");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("nurse");
}
