/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `HolidayConfig` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `HolidayConfig_date_key` ON `HolidayConfig`(`date`);
