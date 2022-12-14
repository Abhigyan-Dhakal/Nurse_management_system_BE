import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user_account", (table) => {
    table.increments("user_id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("contact");
    table.string("email").notNullable();
    table.string("password").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_account");
}
