import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesOfMaterialComponent } from './accessories-of-material.component';

describe('AccessoriesOfMaterialComponent', () => {
  let component: AccessoriesOfMaterialComponent;
  let fixture: ComponentFixture<AccessoriesOfMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesOfMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesOfMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
