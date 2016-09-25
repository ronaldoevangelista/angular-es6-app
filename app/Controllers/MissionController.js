const INIT = new WeakMap();
const SERVICE = new WeakMap();
const TIMEOUT = new WeakMap();

class MissionController {
    constructor($timeout, applicationService) {
        SERVICE.set(this, applicationService);
        TIMEOUT.set(this, $timeout);

        INIT.set(this, () => {
            SERVICE.get(this).getActiveBooks().then(books => {
                console.log(' goo ' + books);
                this.books = books;
            });
        });
        INIT.get(this)();
    }
}

MissionController.$inject = ['$timeout', 'applicationService'];
export default MissionController;