import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChartLegendComponent } from './custom-chart-legend.component';

describe('CustomChartLegendComponent', () => {
  let component: CustomChartLegendComponent;
  let fixture: ComponentFixture<CustomChartLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomChartLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChartLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
