export default class ToDoList {
  constructor() {
    this._list = []
  }

  getList() {
    return this._list;
  }

  clearList() {
    this._list = [];
  }

  addItemToList(itemObj) {
    this._list.push(itemObj);
  }

  removeItemFromList(itemId) {
    const list = this._list;
    for(let i = 0; i < list.length; i++) {
      if(list[i]._id == itemId) {
        list.splice(i,1);
        break;
      }
    }
  }
}
