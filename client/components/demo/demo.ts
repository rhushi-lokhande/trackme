import { Component, View, Inject} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { PAGINATION_COMPONENTS } from 'ng2-bootstrap/ng2-bootstrap';

// webpack html imports
@View({
    templateUrl: '/scripts/src/components/demo/demo.html',
    directives: [PAGINATION_COMPONENTS, CORE_DIRECTIVES]
})
@Component({
    selector: 'tabs-demo',
})
export class DemoComponent {
    private totalItems: number = 64;
    private currentPage: number = 4;

    private maxSize: number = 5;

    private setPage(pageNo: number): void {
        this.currentPage = pageNo;
    };

    private pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    
    setnoofpage(noofpage) {
        console.log(noofpage);
        this.totalItems = noofpage;
    }
}

