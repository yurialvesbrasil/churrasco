-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date_barbecue" TIMESTAMP(3) NOT NULL,
    "obs" TEXT NOT NULL,
    "suggested_val_participant" DOUBLE PRECISION NOT NULL,
    "addition_for_drinks" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchedulesOnUsers" (
    "user_id" TEXT NOT NULL,
    "schedule_id" TEXT NOT NULL,
    "have_addition_for_drinks" BOOLEAN NOT NULL,

    PRIMARY KEY ("user_id","schedule_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- AddForeignKey
ALTER TABLE "SchedulesOnUsers" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchedulesOnUsers" ADD FOREIGN KEY ("schedule_id") REFERENCES "schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;
