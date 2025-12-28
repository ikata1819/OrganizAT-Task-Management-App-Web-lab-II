'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {}

  Task.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      completed: {
        type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
        defaultValue: 'pending'
      }
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',

      // 🔑 match your column names
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',

      // 🔑 enable soft delete
      paranoid: true,
      deletedAt: 'deleted_at',

      // 🔑 no id column in your table
      freezeTableName: true
    }
  );

  return Task;
};
