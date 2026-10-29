-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `role` ENUM('creator', 'editor', 'admin') NOT NULL DEFAULT 'creator',
    `refresh_token` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `channels` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `platform` VARCHAR(30) NOT NULL,
    `handle_name` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contents` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `channel_id` BIGINT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `script_draft` TEXT NULL,
    `format_type` ENUM('short_video', 'long_video', 'carousel', 'single_post') NOT NULL,
    `status` ENUM('idea', 'scripting', 'recording', 'editing', 'review', 'ready', 'published') NOT NULL DEFAULT 'idea',
    `priority` ENUM('low', 'medium', 'high') NOT NULL DEFAULT 'medium',
    `scheduled_date` DATE NULL,
    `published_date` DATE NULL,
    `published_url` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `content_checklists` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `content_id` BIGINT NOT NULL,
    `task_name` VARCHAR(255) NOT NULL,
    `is_completed` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `content_metrics` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `content_id` BIGINT NOT NULL,
    `recorded_at` DATE NOT NULL,
    `views_count` INTEGER NOT NULL DEFAULT 0,
    `likes_count` INTEGER NOT NULL DEFAULT 0,
    `comments_count` INTEGER NOT NULL DEFAULT 0,
    `shares_count` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `channels` ADD CONSTRAINT `channels_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contents` ADD CONSTRAINT `contents_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contents` ADD CONSTRAINT `contents_channel_id_fkey` FOREIGN KEY (`channel_id`) REFERENCES `channels`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `content_checklists` ADD CONSTRAINT `content_checklists_content_id_fkey` FOREIGN KEY (`content_id`) REFERENCES `contents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `content_metrics` ADD CONSTRAINT `content_metrics_content_id_fkey` FOREIGN KEY (`content_id`) REFERENCES `contents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
