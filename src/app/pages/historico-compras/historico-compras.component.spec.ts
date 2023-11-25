import {type ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoricoComprasComponent} from './historico-compras.component';

describe('HistoricoComprasComponent', () => {
	let component: HistoricoComprasComponent;
	let fixture: ComponentFixture<HistoricoComprasComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HistoricoComprasComponent],
		});
		fixture = TestBed.createComponent(HistoricoComprasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
