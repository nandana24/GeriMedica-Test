import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fetch json data', () => {
    const jsonData = [
      {
        "field": "name",
        "label": "Name",
        "type": "text",
        "hidden": "false",
        "mandatory": true
      },
      {
        "field": "email",
        "label": "Email",
        "type": "text",
        "hidden": "false",
        "mandatory": true
      },
      {
        "field": "confirm",
        "label": "Checkbox with confirmation",
        "type": "check",
        "hidden": "false"
      },
      {
        "field": "hiddenField",
        "label": "",
        "type": "text",
        "hidden": "true",
        "mandatory": false
      }
    ]
    component.detailsService.getDetails().subscribe(i => {
      expect(i).toEqual(jsonData);
    })
  });
});
