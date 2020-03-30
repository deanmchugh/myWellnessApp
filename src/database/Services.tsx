import Realm from 'realm';
import TaskModel from './TaskModel';

const repository = new Realm({
  schema: [
    {
      name: 'Task',
      primaryKey: 'id',
      properties: {
        id: {type: 'string', indexed: true},
        title: 'string',
        completed: 'bool',
        createdAt: 'date',
        updatedAt: 'date',
      },
    },
  ],
});

export const TaskService = {
  findAll: function(sortBy: any) {
    if (!sortBy) {
      sortBy = [
        ['completed', false],
        ['updatedAt', true],
      ];
    }
    return repository.objects('Task').sorted(sortBy);
  },

  save: function(task: any) {
    if (
      repository.objects('Task').filtered("title = '" + task.title + "'").length
    ) {
      return;
    }

    repository.write(() => {
      task.updatedAt = new Date();
      repository.create('Task', task);
    });
  },

  update: function(task: any, callback: any) {
    if (!callback) {
      return;
    }
    repository.write(() => {
      callback();
      task.updatedAt = new Date();
    });
  },
};

TaskService.save(new TaskModel('Hello Koding'));
TaskService.save(new TaskModel('Make a Todo App with React Native'));
TaskService.save(new TaskModel('Check to complete a todo'));
TaskService.save(new TaskModel('Long press, drag and drop a todo to sort'));
TaskService.save(new TaskModel('Save data with Realm'));
TaskService.save(new TaskModel('Sync data with Firebase'));
