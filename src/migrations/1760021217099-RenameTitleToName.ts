import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTitleToName1760021217099 implements MigrationInterface {
    name = 'RenameTitleToName1760021217099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }

}
