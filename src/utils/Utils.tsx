/* eslint-disable no-bitwise */
export let Utils = {
  guid: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },

  move: function(array: any, fromIndex: any, toIndex: any) {
    return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
  },

  findTask: function(task: any, taskList: any) {
    return taskList.find(
      (item: any) => item.title.toLowerCase() === task.title.toLowerCase(),
    );
  },
};
