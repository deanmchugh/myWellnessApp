import Realm from 'realm';
import {TaskModel} from './TaskModel';

const repository = new Realm({
  schema: [
    {
      name: 'Task',
      primaryKey: 'id',
      properties: {
        id: {type: 'string', indexed: true},
        title: 'string',
        time: 'number',
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
      repository.create('Task', task);
    });
  },

  update: function(task: any, callback: any, time: any) {
    if (!callback) {
      return;
    }
    repository.write(() => {
      callback();
      task.time = time;
    });
  },
};

TaskService.save(new TaskModel('Clean', 30));
TaskService.save(new TaskModel('Meditate', 60));
TaskService.save(new TaskModel('Exersize', 30));
