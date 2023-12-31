import {type ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterSearchComponent} from './filter-search.component';

describe('FilterSearchComponent', () => {
	let component: FilterSearchComponent;
	let fixture: ComponentFixture<FilterSearchComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FilterSearchComponent],
		});
		fixture = TestBed.createComponent(FilterSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
